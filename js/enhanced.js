/**
 * Audiocoustics - Enhanced Features JavaScript
 * Version 2.0 - With Advanced Interactions
 */

// ========================================
// Enhanced Statistics Counter
// ========================================
class StatisticsCounter {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number');
        this.hasAnimated = false;
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                { threshold: 0.5 }
            );

            this.counters.forEach(counter => observer.observe(counter));
        }
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !this.hasAnimated) {
                this.hasAnimated = true;
                this.animateValue(entry.target);
            }
        });
    }

    animateValue(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const hasStar = text.includes('★');
        const number = parseInt(text.replace(/\D/g, ''));

        if (isNaN(number)) return;

        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }

            let displayValue = Math.floor(current).toString();
            if (hasPlus) displayValue += '+';
            if (hasStar) displayValue += '★';

            element.textContent = displayValue;
        }, duration / steps);
    }
}

// ========================================
// FAQ Accordion
// ========================================
class FAQAccordion {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }

    init() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question?.addEventListener('click', () => this.toggle(item));
        });
    }

    toggle(item) {
        const isActive = item.classList.contains('active');

        // Close all items
        this.faqItems.forEach(i => i.classList.remove('active'));

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    }
}

// ========================================
// Before/After Slider
// ========================================
class BeforeAfterSlider {
    constructor() {
        this.sliders = document.querySelectorAll('.before-after-slider');
        this.init();
    }

    init() {
        this.sliders.forEach(slider => {
            const handle = slider.querySelector('.slider-handle');
            const afterImage = slider.querySelector('.after-image');
            const container = slider.querySelector('.before-after-container');

            if (!handle || !afterImage || !container) return;

            let isDragging = false;

            const updatePosition = (e) => {
                if (!isDragging && e.type === 'mousemove') return;

                const rect = container.getBoundingClientRect();
                const x = (e.type.includes('mouse') ? e.clientX : e.touches[0].clientX) - rect.left;
                const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

                handle.style.left = `${percentage}%`;
                afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            };

            // Mouse events
            handle.addEventListener('mousedown', () => isDragging = true);
            document.addEventListener('mouseup', () => isDragging = false);
            container.addEventListener('mousemove', updatePosition);

            // Touch events
            handle.addEventListener('touchstart', () => isDragging = true);
            document.addEventListener('touchend', () => isDragging = false);
            container.addEventListener('touchmove', updatePosition);
        });
    }
}

// ========================================
// Portfolio Gallery with Lightbox
// ========================================
class PortfolioGallery {
    constructor() {
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.lightbox = document.querySelector('.lightbox');
        this.lightboxImg = document.querySelector('.lightbox-content img');
        this.closeBtn = document.querySelector('.lightbox-close');
        this.prevBtn = document.querySelector('.lightbox-prev');
        this.nextBtn = document.querySelector('.lightbox-next');
        this.currentIndex = 0;
        this.images = [];

        this.init();
    }

    init() {
        if (!this.lightbox) return;

        // Collect all images
        this.galleryItems.forEach((item, index) => {
            const img = item.querySelector('img');
            if (img) {
                this.images.push(img.src);
                item.addEventListener('click', () => this.open(index));
            }
        });

        // Event listeners
        this.closeBtn?.addEventListener('click', () => this.close());
        this.prevBtn?.addEventListener('click', () => this.navigate(-1));
        this.nextBtn?.addEventListener('click', () => this.navigate(1));

        // Close on background click
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) this.close();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') this.close();
            if (e.key === 'ArrowLeft') this.navigate(-1);
            if (e.key === 'ArrowRight') this.navigate(1);
        });
    }

    open(index) {
        this.currentIndex = index;
        this.lightboxImg.src = this.images[index];
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    navigate(direction) {
        this.currentIndex += direction;

        if (this.currentIndex < 0) {
            this.currentIndex = this.images.length - 1;
        } else if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
        }

        this.lightboxImg.src = this.images[this.currentIndex];
    }
}

// ========================================
// Testimonials Carousel
// ========================================
class TestimonialsCarousel {
    constructor() {
        this.cards = document.querySelectorAll('.testimonial-card');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.currentIndex = 0;
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        if (this.cards.length === 0) return;

        // Show first card
        this.showCard(0);

        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.showCard(index));
        });

        // Auto-play
        this.startAutoPlay();

        // Pause on hover
        const carousel = document.querySelector('.testimonials-carousel');
        carousel?.addEventListener('mouseenter', () => this.stopAutoPlay());
        carousel?.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    showCard(index) {
        this.cards.forEach(card => card.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        this.cards[index]?.classList.add('active');
        this.dots[index]?.classList.add('active');

        this.currentIndex = index;
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            const nextIndex = (this.currentIndex + 1) % this.cards.length;
            this.showCard(nextIndex);
        }, 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// ========================================
// Dark Mode Toggle
// ========================================
class DarkMode {
    constructor() {
        this.toggle = document.querySelector('.dark-mode-toggle');
        this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        this.init();
    }

    init() {
        if (!this.toggle) return;

        // Check saved preference
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'enabled') {
            this.enable();
        } else if (savedMode === null && this.prefersDark.matches) {
            this.enable();
        }

        // Toggle on click
        this.toggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                this.disable();
            } else {
                this.enable();
            }
        });

        // Listen for system preference changes
        this.prefersDark.addEventListener('change', (e) => {
            if (localStorage.getItem('darkMode') === null) {
                e.matches ? this.enable() : this.disable();
            }
        });
    }

    enable() {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    disable() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
}

// ========================================
// Scroll Progress Indicator
// ========================================
class ScrollProgress {
    constructor() {
        this.progressBar = document.querySelector('.scroll-progress');
        this.init();
    }

    init() {
        if (!this.progressBar) return;

        window.addEventListener('scroll', () => this.update());
    }

    update() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        this.progressBar.style.width = `${Math.min(scrollPercentage, 100)}%`;
    }
}

// ========================================
// Mobile CTA Bar
// ========================================
class MobileCTABar {
    constructor() {
        this.ctaBar = document.querySelector('.mobile-cta-bar');
        this.init();
    }

    init() {
        if (!this.ctaBar) return;

        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (window.scrollY > 300) {
            this.ctaBar.classList.add('visible');
        } else {
            this.ctaBar.classList.remove('visible');
        }
    }
}

// ========================================
// Exit Intent Popup
// ========================================
class ExitIntentPopup {
    constructor() {
        this.popup = document.querySelector('.exit-popup');
        this.closeBtn = document.querySelector('.exit-popup-close');
        this.hasShown = sessionStorage.getItem('exitPopupShown');

        this.init();
    }

    init() {
        if (!this.popup || this.hasShown) return;

        document.addEventListener('mouseout', (e) => {
            if (e.clientY <= 0 && !this.hasShown) {
                this.show();
            }
        });

        this.closeBtn?.addEventListener('click', () => this.close());

        // Close on background click
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) this.close();
        });

        // Close on WhatsApp button click
        const whatsappBtn = this.popup.querySelector('.btn-whatsapp');
        whatsappBtn?.addEventListener('click', () => this.close());
    }

    show() {
        this.popup.classList.add('active');
        sessionStorage.setItem('exitPopupShown', 'true');
        this.hasShown = true;
    }

    close() {
        this.popup.classList.remove('active');
    }
}

// ========================================
// Social Proof Notifications
// ========================================
class SocialProofNotifications {
    constructor() {
        this.notification = document.querySelector('.social-proof-notification');
        this.notifications = [
            { name: 'John from Claremont', action: 'just booked a car audio installation' },
            { name: 'Sarah from Century City', action: 'just requested a CCTV quote' },
            { name: 'Mike from Milnerton', action: 'just installed DSTV' },
            { name: 'Lisa from Camps Bay', action: 'just booked a security system' },
            { name: 'David from Newlands', action: 'just got a reverse camera installed' }
        ];
        this.currentIndex = 0;

        this.init();
    }

    init() {
        if (!this.notification) return;

        // Show first notification after delay
        setTimeout(() => this.show(), 5000);

        // Show new notification every 15 seconds
        setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.notifications.length;
            this.show();
        }, 15000);
    }

    show() {
        const data = this.notifications[this.currentIndex];
        const content = this.notification.querySelector('.notification-text');

        if (content) {
            content.innerHTML = `<strong>${data.name}</strong><span>${data.action}</span>`;
        }

        this.notification.classList.add('active');

        // Hide after 5 seconds
        setTimeout(() => {
            this.notification.classList.remove('active');
        }, 5000);
    }
}

// ========================================
// Multi-Step Form
// ========================================
class MultiStepForm {
    constructor() {
        this.form = document.querySelector('.multi-step-form');
        this.steps = document.querySelectorAll('.form-step-content');
        this.indicators = document.querySelectorAll('.step-circle');
        this.prevBtns = document.querySelectorAll('[data-step="prev"]');
        this.nextBtns = document.querySelectorAll('[data-step="next"]');
        this.currentStep = 0;

        this.init();
    }

    init() {
        if (!this.form) return;

        // Show first step
        this.showStep(0);

        // Navigation buttons
        this.nextBtns.forEach(btn => {
            btn.addEventListener('click', () => this.next());
        });

        this.prevBtns.forEach(btn => {
            btn.addEventListener('click', () => this.previous());
        });
    }

    showStep(index) {
        this.steps.forEach((step, i) => {
            step.classList.toggle('active', i === index);
        });

        this.indicators.forEach((indicator, i) => {
            indicator.classList.remove('active', 'completed');

            if (i < index) {
                indicator.classList.add('completed');
            } else if (i === index) {
                indicator.classList.add('active');
            }
        });

        this.currentStep = index;
    }

    next() {
        if (this.validate() && this.currentStep < this.steps.length - 1) {
            this.showStep(this.currentStep + 1);
        }
    }

    previous() {
        if (this.currentStep > 0) {
            this.showStep(this.currentStep - 1);
        }
    }

    validate() {
        const currentStepElement = this.steps[this.currentStep];
        const inputs = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');

        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'var(--error)';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });

        return isValid;
    }
}

// ========================================
// Lazy Loading Images
// ========================================
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img.lazy');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                { rootMargin: '50px' }
            );

            this.images.forEach(img => observer.observe(img));
        } else {
            // Fallback for older browsers
            this.images.forEach(img => this.loadImage(img));
        }
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.loadImage(entry.target);
            }
        });
    }

    loadImage(img) {
        const src = img.dataset.src;
        if (!src) return;

        img.src = src;
        img.classList.add('loaded');
        img.classList.remove('lazy');
    }
}

// ========================================
// Smooth Reveal Animations
// ========================================
class RevealAnimations {
    constructor() {
        this.elements = document.querySelectorAll('[data-reveal]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
            );

            this.elements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s ease';
                observer.observe(el);
            });
        }
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }
}

// ========================================
// Form Enhancement
// ========================================
class FormEnhancement {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');

            inputs.forEach(input => {
                // Real-time validation
                input.addEventListener('blur', () => this.validateField(input));

                // Clear error on focus
                input.addEventListener('focus', () => {
                    input.style.borderColor = '';
                });
            });
        });
    }

    validateField(field) {
        if (field.required && !field.value.trim()) {
            field.style.borderColor = 'var(--error)';
            return false;
        }

        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                field.style.borderColor = 'var(--error)';
                return false;
            }
        }

        if (field.type === 'tel' && field.value) {
            const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
            if (!phoneRegex.test(field.value)) {
                field.style.borderColor = 'var(--error)';
                return false;
            }
        }

        field.style.borderColor = 'var(--success)';
        return true;
    }
}

// ========================================
// Initialize All Enhanced Features
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all enhancement classes
    new StatisticsCounter();
    new FAQAccordion();
    new BeforeAfterSlider();
    new PortfolioGallery();
    new TestimonialsCarousel();
    new DarkMode();
    new ScrollProgress();
    new MobileCTABar();
    new ExitIntentPopup();
    new SocialProofNotifications();
    new MultiStepForm();
    new LazyLoader();
    new RevealAnimations();
    new FormEnhancement();

    console.log('🚀 All enhanced features loaded successfully!');
});

// ========================================
// Utility Functions
// ========================================

// Smooth scroll to element
function scrollToElement(selector, offset = 80) {
    const element = document.querySelector(selector);
    if (!element) return;

    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Debounce function
function debounce(func, wait = 250) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit = 250) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Format phone number for WhatsApp
function formatWhatsAppNumber(number) {
    return number.replace(/\D/g, '');
}

// Copy to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy:', err);
        return false;
    }
}

// Export utilities for use in other scripts
window.AudiocousticsUtils = {
    scrollToElement,
    debounce,
    throttle,
    isInViewport,
    formatWhatsAppNumber,
    copyToClipboard
};
