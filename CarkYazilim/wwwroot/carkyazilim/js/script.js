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

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth Scrolling
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
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

// Header Scroll Effect
function headerScrollEffect() {
    const header = document.querySelector('header');
    if (!header) return;
    
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
            header.style.backdropFilter = 'blur(25px)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        }

        lastScroll = currentScroll;
    });
}

// Form Handling - Backend entegrasyonu için hazır
function handleContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        // Form normal submit olacak (ASP.NET Core MVC form submit)
        // Backend'de HomeController.IletisimGonder action'ı bu formu işleyecek
        
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;
        
        // Eğer AJAX ile göndermek isterseniz, aşağıdaki yorum satırlarındaki kodu kullanabilirsiniz:
        /*
        e.preventDefault();
        
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'RequestVerificationToken': document.querySelector('input[name="__RequestVerificationToken"]').value
            }
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                submitBtn.textContent = 'Gönderildi ✓';
                submitBtn.style.background = 'linear-gradient(45deg, #00ff00, #00cc00)';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))';
                    form.reset();
                    
                    if (result.message) {
                        alert(result.message);
                    }
                }, 2000);
            } else {
                throw new Error(result.message || 'Gönderim başarısız');
            }
        })
        .catch(error => {
            submitBtn.textContent = 'Hata!';
            alert('Bir hata oluştu: ' + error.message);
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
        */
        
        // Normal form submit devam edecek (backend'e gönderilecek)
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
        item.addEventListener('mouseenter', function() {
            const image = this.querySelector('.portfolio-image');
            if (image) {
                image.style.transform = 'scale(1.1)';
                image.style.filter = 'brightness(0.7)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const image = this.querySelector('.portfolio-image');
            if (image) {
                image.style.transform = 'scale(1)';
                image.style.filter = 'brightness(1)';
            }
        });
    });
}

// Service Cards Interactive
function serviceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, rgba(0,255,255,0.1), rgba(255,0,128,0.1))';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'var(--card-bg)';
        });
    });
}

// Mobile Menu
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    if (!nav || !navLinks) return;
    
    // Mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.setAttribute('aria-label', 'Menüyü aç/kapat');
    
    nav.appendChild(mobileMenuBtn);
    
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('mobile-active');
        document.body.classList.toggle('menu-open');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
    
    // Close menu when clicking outside or on link
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navLinks.classList.contains('mobile-active')) {
            navLinks.classList.remove('mobile-active');
            document.body.classList.remove('menu-open');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        }
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-active');
            document.body.classList.remove('menu-open');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
}

// Performance optimization
let ticking = false;
function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

function updateAnimations() {
    // Update any frame-based animations here
    ticking = false;
}

// Teklif Modal Functions
function initTeklifModal() {
    const modal = document.getElementById('teklifModal');
    const openBtn = document.getElementById('teklifAlBtn');
    const closeBtn = document.getElementById('modalClose');
    const form = document.getElementById('teklifForm');
    const fileInput = document.getElementById('teklifFiles');
    const fileList = document.getElementById('fileList');

    if (!modal || !openBtn) return;

    // Open modal
    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Character counter
    const messageTextarea = document.getElementById('teklifMessage');
    const charCount = document.getElementById('charCount');
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', () => {
            const count = messageTextarea.value.length;
            charCount.textContent = count;
            const counter = charCount.parentElement;
            counter.classList.remove('warning', 'error');
            if (count > 1800) {
                counter.classList.add('error');
            } else if (count > 1500) {
                counter.classList.add('warning');
            }
        });
    }

    // Phone number formatting
    const phoneInput = document.getElementById('teklifPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0 && !value.startsWith('0')) {
                value = '0' + value;
            }
            if (value.length > 11) {
                value = value.slice(0, 11);
            }
            if (value.length > 0) {
                if (value.length <= 4) {
                    value = value;
                } else if (value.length <= 7) {
                    value = value.slice(0, 4) + ' ' + value.slice(4);
                } else if (value.length <= 9) {
                    value = value.slice(0, 4) + ' ' + value.slice(4, 7) + ' ' + value.slice(7);
                } else {
                    value = value.slice(0, 4) + ' ' + value.slice(4, 7) + ' ' + value.slice(7, 9) + ' ' + value.slice(9);
                }
            }
            e.target.value = value;
        });
    }

    // Form validation
    function validateForm() {
        let isValid = true;
        const nameInput = document.getElementById('teklifName');
        const emailInput = document.getElementById('teklifEmail');
        const phoneInput = document.getElementById('teklifPhone');
        const messageInput = document.getElementById('teklifMessage');
        const kvkkCheckbox = document.getElementById('teklifKVKK');

        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        // Name validation
        if (nameInput && nameInput.value.trim().length < 2) {
            document.getElementById('nameError').textContent = 'Ad soyad en az 2 karakter olmalıdır.';
            isValid = false;
        }

        // Email validation
        if (emailInput) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                document.getElementById('emailError').textContent = 'Geçerli bir e-posta adresi giriniz.';
                isValid = false;
            }
        }

        // Phone validation (if provided)
        if (phoneInput && phoneInput.value.trim()) {
            const phoneRegex = /^0[5][0-9]{2}\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}$/;
            if (!phoneRegex.test(phoneInput.value.trim())) {
                document.getElementById('phoneError').textContent = 'Geçerli bir telefon numarası giriniz. (05XX XXX XX XX)';
                isValid = false;
            }
        }

        // Message validation
        if (messageInput && messageInput.value.trim().length < 10) {
            document.getElementById('messageError').textContent = 'Mesaj en az 10 karakter olmalıdır.';
            isValid = false;
        }

        // KVKK validation
        if (kvkkCheckbox && !kvkkCheckbox.checked) {
            document.getElementById('kvkkError').textContent = 'KVKK onayı zorunludur.';
            isValid = false;
        }

        // File size validation
        if (fileInput && fileInput.files.length > 0) {
            const maxSize = 10 * 1024 * 1024; // 10MB
            Array.from(fileInput.files).forEach(file => {
                if (file.size > maxSize) {
                    alert(`${file.name} dosyası çok büyük. Maksimum dosya boyutu 10MB'dır.`);
                    isValid = false;
                }
            });
        }

        return isValid;
    }

    // Auto-save form data to localStorage
    function autoSaveForm() {
        if (!form) return;
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            if (key !== 'files') {
                data[key] = value;
            }
        }
        localStorage.setItem('teklifFormDraft', JSON.stringify(data));
    }

    // Load saved form data
    function loadSavedForm() {
        const saved = localStorage.getItem('teklifFormDraft');
        if (saved && form) {
            try {
                const data = JSON.parse(saved);
                Object.keys(data).forEach(key => {
                    const input = form.querySelector(`[name="${key}"]`);
                    if (input) {
                        if (input.type === 'checkbox' || input.type === 'radio') {
                            input.checked = input.value === data[key];
                        } else {
                            input.value = data[key];
                        }
                    }
                });
                // Trigger character counter update
                if (messageTextarea) {
                    messageTextarea.dispatchEvent(new Event('input'));
                }
            } catch (e) {
                console.error('Form verisi yüklenirken hata:', e);
            }
        }
    }

    // Auto-save on input
    if (form) {
        form.addEventListener('input', autoSaveForm);
        form.addEventListener('change', autoSaveForm);
        
        // Load saved data when modal opens
        openBtn.addEventListener('click', () => {
            setTimeout(loadSavedForm, 100);
        });
    }

    // File upload handling
    if (fileInput && fileList) {
        const maxFileSize = 10 * 1024 * 1024; // 10MB
        
        fileInput.addEventListener('change', (e) => {
            fileList.innerHTML = '';
            const files = Array.from(e.target.files);
            const validFiles = [];
            
            files.forEach((file, index) => {
                if (file.size > maxFileSize) {
                    alert(`${file.name} dosyası çok büyük (${(file.size / 1024 / 1024).toFixed(2)} MB). Maksimum dosya boyutu 10MB'dır.`);
                    return;
                }
                
                validFiles.push(file);
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                const fileSize = file.size > 1024 * 1024 
                    ? `${(file.size / 1024 / 1024).toFixed(2)} MB` 
                    : `${(file.size / 1024).toFixed(2)} KB`;
                fileItem.innerHTML = `
                    <div>
                        <i class="fas fa-file"></i>
                        <span>${file.name}</span>
                        <small>(${fileSize})</small>
                    </div>
                    <button type="button" class="file-remove" data-index="${index}">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                fileList.appendChild(fileItem);
            });
            
            // Update file input with valid files only
            if (validFiles.length !== files.length) {
                const dt = new DataTransfer();
                validFiles.forEach(file => dt.items.add(file));
                fileInput.files = dt.files;
            }

            // Remove file
            fileList.addEventListener('click', (e) => {
                if (e.target.closest('.file-remove')) {
                    const index = parseInt(e.target.closest('.file-remove').dataset.index);
                    const dt = new DataTransfer();
                    const filesArray = Array.from(fileInput.files);
                    filesArray.splice(index, 1);
                    filesArray.forEach(file => dt.items.add(file));
                    fileInput.files = dt.files;
                    fileList.innerHTML = '';
                    if (fileInput.files.length > 0) {
                        fileInput.dispatchEvent(new Event('change'));
                    }
                }
            });
        });

        // Drag and drop
        const fileUploadLabel = document.querySelector('.file-upload-label');
        if (fileUploadLabel) {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                fileUploadLabel.addEventListener(eventName, preventDefaults, false);
            });

            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }

            ['dragenter', 'dragover'].forEach(eventName => {
                fileUploadLabel.addEventListener(eventName, () => {
                    fileUploadLabel.style.borderColor = 'var(--primary-color)';
                    fileUploadLabel.style.background = 'rgba(0, 255, 255, 0.2)';
                });
            });

            ['dragleave', 'drop'].forEach(eventName => {
                fileUploadLabel.addEventListener(eventName, () => {
                    fileUploadLabel.style.borderColor = 'rgba(0, 255, 255, 0.3)';
                    fileUploadLabel.style.background = 'rgba(10, 10, 20, 0.5)';
                });
            });

            fileUploadLabel.addEventListener('drop', (e) => {
                const dt = e.dataTransfer;
                const files = dt.files;
                fileInput.files = files;
                fileInput.dispatchEvent(new Event('change'));
            });
        }
    }

    // Save teklif to localStorage (for admin panel)
    function saveTeklifToStorage(formData) {
        try {
            const teklifler = JSON.parse(localStorage.getItem('teklifSubmissions') || '[]');
            const newTeklif = {
                id: Date.now().toString(),
                name: formData.get('name') || formData.get('Name') || '',
                email: formData.get('email') || formData.get('Email') || '',
                phone: formData.get('phone') || formData.get('Phone') || '',
                message: formData.get('message') || formData.get('Message') || '',
                date: new Date().toISOString()
            };
            teklifler.unshift(newTeklif);
            localStorage.setItem('teklifSubmissions', JSON.stringify(teklifler));
        } catch (error) {
            console.error('Teklif kaydedilirken hata:', error);
        }
    }

    // Form submission - Backend entegrasyonu için hazır
    if (form) {
        form.addEventListener('submit', async (e) => {
            // Validate form
            if (!validateForm()) {
                e.preventDefault();
                // Scroll to first error
                const firstError = document.querySelector('.error-message:not(:empty)');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return false;
            }
            
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gönderiliyor...';

            // Save to localStorage for admin panel
            const formData = new FormData(form);
            saveTeklifToStorage(formData);

            // Form normal submit olacak (ASP.NET Core MVC form submit)
            // Backend'de HomeController.TeklifGonder action'ı bu formu işleyecek
            // Eğer AJAX ile göndermek isterseniz, aşağıdaki yorum satırlarındaki kodu kullanabilirsiniz
            
            // AJAX ile gönderme (opsiyonel - normal form submit yerine):
            /*
            e.preventDefault();
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'RequestVerificationToken': document.querySelector('input[name="__RequestVerificationToken"]').value
                    }
                });
                
                if (response.ok) {
                    const result = await response.json();
                    if (result.success) {
                        submitBtn.innerHTML = '<i class="fas fa-check"></i> Gönderildi!';
                        submitBtn.style.background = 'linear-gradient(45deg, #00ff00, #00cc00)';
                        
                        setTimeout(() => {
                            form.reset();
                            fileList.innerHTML = '';
                            localStorage.removeItem('teklifFormDraft');
                            if (charCount) charCount.textContent = '0';
                            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
                            submitBtn.innerHTML = originalText;
                            submitBtn.disabled = false;
                            submitBtn.style.background = 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))';
                            closeModal();
                            
                            // Başarı mesajı
                            if (result.message) {
                                alert(result.message);
                            } else {
                                alert('Teklif formunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
                            }
                        }, 2000);
                    } else {
                        throw new Error(result.message || 'Gönderim başarısız');
                    }
                } else {
                    throw new Error('Sunucu hatası');
                }
            } catch (error) {
                submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Hata!';
                alert('Bir hata oluştu: ' + error.message);
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }
            */
            
            // Normal form submit devam edecek (backend'e gönderilecek)
            // Backend'de HomeController.TeklifGonder action'ı formu işleyecek
        });
    }
}

// Load content from localStorage and update page
function loadContentToPage() {
    // Get content from localStorage (from content-manager.js)
    const stored = localStorage.getItem('siteContent');
    if (!stored) return;
    
    try {
        const content = JSON.parse(stored);
        
        // Update Header
        const logo = document.querySelector('.logo');
        if (logo && content.header?.title) {
            logo.textContent = content.header.title;
        }
        
        // Update Teklif Form Button
        const teklifBtn = document.getElementById('teklifAlBtn');
        if (teklifBtn && content.teklifForm?.buttonText) {
            teklifBtn.textContent = content.teklifForm.buttonText;
        }
        
        // Update Teklif Modal
        if (content.teklifForm) {
            const modalTitle = document.querySelector('#teklifModal .modal-header h2');
            if (modalTitle && content.teklifForm.modalTitle) {
                modalTitle.textContent = content.teklifForm.modalTitle;
            }
            
            const submitBtn = document.querySelector('#teklifForm .submit-btn');
            if (submitBtn && content.teklifForm.submitButtonText) {
                submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> ${content.teklifForm.submitButtonText}`;
            }
            
            const messageTextarea = document.getElementById('teklifMessage');
            if (messageTextarea) {
                if (content.teklifForm.messagePlaceholder) {
                    messageTextarea.placeholder = content.teklifForm.messagePlaceholder;
                }
                if (content.teklifForm.messageMaxLength) {
                    messageTextarea.maxLength = content.teklifForm.messageMaxLength;
                    const charCounter = document.querySelector('.char-counter span');
                    if (charCounter && charCounter.parentElement) {
                        charCounter.parentElement.innerHTML = `<span id="charCount">0</span> / ${content.teklifForm.messageMaxLength} karakter`;
                    }
                }
            }
            
            // Hide/show form if inactive
            if (content.teklifForm.isActive === false) {
                if (teklifBtn) teklifBtn.style.display = 'none';
            } else {
                if (teklifBtn) teklifBtn.style.display = '';
            }
        }
        
        // Update Hero
        const heroTitle = document.querySelector('.hero-content h1');
        if (heroTitle && content.hero?.title) {
            heroTitle.textContent = content.hero.title;
        }
        
        const heroSubtitle = document.querySelector('.hero-content .subtitle');
        if (heroSubtitle && content.hero?.subtitle) {
            heroSubtitle.textContent = content.hero.subtitle;
        }
        
        const heroButton1 = document.querySelector('.hero-buttons .btn-primary');
        if (heroButton1 && content.hero?.button1) {
            heroButton1.textContent = content.hero.button1;
        }
        
        const heroButton2 = document.querySelector('.hero-buttons .btn-secondary');
        if (heroButton2 && content.hero?.button2) {
            heroButton2.textContent = content.hero.button2;
        }
        
        // Update Services
        if (content.services && content.services.length > 0) {
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach((card, index) => {
                if (content.services[index]) {
                    const service = content.services[index];
                    const icon = card.querySelector('.service-icon i');
                    const title = card.querySelector('h3');
                    const desc = card.querySelector('p');
                    
                    if (icon) icon.className = `fas ${service.icon}`;
                    if (title) title.textContent = service.title;
                    if (desc) desc.textContent = service.description;
                }
            });
        }
        
        // Update Contact
        const contactTitle = document.querySelector('#iletisim .section-title h2');
        if (contactTitle && content.contact?.title) {
            contactTitle.textContent = content.contact.title;
        }
        
        const contactDesc = document.querySelector('#iletisim .section-title p');
        if (contactDesc && content.contact?.description) {
            contactDesc.textContent = content.contact.description;
        }
        
        const contactAddress = document.querySelector('.contact-item address');
        if (contactAddress && content.contact?.address) {
            contactAddress.textContent = content.contact.address;
        }
        
        const contactPhone = document.querySelector('.contact-item a[href^="tel:"]');
        if (contactPhone && content.contact?.phone) {
            contactPhone.textContent = content.contact.phone;
            contactPhone.href = `tel:${content.contact.phone.replace(/\s/g, '')}`;
        }
        
        const contactEmail = document.querySelector('.contact-item a[href^="mailto:"]');
        if (contactEmail && content.contact?.email) {
            contactEmail.textContent = content.contact.email;
            contactEmail.href = `mailto:${content.contact.email}`;
        }
        
        const contactHours = document.querySelector('.contact-item p');
        if (contactHours && content.contact?.hours) {
            const hoursElement = Array.from(document.querySelectorAll('.contact-item p')).find(p => 
                p.textContent.includes('Pazartesi') || p.textContent.includes('Çalışma')
            );
            if (hoursElement) hoursElement.textContent = content.contact.hours;
        }
        
        // Update Footer
        const footerTitle = document.querySelector('.footer-section h3');
        if (footerTitle && content.footer?.title) {
            footerTitle.textContent = content.footer.title;
        }
        
        const footerDesc = document.querySelector('.footer-section p');
        if (footerDesc && content.footer?.description) {
            footerDesc.textContent = content.footer.description;
        }
        
        const footerCopyright = document.querySelector('.footer-bottom p');
        if (footerCopyright && content.footer?.copyright) {
            footerCopyright.innerHTML = content.footer.copyright + ' | <a href="#">Gizlilik Politikası</a> | <a href="#">Kullanım Şartları</a>';
        }
        
        // Update Team
        const teamTitle = document.querySelector('#ekip .section-title h2');
        if (teamTitle && content.team?.title) {
            teamTitle.textContent = content.team.title;
        }
        
        const teamDesc = document.querySelector('#ekip .section-title p');
        if (teamDesc && content.team?.description) {
            teamDesc.textContent = content.team.description;
        }
        
        if (content.team?.members && content.team.members.length > 0) {
            const teamMembers = document.querySelectorAll('.team-member');
            teamMembers.forEach((memberCard, index) => {
                if (content.team.members[index]) {
                    const member = content.team.members[index];
                    const avatar = memberCard.querySelector('.team-avatar');
                    const name = memberCard.querySelector('h3');
                    const role = memberCard.querySelector('.team-role');
                    const desc = memberCard.querySelector('p:not(.team-role)');
                    
                    if (avatar) avatar.textContent = member.initials;
                    if (name) name.textContent = member.name;
                    if (role) role.textContent = member.role;
                    if (desc) desc.textContent = member.description;
                }
            });
        }
        
    } catch (e) {
        console.error('Error loading content:', e);
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
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
    loadContentToPage(); // Load content from localStorage
    
    // Create particles periodically
    setInterval(createParticles, 10000);
});


