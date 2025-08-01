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
    initBlogModals();
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
    const mailtoLink = `mailto:asurextg@gmail.com?subject=${subject}&body=${body}`;
    
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
    
    // Track social media clicks
    if (target.closest('.social-icon')) {
        const socialPlatform = target.closest('.social-icon').classList.contains('instagram') ? 'instagram' :
                              target.closest('.social-icon').classList.contains('linkedin') ? 'linkedin' : 'unknown';
        trackEvent('social_media_click', { platform: socialPlatform });
    }
});

// Track form submissions
document.addEventListener('submit', function(e) {
    if (e.target.closest('#contact')) {
        trackEvent('contact_form_submit');
    }
});

// Blog Modal Functions
function initBlogModals() {
    // Close modal when clicking outside
    document.getElementById('blogModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeBlogModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeBlogModal();
        }
    });
}

function openBlogModal(blogId) {
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalContent = document.getElementById('modalContent');
    
    // Blog content data
    const blogData = {
        blog1: {
            title: "Asurex, au cœur de votre quotidien",
            image: "blog1.jpg",
            content: `
                <p class="text-lg font-semibold text-primary mb-4">Votre sécurité, notre priorité.</p>
                
                <p class="mb-6">Dans un monde en perpétuelle évolution, où les incertitudes font désormais partie du quotidien, choisir la bonne assurance devient un acte de responsabilité. C'est ici qu'intervient <em>Asurex</em>, bien plus qu'une simple compagnie d'assurance : un partenaire engagé, proche de vous, à chaque étape de la vie.</p>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Une mission claire : protéger ce qui compte pour vous</h3>
                
                <p class="mb-6">Depuis sa création, <em>Asurex</em> s'est donné pour mission de couvrir l'essentiel avec une approche humaine et personnalisée. Parce que chaque client est unique, chaque contrat doit l'être aussi. Notre engagement ne se limite pas à fournir des solutions d'assurance : nous nous investissons pleinement pour comprendre vos besoins réels et anticiper les risques avant qu'ils ne surviennent.</p>

                <p class="mb-8">Qu'il s'agisse de votre maison, de votre véhicule, de votre vie ou de votre entreprise, nous construisons avec vous des solutions sur mesure, claires, accessibles et durables.</p>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Une gamme complète pour un quotidien serein</h3>
                
                <p class="mb-4">Nos offres couvrent une large variété de domaines afin de répondre aux attentes de tous :</p>
                
                <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
                    <li><strong>Assurance automobile</strong> : Pour vous permettre de prendre la route en toute confiance, quelles que soient les circonstances.</li>
                    <li><strong>Assurance habitation</strong> : Parce que votre foyer est plus qu'un simple toit, nous veillons à sa protection contre les sinistres les plus fréquents (incendie, vol, dégâts des eaux, etc.).</li>
                    <li><strong>Responsabilité civile</strong> : Une couverture essentielle face aux imprévus qui peuvent engager votre responsabilité, même dans les gestes les plus anodins du quotidien.</li>
                    <li><strong>Responsabilité professionnelle</strong> : Pour les travailleurs indépendants, les entrepreneurs et toutes les professions exposées aux risques juridiques, nos garanties renforcent votre activité et votre crédibilité.</li>
                    <li><strong>Assurance tous risques</strong> : Une protection complète et adaptée aux biens les plus sensibles.</li>
                    <li><strong>Assurance décès et assurance vie</strong> : Pour que l'avenir de vos proches soit à l'abri de toute incertitude, avec une épargne sécurisée et un accompagnement humain.</li>
                </ul>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Une proximité authentique</h3>
                
                <p class="mb-6">Ce qui distingue Asurex, c'est notre capacité à rester proche de nos clients. Nous croyons que la relation de confiance se construit dans la transparence, la réactivité et la bienveillance. Nos conseillers sont formés pour écouter avant de proposer, comprendre avant d'agir.</p>

                <p class="mb-8">Nos bureaux ne sont pas de simples guichets administratifs, ce sont des espaces d'échange où chaque client est accueilli avec attention et respect. Nous utilisons aussi les outils numériques pour faciliter la gestion de vos contrats, sans jamais perdre la chaleur du contact humain.</p>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Témoignages de ceux qui nous font confiance</h3>
                
                <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-4">
                    « J'ai découvert Asurex après un sinistre automobile. Leur accompagnement m'a vraiment soulagé dans une période difficile. Depuis, je les recommande à tout mon entourage. » – Clarisse, cliente depuis 3 ans.
                </blockquote>

                <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-8">
                    « Grâce à l'assurance vie d'Asurex, j'ai pu constituer une épargne pour mes enfants, tout en bénéficiant d'un conseil fiscal avisé. » – Koffi, entrepreneur.
                </blockquote>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Innover avec conscience</h3>
                
                <p class="mb-6">Chez Asurex, innovation rime avec utilité. Nous développons des solutions intelligentes pour rendre l'assurance plus simple, plus rapide et plus intuitive : applications mobiles, espace client en ligne, devis instantanés… Mais toujours avec une exigence éthique et un respect rigoureux des données personnelles.</p>

                <p class="mb-8">Notre avenir se construit avec vous, dans la co-création, le dialogue et la volonté constante de vous servir mieux.</p>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Conclusion</h3>
                
                <p class="mb-4">Asurex, c'est plus qu'un assureur. C'est un compagnon de route, discret mais indispensable, qui veille chaque jour sur ce que vous avez de plus précieux. En nous confiant vos assurances, vous choisissez la tranquillité d'esprit, la stabilité et l'excellence au service de votre quotidien.</p>

                <p class="text-lg font-semibold text-primary">Avec Asurex, vivez chaque jour l'esprit léger.</p>
            `
        },
        blog2: {
            title: "L'assurance vie chez Asurex : préparer l'avenir",
            image: "blog2.jpg",
            content: `
                <p class="text-lg font-semibold text-primary mb-4">Offrir la sécurité à ceux qu'on aime, c'est l'acte d'amour le plus durable.</p>
                
                <p class="mb-6">La vie est faite d'imprévus, mais aussi de projets et d'héritages. Comment garantir que nos proches seront protégés demain, même si nous ne sommes plus là ? Chez <em>Asurex</em>, nous croyons que l'assurance vie ne doit pas être une formule complexe, mais une solution claire, humaine, et alignée sur vos valeurs.</p>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Une vision humaine de l'assurance vie</h3>
                
                <p class="mb-4">Contrairement aux idées reçues, l'assurance vie ne se limite pas à la transmission d'un capital. C'est <em>un outil de prévoyance, d'épargne et d'amour.</em></p>

                <p class="mb-4">Avec l'assurance vie <em>Asurex</em>, vous pouvez :</p>
                
                <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
                    <li>Mettre à l'abri financièrement vos enfants ou votre conjoint</li>
                    <li>Préparer votre retraite</li>
                    <li>Construire une épargne disponible et flexible</li>
                    <li>Bénéficier d'avantages fiscaux intéressants</li>
                </ul>

                <p class="mb-8">Le tout en gardant <em>la liberté de choisir vos bénéficiaires</em>, et la maîtrise totale de vos versements.</p>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Une solution adaptée à chaque parcours</h3>
                
                <p class="mb-4">Que vous soyez jeune actif, chef de famille ou proche de la retraite, <em>Asurex</em> propose plusieurs types de contrats :</p>
                
                <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
                    <li><strong>Assurance vie à capital garanti</strong> : pour sécuriser votre épargne tout en conservant des rendements stables</li>
                    <li><strong>Assurance vie en unités de compte</strong> : pour ceux qui souhaitent dynamiser leur épargne en fonction de leur profil de risque</li>
                    <li><strong>Contrats mixte épargne + prévoyance</strong> : pour combiner performance financière et protection immédiate</li>
                </ul>

                <p class="mb-8">Nos conseillers vous orientent selon vos objectifs de vie, vos ressources, et la nature de vos engagements familiaux.</p>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Transparence, éthique et accompagnement</h3>
                
                <p class="mb-4">Chez <em>Asurex</em>, nous savons que parler de la mort ou de l'avenir est une démarche intime. C'est pourquoi nos équipes adoptent une posture de <strong>conseiller bienveillant, jamais intrusif</strong>.</p>
                
                <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
                    <li>Pas de jargon obscur</li>
                    <li>Pas de surprise dans les frais</li>
                    <li>Une pédagogie claire pour chaque décision</li>
                    <li>Un accompagnement de longue durée</li>
                </ul>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Ils ont choisi la paix intérieure</h3>
                
                <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-4">
                    « Ma mère est partie en laissant tout organisé. Grâce à son assurance vie Asurex, nous avons pu traverser cette épreuve plus sereinement. » – Élodie, 32 ans.
                </blockquote>

                <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-8">
                    « C'est rassurant de savoir que si quelque chose m'arrive, mes enfants auront de quoi poursuivre leurs études sans souci. » – Demba, père de deux enfants.
                </blockquote>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Conclusion</h3>
                
                <p class="mb-4">Préparer l'avenir, c'est un acte d'anticipation… et d'amour. Avec <em>Asurex</em>, votre assurance vie devient un pilier de stabilité pour ceux qui vous sont chers, aujourd'hui et demain.</p>

                <p class="text-lg font-semibold text-primary">Construisez la sécurité de demain avec le cœur tranquille.</p>
            `
        },
        blog3: {
            title: "Professionnels, sécurisez votre avenir avec Asurex",
            image: "blog3.jpg",
            content: `
                <p class="text-lg font-semibold text-primary mb-4">La sérénité professionnelle commence par une protection intelligente.</p>
                
                <p class="mb-6">Le monde professionnel regorge d'opportunités… mais aussi de risques. Une simple erreur, un malentendu, un accident, et c'est la stabilité d'une entreprise ou d'une carrière entière qui peut vaciller. <em>Asurex</em> l'a bien compris : en tant qu'entrepreneur, indépendant ou responsable d'équipe, vous méritez un partenaire qui protège votre avenir avec rigueur, clarté et proximité.</p>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Comprendre les véritables enjeux des professionnels</h3>
                
                <p class="mb-4">Chaque métier comporte ses défis. Un consultant en stratégie peut être poursuivi pour un conseil mal interprété. Un architecte peut être tenu responsable de défauts de conception. Un entrepreneur peut voir sa responsabilité engagée en cas d'accident sur un chantier.</p>

                <p class="mb-4">C'est là qu'interviennent les assurances professionnelles de <em>Asurex</em>, conçues sur mesure pour :</p>
                
                <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
                    <li><em>Préserver votre réputation</em></li>
                    <li><em>Protéger vos biens et vos finances</em></li>
                    <li><em>Renforcer la confiance de vos clients et partenaires</em></li>
                </ul>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Nos garanties pour les pros</h3>
                
                <ul class="list-disc list-inside space-y-3 mb-6 text-gray-700">
                    <li><strong>Responsabilité Civile Professionnelle</strong> : une couverture essentielle contre les dommages causés à des tiers dans le cadre de vos activités professionnelles (erreurs, omissions, négligences).</li>
                    <li><strong>Protection juridique</strong> : accompagnement et défense en cas de litiges professionnels.</li>
                    <li><strong>Assurance des locaux, matériels et équipements</strong> : parce que vos outils de travail sont votre levier de performance.</li>
                    <li><strong>Responsabilité dirigeant</strong> : une protection personnelle pour les décideurs, face aux décisions sensibles.</li>
                </ul>

                <p class="mb-8">Chaque contrat est élaboré à vos côtés, selon la nature de vos activités, votre budget et votre exposition aux risques. Nous ne croyons pas aux formules figées, mais à la personnalisation consciente et réfléchie.</p>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Accompagnement humain et vision long terme</h3>
                
                <p class="mb-4">Ce qui distingue <em>Asurex</em>, c'est notre approche humaine. Nous ne nous contentons pas de vendre une police d'assurance : nous devenons <strong>le conseiller discret qui veille sur votre activité</strong>.</p>

                <p class="mb-4">Vous bénéficiez :</p>
                
                <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
                    <li>D'un diagnostic de risque personnalisé</li>
                    <li>D'un conseiller dédié</li>
                    <li>D'une transparence totale sur les garanties, exclusions et prix</li>
                    <li>D'un service réactif en cas de sinistre</li>
                </ul>

                <p class="mb-8">Et parce que l'entrepreneuriat est aussi une aventure humaine, nous vous accompagnons dans vos projets, vos transitions, et même votre expansion.</p>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Le mot de nos assurés</h3>
                
                <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-4">
                    « En tant que photographe indépendant, j'avais toujours cette crainte du matériel volé ou des plaintes injustifiées. Depuis Asurex, je me sens plus libre, plus confiant. » – Mathilde, freelance créative.
                </blockquote>

                <blockquote class="border-l-4 border-primary pl-6 italic text-gray-700 mb-8">
                    « Notre cabinet d'architecture a trouvé en Asurex un véritable allié stratégique. Ils comprennent nos enjeux comme si c'était les leurs. » – Jean-Luc, architecte.
                </blockquote>

                <h3 class="text-2xl font-bold text-gray-800 mb-4">Conclusion</h3>
                
                <p class="mb-4">Vous n'avez pas à tout porter seul. En confiant la protection de vos activités à <em>Asurex</em>, vous faites le choix d'un partenaire fiable, ancré dans la réalité du terrain, mais aussi tourné vers votre avenir.</p>

                <p class="text-lg font-semibold text-primary">Soyez audacieux, nous assurons vos arrières.</p>
            `
        }
    };
    
    const blog = blogData[blogId];
    if (blog) {
        modalTitle.textContent = blog.title;
        modalImage.src = blog.image;
        modalImage.alt = blog.title;
        modalContent.innerHTML = blog.content;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Track blog view
        trackEvent('blog_view', { blog_id: blogId, blog_title: blog.title });
    }
}

function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Export functions for global use
window.toggleMobileMenu = toggleMobileMenu;
window.toggleFAQ = toggleFAQ;
window.requestQuote = requestQuote;
window.callNow = callNow;
window.openBlogModal = openBlogModal;
window.closeBlogModal = closeBlogModal; 