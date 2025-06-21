// AssureX Landing Page JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize all app functions
function initializeApp() {
    initSmoothScrolling();
    initMobileMenu();
    initFAQ();
    initContactForm();
    initAnimations();
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Initialize mobile menu functionality
function initMobileMenu() {
    // Close mobile menu when clicking on links
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileMenu').classList.add('hidden');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('mobileMenu');
        const menuButton = document.querySelector('[onclick="toggleMobileMenu()"]');
        
        if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });
}

// Initialize FAQ functionality (new card-based design)
function initFAQ() {
    // Add hover effects to FAQ cards
    document.querySelectorAll('.bg-white.rounded-xl.shadow-lg').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Contact Form Handling avec mailto
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const insuranceType = document.getElementById('insuranceType').value;
    const message = document.getElementById('message').value;
    const consent = document.getElementById('consent').checked;
    
    // Vérifier que tous les champs sont remplis
    if (!fullName || !phone || !email || !insuranceType || !message || !consent) {
        showNotification('Veuillez remplir tous les champs obligatoires et accepter les conditions.', 'error');
        return;
    }
    
    // Construire l'email
    const subject = encodeURIComponent(`Demande de devis - ${insuranceType}`);
    const body = encodeURIComponent(`Bonjour,

Je souhaite obtenir un devis pour une ${insuranceType}.

Mes informations de contact :
- Nom : ${fullName}
- Téléphone : ${phone}
- Email : ${email}

Message :
${message}

Cordialement,
${fullName}`);
    
    // Créer le lien mailto
    const mailtoLink = `mailto:asurextgpartners@outlook.fr?subject=${subject}&body=${body}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Afficher un message de confirmation
    showNotification('Votre client email va s\'ouvrir avec votre demande pré-remplie. Envoyez l\'email pour finaliser votre demande.', 'success');
    
    // Optionnel : réinitialiser le formulaire après un délai
    setTimeout(() => {
        e.target.reset();
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Initialize animations on scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;
            const animation = element.getAttribute('data-animation') || 'fade-up';
            const delay = element.getAttribute('data-delay') || '0';
            
            if (entry.isIntersecting) {
                // Add animation when entering viewport
                setTimeout(() => {
                    element.classList.add(`animate-${animation}`);
                    element.classList.add('animation-visible');
                }, parseInt(delay));
            } else {
                // Remove animation when leaving viewport (to allow repeat)
                element.classList.remove(`animate-${animation}`);
                element.classList.remove('animation-visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
}

// CTA Button handlers
function requestQuote() {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}

function callNow() {
            window.location.href = 'tel:+22892125602';
}

// Add event listeners to CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('Devis') || button.textContent.includes('Demander')) {
            button.addEventListener('click', requestQuote);
        }
        if (button.textContent.includes('Appeler')) {
            button.addEventListener('click', callNow);
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('bg-white/95', 'backdrop-blur-sm');
    } else {
        header.classList.remove('bg-white/95', 'backdrop-blur-sm');
    }
});

// Preloader (optional)
function showPreloader() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.className = 'fixed inset-0 bg-white z-50 flex items-center justify-center';
    preloader.innerHTML = `
        <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span class="text-white font-bold text-2xl">A</span>
            </div>
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        </div>
    `;
    
    document.body.appendChild(preloader);
    
    // Hide preloader when page is loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(preloader);
            }, 300);
        }, 500);
    });
}

// Initialize preloader
// showPreloader();

// Performance optimization: Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
initLazyLoading();

// Analytics tracking (replace with your analytics code)
function trackEvent(eventName, eventData = {}) {
    // Google Analytics 4 example
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Console log for development
    console.log('Event tracked:', eventName, eventData);
}

// Track important interactions
document.addEventListener('click', function(e) {
    const target = e.target;
    
    // Track CTA button clicks
    if (target.tagName === 'BUTTON' || target.closest('button')) {
        const buttonText = target.textContent || target.closest('button').textContent;
        trackEvent('cta_click', { button_text: buttonText.trim() });
    }
    
    // Track WhatsApp button clicks
    if (target.closest('.whatsapp-btn')) {
        trackEvent('whatsapp_click');
    }
    
    // Track phone number clicks
    if (target.closest('a[href^="tel:"]')) {
        trackEvent('phone_click');
    }
});

// Track form submissions
document.addEventListener('submit', function(e) {
    if (e.target.closest('#contact')) {
        trackEvent('contact_form_submit');
    }
});

// Export functions for global use
window.toggleMobileMenu = toggleMobileMenu;
window.toggleFAQ = toggleFAQ;
window.requestQuote = requestQuote;
window.callNow = callNow; 