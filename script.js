// ===========================
// VARIABLES GLOBALES
// ===========================
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollToTopBtn = document.getElementById('scrollToTop');
const sections = document.querySelectorAll('section[id]');
const contactForm = document.getElementById('contactForm');

// ===========================
// NAVIGATION STICKY & SCROLL
// ===========================
window.addEventListener('scroll', () => {
  // Navbar sticky effect
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Show/hide scroll to top button
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }

  // Active navigation link based on scroll position
  highlightActiveSection();
});

// ===========================
// MENU HAMBURGER (MOBILE)
// ===========================
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ===========================
// NAVIGATION FLUIDE
// ===========================
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80; // 80px pour la hauteur du navbar

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===========================
// METTRE EN SURBRILLANCE LA SECTION ACTIVE
// ===========================
function highlightActiveSection() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute('id');
    const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      if (correspondingLink) {
        correspondingLink.classList.add('active');
      }
    }
  });
}

// ===========================
// BOUTON RETOUR EN HAUT
// ===========================
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===========================
// ANIMATIONS AU SCROLL (OBSERVER)
// ===========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observer les cartes de projets
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'all 0.6s ease-out';
  observer.observe(card);
});

// Observer les cartes de compétences
const competenceCards = document.querySelectorAll('.competence-card');
competenceCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'all 0.6s ease-out';
  observer.observe(card);
});

// Observer les info-cards du CV
const infoCards = document.querySelectorAll('.info-card');
infoCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateX(-50px)';
  card.style.transition = 'all 0.6s ease-out';
  observer.observe(card);
});

// ===========================
// ANIMATION DES BARRES DE COMPÉTENCES
// ===========================
const skillBarsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillProgress = entry.target.querySelector('.skill-progress');
      if (skillProgress) {
        const width = skillProgress.style.width;
        skillProgress.style.width = '0';
        setTimeout(() => {
          skillProgress.style.width = width;
        }, 100);
      }
    }
  });
}, { threshold: 0.5 });

const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
  skillBarsObserver.observe(item);
});

// ===========================
// GESTION DU FORMULAIRE DE CONTACT
// ===========================
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupérer les données du formulaire
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    // Simuler l'envoi (dans un vrai projet, vous enverriez à un serveur)
    console.log('Données du formulaire:', formData);

    // Afficher un message de confirmation
    showNotification('Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');

    // Réinitialiser le formulaire
    contactForm.reset();
  });
}

// ===========================
// SYSTÈME DE NOTIFICATION
// ===========================
function showNotification(message, type = 'info') {
  // Créer l'élément de notification
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;

  // Styles inline pour la notification
  Object.assign(notification.style, {
    position: 'fixed',
    top: '100px',
    right: '20px',
    padding: '1rem 2rem',
    background: type === 'success' ? '#64ffda' : '#ff6b6b',
    color: '#0a192f',
    borderRadius: '8px',
    fontWeight: '600',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    zIndex: '9999',
    animation: 'slideIn 0.3s ease-out',
    maxWidth: '400px'
  });

  // Ajouter l'animation CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Ajouter au DOM
  document.body.appendChild(notification);

  // Retirer après 4 secondes
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 4000);
}

// ===========================
// EFFETS DE PARALLAXE LÉGER
// ===========================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-content, .profile-circle');

  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ===========================
// ANIMATION DU TEXTE (TYPING EFFECT) - OPTIONNEL
// ===========================
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// ===========================
// CURSEUR PERSONNALISÉ (OPTIONNEL)
// ===========================
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
Object.assign(cursor.style, {
  width: '20px',
  height: '20px',
  border: '2px solid #64ffda',
  borderRadius: '50%',
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: '10000',
  transition: 'transform 0.2s ease',
  display: 'none' // Désactivé par défaut, activez si désiré
});
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX - 10 + 'px';
  cursor.style.top = e.clientY - 10 + 'px';
});

// Agrandir le curseur sur les liens
document.querySelectorAll('a, button').forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.5)';
  });
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
  });
});

// ===========================
// COMPTEUR ANIMÉ POUR LES STATISTIQUES (OPTIONNEL)
// ===========================
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60 FPS
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = Math.round(target);
      clearInterval(timer);
    } else {
      element.textContent = Math.round(current);
    }
  }, 16);
}

// ===========================
// INITIALISATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Portfolio chargé avec succès !');

  // Mettre en surbrillance la section active au chargement
  highlightActiveSection();

  // Petite animation de bienvenue
  setTimeout(() => {
    const heroContent = document.querySelector('.hero-text');
    if (heroContent) {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }
  }, 100);
});

// ===========================
// EASTER EGG (OPTIONNEL)
// ===========================
let konami = [];
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konami.push(e.key);
  konami = konami.slice(-10);

  if (konami.join('') === konamiCode.join('')) {
    document.body.style.animation = 'rainbow 2s infinite';
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    setTimeout(() => {
      document.body.style.animation = '';
    }, 5000);
  }
});

// ===========================
// DÉTECTION DU MODE SOMBRE DU SYSTÈME (OPTIONNEL)
// ===========================
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  console.log('Mode sombre détecté');
  // Le site est déjà en mode sombre par défaut
}

// ===========================
// PERFORMANCE: LAZY LOADING DES IMAGES
// ===========================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===========================
// ACCESSIBILITÉ: NAVIGATION AU CLAVIER
// ===========================
document.addEventListener('keydown', (e) => {
  // Échap pour fermer le menu mobile
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Focus visible pour l'accessibilité
document.addEventListener('mousedown', () => {
  document.body.classList.add('using-mouse');
});

document.addEventListener('keydown', () => {
  document.body.classList.remove('using-mouse');
});
