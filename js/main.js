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
                        <button class="btn-add-quote" data-service="${item.title}" data-price="${item.price}">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Attach add-to-cart handlers
        productGrid.querySelectorAll('.btn-add-quote').forEach(btn => {
            btn.addEventListener('click', function() {
                addToCart(this.dataset.service, this.dataset.price);
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
    // CART FUNCTIONALITY
    // ==========================================
    let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const cartCountEl = document.getElementById('cartCount');
    const cartToggleBtn = document.getElementById('cartToggleBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawerClose = document.getElementById('cartDrawerClose');
    const cartItemsEl = document.getElementById('cartItems');
    const cartEmptyEl = document.getElementById('cartEmpty');
    const cartTotalCountEl = document.getElementById('cartTotalCount');
    const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
    const cartClearBtn = document.getElementById('cartClearBtn');

    function updateCartCount() {
        if (cartCountEl) cartCountEl.textContent = cartItems.length;
    }

    function renderCart() {
        if (!cartItemsEl) return;
        if (cartItems.length === 0) {
            cartItemsEl.innerHTML = '';
            if (cartEmptyEl) cartEmptyEl.style.display = 'block';
            if (cartCheckoutBtn) cartCheckoutBtn.style.display = 'none';
            if (cartClearBtn) cartClearBtn.style.display = 'none';
        } else {
            if (cartEmptyEl) cartEmptyEl.style.display = 'none';
            if (cartCheckoutBtn) cartCheckoutBtn.style.display = 'flex';
            if (cartClearBtn) cartClearBtn.style.display = 'block';
            cartItemsEl.innerHTML = cartItems.map((item, idx) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <span>Auto Glass Service</span>
                    </div>
                    <span class="cart-item-price">${item.price}</span>
                    <button class="cart-item-remove" data-index="${idx}" title="Remove">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `).join('');

            cartItemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', function() {
                    removeFromCart(parseInt(this.dataset.index));
                });
            });
        }
        if (cartTotalCountEl) cartTotalCountEl.textContent = cartItems.length;
        updateCartCount();
    }

    function addToCart(serviceName, price) {
        const exists = cartItems.some(item => item.name === serviceName);
        if (!exists) {
            cartItems.push({ name: serviceName, price: price || '' });
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            renderCart();
            showNotification(serviceName + ' added to cart!');
        } else {
            showNotification('Already in your cart.');
        }
    }

    function removeFromCart(index) {
        const removed = cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCart();
        if (removed.length) showNotification(removed[0].name + ' removed from cart.');
    }

    function clearCart() {
        cartItems = [];
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCart();
        showNotification('Cart cleared.');
    }

    function openCart() {
        if (cartDrawer) cartDrawer.classList.add('open');
        if (cartOverlay) cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        if (cartDrawer) cartDrawer.classList.remove('open');
        if (cartOverlay) cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
    if (cartDrawerClose) cartDrawerClose.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    if (cartClearBtn) cartClearBtn.addEventListener('click', clearCart);
    if (cartCheckoutBtn) {
        cartCheckoutBtn.addEventListener('click', function() {
            closeCart();
        });
    }

    // Migrate old quoteItems to cartItems
    const oldQuoteItems = JSON.parse(localStorage.getItem('quoteItems') || '[]');
    if (oldQuoteItems.length && !cartItems.length) {
        cartItems = oldQuoteItems.map(name => ({ name: name, price: '' }));
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.removeItem('quoteItems');
    }

    renderCart();

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
        { title: 'Windscreen Prices', url: 'windscreen-prices.html', category: 'Quick Link' },
        { title: 'Windscreen Repair', url: 'windscreen-repair.html', category: 'Quick Link' }
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

    // ==========================================
    // SHOP CATALOG - Windscreen Prices Page
    // ==========================================
    const shopGrid = document.getElementById('shopGrid');
    if (shopGrid) {
        const PER_PAGE = 12;
        let currentPage2 = 1;

        // Product catalog data
        const shopProducts = [
            // --- ALFA ROMEO ---
            { brand: 'Alfa Romeo', type: 'Windscreen', title: 'Alfa Romeo Giulietta 2010-2020 Windscreen', price: 3600 },
            { brand: 'Alfa Romeo', type: 'Windscreen', title: 'Alfa Romeo Stelvio 2017+ Windscreen', price: 5200 },
            { brand: 'Alfa Romeo', type: 'Windscreen', title: 'Alfa Romeo Giulia 2016+ Windscreen', price: 4800 },
            { brand: 'Alfa Romeo', type: 'Rearscreen', title: 'Alfa Romeo Giulietta Rear Screen', price: 2800 },
            // --- AUDI ---
            { brand: 'Audi', type: 'Windscreen', title: 'Audi A1 2011-2019 Windscreen', price: 3400 },
            { brand: 'Audi', type: 'Windscreen', title: 'Audi A1 2013-2019 Windscreen Rain Sensor', price: 3800 },
            { brand: 'Audi', type: 'Windscreen', title: 'Audi A3 2003-2012 Windscreen', price: 3200 },
            { brand: 'Audi', type: 'Windscreen', title: 'Audi A3 2003-2012 Windscreen With Rain Sensor', price: 3400 },
            { brand: 'Audi', type: 'Windscreen', title: 'Audi A3 Cabriolet 2008-2013 Windscreen', price: 4000 },
            { brand: 'Audi', type: 'Windscreen', title: 'Audi A3 Hatchback 2013-2021 Windscreen Rain Sensor', price: 3500 },
            { brand: 'Audi', type: 'Windscreen', title: 'Audi A3 Hatchback 2013-2021 Windscreen Sensor', price: 3400 },
            { brand: 'Audi', type: 'Windscreen', title: 'Audi A3 Sedan 2013-2021 Windscreen Rain Sensor', price: 3600 },
            { brand: 'Audi', type: 'Windscreen', title: 'Audi A4 2008-2015 Windscreen', price: 3600 },
            { brand: 'Audi', type: 'Windscreen', title: 'Audi A4 2016-2023 Windscreen Rain Sensor', price: 5200 },
            { brand: 'Audi', type: 'Rearscreen', title: 'Audi A3 2003-2012 Rear Screen Heated', price: 2800 },
            { brand: 'Audi', type: 'Rearscreen', title: 'Audi A4 2008-2015 Rear Screen', price: 3200 },
            { brand: 'Audi', type: 'Door Glass', title: 'Audi A3 Front Door Glass Left', price: 1600 },
            { brand: 'Audi', type: 'Door Glass', title: 'Audi A3 Front Door Glass Right', price: 1600 },
            // --- BMW ---
            { brand: 'BMW', type: 'Windscreen', title: 'BMW 1 Series F20 2011-2019 Windscreen', price: 3200 },
            { brand: 'BMW', type: 'Windscreen', title: 'BMW 1 Series F20 2011-2019 Windscreen Rain Sensor', price: 3600 },
            { brand: 'BMW', type: 'Windscreen', title: 'BMW 3 Series E90 2005-2011 Windscreen', price: 2800 },
            { brand: 'BMW', type: 'Windscreen', title: 'BMW 3 Series F30 2012-2018 Windscreen', price: 3400 },
            { brand: 'BMW', type: 'Windscreen', title: 'BMW 3 Series F30 2012-2018 Windscreen Rain Sensor', price: 3900 },
            { brand: 'BMW', type: 'Windscreen', title: 'BMW 3 Series G20 2019+ Windscreen ADAS', price: 6500 },
            { brand: 'BMW', type: 'Windscreen', title: 'BMW X1 E84 2009-2015 Windscreen', price: 3400 },
            { brand: 'BMW', type: 'Windscreen', title: 'BMW X3 F25 2010-2017 Windscreen', price: 3800 },
            { brand: 'BMW', type: 'Windscreen', title: 'BMW X5 E70 2007-2013 Windscreen', price: 4200 },
            { brand: 'BMW', type: 'Rearscreen', title: 'BMW 3 Series E90 Rear Screen Heated', price: 2600 },
            { brand: 'BMW', type: 'Rearscreen', title: 'BMW 3 Series F30 Rear Screen Heated', price: 3000 },
            { brand: 'BMW', type: 'Door Glass', title: 'BMW 3 Series E90 Front Door Glass', price: 1500 },
            { brand: 'BMW', type: 'Door Glass', title: 'BMW 3 Series F30 Front Door Glass', price: 1600 },
            // --- CHEVROLET ---
            { brand: 'Chevrolet', type: 'Windscreen', title: 'Chevrolet Aveo 2008-2011 Windscreen', price: 1800 },
            { brand: 'Chevrolet', type: 'Windscreen', title: 'Chevrolet Cruze 2009-2016 Windscreen', price: 2200 },
            { brand: 'Chevrolet', type: 'Windscreen', title: 'Chevrolet Spark 2010-2015 Windscreen', price: 1500 },
            { brand: 'Chevrolet', type: 'Windscreen', title: 'Chevrolet Utility 2012-2020 Windscreen', price: 1600 },
            { brand: 'Chevrolet', type: 'Rearscreen', title: 'Chevrolet Cruze Rear Screen', price: 1800 },
            { brand: 'Chevrolet', type: 'Door Glass', title: 'Chevrolet Spark Front Door Glass', price: 800 },
            // --- FORD ---
            { brand: 'Ford', type: 'Windscreen', title: 'Ford EcoSport 2013-2021 Windscreen', price: 2200 },
            { brand: 'Ford', type: 'Windscreen', title: 'Ford Fiesta 2009-2017 Windscreen', price: 1800 },
            { brand: 'Ford', type: 'Windscreen', title: 'Ford Figo 2010-2015 Windscreen', price: 1500 },
            { brand: 'Ford', type: 'Windscreen', title: 'Ford Focus 2011-2018 Windscreen', price: 2400 },
            { brand: 'Ford', type: 'Windscreen', title: 'Ford Ranger T6 2012-2022 Windscreen', price: 2600 },
            { brand: 'Ford', type: 'Windscreen', title: 'Ford Ranger T6 2012-2022 Windscreen Rain Sensor', price: 3200 },
            { brand: 'Ford', type: 'Windscreen', title: 'Ford Ranger Next Gen 2023+ Windscreen ADAS', price: 5800 },
            { brand: 'Ford', type: 'Rearscreen', title: 'Ford Ranger T6 Rear Screen Heated', price: 2400 },
            { brand: 'Ford', type: 'Cab Glass', title: 'Ford Ranger T6 Cab Rear Glass', price: 1800 },
            { brand: 'Ford', type: 'Cab Slider', title: 'Ford Ranger T6 Cab Slider Glass', price: 2200 },
            { brand: 'Ford', type: 'Door Glass', title: 'Ford Ranger T6 Front Door Glass', price: 1200 },
            // --- HAVAL ---
            { brand: 'Haval', type: 'Windscreen', title: 'Haval H2 2015-2020 Windscreen', price: 2800 },
            { brand: 'Haval', type: 'Windscreen', title: 'Haval Jolion 2021+ Windscreen', price: 3400 },
            { brand: 'Haval', type: 'Windscreen', title: 'Haval H6 2017+ Windscreen', price: 3200 },
            // --- HONDA ---
            { brand: 'Honda', type: 'Windscreen', title: 'Honda Ballade 2011-2020 Windscreen', price: 2200 },
            { brand: 'Honda', type: 'Windscreen', title: 'Honda Jazz 2009-2020 Windscreen', price: 2400 },
            { brand: 'Honda', type: 'Windscreen', title: 'Honda CRV 2012-2018 Windscreen', price: 3000 },
            { brand: 'Honda', type: 'Rearscreen', title: 'Honda Jazz 2009-2020 Rear Screen', price: 2200 },
            // --- HYUNDAI ---
            { brand: 'Hyundai', type: 'Windscreen', title: 'Hyundai Accent 2011-2017 Windscreen', price: 1600 },
            { brand: 'Hyundai', type: 'Windscreen', title: 'Hyundai Creta 2016-2021 Windscreen', price: 2400 },
            { brand: 'Hyundai', type: 'Windscreen', title: 'Hyundai Grand i10 2014-2020 Windscreen', price: 1500 },
            { brand: 'Hyundai', type: 'Windscreen', title: 'Hyundai i20 2015-2020 Windscreen', price: 1800 },
            { brand: 'Hyundai', type: 'Windscreen', title: 'Hyundai Tucson 2016-2021 Windscreen', price: 2800 },
            { brand: 'Hyundai', type: 'Windscreen', title: 'Hyundai Tucson 2022+ Windscreen ADAS', price: 5400 },
            { brand: 'Hyundai', type: 'Rearscreen', title: 'Hyundai i20 2015-2020 Rear Screen', price: 1600 },
            { brand: 'Hyundai', type: 'Rearscreen', title: 'Hyundai Tucson Rear Screen Heated', price: 2400 },
            { brand: 'Hyundai', type: 'Door Glass', title: 'Hyundai i20 Front Door Glass', price: 900 },
            // --- ISUZU ---
            { brand: 'Isuzu', type: 'Windscreen', title: 'Isuzu KB 2013-2020 Windscreen', price: 2200 },
            { brand: 'Isuzu', type: 'Windscreen', title: 'Isuzu D-Max 2021+ Windscreen', price: 3000 },
            { brand: 'Isuzu', type: 'Windscreen', title: 'Isuzu D-Max 2021+ Windscreen ADAS', price: 5600 },
            { brand: 'Isuzu', type: 'Cab Glass', title: 'Isuzu KB Cab Rear Glass', price: 1600 },
            { brand: 'Isuzu', type: 'Cab Slider', title: 'Isuzu KB Cab Slider', price: 2000 },
            { brand: 'Isuzu', type: 'Door Glass', title: 'Isuzu KB Front Door Glass', price: 1100 },
            // --- KIA ---
            { brand: 'Kia', type: 'Windscreen', title: 'Kia Picanto 2011-2017 Windscreen', price: 1500 },
            { brand: 'Kia', type: 'Windscreen', title: 'Kia Rio 2012-2017 Windscreen', price: 1800 },
            { brand: 'Kia', type: 'Windscreen', title: 'Kia Seltos 2020+ Windscreen', price: 2800 },
            { brand: 'Kia', type: 'Windscreen', title: 'Kia Sportage 2016-2021 Windscreen', price: 2600 },
            { brand: 'Kia', type: 'Rearscreen', title: 'Kia Sportage Rear Screen Heated', price: 2200 },
            // --- MAZDA ---
            { brand: 'Mazda', type: 'Windscreen', title: 'Mazda 2 2015-2023 Windscreen', price: 2200 },
            { brand: 'Mazda', type: 'Windscreen', title: 'Mazda 3 2014-2019 Windscreen', price: 2600 },
            { brand: 'Mazda', type: 'Windscreen', title: 'Mazda CX-5 2017+ Windscreen', price: 3200 },
            { brand: 'Mazda', type: 'Windscreen', title: 'Mazda BT-50 2012-2020 Windscreen', price: 2400 },
            // --- MERCEDES ---
            { brand: 'Mercedes', type: 'Windscreen', title: 'Mercedes C-Class W204 2007-2014 Windscreen', price: 3400 },
            { brand: 'Mercedes', type: 'Windscreen', title: 'Mercedes C-Class W205 2014-2021 Windscreen', price: 4200 },
            { brand: 'Mercedes', type: 'Windscreen', title: 'Mercedes C-Class W205 Windscreen Rain Sensor', price: 5000 },
            { brand: 'Mercedes', type: 'Windscreen', title: 'Mercedes A-Class W176 2013-2018 Windscreen', price: 3600 },
            { brand: 'Mercedes', type: 'Windscreen', title: 'Mercedes GLA 2014-2020 Windscreen', price: 4000 },
            { brand: 'Mercedes', type: 'Rearscreen', title: 'Mercedes C-Class W204 Rear Screen', price: 3200 },
            { brand: 'Mercedes', type: 'Door Glass', title: 'Mercedes C-Class W205 Front Door Glass', price: 2000 },
            // --- NISSAN ---
            { brand: 'Nissan', type: 'Windscreen', title: 'Nissan Almera 2013-2020 Windscreen', price: 1600 },
            { brand: 'Nissan', type: 'Windscreen', title: 'Nissan NP200 2009-2021 Windscreen', price: 1400 },
            { brand: 'Nissan', type: 'Windscreen', title: 'Nissan NP300 Hardbody 2008+ Windscreen', price: 1600 },
            { brand: 'Nissan', type: 'Windscreen', title: 'Nissan Navara 2016+ Windscreen', price: 2800 },
            { brand: 'Nissan', type: 'Windscreen', title: 'Nissan Qashqai 2014-2021 Windscreen', price: 2600 },
            { brand: 'Nissan', type: 'Windscreen', title: 'Nissan X-Trail 2014-2021 Windscreen', price: 2800 },
            { brand: 'Nissan', type: 'Cab Glass', title: 'Nissan NP300 Cab Rear Glass', price: 1400 },
            { brand: 'Nissan', type: 'Door Glass', title: 'Nissan NP200 Front Door Glass', price: 800 },
            // --- OPEL ---
            { brand: 'Opel', type: 'Windscreen', title: 'Opel Corsa D 2006-2014 Windscreen', price: 1800 },
            { brand: 'Opel', type: 'Windscreen', title: 'Opel Corsa E 2015-2019 Windscreen', price: 2200 },
            { brand: 'Opel', type: 'Windscreen', title: 'Opel Astra J 2010-2015 Windscreen', price: 2400 },
            // --- RENAULT ---
            { brand: 'Renault', type: 'Windscreen', title: 'Renault Clio 4 2013-2019 Windscreen', price: 2200 },
            { brand: 'Renault', type: 'Windscreen', title: 'Renault Kwid 2016+ Windscreen', price: 1500 },
            { brand: 'Renault', type: 'Windscreen', title: 'Renault Sandero 2009-2020 Windscreen', price: 1600 },
            { brand: 'Renault', type: 'Windscreen', title: 'Renault Duster 2013-2020 Windscreen', price: 2200 },
            // --- SUZUKI ---
            { brand: 'Suzuki', type: 'Windscreen', title: 'Suzuki Swift 2011-2017 Windscreen', price: 1800 },
            { brand: 'Suzuki', type: 'Windscreen', title: 'Suzuki Vitara 2015+ Windscreen', price: 2600 },
            { brand: 'Suzuki', type: 'Windscreen', title: 'Suzuki Jimny 2019+ Windscreen', price: 2800 },
            // --- TOYOTA ---
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota Corolla Quest 2014-2020 Windscreen', price: 1600 },
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota Corolla Cross 2021+ Windscreen', price: 3200 },
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota Corolla Cross 2021+ Windscreen ADAS', price: 5600 },
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota Etios 2012-2020 Windscreen', price: 1500 },
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota Fortuner 2005-2015 Windscreen', price: 2200 },
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota Fortuner 2016+ Windscreen', price: 3000 },
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota Hilux GD6 2016+ Windscreen', price: 2600 },
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota Hilux GD6 2016+ Windscreen Rain Sensor', price: 3400 },
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota RAV4 2013-2018 Windscreen', price: 2800 },
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota Starlet 2020+ Windscreen', price: 2200 },
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota Urban Cruiser 2020+ Windscreen', price: 2400 },
            { brand: 'Toyota', type: 'Windscreen', title: 'Toyota Yaris 2006-2011 Windscreen', price: 1600 },
            { brand: 'Toyota', type: 'Rearscreen', title: 'Toyota Corolla Quest Rear Screen', price: 1400 },
            { brand: 'Toyota', type: 'Rearscreen', title: 'Toyota Fortuner 2016+ Rear Screen Heated', price: 2600 },
            { brand: 'Toyota', type: 'Rearscreen', title: 'Toyota Hilux GD6 Rear Screen', price: 2200 },
            { brand: 'Toyota', type: 'Cab Glass', title: 'Toyota Hilux GD6 Cab Rear Glass', price: 1600 },
            { brand: 'Toyota', type: 'Cab Slider', title: 'Toyota Hilux GD6 Cab Slider', price: 2000 },
            { brand: 'Toyota', type: 'Door Glass', title: 'Toyota Hilux GD6 Front Door Glass', price: 1200 },
            { brand: 'Toyota', type: 'Door Glass', title: 'Toyota Corolla Quest Front Door Glass', price: 900 },
            // --- VW ---
            { brand: 'VW', type: 'Windscreen', title: 'VW Polo Vivo 2010-2017 Windscreen', price: 1500 },
            { brand: 'VW', type: 'Windscreen', title: 'VW Polo Vivo 2018+ Windscreen', price: 1800 },
            { brand: 'VW', type: 'Windscreen', title: 'VW Polo 2010-2017 Windscreen', price: 1800 },
            { brand: 'VW', type: 'Windscreen', title: 'VW Polo 2018+ Windscreen Rain Sensor', price: 3200 },
            { brand: 'VW', type: 'Windscreen', title: 'VW Golf 7 2013-2020 Windscreen', price: 3000 },
            { brand: 'VW', type: 'Windscreen', title: 'VW Golf 7 2013-2020 Windscreen Rain Sensor', price: 3600 },
            { brand: 'VW', type: 'Windscreen', title: 'VW Tiguan 2016+ Windscreen', price: 3400 },
            { brand: 'VW', type: 'Windscreen', title: 'VW Tiguan 2016+ Windscreen ADAS', price: 6200 },
            { brand: 'VW', type: 'Windscreen', title: 'VW Amarok 2010-2022 Windscreen', price: 2800 },
            { brand: 'VW', type: 'Windscreen', title: 'VW T-Cross 2019+ Windscreen', price: 2800 },
            { brand: 'VW', type: 'Windscreen', title: 'VW T-Roc 2018+ Windscreen', price: 3200 },
            { brand: 'VW', type: 'Windscreen', title: 'VW Caddy 2015+ Windscreen', price: 2400 },
            { brand: 'VW', type: 'Rearscreen', title: 'VW Polo Vivo 2010-2017 Rear Screen', price: 1400 },
            { brand: 'VW', type: 'Rearscreen', title: 'VW Golf 7 Rear Screen Heated', price: 2600 },
            { brand: 'VW', type: 'Door Glass', title: 'VW Polo Vivo Front Door Glass', price: 800 },
            { brand: 'VW', type: 'Door Glass', title: 'VW Golf 7 Front Door Glass', price: 1400 },
            // --- CHERY ---
            { brand: 'Chery', type: 'Windscreen', title: 'Chery Tiggo 4 Pro 2021+ Windscreen', price: 2800 },
            { brand: 'Chery', type: 'Windscreen', title: 'Chery Tiggo 7 Pro 2021+ Windscreen', price: 3200 },
            // --- DATSUN ---
            { brand: 'Datsun', type: 'Windscreen', title: 'Datsun Go 2014-2022 Windscreen', price: 1400 },
            { brand: 'Datsun', type: 'Windscreen', title: 'Datsun Go+ 2014-2022 Windscreen', price: 1500 },
            // --- CITROEN ---
            { brand: 'Citroen', type: 'Windscreen', title: 'Citroen C3 2017+ Windscreen', price: 2400 },
            { brand: 'Citroen', type: 'Windscreen', title: 'Citroen C4 Cactus 2014-2020 Windscreen', price: 2800 },
            // --- PEUGEOT ---
            { brand: 'Peugeot', type: 'Windscreen', title: 'Peugeot 208 2013-2019 Windscreen', price: 2200 },
            { brand: 'Peugeot', type: 'Windscreen', title: 'Peugeot 2008 2014-2019 Windscreen', price: 2600 },
            // --- MAHINDRA ---
            { brand: 'Mahindra', type: 'Windscreen', title: 'Mahindra Scorpio Pik-Up Windscreen', price: 2200 },
            { brand: 'Mahindra', type: 'Windscreen', title: 'Mahindra XUV700 2021+ Windscreen', price: 3800 },
            // --- MITSUBISHI ---
            { brand: 'Mitsubishi', type: 'Windscreen', title: 'Mitsubishi ASX 2010-2020 Windscreen', price: 2600 },
            { brand: 'Mitsubishi', type: 'Windscreen', title: 'Mitsubishi Triton 2015+ Windscreen', price: 2800 },
            { brand: 'Mitsubishi', type: 'Cab Glass', title: 'Mitsubishi Triton Cab Rear Glass', price: 1600 },
            // --- LAND ROVER ---
            { brand: 'Land Rover', type: 'Windscreen', title: 'Land Rover Discovery Sport 2015+ Windscreen', price: 5200 },
            { brand: 'Land Rover', type: 'Windscreen', title: 'Land Rover Evoque 2012-2019 Windscreen', price: 4800 },
            // --- JEEP ---
            { brand: 'Jeep', type: 'Windscreen', title: 'Jeep Renegade 2015+ Windscreen', price: 3400 },
            { brand: 'Jeep', type: 'Windscreen', title: 'Jeep Compass 2017+ Windscreen', price: 3600 },
            // --- SUBARU ---
            { brand: 'Subaru', type: 'Windscreen', title: 'Subaru XV 2012-2021 Windscreen', price: 3200 },
            { brand: 'Subaru', type: 'Windscreen', title: 'Subaru Forester 2013-2018 Windscreen', price: 3400 },
            // --- VOLVO ---
            { brand: 'Volvo', type: 'Windscreen', title: 'Volvo XC40 2018+ Windscreen ADAS', price: 7200 },
            { brand: 'Volvo', type: 'Windscreen', title: 'Volvo XC60 2017+ Windscreen ADAS', price: 7800 },
            // --- FIAT ---
            { brand: 'Fiat', type: 'Windscreen', title: 'Fiat 500 2008-2019 Windscreen', price: 2400 },
            { brand: 'Fiat', type: 'Windscreen', title: 'Fiat Tipo 2016+ Windscreen', price: 2200 },
            // --- GWM ---
            { brand: 'GWM', type: 'Windscreen', title: 'GWM Steed 5 2012+ Windscreen', price: 1800 },
            { brand: 'GWM', type: 'Windscreen', title: 'GWM P-Series 2020+ Windscreen', price: 2600 },
            { brand: 'GWM', type: 'Cab Glass', title: 'GWM Steed 5 Cab Rear Glass', price: 1400 },
            // --- BENTLEY ---
            { brand: 'Bentley', type: 'Windscreen', title: 'Bentley Continental GT 2003-2017 Windscreen', price: 12000 },
            { brand: 'Bentley', type: 'Windscreen', title: 'Bentley Bentayga 2016+ Windscreen', price: 15000 },
            // --- JAGUAR ---
            { brand: 'Jaguar', type: 'Windscreen', title: 'Jaguar F-Pace 2016+ Windscreen', price: 5800 },
            { brand: 'Jaguar', type: 'Windscreen', title: 'Jaguar XE 2015+ Windscreen', price: 5200 },
            { brand: 'Jaguar', type: 'Windscreen', title: 'Jaguar XF 2008-2015 Windscreen', price: 4600 },
            { brand: 'Jaguar', type: 'Windscreen', title: 'Jaguar E-Pace 2018+ Windscreen', price: 5600 },
            { brand: 'Jaguar', type: 'Rearscreen', title: 'Jaguar XE Rear Screen Heated', price: 3800 },
            // --- LAMBORGHINI ---
            { brand: 'Lamborghini', type: 'Windscreen', title: 'Lamborghini Huracan 2014+ Windscreen', price: 28000 },
            { brand: 'Lamborghini', type: 'Windscreen', title: 'Lamborghini Urus 2018+ Windscreen', price: 32000 },
            { brand: 'Lamborghini', type: 'Rearscreen', title: 'Lamborghini Urus Rear Screen', price: 18000 },
            // --- MAN TRUCK ---
            { brand: 'MAN Truck', type: 'Windscreen', title: 'MAN TGA Truck Windscreen', price: 4800 },
            { brand: 'MAN Truck', type: 'Windscreen', title: 'MAN TGS Truck Windscreen', price: 5200 },
            { brand: 'MAN Truck', type: 'Windscreen', title: 'MAN TGX Truck Windscreen', price: 5600 },
            { brand: 'MAN Truck', type: 'Door Glass', title: 'MAN TGA Door Glass', price: 2400 },
            // --- MASERATI ---
            { brand: 'Maserati', type: 'Windscreen', title: 'Maserati Ghibli 2013+ Windscreen', price: 9800 },
            { brand: 'Maserati', type: 'Windscreen', title: 'Maserati Levante 2016+ Windscreen', price: 11000 },
            { brand: 'Maserati', type: 'Rearscreen', title: 'Maserati Ghibli Rear Screen', price: 6200 },
            // --- NISSAN UD TRUCK ---
            { brand: 'Nissan UD Truck', type: 'Windscreen', title: 'Nissan UD 40 Truck Windscreen', price: 3800 },
            { brand: 'Nissan UD Truck', type: 'Windscreen', title: 'Nissan UD 80 Truck Windscreen', price: 4200 },
            { brand: 'Nissan UD Truck', type: 'Windscreen', title: 'Nissan UD 90 Truck Windscreen', price: 4600 },
            { brand: 'Nissan UD Truck', type: 'Door Glass', title: 'Nissan UD Truck Door Glass', price: 2200 },
            // --- PORSCHE ---
            { brand: 'Porsche', type: 'Windscreen', title: 'Porsche Cayenne 2010-2017 Windscreen', price: 8500 },
            { brand: 'Porsche', type: 'Windscreen', title: 'Porsche Cayenne 2018+ Windscreen ADAS', price: 14000 },
            { brand: 'Porsche', type: 'Windscreen', title: 'Porsche Macan 2014+ Windscreen', price: 7800 },
            { brand: 'Porsche', type: 'Windscreen', title: 'Porsche 911 2012+ Windscreen', price: 12000 },
            { brand: 'Porsche', type: 'Rearscreen', title: 'Porsche Cayenne Rear Screen', price: 5600 },
            // --- SCANIA ---
            { brand: 'Scania', type: 'Windscreen', title: 'Scania R-Series Truck Windscreen', price: 5400 },
            { brand: 'Scania', type: 'Windscreen', title: 'Scania G-Series Truck Windscreen', price: 5200 },
            { brand: 'Scania', type: 'Windscreen', title: 'Scania P-Series Truck Windscreen', price: 4800 },
            { brand: 'Scania', type: 'Door Glass', title: 'Scania Truck Door Glass', price: 2600 },
        ];

        // Extract unique brands sorted alphabetically
        const brands = [...new Set(shopProducts.map(p => p.brand))].sort();
        const brandFiltersEl = document.getElementById('brandFilters');
        if (brandFiltersEl) {
            brands.forEach(b => {
                const lbl = document.createElement('label');
                lbl.className = 'sidebar-check';
                lbl.innerHTML = '<input type="checkbox" value="' + b + '"> ' + b + ' Windscreen';
                brandFiltersEl.appendChild(lbl);
            });
        }

        // Filter state
        function getFilters() {
            const search = (document.getElementById('shopSearch') || {}).value || '';
            const minP = parseInt((document.getElementById('priceMin') || {}).value) || 200;
            const maxP = parseInt((document.getElementById('priceMax') || {}).value) || 170000;
            const types = [];
            document.querySelectorAll('#typeFilters input:checked').forEach(cb => types.push(cb.value));
            const selBrands = [];
            document.querySelectorAll('#brandFilters input:checked').forEach(cb => selBrands.push(cb.value));
            const sort = (document.getElementById('shopSort') || {}).value || 'default';
            return { search: search.toLowerCase().trim(), minP, maxP, types, selBrands, sort };
        }

        function filterProducts() {
            const f = getFilters();
            let results = shopProducts.filter(p => {
                if (f.search && !p.title.toLowerCase().includes(f.search) && !p.brand.toLowerCase().includes(f.search)) return false;
                if (p.price < f.minP || p.price > f.maxP) return false;
                if (f.types.length > 0 && !f.types.includes(p.type)) return false;
                if (f.selBrands.length > 0 && !f.selBrands.includes(p.brand)) return false;
                return true;
            });

            // Sort
            if (f.sort === 'price-asc') results.sort((a, b) => a.price - b.price);
            else if (f.sort === 'price-desc') results.sort((a, b) => b.price - a.price);
            else if (f.sort === 'name-asc') results.sort((a, b) => a.title.localeCompare(b.title));
            else if (f.sort === 'name-desc') results.sort((a, b) => b.title.localeCompare(a.title));

            return results;
        }

        function renderShop() {
            const results = filterProducts();
            const total = results.length;
            const totalPages = Math.ceil(total / PER_PAGE) || 1;
            if (currentPage2 > totalPages) currentPage2 = totalPages;
            const start = (currentPage2 - 1) * PER_PAGE;
            const pageItems = results.slice(start, start + PER_PAGE);
            const end = start + pageItems.length;

            // Result count
            const countEl = document.getElementById('resultCount');
            if (countEl) countEl.textContent = 'Showing ' + (total ? start + 1 : 0) + '\u2013' + end + ' of ' + total + ' results';

            // Check what's in existing cart
            const existing = JSON.parse(localStorage.getItem('cartItems') || '[]');
            const cartNames = existing.map(i => i.name);

            // Render cards
            shopGrid.innerHTML = pageItems.map(p => {
                const inCart = cartNames.includes(p.title);
                const priceFormatted = 'R' + p.price.toLocaleString('en-ZA') + '.00';
                return '<div class="product-card">' +
                    '<div class="product-card-img"><i class="fas fa-car product-placeholder"></i></div>' +
                    '<div class="product-card-body">' +
                        '<span class="product-card-brand">' + p.brand + ' ' + p.type + '</span>' +
                        '<h4 class="product-card-title">' + p.title + '</h4>' +
                        '<div class="product-card-price">' + priceFormatted + '</div>' +
                        '<button class="btn-add-cart' + (inCart ? ' added' : '') + '" data-name="' + p.title.replace(/"/g, '&quot;') + '" data-price="' + priceFormatted + '">' +
                            (inCart ? '<i class="fas fa-check"></i> Added to basket' : 'Add to basket') +
                        '</button>' +
                    '</div>' +
                '</div>';
            }).join('');

            // Wire add-to-cart buttons
            shopGrid.querySelectorAll('.btn-add-cart:not(.added)').forEach(btn => {
                btn.addEventListener('click', function() {
                    const name = this.dataset.name;
                    const price = this.dataset.price;
                    if (typeof addToCart === 'function') {
                        addToCart(name, price);
                    } else {
                        let items = JSON.parse(localStorage.getItem('cartItems') || '[]');
                        if (!items.some(i => i.name === name)) {
                            items.push({ name, price });
                            localStorage.setItem('cartItems', JSON.stringify(items));
                        }
                    }
                    this.classList.add('added');
                    this.innerHTML = '<i class="fas fa-check"></i> Added to basket';
                });
            });

            // Pagination
            const pagEl = document.getElementById('shopPagination');
            if (pagEl) {
                if (totalPages <= 1) { pagEl.innerHTML = ''; return; }
                let pagHTML = '';
                if (currentPage2 > 1) pagHTML += '<button data-page="' + (currentPage2 - 1) + '">&laquo;</button>';
                for (let i = 1; i <= totalPages; i++) {
                    if (totalPages > 7 && i > 3 && i < totalPages - 2 && Math.abs(i - currentPage2) > 1) {
                        if (i === 4 || i === totalPages - 3) pagHTML += '<button disabled>…</button>';
                        continue;
                    }
                    pagHTML += '<button data-page="' + i + '"' + (i === currentPage2 ? ' class="active"' : '') + '>' + i + '</button>';
                }
                if (currentPage2 < totalPages) pagHTML += '<button data-page="' + (currentPage2 + 1) + '">&raquo;</button>';
                pagEl.innerHTML = pagHTML;
                pagEl.querySelectorAll('button[data-page]').forEach(btn => {
                    btn.addEventListener('click', function() {
                        currentPage2 = parseInt(this.dataset.page);
                        renderShop();
                        shopGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    });
                });
            }
        }

        // Price range slider logic
        const priceMinSlider = document.getElementById('priceMin');
        const priceMaxSlider = document.getElementById('priceMax');
        const priceMinVal = document.getElementById('priceMinVal');
        const priceMaxVal = document.getElementById('priceMaxVal');

        function updatePriceRange() {
            let minV = parseInt(priceMinSlider.value);
            let maxV = parseInt(priceMaxSlider.value);
            if (minV > maxV) { const t = minV; minV = maxV; maxV = t; }
            if (priceMinVal) priceMinVal.textContent = minV.toLocaleString('en-ZA');
            if (priceMaxVal) priceMaxVal.textContent = maxV.toLocaleString('en-ZA');
            currentPage2 = 1;
            renderShop();
        }

        if (priceMinSlider) priceMinSlider.addEventListener('input', updatePriceRange);
        if (priceMaxSlider) priceMaxSlider.addEventListener('input', updatePriceRange);

        // Wire filters
        const shopSearch = document.getElementById('shopSearch');
        const shopSort = document.getElementById('shopSort');
        if (shopSearch) shopSearch.addEventListener('input', function() { currentPage2 = 1; renderShop(); });
        if (shopSort) shopSort.addEventListener('change', function() { currentPage2 = 1; renderShop(); });
        document.querySelectorAll('#typeFilters input, #brandFilters input').forEach(cb => {
            cb.addEventListener('change', function() { currentPage2 = 1; renderShop(); });
        });

        // Reset filters
        const resetBtn = document.getElementById('resetFilters');
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                if (shopSearch) shopSearch.value = '';
                if (priceMinSlider) priceMinSlider.value = 200;
                if (priceMaxSlider) priceMaxSlider.value = 170000;
                if (priceMinVal) priceMinVal.textContent = '200';
                if (priceMaxVal) priceMaxVal.textContent = '170,000';
                if (shopSort) shopSort.value = 'default';
                document.querySelectorAll('#typeFilters input, #brandFilters input').forEach(cb => cb.checked = false);
                currentPage2 = 1;
                renderShop();
            });
        }

        // Mobile filter toggle
        const filterToggle = document.getElementById('filterToggle');
        const shopSidebar = document.getElementById('shopSidebar');
        const sidebarClose = document.getElementById('sidebarClose');
        if (filterToggle && shopSidebar) {
            filterToggle.addEventListener('click', function() { shopSidebar.classList.add('open'); });
        }
        if (sidebarClose && shopSidebar) {
            sidebarClose.addEventListener('click', function() { shopSidebar.classList.remove('open'); });
        }

        // Initial render
        renderShop();
    }

    // ==========================================
    // ACCOUNT SYSTEM
    // ==========================================
    const accountToggleBtn = document.getElementById('accountToggleBtn');
    const accountOverlay = document.getElementById('accountOverlay');
    const accountModal = document.getElementById('accountModal');
    const accountModalClose = document.getElementById('accountModalClose');

    function openAccount() {
        if (accountModal) accountModal.classList.add('open');
        if (accountOverlay) accountOverlay.classList.add('open');
        updateAccountView();
    }
    function closeAccount() {
        if (accountModal) accountModal.classList.remove('open');
        if (accountOverlay) accountOverlay.classList.remove('open');
    }

    if (accountToggleBtn) accountToggleBtn.addEventListener('click', openAccount);
    if (accountModalClose) accountModalClose.addEventListener('click', closeAccount);
    if (accountOverlay) accountOverlay.addEventListener('click', closeAccount);

    // Toggle between login/register forms
    const showRegisterBtn = document.getElementById('showRegister');
    const showLoginBtn = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const accountModalTitle = document.getElementById('accountModalTitle');

    if (showRegisterBtn) {
        showRegisterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (loginForm) loginForm.style.display = 'none';
            if (registerForm) registerForm.style.display = 'block';
            if (accountModalTitle) accountModalTitle.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
        });
    }
    if (showLoginBtn) {
        showLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (registerForm) registerForm.style.display = 'none';
            if (loginForm) loginForm.style.display = 'block';
            if (accountModalTitle) accountModalTitle.innerHTML = '<i class="fas fa-user"></i> Sign In';
        });
    }

    function updateAccountView() {
        var user = JSON.parse(localStorage.getItem('pgUser') || 'null');
        var loggedInView = document.getElementById('accountLoggedIn');
        if (user && loginForm && loggedInView) {
            loginForm.style.display = 'none';
            if (registerForm) registerForm.style.display = 'none';
            loggedInView.style.display = 'block';
            var nameEl = document.getElementById('accountUserName');
            var emailEl = document.getElementById('accountUserEmail');
            if (nameEl) nameEl.textContent = 'Welcome, ' + user.name + '!';
            if (emailEl) emailEl.textContent = user.email;
            if (accountModalTitle) accountModalTitle.innerHTML = '<i class="fas fa-user"></i> My Account';
            // Update nav button to show logged-in state
            if (accountToggleBtn) {
                accountToggleBtn.innerHTML = '<i class="fas fa-user-check"></i><span>' + user.name.split(' ')[0] + '</span>';
            }
        }
    }

    // Register
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = document.getElementById('regName').value.trim();
            var email = document.getElementById('regEmail').value.trim();
            var phone = document.getElementById('regPhone').value.trim();
            var pw = document.getElementById('regPassword').value;
            var confirm = document.getElementById('regConfirm').value;
            if (pw !== confirm) {
                showNotification('Passwords do not match');
                return;
            }
            var user = { name: name, email: email, phone: phone };
            localStorage.setItem('pgUser', JSON.stringify(user));
            showNotification('Account created! Welcome, ' + name);
            updateAccountView();
        });
    }

    // Login
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var email = document.getElementById('loginEmail').value.trim();
            // Simple localStorage-based login (check if user exists)
            var stored = JSON.parse(localStorage.getItem('pgUser') || 'null');
            if (stored && stored.email === email) {
                showNotification('Welcome back, ' + stored.name + '!');
                updateAccountView();
            } else {
                // Auto-create account with email as name for demo
                var user = { name: email.split('@')[0], email: email, phone: '' };
                localStorage.setItem('pgUser', JSON.stringify(user));
                showNotification('Signed in as ' + user.name);
                updateAccountView();
            }
        });
    }

    // Logout
    var logoutBtn = document.getElementById('accountLogout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('pgUser');
            if (accountToggleBtn) accountToggleBtn.innerHTML = '<i class="fas fa-user"></i><span>Account</span>';
            var loggedInView = document.getElementById('accountLoggedIn');
            if (loggedInView) loggedInView.style.display = 'none';
            if (loginForm) loginForm.style.display = 'block';
            if (accountModalTitle) accountModalTitle.innerHTML = '<i class="fas fa-user"></i> Sign In';
            showNotification('Logged out successfully');
        });
    }

    // Auto-check login state on load
    updateAccountView();

});
