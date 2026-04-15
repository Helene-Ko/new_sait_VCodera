(() => {
  const LANG_KEY = "vibe-site-lang";
  const typewriterStops = [];

  const enBundle = {
    "meta.title": "Vibe Coder — Portfolio",
    "meta.description":
      "Vibe Coder portfolio: websites, interfaces, and digital projects with strong storytelling and structure.",
    "hero.kicker": "Vibe Coder / Portfolio / Web & AI Experiences",
    "hero.title": "I build websites, interfaces, and digital projects",
    "hero.type": '["that feel like a vibe","but work like a system","and make you want to share them"]',
    "hero.lead":
      "Not just “ship a layout” — I shape feel, style, logic, and presentation so people want to open, scroll, and remember the project.",
    "hero.cta1": "View projects",
    "hero.cta2": "Discuss a brief",
    "hero.alt": "Portrait of Vibe Coder",
    "about.h2": "I don’t just write code — I craft the experience",
    "about.p1":
      "I work at the intersection of code, visuals, UX, and AI tools. For me, a site isn’t a stack of blocks. It’s the feeling of the project, rhythm, storytelling, structure, and how someone feels inside the interface.",
    "about.c1": "Landing pages",
    "about.c2": "Portfolio sites",
    "about.c3": "Promo pages",
    "about.c4": "Interfaces",
    "about.c5": "Special projects",
    "about.c6": "Digital concepts",
    "about.c7": "AI-first sites & products",
    "about.p2":
      "My approach is fast, beautiful, and intentional — so the work never looks like another soulless template.",
    "do.h2": "What I do",
    "svc1.h": "Landing pages",
    "svc1.p": "Sites that don’t merely “exist” — they capture attention, keep rhythm, and guide people through the story.",
    "svc2.h": "Portfolio & personal sites",
    "svc2.p": "Pages that showcase not only work, but style, character, and level.",
    "svc3.h": "Visual concepts",
    "svc3.p": "When you need more than a site — atmosphere, character, mood, and storytelling.",
    "svc4.h": "AI + Web",
    "svc4.p": "I use neural tools to accelerate and amplify ideas — not to replace thinking.",
    "svc5.h": "UX & structure",
    "svc5.p": "I think through how people read, where they look, where they drop off, and where decisions happen.",
    "svc6.h": "Fast launch",
    "svc6.p": "I can ship a strong first version quickly — without months of endless approvals.",
    "how.h2": "How I work",
    "st1.h": "Vibe first",
    "st1.p": "I look at the task and the feeling the project should communicate.",
    "st2.h": "Then structure",
    "st2.p": "A beautiful site without logic is just a pretty wrapper — so I shape meaning, scenario, and user flow.",
    "st3.h": "Then execution",
    "st3.p": "With style and logic in place, the build is faster, sharper, and stronger.",
    "proj.h2": "Selected projects",
    "p1.h": "AI Landing Experience",
    "p1.d": "A landing for a digital product focused on atmosphere, fast comprehension, and modern visuals.",
    "p1.m": "Delivered: structure, copy, design concept, build.",
    "p2.h": "Portfolio for Creative Expert",
    "p2.d": "A personal portfolio that shows not only cases, but the person’s style.",
    "p2.m": "Delivered: positioning, storytelling, visual rhythm, packaging of work.",
    "p3.h": "Bot & Funnel Page",
    "p3.d": "A promo page for a funnel and digital product — conversion-first, easy to scan.",
    "p3.m": "Delivered: block logic, copy, CTAs, visual scaffold.",
    "p4.h": "Concept Site for AI Creator",
    "p4.d": "Trend-forward storytelling, a strong hero, and that “I want to forward this” energy.",
    "p4.m": "Delivered: creative direction, structure, visual concept.",
    "why.h2": "Why people come for more than code",
    "why.p1":
      "Because I see the whole project — not only how to build it, but how to present it, how it will be perceived, where the eye hooks, what sticks, and why it can feel more premium than the price tag.",
    "why.p2": "I combine: <strong>aesthetics + structure + digital thinking + speed</strong>.",
    "tools.h2": "Tools",
    "tools.tc1": "ChatGPT",
    "tools.tc2": "Cursor",
    "tools.tc3": "HTML / CSS / JS",
    "tools.tc4": "React",
    "tools.tc5": "Tailwind",
    "tools.tc6": "Framer Motion",
    "tools.tc7": "Figma",
    "tools.tc8": "Tilda / Webflow / custom",
    "tools.tc9": "Telegram / Bots / AI tools",
    "tools.p":
      "Honestly — the main tool isn’t the stack, but taste, visual culture, and the ability to craft a cohesive impression.",
    "aud.h2": "Who my work fits",
    "aud.l1": "experts",
    "aud.l2": "creators",
    "aud.l3": "digital projects",
    "aud.l4": "AI products",
    "aud.l5": "studios",
    "aud.l6": "anyone who needs a site with character",
    "aud.l7": "anyone tired of faceless templates",
    "quote.txt":
      "A great site isn’t when it’s “nicely coded.” It’s when the project gains energy, shape, and feels alive.",
    "test.h2": "Client testimonials",
    "test.sub":
      "Real feelings after launch: speed, style, and how the site starts working for the brand.",
    "t1.ar": "Rating: 5 out of 5",
    "t1.bq":
      "We shipped incredibly fast, yet it looks expensive and cohesive. First time I had a page I’m proud to send to clients.",
    "t1.n": "Alexey M.",
    "t1.r": "Marketing expert",
    "t2.ar": "Rating: 5 out of 5",
    "t2.bq":
      "I loved that both design and the user scenario were thought through. Conversion grew on the very first landing version.",
    "t2.n": "Maria K.",
    "t2.r": "Founder of a digital product",
    "t3.ar": "Rating: 4.5 out of 5",
    "t3.bq":
      "Strong visual rhythm and clean structure. It doesn’t feel templated — you sense positioning and character.",
    "t3.n": "Igor S.",
    "t3.r": "Creative producer",
    "t4.ar": "Rating: 5 out of 5",
    "t4.bq":
      "I didn’t get just markup — full packaging: copy, emphasis, storytelling, logic. Launch happened without chaos or endless revisions.",
    "t4.n": "Ekaterina L.",
    "t4.r": "UI/UX designer",
    "cta.h2": "If you want a site that looks bold and feels modern — let’s build it",
    "cta.p": "I can help with concept, structure, packaging, and execution — from first vibe to a finished page.",
    "cta.b1": "Message me",
    "cta.b2": "See work",
    "foot.h2": "Contact",
    "foot.tg": "Telegram: @yourname",
    "foot.mail": "Email: hello@yourmail.com",
    "foot.bh": "Behance",
    "foot.dr": "Dribbble",
    "foot.gh": "GitHub",
    "foot.no": "Notion",
    "foot.ig": "Instagram",
  };

  const ruBundle = {};

  function collectRuFromDom() {
    ruBundle["meta.title"] = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    ruBundle["meta.description"] = metaDesc ? metaDesc.content : "";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (key === "hero.type") {
        ruBundle[key] = el.getAttribute("data-text-type") || "[]";
        return;
      }
      const attr = el.dataset.i18nAttr;
      if (attr) {
        ruBundle[key] = el.getAttribute(attr) || "";
        return;
      }
      if (el.dataset.i18nHtml === "true") {
        ruBundle[key] = el.innerHTML;
      } else {
        ruBundle[key] = el.textContent.trim();
      }
    });
  }

  function stopAllTypers() {
    while (typewriterStops.length) {
      const stop = typewriterStops.pop();
      stop();
    }
  }

  function initAllTypers() {
    document.querySelectorAll(".text-type[data-text-type]").forEach((node) => {
      let alive = true;
      const stop = () => {
        alive = false;
      };
      typewriterStops.push(stop);

      let phrases;
      try {
        const parsed = JSON.parse(node.getAttribute("data-text-type") || "[]");
        phrases = Array.isArray(parsed) && parsed.length ? parsed : [String(parsed || "")];
      } catch {
        phrases = [node.getAttribute("data-text-type") || ""];
      }

      const typingSpeed = Number(node.dataset.typingSpeed || 50);
      const deletingSpeed = Number(node.dataset.deletingSpeed || 30);
      const pauseDuration = Number(node.dataset.pauseDuration || 2000);
      const initialDelay = Number(node.dataset.initialDelay || 0);
      const loop = node.dataset.loop !== "false";

      const cursor = node.parentElement?.querySelector(".text-type__cursor");
      if (cursor && window.gsap) {
        gsap.killTweensOf(cursor);
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
      let timeoutId = null;

      const schedule = (fn, ms) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          timeoutId = null;
          fn();
        }, ms);
      };

      const tick = () => {
        if (!alive) return;
        const current = phrases[textIndex] || "";

        if (isDeleting) {
          node.textContent = current.slice(0, Math.max(charIndex - 1, 0));
          charIndex -= 1;
          if (charIndex <= 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % phrases.length;
            if (!loop && textIndex === 0) return;
            schedule(tick, 260);
            return;
          }
          schedule(tick, deletingSpeed);
          return;
        }

        node.textContent = current.slice(0, Math.min(charIndex + 1, current.length));
        charIndex += 1;

        if (charIndex >= current.length) {
          if (!loop && textIndex === phrases.length - 1) return;
          isDeleting = true;
          schedule(tick, pauseDuration);
          return;
        }

        schedule(tick, typingSpeed);
      };

      schedule(tick, initialDelay);
    });
  }

  function updateLangSwitchUi(isEn) {
    const toggle = document.getElementById("langToggle");
    const ruLab = document.getElementById("langLabelRu");
    const enLab = document.getElementById("langLabelEn");
    if (toggle) {
      toggle.setAttribute("aria-checked", isEn ? "true" : "false");
      toggle.setAttribute(
        "aria-label",
        isEn ? "Language: English. Switch to Russian" : "Язык: русский. Переключить на English",
      );
    }
    ruLab?.classList.toggle("is-on", !isEn);
    enLab?.classList.toggle("is-on", isEn);
  }

  function applyLang(lang) {
    const isEn = lang === "en";
    const bundle = isEn ? enBundle : ruBundle;
    document.documentElement.lang = isEn ? "en" : "ru";

    document.title = bundle["meta.title"] || document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && bundle["meta.description"] != null) {
      metaDesc.content = bundle["meta.description"];
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = bundle[key];
      if (val == null) return;

      if (key === "hero.type") {
        el.setAttribute("data-text-type", val);
        return;
      }

      const attr = el.dataset.i18nAttr;
      if (attr) {
        el.setAttribute(attr, val);
        return;
      }

      if (el.dataset.i18nHtml === "true") {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    updateLangSwitchUi(isEn);
    localStorage.setItem(LANG_KEY, isEn ? "en" : "ru");

    stopAllTypers();
    initAllTypers();
  }

  collectRuFromDom();
  const saved = localStorage.getItem(LANG_KEY);
  applyLang(saved === "en" ? "en" : "ru");

  document.getElementById("langToggle")?.addEventListener("click", () => {
    const next = document.documentElement.lang === "en" ? "ru" : "en";
    applyLang(next);
  });

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

  const targetSelector = "a, button, .btn, .card, .chip, .hero-photo-wrap, .contacts a, .lang-switch";
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
