(() => {
  const typedNodes = document.querySelectorAll(".text-type[data-text-type]");
  if (typedNodes.length) {
    typedNodes.forEach((node) => {
      let phrases;
      try {
        const parsed = JSON.parse(node.dataset.textType || "[]");
        phrases = Array.isArray(parsed) && parsed.length ? parsed : [String(parsed || "")];
      } catch {
        phrases = [node.dataset.textType || ""];
      }

      const typingSpeed = Number(node.dataset.typingSpeed || 50);
      const deletingSpeed = Number(node.dataset.deletingSpeed || 30);
      const pauseDuration = Number(node.dataset.pauseDuration || 2000);
      const initialDelay = Number(node.dataset.initialDelay || 0);
      const loop = node.dataset.loop !== "false";

      const cursor = node.parentElement?.querySelector(".text-type__cursor");
      if (cursor && window.gsap) {
        gsap.set(cursor, { opacity: 1 });
        gsap.to(cursor, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        });
      }

      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const tick = () => {
        const current = phrases[textIndex] || "";

        if (isDeleting) {
          node.textContent = current.slice(0, Math.max(charIndex - 1, 0));
          charIndex -= 1;
          if (charIndex <= 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % phrases.length;
            if (!loop && textIndex === 0) return;
            setTimeout(tick, 260);
            return;
          }
          setTimeout(tick, deletingSpeed);
          return;
        }

        node.textContent = current.slice(0, Math.min(charIndex + 1, current.length));
        charIndex += 1;

        if (charIndex >= current.length) {
          if (!loop && textIndex === phrases.length - 1) return;
          isDeleting = true;
          setTimeout(tick, pauseDuration);
          return;
        }

        setTimeout(tick, typingSpeed);
      };

      setTimeout(tick, initialDelay);
    });
  }

  const initTestimonialsStack = () => {
    const scrollArea = document.querySelector("[data-testimonials-scroll]");
    const stack = document.querySelector("[data-testimonials-stack]");
    if (!scrollArea || !stack) return;

    const cards = Array.from(stack.querySelectorAll(".testimonial-card"));
    if (!cards.length) return;
    const skippedCard = cards[0];
    const activeCards = cards.slice(1);
    if (!activeCards.length) return;

    skippedCard.style.display = "none";

    if (window.matchMedia("(max-width: 640px)").matches) {
      activeCards.forEach((card) => {
        card.style.transform = "none";
        card.style.opacity = "1";
        card.style.zIndex = "1";
      });
      return;
    }

    const total = activeCards.length;
    const snapDivisor = Math.max(total - 1, 1);

    const update = () => {
      const rect = scrollArea.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const travel = rect.height - viewport;
      const progress = travel > 0 ? Math.min(Math.max((-rect.top) / travel, 0), 1) : 0;
      const snapIndex = Math.round(progress * snapDivisor);

      activeCards.forEach((card, index) => {
        const dist = index - snapIndex;
        const absDist = Math.abs(dist);
        const y = dist * 34;
        const rotate = dist * -3.5;
        const scale = Math.max(0.86, 1 - absDist * 0.05);
        const opacity = absDist === 0 ? 1 : absDist === 1 ? 0.28 : 0;
        const zIndex = absDist === 0 ? 120 : 80 - absDist * 10;

        card.style.transform = `translate3d(0, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`;
        card.style.opacity = String(opacity);
        card.style.zIndex = String(zIndex);
        card.style.pointerEvents = absDist === 0 ? "auto" : "none";
      });
    };

    let ticking = false;
    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
  };

  initTestimonialsStack();

  const isMobile = (() => {
    const hasTouchScreen = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 768;
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    const isMobileUserAgent = mobileRegex.test(String(userAgent).toLowerCase());
    return (hasTouchScreen && isSmallScreen) || isMobileUserAgent;
  })();

  const cursor = document.querySelector(".target-cursor-wrapper");
  if (!cursor || !window.gsap || isMobile) return;

  const dot = cursor.querySelector(".target-cursor-dot");
  const corners = cursor.querySelectorAll(".target-cursor-corner");
  if (!dot || corners.length !== 4) return;

  const targetSelector = "a, button, .btn, .card, .chip, .hero-photo-wrap, .contacts a";
  const spinDuration = 4;
  const hoverDuration = 0.2;
  const parallaxOn = true;
  const constants = { borderWidth: 3, cornerSize: 12 };

  let spinTl = null;
  let activeTarget = null;
  let currentLeaveHandler = null;
  let resumeTimeout = null;
  let targetCornerPositions = null;
  const activeStrengthRef = { current: 0 };

  document.body.classList.add("custom-cursor-active");

  const cleanupTarget = (target) => {
    if (target && currentLeaveHandler) {
      target.removeEventListener("mouseleave", currentLeaveHandler);
    }
    currentLeaveHandler = null;
  };

  gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    opacity: 1,
  });

  const createSpinTimeline = () => {
    spinTl?.kill();
    spinTl = gsap.timeline({ repeat: -1 }).to(cursor, {
      rotation: "+=360",
      duration: spinDuration,
      ease: "none",
    });
  };
  createSpinTimeline();

  const moveCursor = (x, y) => {
    gsap.to(cursor, {
      x,
      y,
      duration: 0.1,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const tickerFn = () => {
    if (!targetCornerPositions) return;
    const strength = activeStrengthRef.current;
    if (strength === 0) return;

    const cursorX = gsap.getProperty(cursor, "x");
    const cursorY = gsap.getProperty(cursor, "y");
    const cornersArray = Array.from(corners);

    cornersArray.forEach((corner, i) => {
      const currentX = gsap.getProperty(corner, "x");
      const currentY = gsap.getProperty(corner, "y");

      const targetX = targetCornerPositions[i].x - cursorX;
      const targetY = targetCornerPositions[i].y - cursorY;
      const finalX = currentX + (targetX - currentX) * strength;
      const finalY = currentY + (targetY - currentY) * strength;
      const duration = strength >= 0.99 ? (parallaxOn ? 0.2 : 0) : 0.05;

      gsap.to(corner, {
        x: finalX,
        y: finalY,
        duration,
        ease: duration === 0 ? "none" : "power1.out",
        overwrite: "auto",
      });
    });
  };

  gsap.ticker.add(tickerFn);

  const moveHandler = (e) => moveCursor(e.clientX, e.clientY);
  window.addEventListener("mousemove", moveHandler);

  const scrollHandler = () => {
    if (!activeTarget) return;
    const mouseX = gsap.getProperty(cursor, "x");
    const mouseY = gsap.getProperty(cursor, "y");
    const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
    const isStillOverTarget =
      elementUnderMouse &&
      (elementUnderMouse === activeTarget || elementUnderMouse.closest(targetSelector) === activeTarget);
    if (!isStillOverTarget && currentLeaveHandler) {
      currentLeaveHandler();
    }
  };
  window.addEventListener("scroll", scrollHandler, { passive: true });

  const mouseDownHandler = () => {
    gsap.to(dot, { scale: 0.7, duration: 0.3 });
    gsap.to(cursor, { scale: 0.9, duration: 0.2 });
  };
  const mouseUpHandler = () => {
    gsap.to(dot, { scale: 1, duration: 0.3 });
    gsap.to(cursor, { scale: 1, duration: 0.2 });
  };

  window.addEventListener("mousedown", mouseDownHandler);
  window.addEventListener("mouseup", mouseUpHandler);

  const enterHandler = (e) => {
    const directTarget = e.target;
    if (!(directTarget instanceof Element)) return;

    const allTargets = [];
    let current = directTarget;
    while (current && current !== document.body) {
      if (current.matches(targetSelector)) {
        allTargets.push(current);
      }
      current = current.parentElement;
    }

    const target = allTargets[0] || null;
    if (!target) return;
    if (activeTarget === target) return;

    if (activeTarget) cleanupTarget(activeTarget);
    if (resumeTimeout) {
      clearTimeout(resumeTimeout);
      resumeTimeout = null;
    }

    activeTarget = target;
    const cornersArray = Array.from(corners);
    cornersArray.forEach((corner) => gsap.killTweensOf(corner));

    gsap.killTweensOf(cursor, "rotation");
    spinTl?.pause();
    gsap.set(cursor, { rotation: 0 });

    const rect = target.getBoundingClientRect();
    const { borderWidth, cornerSize } = constants;
    const cursorX = gsap.getProperty(cursor, "x");
    const cursorY = gsap.getProperty(cursor, "y");

    targetCornerPositions = [
      { x: rect.left - borderWidth, y: rect.top - borderWidth },
      { x: rect.right + borderWidth - cornerSize, y: rect.top - borderWidth },
      { x: rect.right + borderWidth - cornerSize, y: rect.bottom + borderWidth - cornerSize },
      { x: rect.left - borderWidth, y: rect.bottom + borderWidth - cornerSize },
    ];

    gsap.to(activeStrengthRef, {
      current: 1,
      duration: hoverDuration,
      ease: "power2.out",
    });

    cornersArray.forEach((corner, i) => {
      gsap.to(corner, {
        x: targetCornerPositions[i].x - cursorX,
        y: targetCornerPositions[i].y - cursorY,
        duration: 0.2,
        ease: "power2.out",
      });
    });

    const leaveHandler = () => {
      targetCornerPositions = null;
      activeTarget = null;
      gsap.set(activeStrengthRef, { current: 0, overwrite: true });

      const resetPositions = [
        { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
        { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
        { x: cornerSize * 0.5, y: cornerSize * 0.5 },
        { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
      ];

      const list = Array.from(corners);
      gsap.killTweensOf(list);
      list.forEach((corner, index) => {
        gsap.to(corner, {
          x: resetPositions[index].x,
          y: resetPositions[index].y,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      resumeTimeout = setTimeout(() => {
        if (!activeTarget) {
          const currentRotation = gsap.getProperty(cursor, "rotation");
          const normalizedRotation = Number(currentRotation) % 360;
          spinTl?.kill();
          spinTl = gsap.timeline({ repeat: -1 }).to(cursor, {
            rotation: "+=360",
            duration: spinDuration,
            ease: "none",
          });
          gsap.to(cursor, {
            rotation: normalizedRotation + 360,
            duration: spinDuration * (1 - normalizedRotation / 360),
            ease: "none",
            onComplete: () => spinTl?.restart(),
          });
        }
        resumeTimeout = null;
      }, 50);

      cleanupTarget(target);
    };

    currentLeaveHandler = leaveHandler;
    target.addEventListener("mouseleave", leaveHandler);
  };

  window.addEventListener("mouseover", enterHandler, { passive: true });

  window.addEventListener("beforeunload", () => {
    gsap.ticker.remove(tickerFn);
    window.removeEventListener("mousemove", moveHandler);
    window.removeEventListener("mouseover", enterHandler);
    window.removeEventListener("scroll", scrollHandler);
    window.removeEventListener("mousedown", mouseDownHandler);
    window.removeEventListener("mouseup", mouseUpHandler);
    if (activeTarget) cleanupTarget(activeTarget);
    spinTl?.kill();
    document.body.classList.remove("custom-cursor-active");
  });
})();
