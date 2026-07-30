const EN = {
  skip: "Skip to content",
  nav1: "about", nav2: "experience", nav3: "capabilities", nav4: "contact",
  kicker: "— senior backend developer · java / spring · 12 years",
  heroP1: "I build and modernize backends that are already in production: services in Java and Spring Boot, legacy system migration, and automation of the processes a business actually runs on.",
  heroP2: "I currently work at Hey Banco, in a regulated banking environment. Before that: retail, transport and manufacturing — where the work almost always started with a system that could no longer keep up.",
  cta1: "contact →",
  h2sobre: "01 / about me",
  sobreP1: "I'm a computer engineer and I've spent twelve years on the backend side. I started supporting legacy systems in manufacturing and ended up designing the architecture other teams ship on: containers, continuous integration and static analysis as part of the normal flow, not as a side project.",
  sobreP2: "Java and Spring are my specialty, but the work I care about is translating a real operation — billing, sales, internal processes — into services people can understand and maintain. That includes automating what is still done by hand and carefully dismantling what shouldn't be standing anymore.",
  sobreP3: "I've also led small teams and coordinated projects: requirements gathering, technical decisions alongside the business, and vendor selection.",
  dt1: "currently", dt2: "based in", dd2: "Tlaxcala, Mexico", dt3: "languages", dd3: "Spanish · technical English",
  h2exp: "02 / experience",
  exp1d: "2023 → now", exp1r: "Senior Backend Developer",
  exp1b1: "Backend development in Java and Spring Boot inside a regulated banking environment, with the controls and traceability that demands.",
  exp1b2: "Vulnerability remediation on production services and dependency hardening.",
  exp1b3: "Modernization of legacy systems into maintainable services, without interrupting the operation.",
  exp2r: "Software Developer",
  exp2b1: "Development and maintenance of the sales-flow orchestration project.",
  exp2b2: "Integration between commerce services and internal operations systems.",
  exp3r: "Senior Software Analyst & Developer · Puebla",
  exp3b1: "Proposed and implemented a DevOps-based development architecture that became the area's standard.",
  exp3b2: "Led the development team and project management: unification of sales platforms, invoicing provider migration, and the travel-package sales site.",
  exp3b3: "Technical support to the business on project decisions and vendor selection, plus legacy system support.",
  exp4r: "Business Process Analyst & Developer · Monterrey",
  exp4b1: "Owned the BPM area: migration and automation of business processes on IBM BPM.",
  exp4b2: "Designed and implemented a container-based architecture for new development.",
  exp5r: "Software Developer · Nuevo León",
  exp5b1: "End-to-end analysis, design and implementation of the chassis component management module.",
  exp5b2: "Migration of the desktop platform to web, plus support for existing systems.",
  exp6r: "Software Developer (intern) · Tlaxcala",
  exp6b1: "Requirements gathering, use cases and database design for the performance review module.",
  h2cap: "03 / technical capabilities",
  cap3: "data", cap3v: "Oracle · SQL Server · DB2 · MySQL · relational modeling · schema migrations",
  cap5: "applied ai", cap5v: "Computer vision and pattern recognition applied to medical diagnosis · image processing",
  h2edu: "04 / education and honors",
  mencion: "thesis honorable mention",
  tesisT: "Computer vision applied to the diagnosis of chronic granulocytic leukemia",
  tesisP: "Pattern recognition over laboratory images to support identification of the disease. Also presented as <em>Pattern Recognition Applied to Identification of Chronic Granulocytic Leukemia</em>.",
  uatx: "Universidad Autónoma de Tlaxcala · Distributed Systems · 2009–2013",
  bach: "Accounting Technician",
  h2cert: "certifications",
  cert1: "Java Fundamentals", cert3: "Microservices", cert4: "SCRUM", cert5: "Big Data",
  cert6: "Introduction to the Terminal and Command Line",
  h2cont: "05 / contact",
  contT: "If you have a backend that needs rescuing, or a role that fits, get in touch.",
  cvBtn: "download CV (PDF)",
  footerR: "Tlaxcala, Mexico · static site on GitHub Pages"
};

(function () {
  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  // Theme
  var theme = store.get('ediaz-theme');
  if (!theme) theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  setTheme(theme);
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    store.set('ediaz-theme', t);
    var b = document.getElementById('themeBtn');
    if (b) b.textContent = t === 'dark' ? '☀' : '☾';
  }

  // Language
  var es = {};
  document.querySelectorAll('[data-i18n]').forEach(function (n) { es[n.getAttribute('data-i18n')] = n.innerHTML; });
  function setLang(l) {
    root.setAttribute('lang', l);
    store.set('ediaz-lang', l);
    document.querySelectorAll('[data-i18n]').forEach(function (n) {
      var k = n.getAttribute('data-i18n');
      var v = l === 'en' ? (EN[k] || es[k]) : es[k];
      if (v != null) n.innerHTML = v;
    });
    var b = document.getElementById('langBtn');
    if (b) b.textContent = l === 'es' ? 'EN' : 'ES';
  }
  setLang(store.get('ediaz-lang') === 'en' ? 'en' : 'es');

  document.getElementById('themeBtn').addEventListener('click', function () {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
  document.getElementById('langBtn').addEventListener('click', function () {
    setLang(root.getAttribute('lang') === 'es' ? 'en' : 'es');
  });

  // Scroll reveal
  if (!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('om-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    document.querySelectorAll('[data-reveal]').forEach(function (n) { io.observe(n); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (n) { n.classList.add('om-in'); });
  }
})();
