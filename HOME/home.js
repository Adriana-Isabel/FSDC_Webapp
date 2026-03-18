// Language translations
const translations = {
    en: {
        'brand-text': 'Food Security',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-contact': 'Contact',
        'home-title': 'Welcome to Food Security',
        'home-desc': 'Building a sustainable future through food security initiatives',
        'cta-btn': 'Learn More',
        'about-title': 'About Us',
        'about-desc': 'We are dedicated to ensuring food security for all communities through innovative solutions and collaborative efforts.',
        'services-title': 'Services',
        'services-desc': 'Our services include research, education, and implementation of food security programs.',
        'contact-title': 'Contact Us',
        'contact-desc': 'Get in touch with us for more information about our initiatives.',
        'contact-btn': 'Send Message',
        'footer-text': '&copy; 2024 Food Security. All rights reserved.',
        'current-lang': 'EN'
    },
    es: {
        'brand-text': 'Seguridad Alimentaria',
        'nav-home': 'Inicio',
        'nav-about': 'Acerca de',
        'nav-services': 'Servicios',
        'nav-contact': 'Contacto',
        'home-title': 'Bienvenido a Seguridad Alimentaria',
        'home-desc': 'Construyendo un futuro sostenible a través de iniciativas de seguridad alimentaria',
        'cta-btn': 'Más Información',
        'about-title': 'Acerca de Nosotros',
        'about-desc': 'Nos dedicamos a garantizar la seguridad alimentaria de todas las comunidades a través de soluciones innovadoras y esfuerzos colaborativos.',
        'services-title': 'Servicios',
        'services-desc': 'Nuestros servicios incluyen investigación, educación e implementación de programas de seguridad alimentaria.',
        'contact-title': 'Contáctanos',
        'contact-desc': 'Ponte en contacto con nosotros para obtener más información sobre nuestras iniciativas.',
        'contact-btn': 'Enviar Mensaje',
        'footer-text': '&copy; 2024 Seguridad Alimentaria. Todos los derechos reservados.',
        'current-lang': 'ES'
    }
};

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    let currentLanguage = localStorage.getItem('language') || 'en';
    setLanguage(currentLanguage);
});

// Set language and update all text
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    const elements = translations[lang];
    for (const [id, text] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
            if (id === 'footer-text') {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        }
    }
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Update lang button display
    document.getElementById('lang-btn').textContent = translations[lang]['current-lang'];
}

// Switch between languages
function switchLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'es' : 'en';
    setLanguage(newLang);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar-menu').classList.remove('active');
    });
});
