/**
 * Audiocoustics - Main JavaScript
 * Handles navigation, services, form submission, and animations
 */

// ========================================
// Services Data
// ========================================
const services = [
    {
        id: 1,
        title: 'Car Audio Systems',
        description: 'Premium car audio installations, upgrades, and replacements. Single DIN, Double DIN, Android head units with GPS navigation, Bluetooth connectivity, and USB/AUX inputs.',
        category: 'automotive',
        icon: 'M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z'
    },
    {
        id: 2,
        title: 'Android Head Units',
        description: 'Modern Android-based car entertainment systems with GPS navigation, Google Maps, Bluetooth, WiFi, and full app support for the ultimate in-car experience.',
        category: 'automotive',
        icon: 'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z'
    },
    {
        id: 3,
        title: 'Car Security Systems',
        description: 'Professional installation of Sanji alarms, immobilisers, central locking systems, and car tracking devices to protect your vehicle investment.',
        category: 'automotive',
        icon: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z'
    },
    {
        id: 4,
        title: 'Bluetooth Hands-Free Kits',
        description: 'Parrot and BURY bluetooth hands-free car kits for safe, legal driving. Voice control, music streaming, and crystal-clear call quality.',
        category: 'automotive',
        icon: 'M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z'
    },
    {
        id: 5,
        title: 'Reverse Cameras & PDC',
        description: 'Rear-view camera systems and Park Distance Control (PDC) sensors for safer reversing and parking. Perfect for all vehicle types.',
        category: 'automotive',
        icon: 'M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L16.5 17.2V14h1v2.79l1.85 1.85-.7.71zM18 3h-3.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h6.11a6.743 6.743 0 01-1.42-2H6V5h2v3h8V5h2v5.08c.71.1 1.38.31 2 .6V5c0-1.1-.9-2-2-2zm-6 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
    },
    {
        id: 6,
        title: 'Car Air Conditioning',
        description: 'Complete car air conditioning services including installation, repairs, re-gassing, and maintenance for optimal climate control.',
        category: 'automotive',
        icon: 'M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z'
    },
    {
        id: 7,
        title: 'Window Film & Tinting',
        description: 'Smash and grab safety window film installation for vehicles. UV protection, privacy, and enhanced security for your peace of mind.',
        category: 'automotive',
        icon: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z'
    },
    {
        id: 8,
        title: 'Vehicle Tracking',
        description: 'Cartrack GPS vehicle tracking systems for fleet management and theft recovery. Real-time monitoring and alerts for complete peace of mind.',
        category: 'automotive',
        icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'
    },
    {
        id: 9,
        title: 'CCTV Systems',
        description: 'Professional CCTV camera installation for homes and businesses. HD recording, remote viewing, and 24/7 security monitoring solutions.',
        category: 'residential',
        icon: 'M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z'
    },
    {
        id: 10,
        title: 'DSTV Installation',
        description: 'Expert DSTV satellite installation, relocation, and extra view setup. Signal alignment and decoder configuration for perfect reception.',
        category: 'residential',
        icon: 'M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z'
    },
    {
        id: 11,
        title: 'TV Wall Mounting',
        description: 'Professional TV wall mounting services with cable management. Secure installation for all TV sizes and wall types.',
        category: 'residential',
        icon: 'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z'
    },
    {
        id: 12,
        title: 'Home Audio/Video',
        description: 'Residential Hi-Fi and AV installations, multi-zone audio systems, home theater setup, and integration of modern wireless technologies with existing systems.',
        category: 'residential',
        icon: 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z'
    },
    {
        id: 13,
        title: 'WiFi Extension',
        description: 'WiFi range extender installation and network optimization for complete home or office coverage. Eliminate dead zones.',
        category: 'residential',
        icon: 'M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z'
    },
    {
        id: 14,
        title: 'Router Installation',
        description: 'Professional router setup and configuration for homes and businesses. Optimized settings for maximum speed and security.',
        category: 'residential',
        icon: 'M15.9 5c-.17 0-.32.09-.41.23l-.07.15-5.18 11.65c-.16.29-.26.61-.26.96 0 1.11.9 2.01 2.01 2.01.96 0 1.77-.68 1.96-1.59l.01-.03L16.4 5.5c0-.28-.22-.5-.5-.5zM1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0z'
    },
    {
        id: 15,
        title: 'Portable UPS Systems',
        description: 'Installation and setup of portable UPS backup power systems to keep your essential devices running during power outages.',
        category: 'residential',
        icon: 'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z'
    },
    {
        id: 16,
        title: 'Gate Motors & Automation',
        description: 'Electronic gate motor installation, repairs, and remote control programming. Automated access control for homes and businesses.',
        category: 'commercial',
        icon: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'
    },
    {
        id: 17,
        title: 'PA Systems',
        description: 'Public address system installation for motor vehicles, buses, restaurants, offices, and commercial venues. Multi-zone capabilities.',
        category: 'commercial',
        icon: 'M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z'
    },
    {
        id: 18,
        title: 'Marine & Boat Audio',
        description: 'Waterproof marine audio system installation for boats and yachts. Weather-resistant speakers and head units designed for marine environments.',
        category: 'automotive',
        icon: 'M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z'
    },
    {
        id: 19,
        title: 'Cruise Control Systems',
        description: 'Speedocruise and Autocruise installation for comfortable long-distance driving. Compatible with most modern vehicles.',
        category: 'automotive',
        icon: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z'
    },
    {
        id: 20,
        title: 'GPS Logbook',
        description: 'GPS logbook systems for accurate mileage tracking and trip logging. Essential for businesses and tax deductions.',
        category: 'commercial',
        icon: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z'
    }
];

// ========================================
// Navigation
// ========================================
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');

        this.init();
    }

    init() {
        // Mobile menu toggle
        this.navToggle?.addEventListener('click', () => this.toggleMenu());

        // Close menu when clicking nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                this.closeMenu();
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => this.handleScroll());

        // Smooth scroll for anchor links
        this.setupSmoothScroll();
    }

    toggleMenu() {
        this.navMenu?.classList.toggle('active');
        this.navToggle?.classList.toggle('active');
    }

    closeMenu() {
        this.navMenu?.classList.remove('active');
        this.navToggle?.classList.remove('active');
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar?.classList.add('scrolled');
        } else {
            this.navbar?.classList.remove('scrolled');
        }
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href?.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offsetTop = target.offsetTop - 80;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// ========================================
// Services Manager
// ========================================
class ServicesManager {
    constructor() {
        this.servicesGrid = document.getElementById('servicesGrid');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.currentFilter = 'all';

        this.init();
    }

    init() {
        this.renderServices();
        this.setupFilters();
    }

    renderServices(filter = 'all') {
        if (!this.servicesGrid) return;

        const filteredServices = filter === 'all'
            ? services
            : services.filter(service => service.category === filter);

        this.servicesGrid.innerHTML = filteredServices.map(service => `
            <div class="service-card" data-category="${service.category}">
                <div class="service-icon">
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                        <path d="${service.icon}"/>
                    </svg>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <span class="service-badge">${this.getCategoryLabel(service.category)}</span>
            </div>
        `).join('');

        // Animate cards
        this.animateCards();
    }

    setupFilters() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;

                // Update active state
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter services
                this.renderServices(filter);
            });
        });
    }

    getCategoryLabel(category) {
        const labels = {
            automotive: 'Automotive',
            residential: 'Residential',
            commercial: 'Commercial'
        };
        return labels[category] || category;
    }

    animateCards() {
        const cards = this.servicesGrid.querySelectorAll('.service-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}

// ========================================
// Contact Form
// ========================================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.successMessage = document.getElementById('formSuccess');

        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        // For demo purposes, we'll just show success message
        // In production, you would send this to a backend API
        console.log('Form submitted:', data);

        // Create WhatsApp message
        const message = this.createWhatsAppMessage(data);
        const whatsappUrl = `https://wa.me/27815987961?text=${encodeURIComponent(message)}`;

        // Show success message
        this.showSuccess();

        // Open WhatsApp after a short delay
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 1500);
    }

    createWhatsAppMessage(data) {
        return `*New Enquiry from Website*

*Name:* ${data.name}
*Phone:* ${data.phone}
*Email:* ${data.email || 'Not provided'}
*Service:* ${data.service}
*Location:* ${data.location}

*Message:*
${data.message}`;
    }

    showSuccess() {
        this.form.style.display = 'none';
        this.successMessage.style.display = 'block';

        // Reset form after 5 seconds
        setTimeout(() => {
            this.form.style.display = 'block';
            this.successMessage.style.display = 'none';
            this.form.reset();
        }, 5000);
    }
}

// ========================================
// Speaker Animation (Simple CSS-based)
// ========================================
class SpeakerAnimation {
    constructor() {
        this.container = document.getElementById('speaker-animation');
        this.init();
    }

    init() {
        if (!this.container) return;

        this.container.innerHTML = `
            <svg viewBox="0 0 200 200" style="width: 100%; height: 100%; max-width: 400px; margin: 0 auto; display: block;">
                <!-- Speaker Body -->
                <rect x="40" y="20" width="120" height="160" rx="15" fill="url(#speakerGradient)" stroke="#1565C0" stroke-width="3"/>

                <!-- Speaker Cones -->
                <circle cx="100" cy="70" r="25" fill="#2196F3" opacity="0.3">
                    <animate attributeName="r" values="25;28;25" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="70" r="20" fill="#1565C0"/>
                <circle cx="100" cy="70" r="8" fill="#0D47A1"/>

                <circle cx="100" cy="130" r="35" fill="#2196F3" opacity="0.3">
                    <animate attributeName="r" values="35;38;35" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="100" cy="130" r="28" fill="#1565C0"/>
                <circle cx="100" cy="130" r="12" fill="#0D47A1"/>

                <!-- Sound Waves -->
                <g opacity="0.6">
                    <path d="M 165 70 Q 185 70 185 70" stroke="#2196F3" stroke-width="3" fill="none" stroke-linecap="round">
                        <animate attributeName="d"
                            values="M 165 70 Q 175 70 175 70;M 165 70 Q 185 70 185 70;M 165 70 Q 175 70 175 70"
                            dur="1.5s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="1;0;1" dur="1.5s" repeatCount="indefinite"/>
                    </path>
                    <path d="M 165 130 Q 185 130 185 130" stroke="#2196F3" stroke-width="3" fill="none" stroke-linecap="round">
                        <animate attributeName="d"
                            values="M 165 130 Q 175 130 175 130;M 165 130 Q 185 130 185 130;M 165 130 Q 175 130 175 130"
                            dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="1;0;1" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
                    </path>

                    <path d="M 35 70 Q 15 70 15 70" stroke="#2196F3" stroke-width="3" fill="none" stroke-linecap="round">
                        <animate attributeName="d"
                            values="M 35 70 Q 25 70 25 70;M 35 70 Q 15 70 15 70;M 35 70 Q 25 70 25 70"
                            dur="1.5s" begin="0.2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="1;0;1" dur="1.5s" begin="0.2s" repeatCount="indefinite"/>
                    </path>
                    <path d="M 35 130 Q 15 130 15 130" stroke="#2196F3" stroke-width="3" fill="none" stroke-linecap="round">
                        <animate attributeName="d"
                            values="M 35 130 Q 25 130 25 130;M 35 130 Q 15 130 15 130;M 35 130 Q 25 130 25 130"
                            dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="1;0;1" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
                    </path>
                </g>

                <!-- Gradients -->
                <defs>
                    <linearGradient id="speakerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#E3F2FD;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#BBDEFB;stop-opacity:1" />
                    </linearGradient>
                </defs>
            </svg>
        `;
    }
}

// ========================================
// Scroll Animations
// ========================================
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                this.observerOptions
            );

            // Observe elements that should animate on scroll
            const elements = document.querySelectorAll('.service-card, .feature-item, .about-text, .stat-item');
            elements.forEach(el => this.observer.observe(el));
        }
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    new ServicesManager();
    new ContactForm();
    new SpeakerAnimation();
    new ScrollAnimations();

    console.log('Audiocoustics website loaded successfully!');
});

// ========================================
// Utility Functions
// ========================================

// Debounce function for scroll events
function debounce(func, wait) {
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

// Track scroll for additional effects
window.addEventListener('scroll', debounce(() => {
    // Additional scroll-based effects can be added here
}, 100));
