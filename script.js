document.addEventListener('DOMContentLoaded', () => {

    // --- DATA STORE ---
    const dataStore = {
        translations: {
            en: {
                logo_text: "SniperTrader",
                nav_home: "Home",
                nav_features: "Features",
                nav_education: "Education",
                nav_resources: "Resources",
                nav_contact: "Contact",
                hero_title: "Start Trading Today and Earn from Anywhere in the World",
                hero_subtitle: "Join thousands of successful traders using our proven strategies and expert guidance to maximize your profits in the financial markets.",
                create_account_btn: "Create New Account",
                features_title: "Why Choose SniperTrader?",
                features_subtitle: "Our platform provides you with everything you need to succeed in the competitive world of trading.",
                education_title: "Trading Education Center",
                education_subtitle: "To become a successful trader, learn and practice these topics step by step.",
                tab_beginner: "Beginner",
                tab_intermediate: "Intermediate",
                tab_advanced: "Advanced",
                tab_strategies: "Strategies",
                tab_psychology: "Psychology",
                resources_title: "Helpful Resources",
                resources_subtitle: "Access our collection of tools and resources to enhance your trading experience.",
                risk_title: "Risk Warning and Disclaimer",
                footer_logo_text: "SniperTrader",
                footer_desc: "Your trusted partner in the world of trading. We provide education, tools, and support to help you succeed in the financial markets.",
                quick_links: "Quick Links",
                edu_resources: "Educational Resources",
                contact_us: "Contact Us",
                footer_copyright: "© 2024 SniperTrader. All rights reserved. Trading involves risk. Only risk capital you are prepared to lose.",
                welcome_title: "Welcome to SniperTrader!",
                welcome_message: "Your trusted companion on the journey to successful trading.",
                welcome_close_btn: "Get Started",
                contact_email_title: "Email Us",
                contact_phone_title: "Call Us",
                contact_address_title: "Our Address",
            },
            bn: {
                logo_text: "SniperTrader",
                nav_home: "হোম",
                nav_features: "ফিচারস",
                nav_education: "এডুকেশন",
                nav_resources: "রিসোর্স",
                nav_contact: "যোগাযোগ",
                hero_title: "আজই ট্রেডিং শুরু করুন এবং বিশ্বের যেকোনো প্রান্ত থেকে আয় করুন",
                // পরিবর্তন: hero_subtitle এর সম্পূর্ণ বাংলা অনুবাদ যোগ করা হয়েছে
                hero_subtitle: "আমাদের প্রমাণিত স্ট্র্যাটেজি এবং বিশেষজ্ঞ গাইডেন্স ব্যবহার করে হাজারো সফল ট্রেডারদের সাথে যোগ দিন এবং ফিনান্সিয়াল মার্কেটে আপনার মুনাফা সর্বোচ্চ করুন।",
                create_account_btn: "নতুন অ্যাকাউন্ট খুলুন",
                features_title: "কেন SniperTrader বেছে নিবেন?",
                features_subtitle: "প্রতিযোগিতামূলক ট্রেডিং জগতে সফল হওয়ার জন্য আমাদের প্ল্যাটফর্ম আপনাকে প্রয়োজনীয় সবকিছু সরবরাহ করে।",
                education_title: "ট্রেডিং এডুকেশন সেন্টার",
                education_subtitle: "একজন সফল ট্রেডার হতে, এই বিষয়গুলো ধাপে ধাপে শিখুন এবং অনুশীলন করুন।",
                tab_beginner: "বিগিনার",
                tab_intermediate: "ইন্টারমিডিয়েট",
                tab_advanced: "অ্যাডভান্সড",
                tab_strategies: "স্ট্র্যাটেজি",
                tab_psychology: "সাইকোলজি",
                resources_title: "সহায়ক রিসোর্সসমূহ",
                // পরিবর্তন: resources_subtitle এর বাংলা অনুবাদ যোগ করা হয়েছে
                resources_subtitle: "আপনার ট্রেডিং অভিজ্ঞতা বাড়াতে আমাদের টুলস এবং রিসোর্সের সংগ্রহ অ্যাক্সেস করুন।",
                risk_title: "ঝুঁকি সতর্কতা এবং দাবিত্যাগ",
                footer_logo_text: "SniperTrader",
                footer_desc: "ট্রেডিং জগতে আপনার বিশ্বস্ত সঙ্গী। আমরা আপনাকে ফিনান্সিয়াল মার্কেটে সফল হতে সাহায্য করার জন্য শিক্ষা, টুলস এবং সাপোর্ট প্রদান করি।",
                quick_links: "দ্রুত লিঙ্ক",
                edu_resources: "শিক্ষামূলক রিসোর্স",
                contact_us: "যোগাযোগ করুন",
                // পরিবর্তন: footer_copyright এর সম্পূর্ণ বাংলা অনুবাদ যোগ করা হয়েছে
                footer_copyright: "© 2024 SniperTrader. সর্বস্বত্ব সংরক্ষিত। ট্রেডিং ঝুঁকিপূর্ণ। শুধুমাত্র সেই পরিমাণ অর্থ ঝুঁকি নিন যা হারাতে আপনি প্রস্তুত।",
                welcome_title: "SniperTrader-এ স্বাগতম!",
                welcome_message: "আপনার সফল ট্রেডিং যাত্রার বিশ্বস্ত সঙ্গী।",
                welcome_close_btn: "শুরু করুন",
                contact_email_title: "আমাদের ইমেইল করুন",
                contact_phone_title: "আমাদের কল করুন",
                contact_address_title: "আমাদের ঠিকানা",
            }
        },
        content: {
            features: {
                en: [
                    { icon: "fas fa-chart-line", title: "Advanced Analytics", desc: "Access real-time market data, advanced charting tools, and technical indicators for accurate trading decisions." },
                    { icon: "fas fa-graduation-cap", title: "Expert Education", desc: "Learn from professional traders with years of experience through our comprehensive educational resources." },
                    { icon: "fas fa-lightbulb", title: "Smart Signals", desc: "Get accurate trading signals based on thorough market analysis and proven strategies." },
                    { icon: "fas fa-shield-alt", title: "Risk Management", desc: "Learn to protect your capital with our risk management strategies and tools." },
                    { icon: "fas fa-users", title: "Community Support", desc: "Join our active community of traders to share ideas, strategies, and get support." },
                    { icon: "fas fa-mobile-alt", title: "Mobile Friendly", desc: "Trade on the go with our mobile-optimized platform that works on any device." }
                ],
                bn: [
                    { icon: "fas fa-chart-line", title: "অ্যাডভান্সড অ্যানালিটিক্স", desc: "সঠিক ট্রেডিং সিদ্ধান্তের জন্য রিয়েল-টাইম মার্কেট ডেটা, উন্নত চার্টিং টুলস এবং টেকনিক্যাল ইন্ডিকেটর অ্যাক্সেস করুন।" },
                    { icon: "fas fa-graduation-cap", title: "বিশেষজ্ঞ শিক্ষা", desc: "আমাদের ব্যাপক শিক্ষামূলক রিসোর্সের মাধ্যমে বছরের পর বছর অভিজ্ঞতাসম্পন্ন পেশাদার ট্রেডারদের কাছ থেকে শিখুন।" },
                    { icon: "fas fa-lightbulb", title: "স্মার্ট সিগন্যাল", desc: "সম্পূর্ণ বাজার বিশ্লেষণ এবং প্রমাণিত কৌশলের উপর ভিত্তি করে সঠিক ট্রেডিং সিগন্যাল পান।" },
                    { icon: "fas fa-shield-alt", title: "ঝুঁকি ব্যবস্থাপনা", desc: "আমাদের ঝুঁকি ব্যবস্থাপনার কৌশল এবং সরঞ্জামগুলির সাহায্যে আপনার মূলধন রক্ষা করতে শিখুন।" },
                    { icon: "fas fa-users", title: "কমিউনিটি সাপোর্ট", desc: "ধারণা, কৌশল এবং সমর্থন পেতে আমাদের সক্রিয় ট্রেডার কমিউনিটিতে যোগ দিন।" },
                    { icon: "fas fa-mobile-alt", title: "মোবাইল ফ্রেন্ডলি", desc: "যেকোনো ডিভাইসে কাজ করে এমন আমাদের মোবাইল-অপ্টিমাইজড প্ল্যাটফর্মের সাথে চলতে চলতে ট্রেড করুন।" }
                ]
            },
            education: {
                beginner: {
                    en: [
                        { icon: 'fa-seedling', title: "The Absolute Basics", desc: "Understand what Forex trading is, how it works, and learn key terms like 'Pip', 'Leverage', and 'Margin' that form the foundation of your knowledge." },
                        { icon: 'fa-chart-pie', title: "Setting Up Your Tools", desc: "Learn how to choose a reliable broker, set up the MT4/MT5 trading platform, and configure your charts for effective analysis." },
                    ],
                    bn: [
                        { icon: 'fa-seedling', title: "ট্রেডিং এর ভিত্তি", desc: "ফরেক্স ট্রেডিং কী, এটি কীভাবে কাজ করে এবং 'পিপ', 'লিভারেজ', 'মার্জিন'-এর মতো মূল শব্দগুলো শিখুন যা আপনার জ্ঞানের ভিত্তি তৈরি করবে।" },
                        { icon: 'fa-chart-pie', title: "ট্রেডিং টুলস সেটআপ", desc: "কীভাবে একজন নির্ভরযোগ্য ব্রোকার পছন্দ করবেন, MT4/MT5 ট্রেডিং প্ল্যাটফর্ম সেটআপ করবেন এবং কার্যকর বিশ্লেষণের জন্য আপনার চার্ট কনফিগার করবেন তা শিখুন।" },
                    ]
                },
                intermediate: {
                    en: [
                        { icon: 'fa-mountain', title: "Technical Analysis", desc: "Master reading candlestick patterns, identifying trends with trendlines, and using key indicators like Moving Averages and RSI to predict market movements." },
                        { icon: 'fa-ruler-combined', title: "Support & Resistance", desc: "Learn to identify key price levels where the market is likely to reverse or pause. This is a core skill for finding high-probability entry and exit points." },
                    ],
                    bn: [
                        { icon: 'fa-mountain', title: "টেকনিক্যাল অ্যানালাইসিস", desc: "ক্যান্ডেলস্টিক প্যাটার্ন পড়া, ট্রেন্ডলাইন দিয়ে ট্রেন্ড চিহ্নিত করা এবং মুভিং এভারেজ ও RSI-এর মতো ইন্ডিকেটর ব্যবহার করে বাজারের গতিবিধি বোঝা শিখুন।" },
                        { icon: 'fa-ruler-combined', title: "সাপোর্ট ও রেসিস্ট্যান্স", desc: "মূল প্রাইস লেভেলগুলো শনাক্ত করতে শিখুন যেখান থেকে বাজার ঘুরে যেতে পারে। এটি ভালো এন্ট্রি এবং এক্সিট পয়েন্ট খোঁজার একটি মূল দক্ষতা।" },
                    ]
                },
                advanced: {
                    en: [
                        { icon: 'fa-wave-square', title: "Advanced Patterns", desc: "Go beyond basics to identify complex but powerful patterns like Head & Shoulders, Triangles, and Wedges to anticipate major market moves." },
                        { icon: 'fa-drafting-compass', title: "Supply & Demand", desc: "Learn the professional method of identifying price zones with a major imbalance of buyers and sellers, providing superior trading opportunities." },
                    ],
                    bn: [
                        { icon: 'fa-wave-square', title: "অ্যাডভান্সড প্যাটার্ন", desc: "হেড অ্যান্ড শোল্ডারস, ট্রাইএঙ্গেল এবং ওয়েজের মতো জটিল কিন্তু শক্তিশালী প্যাটার্ন শনাক্ত করে বাজারের বড় মুভমেন্টের পূর্বাভাস দিতে শিখুন।" },
                        { icon: 'fa-drafting-compass', title: "সাপ্লাই এবং ডিমান্ড", desc: "ক্রেতা এবং বিক্রেতার বড় ভারসাম্যহীনতা রয়েছে এমন প্রাইস জোন শনাক্ত করার পেশাদার পদ্ধতি শিখুন, যা আপনাকে সেরা ট্রেডিং সুযোগ দেবে।" },
                    ]
                },
                 strategies: {
                    en: [
                        { icon: 'fa-fist-raised', title: "Developing a Strategy", desc: "Combine your knowledge of analysis and risk to build a personal trading plan. Your strategy defines your rules for entry, exit, and money management." },
                        { icon: 'fa-exchange-alt', title: "Price Action Trading", desc: "Learn to trade based on pure price movement, freeing your charts from messy indicators and focusing on what the market is doing right now." },
                    ],
                    bn: [
                        { icon: 'fa-fist-raised', title: "ট্রেডিং স্ট্র্যাটেজি তৈরি", desc: "আপনার বিশ্লেষণ এবং ঝুঁকি ব্যবস্থাপনার জ্ঞানকে একত্রিত করে একটি ব্যক্তিগত ট্রেডিং প্ল্যান তৈরি করুন। যা আপনার এন্ট্রি, এক্সিট এবং অর্থ ব্যবস্থাপনার নিয়ম ঠিক করবে।" },
                        { icon: 'fa-exchange-alt', title: "প্রাইস অ্যাকশন ট্রেডিং", desc: "ইন্ডিকেটর ছাড়া শুধুমাত্র প্রাইসের গতিবিধি দেখে ট্রেড করতে শিখুন এবং মনোযোগ দিন বাজার এই মুহূর্তে কী করছে তার উপর।" },
                    ]
                },
                psychology: {
                    en: [
                        { icon: 'fa-brain', title: "Mastering Your Mind", desc: "Understand how emotions like fear and greed impact your decisions. Learn techniques to maintain discipline and make logical, not emotional, trades." },
                        { icon: 'fa-shield-alt', title: "Risk & Money Management", desc: "This is the key to survival. Learn how to calculate position size, set a proper stop-loss, and manage your capital to ensure long-term success." },
                    ],
                    bn: [
                        { icon: 'fa-brain', title: "নিজের মনকে নিয়ন্ত্রণ", desc: "বুঝতে শিখুন কীভাবে ভয় এবং লোভের মতো আবেগ আপনার সিদ্ধান্তকে প্রভাবিত করে। শৃঙ্খলা বজায় রাখা এবং আবেগ দিয়ে নয়, যুক্তি দিয়ে ট্রেড করার কৌশল শিখুন।" },
                        { icon: 'fa-shield-alt', title: "রিস্ক ও মানি ম্যানেজমেন্ট", desc: "এটাই ট্রেডিং-এ টিকে থাকার মূল চাবিকাঠি। কীভাবে পজিশন সাইজ গণনা করতে হয়, সঠিক স্টপ-লস সেট করতে হয় এবং দীর্ঘমেয়াদী সাফল্যের জন্য আপনার মূলধন পরিচালনা করতে হয় তা শিখুন।" },
                    ]
                }
            },
            resources: {
                en: [
                    { icon: "fas fa-user-plus", title: "Create New Account", link: "https://one.exnesstrack.org/a/z76hwk8dxo" },
                    { icon: "fas fa-exchange-alt", title: "How to Change Partner on Exness", link: "https://youware.com/project/0roy090aio" },
                    { icon: "fab fa-telegram", title: "Our Telegram Channel", link: "https://t.me/+rPYVSwVjt1FlOTY1" },
                    { icon: "fab fa-facebook", title: "Our Facebook Page", link: "https://www.facebook.com/Snipertraderoriginal" },
                    { icon: "fab fa-youtube", title: "Our YouTube Channel", link: "https://www.youtube.com/@Snipertraderoriginal" },
                    { icon: "fab fa-whatsapp", title: "WhatsApp Contact", link: "https://wa.me/+8801769930497" }
                ],
                bn: [
                    { icon: "fas fa-user-plus", title: "নতুন অ্যাকাউন্ট খুলুন", link: "https://one.exnesstrack.org/a/z76hwk8dxo" },
                    { icon: "fas fa-exchange-alt", title: "Exness-এ পার্টনার পরিবর্তন", link: "https://youware.com/project/0roy090aio" },
                    { icon: "fab fa-telegram", title: "আমাদের টেলিগ্রাম চ্যানেল", link: "https://t.me/+rPYVSwVjt1FlOTY1" },
                    { icon: "fab fa-facebook", title: "আমাদের ফেসবুক পেজ", link: "https://www.facebook.com/Snipertraderoriginal" },
                    { icon: "fab fa-youtube", title: "আমাদের ইউটিউব চ্যানেল", link: "https://www.youtube.com/@Snipertraderoriginal" },
                    { icon: "fab fa-whatsapp", title: "হোয়াটসঅ্যাপে যোগাযোগ", link: "https://wa.me/8801769930497" }
                ]
            },
            risk: {
                en: [
                    { title: "High Risk Investment", desc: "Leveraged trading magnifies both profits and risks. Small market movements can lead to the loss of your entire capital." },
                    { title: "Not Financial Advice", desc: "Information on this platform is for educational purposes only and not direct investment advice." },
                    { title: "Do Your Own Research", desc: "Blindly following signals is dangerous. Always conduct your own analysis before entering any trade." },
                    { title: "Past Performance", desc: "The historical success of any strategy does not guarantee future results. The market is highly volatile." }
                ],
                bn: [
                    { title: "উচ্চ ঝুঁকি বিনিয়োগ", desc: "লিভারেজ ট্রেডিং লাভ এবং ঝুঁকি উভয়কেই বহুগুণ বাড়িয়ে দেয়। সামান্য বাজার মুভমেন্ট আপনার সম্পূর্ণ মূলধন হারানোর কারণ হতে পারে।" },
                    { title: "আর্থিক পরামর্শ নয়", desc: "এই প্ল্যাটফর্মের তথ্য শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে। এটিকে সরাসরি বিনিয়োগ পরামর্শ হিসেবে বিবেচনা করা উচিত নয়।" },
                    { title: "নিজে গবেষণা করুন", desc: "অন্ধভাবে সিগন্যাল অনুসরণ করা বিপজ্জনক। যেকোনো ট্রেডে প্রবেশের আগে সর্বদা নিজের বিশ্লেষণ করুন।" },
                    { title: "অতীতের পারফরম্যান্স", desc: "যেকোনো কৌশলের ঐতিহাসিক সাফল্য ভবিষ্যতের ফলাফলের নিশ্চয়তা দেয় না। বাজার অত্যন্ত পরিবর্তনশীল।" }
                ]
            },
            contact: {
                email: { icon: 'fas fa-envelope', value: 'sheikhraselrobinofficial.bd@gmail.com', href: 'mailto:sheikhraselrobinofficial.bd@gmail.com' },
                phone: { icon: 'fas fa-phone', value: '8801769930497', href: 'tel:+8801769930497' },
                address: { icon: 'fas fa-map-marker-alt', value: 'Radhanagar, lepushipahi Road, Pabna Sadar' }
            }
        }
    };

    let currentLang = localStorage.getItem('lang') || 'bn';

    const dom = {
        html: document.documentElement,
        langBtn: document.getElementById('langBtn'),
        translatableElements: document.querySelectorAll('[data-key]'),
        featuresGrid: document.querySelector('.features-grid'),
        educationSection: document.getElementById('education'),
        resourcesList: document.querySelector('.resources-list'),
        riskWarningContent: document.getElementById('risk-warning-content'),
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),
        mainNav: document.getElementById('mainNav'),
        header: document.querySelector('header'),
        tabBtns: document.querySelectorAll('.tab-btn'),
        tabContents: document.querySelectorAll('.tab-content'),
        contactIconsContainer: document.querySelector('.contact-icons'),
        welcomeModal: document.getElementById('welcomeModal'),
        closeWelcomeBtn: document.getElementById('closeWelcomeBtn'),
        contactModal: document.getElementById('contactModal'),
        contactModalBody: document.getElementById('contactModalBody'),
        contactModalCloseBtn: document.querySelector('#contactModal .close-btn'),
    };

    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        dom.html.lang = lang;
        dom.langBtn.textContent = lang === 'bn' ? 'EN' : 'BN';

        dom.translatableElements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (dataStore.translations[lang]?.[key]) {
                el.textContent = dataStore.translations[lang][key];
            }
        });
        populateAllDynamicContent();
    };

    const populateAllDynamicContent = () => {
        populateFeatures();
        populateEducation();
        populateResources();
        populateRiskWarnings();
        observeAnimations();
    };

    const populateFeatures = () => {
        const data = dataStore.content.features[currentLang] || [];
        if (dom.featuresGrid) {
            dom.featuresGrid.innerHTML = data.map(item => `
                <div class="feature-card animate-on-scroll">
                    <div class="feature-icon"><i class="${item.icon}"></i></div>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>`).join('');
        }
    };

    const populateEducation = () => {
        const data = dataStore.content.education;
        Object.keys(data).forEach(category => {
            const container = document.getElementById(`${category}-tab`);
            if (container) {
                const categoryData = data[category][currentLang] || [];
                container.innerHTML = `<div class="education-grid">${categoryData.map(item => `
                    <div class="education-card animate-on-scroll">
                        <h3><i class="fas ${item.icon}"></i>${item.title}</h3>
                        <p>${item.desc}</p>
                    </div>`).join('')}
                </div>`;
            }
        });
    };
    
    const populateResources = () => {
        const data = dataStore.content.resources[currentLang] || [];
        if (dom.resourcesList) {
            dom.resourcesList.innerHTML = data.map(item => `
                <a href="${item.link}" class="resource-item animate-on-scroll" target="_blank">
                    <div class="resource-icon"><i class="${item.icon}"></i></div>
                    <div class="resource-content"><h3>${item.title}</h3></div>
                </a>`).join('');
        }
    };

    const populateRiskWarnings = () => {
        const data = dataStore.content.risk[currentLang] || [];
        if (dom.riskWarningContent) {
            dom.riskWarningContent.innerHTML = data.map(item => `
                <div class="warning-item animate-on-scroll">
                    <div class="warning-item-header">
                        <i class="fas fa-exclamation-triangle warning-item-icon"></i>
                        <h3>${item.title}</h3>
                    </div>
                    <p>${item.desc}</p>
                </div>`).join('');
        }
    };

    const openContactModal = (type) => {
        const contactInfo = dataStore.content.contact[type];
        const titleKey = `contact_${type}_title`;
        const title = dataStore.translations[currentLang][titleKey];
        
        let content;
        if (contactInfo.href) {
            content = `<a href="${contactInfo.href}">${contactInfo.value}</a>`;
        } else {
            content = `<p>${contactInfo.value}</p>`;
        }

        dom.contactModalBody.innerHTML = `
            <i class="${contactInfo.icon}"></i>
            <h3>${title}</h3>
            ${content}
        `;
        dom.contactModal.style.display = "block";
    };

    const closeModal = (modal) => {
        if(modal) modal.style.display = "none";
    };
    
    const observeAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    };

    // --- EVENT LISTENERS ---
    dom.langBtn.addEventListener('click', () => setLanguage(currentLang === 'bn' ? 'en' : 'bn'));
    dom.mobileMenuBtn.addEventListener('click', () => dom.mainNav.classList.toggle('active'));
    
    dom.closeWelcomeBtn.addEventListener('click', () => closeModal(dom.welcomeModal));
    dom.contactModalCloseBtn.addEventListener('click', () => closeModal(dom.contactModal));
    window.addEventListener('click', (e) => {
        if (e.target === dom.welcomeModal) closeModal(dom.welcomeModal);
        if (e.target === dom.contactModal) closeModal(dom.contactModal);
    });
    
    if (dom.contactIconsContainer) {
        dom.contactIconsContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.contact-icon-btn');
            if (button && button.dataset.contact) {
                openContactModal(button.dataset.contact);
            }
        });
    }

    dom.tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dom.tabBtns.forEach(b => b.classList.remove('active'));
            dom.tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const tabContent = document.getElementById(`${btn.dataset.tab}-tab`);
            if(tabContent) tabContent.classList.add('active');
        });
    });
    
    window.addEventListener('scroll', () => dom.header.classList.toggle('scrolled', window.scrollY > 50));

    dom.mainNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && dom.mainNav.classList.contains('active')) {
            dom.mainNav.classList.remove('active');
        }
    });

    // --- INITIALIZATION ---
    setLanguage(currentLang);

    if (!sessionStorage.getItem('welcomeShown')) {
        setTimeout(() => {
            if (dom.welcomeModal) dom.welcomeModal.style.display = 'block';
            sessionStorage.setItem('welcomeShown', 'true');
        }, 1500);
    }
});
