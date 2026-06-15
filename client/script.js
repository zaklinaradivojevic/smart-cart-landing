/**
 * Smart Cart Landing Page - JavaScript
 * Mobile menu, language toggle, scroll animations
 */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  
  // ========== MOBILE MENU TOGGLE ==========
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      // Change icon based on menu state
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
  
  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
  
  // ========== LANGUAGE TOGGLE (SV/EN) ==========
  const langToggle = document.getElementById('langToggle');
  let currentLang = 'sv'; // default Swedish
  
  // Content translations
  const translations = {
    sv: {
      heroTitle: 'Smart Cart –<br><span class="hero-title-accent">pametna korpa</span><br>za pametnije odluke',
      heroSubtitle: 'Digital Business Partner donosi Shopreme tehnologiju na nordijsko tržište.<br>Revolucionirajte iskustvo kupovine u vašim supermarketima.',
      btnContact: 'Kontaktirajte nas',
      btnDemo: 'Se demo',
      sectionBadge: 'Vår expertis',
      sectionTitle: 'Digitala lösningar för<br>moderna butiker',
      sectionSubtitle: 'Tillsammans med våra kunder skapar vi framtidens shoppingupplevelse',
      productTitle: 'Vad är <span class="lilac-text">Smart Cart?</span>',
      productDesc: 'Smart Cart är en intelligent shoppingvagn som ger kunderna en sömlös och effektiv shoppingupplevelse. Med inbyggda sensorer, vågar och en interaktiv skärm kan kunderna skanna varor direkt i vagnen, se reapriser och betala utan att passera kassan.',
      ctaTitle: 'Redo att revolutionera<br>era butiker?',
      ctaText: 'Kontakta oss idag för en kostnadsfri konsultation.'
    },
    en: {
      heroTitle: 'Smart Cart –<br><span class="hero-title-accent">smart shopping cart</span><br>for smarter decisions',
      heroSubtitle: 'Digital Business Partner brings Shopreme technology to the Nordic market.<br>Revolutionize the shopping experience in your supermarkets.',
      btnContact: 'Contact us',
      btnDemo: 'See demo',
      sectionBadge: 'Our expertise',
      sectionTitle: 'Digital solutions for<br>modern stores',
      sectionSubtitle: 'Together with our customers, we create the future of shopping experiences',
      productTitle: 'What is <span class="lilac-text">Smart Cart?</span>',
      productDesc: 'Smart Cart is an intelligent shopping cart that provides customers with a seamless and efficient shopping experience. With built-in sensors, scales, and an interactive screen, customers can scan items directly in the cart, see sale prices, and pay without going through the checkout.',
      ctaTitle: 'Ready to revolutionize<br>your stores?',
      ctaText: 'Contact us today for a free consultation.'
    }
  };
  
  if (langToggle) {
    langToggle.addEventListener('click', function() {
      // Toggle language
      currentLang = currentLang === 'sv' ? 'en' : 'sv';
      
      // Update toggle button text
      const svSpan = langToggle.querySelector('.lang-sv');
      const enSpan = langToggle.querySelector('.lang-en');
      if (svSpan && enSpan) {
        if (currentLang === 'sv') {
          svSpan.style.opacity = '1';
          enSpan.style.opacity = '0.5';
        } else {
          svSpan.style.opacity = '0.5';
          enSpan.style.opacity = '1';
        }
      }
      
      // Update hero section
      const heroTitle = document.querySelector('.hero-title');
      const heroSubtitle = document.querySelector('.hero-subtitle');
      const contactBtn = document.querySelector('.hero-buttons .btn-primary');
      const demoBtn = document.querySelector('.hero-buttons .btn-secondary');
      
      if (heroTitle) heroTitle.innerHTML = translations[currentLang].heroTitle;
      if (heroSubtitle) heroSubtitle.innerHTML = translations[currentLang].heroSubtitle;
      if (contactBtn && contactBtn.innerHTML.includes('Kontaktirajte')) {
        contactBtn.innerHTML = `<i class="fas fa-arrow-right"></i> ${translations[currentLang].btnContact}`;
      }
      if (demoBtn && demoBtn.innerHTML.includes('Se demo')) {
        demoBtn.innerHTML = `<i class="fas fa-play"></i> ${translations[currentLang].btnDemo}`;
      }
      
      // Update solutions section
      const sectionBadge = document.querySelector('.section-badge');
      const sectionTitle = document.querySelector('.section-title');
      const sectionSubtitle = document.querySelector('.section-subtitle');
      
      if (sectionBadge && sectionBadge.innerText === 'Vår expertis' || sectionBadge.innerText === 'Our expertise') {
        sectionBadge.innerText = translations[currentLang].sectionBadge;
      }
      if (sectionTitle && sectionTitle.innerHTML.includes('Digitala lösningar')) {
        sectionTitle.innerHTML = translations[currentLang].sectionTitle;
      }
      if (sectionSubtitle && sectionSubtitle.innerText.includes('Tillsammans med våra kunder')) {
        sectionSubtitle.innerText = translations[currentLang].sectionSubtitle;
      }
      
      // Update product section
      const productTitle = document.querySelector('.product-title');
      const productDesc = document.querySelector('.product-description');
      
      if (productTitle && productTitle.innerHTML.includes('Vad är')) {
        productTitle.innerHTML = translations[currentLang].productTitle;
      }
      if (productDesc && productDesc.innerText.includes('Smart Cart är en intelligent')) {
        productDesc.innerText = translations[currentLang].productDesc;
      }
      
      // Update CTA section
      const ctaTitle = document.querySelector('.cta-title');
      const ctaText = document.querySelector('.cta-text');
      const ctaBtn = document.querySelector('.cta-section .btn-primary');
      
      if (ctaTitle && ctaTitle.innerHTML.includes('Redo att')) {
        ctaTitle.innerHTML = translations[currentLang].ctaTitle;
      }
      if (ctaText && ctaText.innerText.includes('Kontakta oss idag')) {
        ctaText.innerText = translations[currentLang].ctaText;
      }
      if (ctaBtn && ctaBtn.innerHTML.includes('Kontakta oss')) {
        ctaBtn.innerHTML = `${translations[currentLang].btnContact} <i class="fas fa-arrow-right"></i>`;
      }
    });
  }
  
  // ========== SCROLL ANIMATIONS (fade-in) ==========
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all sections for fade-in animation
  const sectionsToAnimate = document.querySelectorAll('.solution-card, .product-container, .partners-grid, .cta-section');
  sectionsToAnimate.forEach(section => {
    observer.observe(section);
  });
  
  // ========== SMOOTH SCROLL FOR NAVIGATION LINKS ==========
  const allLinks = document.querySelectorAll('a[href^="#"]');
  allLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // ========== ACTIVE NAVIGATION LINK ON SCROLL ==========
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function updateActiveLink() {
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href.substring(1) === current) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveLink);
  // ========================================
// DARK/LIGHT MODE THEME TOGGLE
// (React ThemeProvider ekvivalent u čistom JS)
// ========================================

// Funkcija koja inicijalizuje temu
function initTheme() {
  const switchable = true; // Da li korisnik može da menja temu
  
  // Proveri da li je tema sačuvana u localStorage
  let theme = 'light';
  
  if (switchable) {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      theme = stored;
    } else {
      // Proveri sistemske preferencije (ako korisnik nema sačuvanu temu)
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      theme = prefersDark ? 'dark' : 'light';
    }
  }
  
  // Primeni temu na <html> element
  applyTheme(theme, switchable);
  
  // Sačuvaj u localStorage ako je switchable
  if (switchable) {
    localStorage.setItem('theme', theme);
  }
  
  return theme;
}

// Funkcija koja primenjuje temu na stranicu
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
  
  // Ažuriraj dugme ako postoji (sakrij/neprikazuj ikonice)
  updateThemeButtonIcons(theme);
}

// Funkcija koja menja temu (toggle)
function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  
  applyTheme(newTheme, true);
  
  // Opciono: emituj custom event ako drugi delovi koda treba da znaju
  window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
}

// Ažurira ikonice na dugmetu
function updateThemeButtonIcons(theme) {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;
  
  const sunIcon = themeToggle.querySelector('.fa-sun');
  const moonIcon = themeToggle.querySelector('.fa-moon');
  
  if (theme === 'dark') {
    if (sunIcon) sunIcon.style.display = 'none';
    if (moonIcon) moonIcon.style.display = 'inline-block';
  } else {
    if (sunIcon) sunIcon.style.display = 'inline-block';
    if (moonIcon) moonIcon.style.display = 'none';
  }
}

// Inicijalizuj temu i dodaj event listener na dugme
document.addEventListener('DOMContentLoaded', function() {
  // Inicijalizuj temu
  initTheme();
  
  // Dodaj event listener na dugme
  const themeToggleBtn = document.getElementById('themeToggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }
  
  // Opciono: prati sistemske promene teme (ako korisnik nema sačuvanu)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    // Samo ako nema sačuvane preferencije
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      applyTheme(newTheme, false);
    }
  });
});

  // ========== BUTTON CLICK HANDLERS (demo) ==========
  const demoButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
  demoButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      // For demo purposes - just log
      if (this.innerText.includes('Kontakt') || this.innerText.includes('Contact')) {
        console.log('Contact button clicked - Would open contact form');
        alert('Demo: Kontaktformulär skulle öppnas här.');
      }
      if (this.innerText.includes('demo') || this.innerText.includes('Demo')) {
        console.log('Demo button clicked - Would show demo video');
        alert('Demo: Videodemonstration skulle visas här.');
      }
    });
  });
  
  console.log('Smart Cart landing page loaded successfully!');
});