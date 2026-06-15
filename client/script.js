// ========================================
// DARK/LIGHT MODE THEME TOGGLE
// ========================================

function initTheme() {
  const stored = localStorage.getItem('theme');
  let theme = 'light';
  if (stored === 'dark' || stored === 'light') {
    theme = stored;
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
  }
  applyTheme(theme, true);
  return theme;
}

function applyTheme(theme, saveToStorage = true) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  if (saveToStorage) {
    localStorage.setItem('theme', theme);
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark', true);
}

// ========================================
// LANGUAGE TRANSLATIONS
// ========================================

const translations = {
  sv: {
    navHome: "Hem", navFeatures: "Features", navSolution: "Lösningen",
    navLoss: "Varuskydd & AI", navRetail: "Retail Media", navNordic: "Nordisk", navContact: "Kontakt",
    cta: "Boka en Demo", ctaSecondary: "Läs mer",
    heroTitle: "Smarta Shoppingvagnar för Nordisk Detaljhandel",
    heroSubtitle: "Transformera kundupplevelsen med AI-driven självscanning och personaliserad shopping",
    featuresTitle: "Varför välja Snap Cart?",
    features: [
      { title: "Snabb Självscanning", desc: "Kunderna scannar varor medan de handlar – ingen köbildning vid kassan" },
      { title: "AI-driven Varuskydd", desc: "Intelligent kameravision minskar svinn med upp till 4x jämfört med slumpmässiga kontroller" },
      { title: "Personaliserad Shopping", desc: "Rekommendationer och erbjudanden baserade på kundens varukorgs innehåll" },
      { title: "Retail Media Revenue", desc: "Förvandla vagnar till högpresterande marknadsföringskanaler" }
    ],
    solutionTitle: "Lösningen: Snap Cart",
    solutionDesc: "En modulär smart shoppingvagn som uppgraderar befintliga vagnar med intelligent tablet-teknik",
    solutionFeatures: ["Modulär tablet-integration", "Detaljerad scanner för tunga varor", "Inbyggd AI-kameravision", "Personaliserade recept-förslag", "Lojalitets- och kupongintegration", "Handskrift-scanning av inköpslistor"],
    lossTitle: "Varuskydd & AI",
    lossDesc: "Minska svinn med intelligent övervakning och automatiserade spotchecks",
    lossBenefits: ["Realtidsövervakning av varukorg", "Automatisk feldetektering", "Automatiserade spotchecks", "GDPR-kompatibel övervakning", "4x minskning av svinn vs slumpmässiga kontroller"],
    retailTitle: "Generera Intäkter genom Retail Media",
    retailDesc: "Förvandla shoppingvagnar till högpresterande marknadsföringskanaler",
    retailBenefits: ["Reklamplats i gångarna", "Personaliserade erbjudanden", "Realtidsanalytik", "Platsbaserad riktning", "Ökad omsättning per transaktion"],
    testimonialsTitle: "Betrodd av Ledande Detaljhandelskedjor",
    testimonials: [
      { company: "REWE", quote: "Scan & Pay har varit en enorm framgång för oss. Upp till 15% av köpen görs redan med Scan & Pay.", author: "Marco Statt, CIO" },
      { company: "Dohle", quote: "Vi är mycket glada över att vi valde Shopreme. De har varit den ideala teknologipartnern.", author: "Oliver Schnurr, Product Owner" },
      { company: "Bartels-Langness", quote: "Detta är en riktigt bra lösning. Kunderna förväntar sig innovativa lösningar vid kassan.", author: "Florian Behrens, CIO" }
    ],
    partnersTitle: "Hårdvarupartner",
    partners: ["Hanshow", "Wanzl", "Geck"],
    nordicTitle: "Nordisk Expertis",
    nordicDesc: "Digital Business Partner är exklusiv återförsäljare för Shopreme-lösningar på den nordiska marknaden",
    regionsTitle: "Marknadstäckning",
    regions: ["Sverige", "Norge", "Finland", "Danmark"],
    officesTitle: "Våra Kontor",
    offices: ["Malmö", "Stockholm"],
    contactTitle: "Kontakta Oss",
    contactDesc: "Boka en demo eller få mer information om Snap Cart",
    phoneLabel: "Telefon", emailLabel: "E-post",
    formName: "Namn", formCompany: "Företag", formEmail: "E-post", formMessage: "Meddelande", submitBtn: "Skicka"
  },
  en: {
    navHome: "Home", navFeatures: "Features", navSolution: "Solution",
    navLoss: "Loss Prevention & AI", navRetail: "Retail Media", navNordic: "Nordic", navContact: "Contact",
    cta: "Book a Demo", ctaSecondary: "Learn More",
    heroTitle: "Smart Shopping Carts for Nordic Retail",
    heroSubtitle: "Transform the customer experience with AI-driven self-scanning and personalized shopping",
    featuresTitle: "Why Choose Snap Cart?",
    features: [
      { title: "Fast Self-Scanning", desc: "Customers scan items while shopping – no queues at checkout" },
      { title: "AI-Driven Loss Prevention", desc: "Intelligent camera vision reduces shrinkage by up to 4x compared to random checks" },
      { title: "Personalized Shopping", desc: "Recommendations and offers based on customer basket contents" },
      { title: "Retail Media Revenue", desc: "Transform carts into high-performing marketing channels" }
    ],
    solutionTitle: "The Solution: Snap Cart",
    solutionDesc: "A modular smart shopping cart that upgrades existing carts with intelligent tablet technology",
    solutionFeatures: ["Modular tablet integration", "Detachable scanner for heavy items", "Built-in AI camera vision", "Personalized recipe suggestions", "Loyalty and coupon integration", "Handwriting shopping list scanning"],
    lossTitle: "Loss Prevention & AI",
    lossDesc: "Reduce shrinkage with intelligent monitoring and automated spot checks",
    lossBenefits: ["Real-time basket monitoring", "Automatic error detection", "Automated spot checks", "GDPR-compliant monitoring", "4x shrinkage reduction vs random checks"],
    retailTitle: "Generate Revenue Through Retail Media",
    retailDesc: "Transform shopping carts into high-performing marketing channels",
    retailBenefits: ["In-aisle advertising space", "Personalized offers", "Real-time analytics", "Location-based targeting", "Increased revenue per transaction"],
    testimonialsTitle: "Trusted by Leading Retailers",
    testimonials: [
      { company: "REWE", quote: "Scan & Pay has been a huge success for us. Up to 15% of purchases are already made with Scan & Pay.", author: "Marco Statt, CIO" },
      { company: "Dohle", quote: "We are very glad we chose Shopreme. They have been the ideal technology partner.", author: "Oliver Schnurr, Product Owner" },
      { company: "Bartels-Langness", quote: "This is a really great solution. Customers expect innovative solutions at the POS.", author: "Florian Behrens, CIO" }
    ],
    partnersTitle: "Hardware Partners",
    partners: ["Hanshow", "Wanzl", "Geck"],
    nordicTitle: "Nordic Expertise",
    nordicDesc: "Digital Business Partner is the exclusive reseller of Shopreme solutions in the Nordic market",
    regionsTitle: "Market Coverage",
    regions: ["Sweden", "Norway", "Finland", "Denmark"],
    officesTitle: "Our Offices",
    offices: ["Malmö", "Stockholm"],
    contactTitle: "Contact Us",
    contactDesc: "Book a demo or get more information about Snap Cart",
    phoneLabel: "Phone", emailLabel: "Email",
    formName: "Name", formCompany: "Company", formEmail: "Email", formMessage: "Message", submitBtn: "Send"
  }
};

let currentLang = 'sv';

function updateLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  // Update navigation
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const id = link.getAttribute('data-id');
    const navMap = {
      'home': t.navHome, 'features': t.navFeatures, 'solution': t.navSolution,
      'loss-prevention': t.navLoss, 'retail-media': t.navRetail,
      'nordic': t.navNordic, 'contact': t.navContact
    };
    if (navMap[id]) link.textContent = navMap[id];
  });
  
  // Update CTA buttons
  document.querySelectorAll('#ctaButton, #mobileCtaButton, #heroCtaBtn').forEach(btn => {
    if (btn) btn.innerHTML = `${t.cta} <i class="fas fa-arrow-right"></i>`;
  });
  const heroSecondary = document.getElementById('heroSecondaryBtn');
  if (heroSecondary) heroSecondary.textContent = t.ctaSecondary;
  
  // Update hero
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroTitle) heroTitle.textContent = t.heroTitle;
  if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
  
  // Update features title
  const featuresTitle = document.getElementById('featuresTitle');
  if (featuresTitle) featuresTitle.textContent = t.featuresTitle;
  
  // Populate features grid
  const featuresGrid = document.getElementById('featuresGrid');
  if (featuresGrid) {
    featuresGrid.innerHTML = t.features.map(f => `
      <div class="feature-card">
        <div class="feature-icon"><i class="fas fa-check-circle"></i></div>
        <h3 class="feature-title">${f.title}</h3>
        <p class="feature-desc">${f.desc}</p>
      </div>
    `).join('');
  }
  
  // Update solution
  const solutionTitle = document.getElementById('solutionTitle');
  const solutionDesc = document.getElementById('solutionDesc');
  if (solutionTitle) solutionTitle.textContent = t.solutionTitle;
  if (solutionDesc) solutionDesc.textContent = t.solutionDesc;
  
  const solutionFeatures = document.getElementById('solutionFeatures');
  if (solutionFeatures) {
    solutionFeatures.innerHTML = t.solutionFeatures.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('');
  }
  
  // Update loss prevention
  const lossTitle = document.getElementById('lossTitle');
  const lossDesc = document.getElementById('lossDesc');
  if (lossTitle) lossTitle.textContent = t.lossTitle;
  if (lossDesc) lossDesc.textContent = t.lossDesc;
  
  const lossBenefits = document.getElementById('lossBenefits');
  if (lossBenefits) {
    lossBenefits.innerHTML = t.lossBenefits.map(b => `<li><i class="fas fa-shield-alt"></i> ${b}</li>`).join('');
  }
  
  // Update retail media
  const retailTitle = document.getElementById('retailTitle');
  const retailDesc = document.getElementById('retailDesc');
  if (retailTitle) retailTitle.textContent = t.retailTitle;
  if (retailDesc) retailDesc.textContent = t.retailDesc;
  
  const retailBenefits = document.getElementById('retailBenefits');
  if (retailBenefits) {
    retailBenefits.innerHTML = t.retailBenefits.map(b => `<li><i class="fas fa-chart-line"></i> ${b}</li>`).join('');
  }
  
  // Update testimonials
  const testimonialsTitle = document.getElementById('testimonialsTitle');
  if (testimonialsTitle) testimonialsTitle.textContent = t.testimonialsTitle;
  
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  if (testimonialsGrid) {
    testimonialsGrid.innerHTML = t.testimonials.map(ts => `
      <div class="testimonial-card">
        <div class="testimonial-company">${ts.company}</div>
        <div class="testimonial-quote">"${ts.quote}"</div>
        <div class="testimonial-author">— ${ts.author}</div>
      </div>
    `).join('');
  }
  
  // Update partners
  const partnersTitle = document.getElementById('partnersTitle');
  if (partnersTitle) partnersTitle.textContent = t.partnersTitle;
  
  const partnersLogos = document.getElementById('partnersLogos');
  if (partnersLogos) {
    partnersLogos.innerHTML = t.partners.map(p => `<div class="partner-logo-card">${p}</div>`).join('');
  }
  
  // Update nordic
  const nordicTitle = document.getElementById('nordicTitle');
  const nordicDescElem = document.getElementById('nordicDesc');
  if (nordicTitle) nordicTitle.textContent = t.nordicTitle;
  if (nordicDescElem) nordicDescElem.textContent = t.nordicDesc;
  
  const regionsTitleElem = document.getElementById('regionsTitle');
  if (regionsTitleElem) regionsTitleElem.textContent = t.regionsTitle;
  
  const regionsGrid = document.getElementById('regionsGrid');
  if (regionsGrid) {
    regionsGrid.innerHTML = t.regions.map(r => `<div class="region-card">${r}</div>`).join('');
  }
  
  const officesTitleElem = document.getElementById('officesTitle');
  if (officesTitleElem) officesTitleElem.textContent = t.officesTitle;
  
  const officesGrid = document.getElementById('officesGrid');
  if (officesGrid) {
    officesGrid.innerHTML = t.offices.map(o => `<div class="office-card"><i class="fas fa-building"></i><br>${o}</div>`).join('');
  }
  
  // Update contact
  const contactTitle = document.getElementById('contactTitle');
  const contactDescElem = document.getElementById('contactDesc');
  const phoneLabel = document.getElementById('phoneLabel');
  const emailLabel = document.getElementById('emailLabel');
  const formName = document.getElementById('formName');
  const formCompany = document.getElementById('formCompany');
  const formEmail = document.getElementById('formEmail');
  const formMessage = document.getElementById('formMessage');
  const submitBtn = document.getElementById('submitBtn');
  
  if (contactTitle) contactTitle.textContent = t.contactTitle;
  if (contactDescElem) contactDescElem.textContent = t.contactDesc;
  if (phoneLabel) phoneLabel.textContent = t.phoneLabel;
  if (emailLabel) emailLabel.textContent = t.emailLabel;
  if (formName) formName.placeholder = t.formName;
  if (formCompany) formCompany.placeholder = t.formCompany;
  if (formEmail) formEmail.placeholder = t.formEmail;
  if (formMessage) formMessage.placeholder = t.formMessage;
  if (submitBtn) submitBtn.textContent = t.submitBtn;
  
  // Update language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ========================================
// SMOOTH SCROLL
// ========================================

function handleNavClick(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function handleBookDemo() {
  handleNavClick('contact');
}

// ========================================
// FORM SUBMISSION
// ========================================

function handleFormSubmit(e) {
  e.preventDefault();
  const formData = {
    name: document.getElementById('formName')?.value || '',
    company: document.getElementById('formCompany')?.value || '',
    email: document.getElementById('formEmail')?.value || '',
    message: document.getElementById('formMessage')?.value || ''
  };
  console.log('Form submitted:', formData);
  alert(currentLang === 'sv' ? 'Tack! Vi återkommer inom kort.' : 'Thank you! We will get back to you shortly.');
  e.target.reset();
}

// ========================================
// IME COMPOSITION HANDLER (för å, ä, ö)
// ========================================

function setupCompositionHandling(inputElement) {
  if (!inputElement) return;
  let isComposing = false;
  
  inputElement.addEventListener('compositionstart', () => {
    isComposing = true;
  });
  
  inputElement.addEventListener('compositionend', () => {
    setTimeout(() => {
      isComposing = false;
    }, 10);
  });
  
  inputElement.addEventListener('keydown', (e) => {
    if (isComposing && (e.key === 'Enter' || e.key === 'Escape')) {
      e.stopPropagation();
    }
  });
}

// ========================================
// DOM CONTENT LOADED
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  initTheme();
  
  // Theme toggle
  const themeToggleBtn = document.getElementById('themeToggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  
  // Language toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      if (lang === 'sv' || lang === 'en') {
        updateLanguage(lang);
      }
    });
  });
  
  // Initialize language (SV)
  updateLanguage('sv');
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
  
  // Navigation links
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const id = this.getAttribute('data-id');
      if (id) {
        handleNavClick(id);
        // Close mobile menu
        if (mobileMenu && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          const icon = mobileMenuBtn?.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
      }
    });
  });
  
  // CTA buttons
  document.querySelectorAll('#ctaButton, #mobileCtaButton, #heroCtaBtn').forEach(btn => {
    btn.addEventListener('click', handleBookDemo);
  });
  
  // Secondary button (learn more)
  const heroSecondary = document.getElementById('heroSecondaryBtn');
  if (heroSecondary) {
    heroSecondary.addEventListener('click', () => handleNavClick('features'));
  }
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Composition handling for form inputs (å, ä, ö)
  setupCompositionHandling(document.getElementById('formName'));
  setupCompositionHandling(document.getElementById('formCompany'));
  setupCompositionHandling(document.getElementById('formEmail'));
  setupCompositionHandling(document.getElementById('formMessage'));
  
  // Intersection Observer for fade-in animations
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.feature-card, .solution-container, .loss-container, .retail-container, .testimonial-card, .nordic-content, .contact-container').forEach(section => {
    observer.observe(section);
  });
  
  console.log('Snap Cart landing page loaded successfully!');
});