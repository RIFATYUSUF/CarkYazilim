// Particle System
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
            particlesContainer.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 10000);
        }, i * 200);
    }
}

// Scroll Animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-animation');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
}

// Smooth Scrolling
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Header Scroll Effect
function headerScrollEffect() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            header.style.background = 'rgba(10,10,10,0.98)';
            header.style.backdropFilter = 'blur(25px)';
        } else {
            header.style.background = 'rgba(10,10,10,0.95)';
            header.style.backdropFilter = 'blur(20px)';
        }
    });
}

// Contact Form (ONLY UI effects)
function handleContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function () {
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;
    });
}

// Mouse Parallax Effect
function mouseParallax() {
    const floatingElements = document.querySelectorAll('.floating-element');
    if (floatingElements.length === 0) return;

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 50;
            const y = (mouseY - 0.5) * speed * 50;
            element.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
        });
    });
}

// Portfolio Hover Effect
function portfolioEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const image = this.querySelector('.portfolio-image');
            if (image) {
                image.style.transform = 'scale(1.1)';
                image.style.filter = 'brightness(0.7)';
            }
        });

        item.addEventListener('mouseleave', function () {
            const image = this.querySelector('.portfolio-image');
            if (image) {
                image.style.transform = 'scale(1)';
                image.style.filter = 'brightness(1)';
            }
        });
    });
}

// Service Cards Hover Animation
function serviceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.background = 'linear-gradient(135deg, rgba(0,255,255,0.1), rgba(255,0,128,0.1))';
        });
        card.addEventListener('mouseleave', function () {
            this.style.background = 'var(--card-bg)';
        });
    });
}

// Mobile Menu
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    if (!nav || !navLinks) return;

    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    nav.appendChild(mobileMenuBtn);

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('mobile-active');
        document.body.classList.toggle('menu-open');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            navLinks.classList.remove('mobile-active');
            document.body.classList.remove('menu-open');
        }
    });
}

// Teklif Modal (ONLY UI, no data)
function initTeklifModal() {
    const modal = document.getElementById('teklifModal');
    const openBtn = document.getElementById('teklifAlBtn');
    const closeBtn = document.getElementById('modalClose');
    if (!modal || !openBtn) return;

    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
}

// Initialize functions
document.addEventListener('DOMContentLoaded', function () {
    createParticles();
    animateOnScroll();
    smoothScroll();
    headerScrollEffect();
    handleContactForm();
    mouseParallax();
    portfolioEffects();
    serviceCardEffects();
    createMobileMenu();
    initTeklifModal();
    setInterval(createParticles, 10000);
});
