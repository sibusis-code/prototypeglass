// ==========================================
// PROTOTYPE GLASS WINDSCREEN - E-COMMERCE JS
// ==========================================

document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // HERO SLIDER
    // ==========================================
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    let sliderInterval;

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        currentSlide = index;
        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function startSlider() {
        if (slides.length > 1) {
            sliderInterval = setInterval(nextSlide, 5000);
        }
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            clearInterval(sliderInterval);
            goToSlide(parseInt(this.dataset.slide));
            startSlider();
        });
    });

    startSlider();

    // ==========================================
    // MOBILE NAVIGATION
    // ==========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenuWrapper = document.getElementById('navMenuWrapper');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenuWrapper.classList.toggle('active');
            const spans = this.querySelectorAll('span');
            const isOpen = navMenuWrapper.classList.contains('active');
            spans[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = isOpen ? '0' : '1';
            spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
        });
    }

    // Mobile mega dropdown toggle
    const dropdownToggles = document.querySelectorAll('.has-dropdown > a');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.parentElement.classList.toggle('open');
            }
        });
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-menu a:not(.has-dropdown > a)').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && navMenuWrapper) {
                navMenuWrapper.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(s => { s.style.transform = 'none'; s.style.opacity = '1'; });
            }
        });
    });

    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================
    const navbar = document.getElementById('navbar');
    const scrollTop = document.getElementById('scrollTop');

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 50);
        }
        if (scrollTop) {
            scrollTop.classList.toggle('visible', scrollY > 400);
        }
    });

    if (scrollTop) {
        scrollTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = navbar ? navbar.offsetHeight + 10 : 80;
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // PRODUCT TABS
    // ==========================================
    const productTabs = document.querySelectorAll('.product-tab');
    const productGrid = document.getElementById('productGrid');

    const productsData = {
        windscreens: [
            {
                title: 'Premium Windscreen Replacement',
                desc: 'OEM-quality windscreens for luxury vehicles. SABS certified with rain sensors & heating compatibility.',
                features: ['OEM Quality', 'SABS Certified', 'Rain Sensor'],
                price: 'R2,500',
                badge: 'Popular',
                image: 'WhatsApp Image 2026-04-15 at 3.09.18 PM.jpeg'
            },
            {
                title: 'Standard Windscreen Replacement',
                desc: 'Professional windscreen replacement for all vehicle makes and models with same-day service.',
                features: ['Same Day', 'All Makes', 'Warranty'],
                price: 'R1,500',
                badge: 'Best Value',
                image: 'WhatsApp Image 2026-04-15 at 3.09.16 PM.jpeg'
            },
            {
                title: 'Luxury Vehicle Specialist',
                desc: 'Expert windscreen replacement for BMW, Mercedes, Audi, and other premium brands.',
                features: ['BMW Expert', 'Mercedes', 'ADAS Ready'],
                price: 'R3,500',
                badge: 'Premium',
                image: 'WhatsApp Image 2026-04-15 at 3.09.17 PM.jpeg'
            }
        ],
        rearscreens: [
            {
                title: 'Rear Screen Replacement',
                desc: 'Complete rear window replacement with heated demister connections and quality fitment.',
                features: ['Heated', 'OEM Fit', 'Warranty'],
                price: 'R1,800',
                badge: 'Popular',
                image: 'WhatsApp Image 2026-04-15 at 3.09.18 PM (1).jpeg'
            },
            {
                title: 'SUV & Bakkie Rear Glass',
                desc: 'Specialized rear glass for larger vehicles including bakkies, SUVs and trucks.',
                features: ['All Sizes', 'Heavy Duty', 'Tinted'],
                price: 'R2,200',
                badge: '',
                image: 'WhatsApp Image 2026-04-15 at 3.09.19 PM.jpeg'
            },
            {
                title: 'Hatchback Rear Glass',
                desc: 'Rear glass replacement for hatchbacks, including models with wiper hole cutouts.',
                features: ['Wiper Ready', 'Perfect Fit', 'Fast'],
                price: 'R1,600',
                badge: '',
                image: 'WhatsApp Image 2026-04-15 at 3.09.17 PM (2).jpeg'
            }
        ],
        doorglass: [
            {
                title: 'Front Door Glass',
                desc: 'Side window replacement for front doors with regulator check and proper alignment.',
                features: ['Left & Right', 'Regulator Check', 'Aligned'],
                price: 'R800',
                badge: 'Quick Fix',
                image: 'WhatsApp Image 2026-04-15 at 3.09.17 PM (1).jpeg'
            },
            {
                title: 'Rear Door Glass',
                desc: 'Rear passenger door glass replacement. Perfect fit for all vehicle models.',
                features: ['All Models', 'Fast Install', 'Quality'],
                price: 'R900',
                badge: '',
                image: 'WhatsApp Image 2026-04-15 at 3.09.18 PM (2).jpeg'
            },
            {
                title: 'Sliding Door Glass',
                desc: 'Sliding door glass for minibuses and panel vans. Professional fitment guaranteed.',
                features: ['Van & Minibus', 'Professional', 'Durable'],
                price: 'R1,200',
                badge: '',
                image: 'WhatsApp Image 2026-04-15 at 3.09.16 PM (2).jpeg'
            }
        ],
        quarterglass: [
            {
                title: 'Quarter Glass Replacement',
                desc: 'Quarter panel glass replacement for all vehicles. Custom fit and precision installation.',
                features: ['Custom Fit', 'Precision', 'Warranty'],
                price: 'R650',
                badge: 'Affordable',
                image: 'WhatsApp Image 2026-04-15 at 3.09.16 PM (1).jpeg'
            },
            {
                title: 'Vent Window Glass',
                desc: 'Small vent window and quarter glass for older and newer vehicle models.',
                features: ['All Years', 'All Brands', 'Quality'],
                price: 'R550',
                badge: '',
                image: 'WhatsApp Image 2026-04-15 at 3.09.19 PM (1).jpeg'
            },
            {
                title: 'Fixed Quarter Panel',
                desc: 'Non-opening fixed quarter glass panels. Perfect fit with OEM adhesive systems.',
                features: ['Fixed Glass', 'OEM Glue', 'Sealed'],
                price: 'R700',
                badge: '',
                image: 'WhatsApp Image 2026-04-15 at 3.09.17 PM (3).jpeg'
            }
        ]
    };

    function renderProducts(category) {
        if (!productGrid) return;
        const items = productsData[category] || productsData.windscreens;
        productGrid.innerHTML = items.map(item => `
            <div class="product-card">
                <div class="product-card-img">
                    <img src="images/services/${item.image}" alt="${item.title}" loading="lazy">
                    ${item.badge ? `<span class="product-card-badge">${item.badge}</span>` : ''}
                </div>
                <div class="product-card-body">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <div class="product-features">
                        ${item.features.map(f => `<span class="product-feature"><i class="fas fa-check"></i> ${f}</span>`).join('')}
                    </div>
                    <div class="product-card-footer">
                        <div class="product-price">
                            From
                            <strong>${item.price}</strong>
                        </div>
                        <button class="btn-add-quote" data-service="${item.title}">
                            <i class="fas fa-plus"></i> Add to Quote
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Attach add-to-quote handlers
        productGrid.querySelectorAll('.btn-add-quote').forEach(btn => {
            btn.addEventListener('click', function() {
                addToQuote(this.dataset.service);
            });
        });
    }

    productTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            productTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.tab);
        });
    });

    // Initial render
    renderProducts('windscreens');

    // ==========================================
    // QUOTE BASKET
    // ==========================================
    let quoteItems = JSON.parse(localStorage.getItem('quoteItems') || '[]');
    const quoteCountEl = document.getElementById('quoteCount');

    function updateQuoteCount() {
        if (quoteCountEl) {
            quoteCountEl.textContent = quoteItems.length;
        }
    }

    function addToQuote(serviceName) {
        if (!quoteItems.includes(serviceName)) {
            quoteItems.push(serviceName);
            localStorage.setItem('quoteItems', JSON.stringify(quoteItems));
            updateQuoteCount();
            showNotification(serviceName + ' added to quote!');
        } else {
            showNotification('Already in your quote basket.');
        }
    }

    updateQuoteCount();

    // ==========================================
    // NOTIFICATION TOAST
    // ==========================================
    function showNotification(message) {
        const existing = document.querySelector('.toast-notification');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
        toast.style.cssText = `
            position: fixed; top: 20px; right: 20px; z-index: 10000;
            background: #0f2b46; color: #fff; padding: 14px 24px;
            border-radius: 10px; font-size: 14px; font-weight: 600;
            display: flex; align-items: center; gap: 8px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            animation: slideIn 0.3s ease;
            font-family: 'Inter', sans-serif;
        `;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(20px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 2500);
    }

    // Toast animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // SEARCH FUNCTIONALITY
    // ==========================================
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    const searchData = [
        { title: 'Windscreen Replacement', url: 'services.html#windscreen', category: 'Services' },
        { title: 'Rear Screen Replacement', url: 'services.html#rear', category: 'Services' },
        { title: 'Door Glass Replacement', url: 'services.html#door', category: 'Services' },
        { title: 'Quarter Glass', url: 'services.html#quarter', category: 'Services' },
        { title: 'Chip Repair', url: 'services.html#chip', category: 'Services' },
        { title: 'Insurance Claims', url: 'services.html#insurance', category: 'Services' },
        { title: 'BMW Windscreen', url: 'services.html#windscreen', category: 'Brand' },
        { title: 'Mercedes Windscreen', url: 'services.html#windscreen', category: 'Brand' },
        { title: 'Toyota Windscreen', url: 'services.html#windscreen', category: 'Brand' },
        { title: 'VW Windscreen', url: 'services.html#windscreen', category: 'Brand' },
        { title: 'Ford Ranger Glass', url: 'services.html#windscreen', category: 'Brand' },
        { title: 'Get a Quote', url: '#quote', category: 'Quick Link' },
        { title: 'Contact Us', url: 'contact.html', category: 'Quick Link' },
        { title: 'Our Gallery', url: 'gallery.html', category: 'Quick Link' },
        { title: 'About Us', url: 'about.html', category: 'Quick Link' }
    ];

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            const matches = searchData.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query)
            ).slice(0, 6);

            if (matches.length > 0) {
                searchResults.innerHTML = matches.map(m => `
                    <a href="${m.url}" style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid #f1f5f9;font-size:14px;color:#1e293b;transition:background 0.2s;">
                        <span>${m.title}</span>
                        <span style="font-size:11px;color:#94a3b8;background:#f8fafc;padding:2px 8px;border-radius:50px;">${m.category}</span>
                    </a>
                `).join('');
                searchResults.style.display = 'block';
            } else {
                searchResults.innerHTML = '<div style="padding:16px;text-align:center;color:#94a3b8;font-size:14px;">No results found</div>';
                searchResults.style.display = 'block';
            }
        });

        // Close search results on outside click
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-search')) {
                searchResults.style.display = 'none';
            }
        });
    }

    // ==========================================
    // QUOTE FORM VALIDATION
    // ==========================================
    const quoteForm = document.getElementById('quoteForm');

    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                email: document.getElementById('email').value.trim(),
                vehicle: document.getElementById('vehicle').value.trim(),
                glassType: document.getElementById('glassType').value,
                insurance: document.getElementById('insurance').value,
                message: document.getElementById('message').value.trim()
            };

            if (!formData.name || !formData.phone || !formData.vehicle || !formData.glassType) {
                showNotification('Please fill in all required fields.');
                return;
            }

            const phoneRegex = /^(\+27|0)[0-9]{9}$/;
            if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
                showNotification('Please enter a valid SA phone number.');
                return;
            }

            // In production: send to PHP backend
            console.log('Quote submitted:', formData);
            showNotification('Quote request submitted! We\'ll contact you soon.');
            quoteForm.reset();
        });
    }

    // ==========================================
    // NEWSLETTER FORM
    // ==========================================
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[name="newsletter_email"]');
            if (email && email.value) {
                showNotification('Thanks for subscribing!');
                email.value = '';
            }
        });
    }

    // ==========================================
    // FAQ ACCORDION
    // ==========================================
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            // Open clicked if not already active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ==========================================
    // GALLERY FILTER
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // ==========================================
    // INTERSECTION OBSERVER - FADE IN
    // ==========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // ==========================================
    // ACTIVE NAV LINK
    // ==========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu > li > a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ==========================================
    // CHATBOT - Lead Pre-Qualification
    // ==========================================
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotBody = document.getElementById('chatbotBody');
    const chatbotFooter = document.getElementById('chatbotFooter');

    if (chatbotToggle && chatbotWindow) {
        const chatFlow = [
            {
                id: 'welcome',
                message: "Hi there! 👋 I'm here to help you get a quick quote for your auto glass needs. Let's get started!",
                next: 'service'
            },
            {
                id: 'service',
                message: "What service do you need?",
                options: [
                    { label: 'Windscreen Replacement', value: 'Windscreen Replacement' },
                    { label: 'Rear Glass', value: 'Rear Glass' },
                    { label: 'Door Glass', value: 'Door Glass' },
                    { label: 'Chip Repair', value: 'Chip Repair' },
                    { label: 'Other', value: 'Other' }
                ],
                next: 'vehicle'
            },
            {
                id: 'vehicle',
                message: "What's your vehicle make & model? (e.g. Toyota Corolla 2020)",
                input: true,
                placeholder: 'e.g. Toyota Corolla 2020',
                next: 'insurance'
            },
            {
                id: 'insurance',
                message: "Is this an insurance claim?",
                options: [
                    { label: 'Yes - Insurance Claim', value: 'Yes' },
                    { label: 'No - Cash / Private', value: 'No' }
                ],
                next: 'name'
            },
            {
                id: 'name',
                message: "Great! What's your name?",
                input: true,
                placeholder: 'Your full name',
                next: 'phone'
            },
            {
                id: 'phone',
                message: "And your phone number so we can reach you?",
                input: true,
                placeholder: 'e.g. 073 225 4809',
                next: 'done'
            },
            {
                id: 'done',
                message: "Thank you! 🎉 One of our team members will contact you shortly with a quote. You can also call us directly at 073 225 4809.",
                final: true
            }
        ];

        let chatAnswers = {};
        let currentStepIndex = 0;

        function addBotMessage(text) {
            const msg = document.createElement('div');
            msg.className = 'chat-message bot';
            msg.textContent = text;
            chatbotBody.appendChild(msg);
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }

        function addUserMessage(text) {
            const msg = document.createElement('div');
            msg.className = 'chat-message user';
            msg.textContent = text;
            chatbotBody.appendChild(msg);
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }

        function showOptions(options, stepId) {
            const container = document.createElement('div');
            container.className = 'chat-options';
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'chat-option-btn';
                btn.textContent = opt.label;
                btn.addEventListener('click', function() {
                    chatAnswers[stepId] = opt.value;
                    addUserMessage(opt.label);
                    container.remove();
                    clearFooter();
                    currentStepIndex++;
                    setTimeout(() => runStep(), 400);
                });
                container.appendChild(btn);
            });
            chatbotBody.appendChild(container);
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }

        function showInput(placeholder, stepId) {
            clearFooter();
            const area = document.createElement('div');
            area.className = 'chat-input-area';
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = placeholder || 'Type here...';
            const sendBtn = document.createElement('button');
            sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';

            function submit() {
                const val = input.value.trim();
                if (!val) return;
                chatAnswers[stepId] = val;
                addUserMessage(val);
                area.remove();
                currentStepIndex++;
                setTimeout(() => runStep(), 400);
            }

            sendBtn.addEventListener('click', submit);
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') submit();
            });

            area.appendChild(input);
            area.appendChild(sendBtn);
            chatbotFooter.appendChild(area);
            input.focus();
        }

        function clearFooter() {
            chatbotFooter.innerHTML = '';
        }

        function showRestart() {
            clearFooter();
            const btn = document.createElement('button');
            btn.className = 'chatbot-restart';
            btn.innerHTML = '<i class="fas fa-redo"></i> Start Over';
            btn.addEventListener('click', resetChat);
            chatbotFooter.appendChild(btn);
        }

        function runStep() {
            const step = chatFlow[currentStepIndex];
            if (!step) return;

            addBotMessage(step.message);

            if (step.final) {
                showRestart();
                // Send data to WhatsApp as a fallback
                const summary = Object.entries(chatAnswers)
                    .map(([k, v]) => `${k}: ${v}`)
                    .join('%0A');
                console.log('Lead captured:', chatAnswers);
                return;
            }

            if (step.options) {
                setTimeout(() => showOptions(step.options, step.id), 300);
            } else if (step.input) {
                setTimeout(() => showInput(step.placeholder, step.id), 300);
            } else {
                currentStepIndex++;
                setTimeout(() => runStep(), 600);
            }
        }

        function resetChat() {
            chatAnswers = {};
            currentStepIndex = 0;
            chatbotBody.innerHTML = '';
            clearFooter();
            runStep();
        }

        // Toggle chatbot
        chatbotToggle.addEventListener('click', function() {
            const isOpen = chatbotWindow.classList.toggle('open');
            chatbotToggle.classList.toggle('active', isOpen);
            if (isOpen && chatbotBody.children.length === 0) {
                runStep();
            }
        });
    }

});
