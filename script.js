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
                nav_premium: "Get Premium Service",
                hero_title: "Start Trading Today and Earn from Anywhere in the World",
                create_account_btn: "Create New Account",
                features_title: "Why Choose SniperTrader?",
                features_subtitle: "Elevate your trading journey with our proven strategies, expert support, and advanced tools.",
                education_title: "Trading Education Center",
                education_subtitle: "To become a successful trader, learn and practice these topics step by step.",
                tab_beginner: "Beginner",
                tab_intermediate: "Intermediate",
                tab_advanced: "Advanced",
                tab_strategies: "Strategies",
                tab_psychology: "Psychology",
                tab_gallery: "Gallery",
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
                partner_change_title_tag: "Change Partner - Sniper Trader",
                partner_change_title: "Change Exness Partner",
                partner_change_subtitle: "Follow the steps below to easily change your partner.",
                partner_login_btn: "Login to Request Partnership Change",
                new_partner_link_label: "New Partner's Link:",
                new_partner_wallet_label: "New Partner's Wallet Number:",
                copy_btn_text: "Copy",
                copied_btn_text: "Copied!",
                gallery_video_title: "Video Tutorials",
                gallery_video_desc: "Watch our video tutorials on our YouTube channel to learn visually.",
                gallery_update_title: "Latest Updates",
                gallery_update_desc: "Join our Telegram channel to get the latest market updates and signals.",
                trust_title: "The Foundation of Our Commitment",
                trust_subtitle: "We are committed to providing the highest quality of service, security, and transparency.",
                trust_item_1_title: "Security",
                trust_item_1_desc: "Your data and trading activities are completely secure.",
                trust_item_2_title: "Quality Education",
                trust_item_2_desc: "Verified educational materials created by experts.",
                trust_item_3_title: "Unwavering Support",
                trust_item_3_desc: "Our support team is always ready for any need.",
                trust_item_4_title: "Track Record of Success",
                trust_item_4_desc: "Our strategies have helped thousands of traders succeed.",
                footer_edu_beginner: "Beginner's Guide",
                footer_edu_tech: "Technical Analysis",
                footer_edu_risk: "Risk Management",
                footer_edu_strategy: "Trading Strategies",
                footer_edu_psychology: "Market Psychology",
                // Premium Page Translations
                premium_title_tag: "Premium Service - Sniper Trader",
                premium_main_title: "Join Our Premium Service",
                premium_subtitle: "Get exclusive access to daily signals, live classes, and expert support by joining our premium group.",
                premium_how_to_join_title: "How to Join",
                premium_step1_title: "Choose Your Path",
                premium_step1_option1_title: "For New Users",
                premium_step1_option1_desc: "If you don't have an Exness account with us, click the button below to create a new one under our partnership.",
                premium_step1_option2_title: "For Existing Exness Users",
                premium_step1_option2_desc: "If you already have an Exness account, you must change your partner to join us. Click the button for instructions.",
                premium_step1_option2_btn: "Change Partner",
                premium_step2_title: "Confirm Your Account",
                premium_step2_desc: "After creating or changing your account, contact us via WhatsApp or Telegram with your account number to verify. You will be added to the premium group upon successful verification.",
                premium_step2_btn: "Contact Us on WhatsApp",
                premium_benefits_title: "What You Get in the Premium Group"
            },
            bn: {
                logo_text: "SniperTrader",
                nav_home: "হোম",
                nav_features: "ফিচারস",
                nav_education: "এডুকেশন",
                nav_resources: "রিসোর্স",
                nav_contact: "যোগাযোগ",
                nav_premium: "প্রিমিয়াম সার্ভিস",
                hero_title: "আজই ট্রেডিং শুরু করুন এবং বিশ্বের যেকোনো প্রান্ত থেকে আয় করুন",
                create_account_btn: "নতুন অ্যাকাউন্ট খুলুন",
                features_title: "কেন SniperTrader বেছে নিবেন?",
                features_subtitle: "আমাদের প্রমাণিত কৌশল, বিশেষজ্ঞ সাপোর্ট এবং উন্নত টুলস ব্যবহার করে আপনার ট্রেডিং যাত্রাকে পরবর্তী স্তরে নিয়ে যান।",
                education_title: "ট্রেডিং এডুকেশন সেন্টার",
                education_subtitle: "একজন সফল ট্রেডার হতে, এই বিষয়গুলো ধাপে ধাপে শিখুন এবং অনুশীলন করুন।",
                tab_beginner: "বিগিনার",
                tab_intermediate: "ইন্টারমিডিয়েট",
                tab_advanced: "অ্যাডভান্সড",
                tab_strategies: "স্ট্র্যাটেজি",
                tab_psychology: "সাইকোলজি",
                tab_gallery: "গ্যালারী",
                resources_title: "সহায়ক রিসোর্সসমূহ",
                resources_subtitle: "আপনার ট্রেডিং অভিজ্ঞতা বাড়াতে আমাদের টুলস এবং রিসোর্সের সংগ্রহ অ্যাক্সেস করুন।",
                risk_title: "ঝুঁকি সতর্কতা এবং দাবিত্যাগ",
                footer_logo_text: "SniperTrader",
                footer_desc: "ট্রেডিং জগতে আপনার বিশ্বস্ত সঙ্গী। আমরা আপনাকে ফিনান্সিয়াল মার্কেটে সফল হতে সাহায্য করার জন্য শিক্ষা, টুলস এবং সাপোর্ট প্রদান করি।",
                quick_links: "দ্রুত লিঙ্ক",
                edu_resources: "শিক্ষামূলক রিসোর্স",
                contact_us: "যোগাযোগ করুন",
                footer_copyright: "© 2024 SniperTrader. সর্বস্বত্ব সংরক্ষিত। ট্রেডিং ঝুঁকিপূর্ণ। শুধুমাত্র সেই পরিমাণ অর্থ ঝুঁকি নিন যা হারাতে আপনি প্রস্তুত।",
                welcome_title: "SniperTrader-এ স্বাগতম!",
                welcome_message: "আপনার সফল ট্রেডিং যাত্রার বিশ্বস্ত সঙ্গী।",
                welcome_close_btn: "শুরু করুন",
                contact_email_title: "আমাদের ইমেইল করুন",
                contact_phone_title: "আমাদের কল করুন",
                contact_address_title: "আমাদের ঠিকানা",
                partner_change_title_tag: "পার্টনার পরিবর্তন - Sniper Trader",
                partner_change_title: "Exness পার্টনার পরিবর্তন",
                partner_change_subtitle: "নিচের ধাপগুলো অনুসরণ করে সহজেই আপনার পার্টনার পরিবর্তন করুন।",
                partner_login_btn: "পার্টনারশিপ পরিবর্তন অনুরোধ করতে লগইন করুন",
                new_partner_link_label: "নতুন পার্টনারের লিংক:",
                new_partner_wallet_label: "নতুন পার্টনারের ওয়ালেট নম্বর:",
                copy_btn_text: "কপি",
                copied_btn_text: "কপিকৃত!",
                gallery_video_title: "ভিডিও টিউটোরিয়াল",
                gallery_video_desc: "ভিডিও দেখে শিখতে আমাদের ইউটিউব চ্যানেলের টিউটোরিয়ালগুলো দেখুন।",
                gallery_update_title: "সর্বশেষ আপডেট",
                gallery_update_desc: "সর্বশেষ মার্কেট আপডেট ও সিগন্যাল পেতে আমাদের টেলিগ্রাম চ্যানেলে যোগ দিন।",
                trust_title: "আমাদের প্রতিশ্রুতির ভিত্তি",
                trust_subtitle: "আমরা সর্বোচ্চ মানের সেবা, নিরাপত্তা এবং স্বচ্ছতা প্রদানে অঙ্গীকারবদ্ধ।",
                trust_item_1_title: "নিরাপত্তা",
                trust_item_1_desc: "আপনার ডেটা এবং ট্রেডিং কার্যক্রম সম্পূর্ণ সুরক্ষিত।",
                trust_item_2_title: "মানসম্মত শিক্ষা",
                trust_item_2_desc: "বিশেষজ্ঞদের দ্বারা তৈরি পরীক্ষিত শিক্ষামূলক উপকরণ।",
                trust_item_3_title: "অবিচল সাপোর্ট",
                trust_item_3_desc: "যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিম সর্বদা প্রস্তুত।",
                trust_item_4_title: "সফলতার ট্র্যাক রেকর্ড",
                trust_item_4_desc: "আমাদের স্ট্র্যাটেজিগুলো হাজারো ট্রেডারকে সফল হতে সাহায্য করেছে।",
                footer_edu_beginner: "বিগিনার গাইড",
                footer_edu_tech: "টেকনিক্যাল অ্যানালাইসিস",
                footer_edu_risk: "রিস্ক ম্যানেজমেন্ট",
                footer_edu_strategy: "ট্রেডিং স্ট্র্যাটেজি",
                footer_edu_psychology: "মার্কেট সাইকোলজি",
                // Premium Page Translations
                premium_title_tag: "প্রিমিয়াম সার্ভিস - Sniper Trader",
                premium_main_title: "আমাদের প্রিমিয়াম সার্ভিসে যোগ দিন",
                premium_subtitle: "আমাদের প্রিমিয়াম গ্রুপে যোগ দিয়ে প্রতিদিনের সিগন্যাল, লাইভ ক্লাস এবং বিশেষজ্ঞ সাপোর্ট পান।",
                premium_how_to_join_title: "যেভাবে যোগ দেবেন",
                premium_step1_title: "ধাপ ১: আপনার পথ বেছে নিন",
                premium_step1_option1_title: "নতুন ব্যবহারকারীদের জন্য",
                premium_step1_option1_desc: "আপনার যদি আমাদের পার্টনারশিপের অধীনে কোনো Exness অ্যাকাউন্ট না থাকে, তাহলে নিচের বাটনে ক্লিক করে একটি নতুন অ্যাকাউন্ট তৈরি করুন।",
                premium_step1_option2_title: "বিদ্যমান Exness ব্যবহারকারীদের জন্য",
                premium_step1_option2_desc: "আপনার যদি ইতিমধ্যে একটি Exness অ্যাকাউন্ট থাকে, তাহলে আমাদের সাথে যোগ দিতে আপনাকে অবশ্যই আপনার পার্টনার পরিবর্তন করতে হবে। নির্দেশাবলীর জন্য নিচের বাটনে ক্লিক করুন।",
                premium_step1_option2_btn: "পার্টনার পরিবর্তন করুন",
                premium_step2_title: "ধাপ ২: আপনার অ্যাকাউন্ট নিশ্চিত করুন",
                premium_step2_desc: "আপনার অ্যাকাউন্ট তৈরি বা পরিবর্তন করার পরে, যাচাইকরণের জন্য আপনার অ্যাকাউন্ট নম্বর সহ WhatsApp বা Telegram-এ আমাদের সাথে যোগাযোগ করুন। সফল যাচাইয়ের পরেই আপনাকে প্রিমিয়াম গ্রুপে যুক্ত করা হবে।",
                premium_step2_btn: "WhatsApp-এ যোগাযোগ করুন",
                premium_benefits_title: "প্রিমিয়াম গ্রুপে যা যা পাচ্ছেন"
            }
        },
        content: {
            heroSubtitles: {
                en: [
                    "Join thousands of successful traders using our proven strategies and expert guidance.",
                    "The secret to successful trading is managing your emotions and sticking to your plan.",
                    "Learn to read the market, not to predict it. Opportunity follows analysis.",
                    "Patience is a trader's greatest virtue. Wait for the right setup.",
                    "Risk management is the key to longevity in the trading world.",
                    "Don't chase losses. Accept small losses to protect your capital for bigger wins.",
                    "The best traders have no ego. The market is always right.",
                    "Consistency is more important than big wins. Focus on a steady process."
                ],
                bn: [
                    "আমাদের প্রমাণিত স্ট্র্যাটেজি এবং বিশেষজ্ঞ গাইডেন্স ব্যবহার করে হাজারো সফল ট্রেডারদের সাথে যোগ দিন।",
                    "সফল ট্রেডিংয়ের গোপন রহস্য হলো আপনার আবেগ নিয়ন্ত্রণ করা এবং আপনার পরিকল্পনায় লেগে থাকা।",
                    "বাজারকে পড়তে শিখুন, ভবিষ্যদ্বাণী করতে নয়। সুযোগ বিশ্লেষণকে অনুসরণ করে।",
                    "ধৈর্য একজন ট্রেডারের সবচেয়ে বড় গুণ। সঠিক সেটআপের জন্য অপেক্ষা করুন।",
                    "ঝুঁকি ব্যবস্থাপনাই ট্রেডিং জগতে দীর্ঘায়ু লাভের চাবিকাঠি।",
                    "লোকসানের পিছু ছুটবেন না। বড় লাভের জন্য আপনার মূলধন রক্ষা করতে ছোট লোকসান মেনে নিন।",
                    "সেরা ট্রেডারদের কোনো অহংকার থাকে না। বাজার সবসময় সঠিক।",
                    "বড় লাভের চেয়ে ধারাবাহিকতা বেশি গুরুত্বপূর্ণ। একটি স্থির প্রক্রিয়ার উপর মনোযোগ দিন।"
                ]
            },
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
                    en: [ { icon: 'fa-seedling', title: "The Absolute Basics", desc: "Understand what Forex trading is, how it works, and learn key terms like 'Pip', 'Leverage', and 'Margin' that form the foundation of your knowledge." }, { icon: 'fa-chart-pie', title: "Setting Up Your Tools", desc: "Learn how to choose a reliable broker, set up the MT4/MT5 trading platform, and configure your charts for effective analysis." }, ],
                    bn: [ { icon: 'fa-seedling', title: "ট্রেডিং এর ভিত্তি", desc: "ফরেক্স ট্রেডিং কী, এটি কীভাবে কাজ করে এবং 'পিপ', 'লিভারেজ', 'মার্জিন'-এর মতো মূল শব্দগুলো শিখুন যা আপনার জ্ঞানের ভিত্তি তৈরি করবে।" }, { icon: 'fa-chart-pie', title: "ট্রেডিং টুলস সেটআপ", desc: "কীভাবে একজন নির্ভরযোগ্য ব্রোকার পছন্দ করবেন, MT4/MT5 ট্রেডিং প্ল্যাটফর্ম সেটআপ করবেন এবং কার্যকর বিশ্লেষণের জন্য আপনার চার্ট কনফিগার করবেন তা শিখুন।" }, ]
                },
                intermediate: {
                    en: [ { icon: 'fa-mountain', title: "Technical Analysis", desc: "Master reading candlestick patterns, identifying trends with trendlines, and using key indicators like Moving Averages and RSI to predict market movements." }, { icon: 'fa-ruler-combined', title: "Support & Resistance", desc: "Learn to identify key price levels where the market is likely to reverse or pause. This is a core skill for finding high-probability entry and exit points." }, ],
                    bn: [ { icon: 'fa-mountain', title: "টেকনিক্যাল অ্যানালাইসিস", desc: "ক্যান্ডেলস্টিক প্যাটার্ন পড়া, ট্রেন্ডলাইন দিয়ে ট্রেন্ড চিহ্নিত করা এবং মুভিং এভারেজ ও RSI-এর মতো ইন্ডিকেটর ব্যবহার করে বাজারের গতিবিধি বোঝা শিখুন।" }, { icon: 'fa-ruler-combined', title: "সাপোর্ট ও রেসিস্ট্যান্স", desc: "মূল প্রাইস লেভেলগুলো শনাক্ত করতে শিখুন যেখান থেকে বাজার ঘুরে যেতে পারে। এটি ভালো এন্ট্রি এবং এক্সিট পয়েন্ট খোঁজার একটি মূল দক্ষতা।" }, ]
                },
                advanced: {
                    en: [ { icon: 'fa-wave-square', title: "Advanced Patterns", desc: "Go beyond basics to identify complex but powerful patterns like Head & Shoulders, Triangles, and Wedges to anticipate major market moves." }, { icon: 'fa-drafting-compass', title: "Supply & Demand", desc: "Learn the professional method of identifying price zones with a major imbalance of buyers and sellers, providing superior trading opportunities." }, ],
                    bn: [ { icon: 'fa-wave-square', title: "অ্যাডভান্সড প্যাটার্ন", desc: "হেড অ্যান্ড শোল্ডারস, ট্রাইএঙ্গেল এবং ওয়েজের মতো জটিল কিন্তু শক্তিশালী প্যাটার্ন শনাক্ত করে বাজারের বড় মুভমেন্টের পূর্বাভাস দিতে শিখুন।" }, { icon: 'fa-drafting-compass', title: "সাপ্লাই এবং ডিমান্ড", desc: "ক্রেতা এবং বিক্রেতার বড় ভারসাম্যহীনতা রয়েছে এমন প্রাইস জোন শনাক্ত করার পেশাদার পদ্ধতি শিখুন, যা আপনাকে সেরা ট্রেডিং সুযোগ দেবে।" }, ]
                },
                 strategies: {
                    en: [ { icon: 'fa-fist-raised', title: "Developing a Strategy", desc: "Combine your knowledge of analysis and risk to build a personal trading plan. Your strategy defines your rules for entry, exit, and money management." }, { icon: 'fa-exchange-alt', title: "Price Action Trading", desc: "Learn to trade based on pure price movement, freeing your charts from messy indicators and focusing on what the market is doing right now." }, ],
                    bn: [ { icon: 'fa-fist-raised', title: "ট্রেডিং স্ট্র্যাটেজি তৈরি", desc: "আপনার বিশ্লেষণ এবং ঝুঁকি ব্যবস্থাপনার জ্ঞানকে একত্রিত করে একটি ব্যক্তিগত ট্রেডিং প্ল্যান তৈরি করুন। যা আপনার এন্ট্রি, এক্সিট এবং অর্থ ব্যবস্থাপনার নিয়ম ঠিক করবে।" }, { icon: 'fa-exchange-alt', title: "প্রাইস অ্যাকশন ট্রেডিং", desc: "ইন্ডিকেটর ছাড়া শুধুমাত্র প্রাইসের গতিবিধি দেখে ট্রেড করতে শিখুন এবং মনোযোগ দিন বাজার এই মুহূর্তে কী করছে তার উপর।" }, ]
                },
                psychology: {
                    en: [ { icon: 'fa-brain', title: "Mastering Your Mind", desc: "Understand how emotions like fear and greed impact your decisions. Learn techniques to maintain discipline and make logical, not emotional, trades." }, { icon: 'fa-shield-alt', title: "Risk & Money Management", desc: "This is the key to survival. Learn how to calculate position size, set a proper stop-loss, and manage your capital to ensure long-term success." }, ],
                    bn: [ { icon: 'fa-brain', title: "নিজের মনকে নিয়ন্ত্রণ", desc: "বুঝতে শিখুন কীভাবে ভয় এবং লোভের মতো আবেগ আপনার সিদ্ধান্তকে প্রভাবিত করে। শৃঙ্খলা বজায় রাখা এবং আবেগ দিয়ে নয়, যুক্তি দিয়ে ট্রেড করার কৌশল শিখুন।" }, { icon: 'fa-shield-alt', title: "রিস্ক ও মানি ম্যানেজমেন্ট", desc: "এটাই ট্রেডিং-এ টিকে থাকার মূল চাবিকাঠি। কীভাবে পজিশন সাইজ গণনা করতে হয়, সঠিক স্টপ-লস সেট করতে হয় এবং দীর্ঘমেয়াদী সাফল্যের জন্য আপনার মূলধন পরিচালনা করতে হয় তা শিখুন।" }, ]
                }
            },
            gallery: {
                en: [
                    { icon: "fa-youtube", title: "Video Tutorials", desc: "Watch our video tutorials on our YouTube channel to learn visually.", link: "https://www.youtube.com/@Snipertraderoriginal" },
                    { icon: "fa-telegram", title: "Latest Updates", desc: "Join our Telegram channel to get the latest market updates and signals.", link: "https://t.me/+rPYVSwVjt1FlOTY1" }
                ],
                bn: [
                    { icon: "fa-youtube", title: "ভিডিও টিউটোরিয়াল", desc: "ভিডিও দেখে শিখতে আমাদের ইউটিউব চ্যানেলের টিউটোরিয়ালগুলো দেখুন।", link: "https://www.youtube.com/@Snipertraderoriginal" },
                    { icon: "fa-telegram", title: "সর্বশেষ আপডেট", desc: "সর্বশেষ মার্কেট আপডেট ও সিগন্যাল পেতে আমাদের টেলিগ্রাম চ্যানেলে যোগ দিন।", link: "https://t.me/+rPYVSwVjt1FlOTY1" }
                ]
            },
            resources: {
                en: [
                    { icon: "fas fa-user-plus", title: "Create New Account", link: "https://one.exnesstrack.org/a/z76hwk8dxo" },
                    { icon: "fas fa-exchange-alt", title: "How to Change Partner on Exness", link: "partner-change.html" }, 
                    { icon: "fab fa-telegram", title: "Our Telegram Channel", link: "https://t.me/+rPYVSwVjt1FlOTY1" },
                    { icon: "fab fa-facebook", title: "Our Facebook Page", link: "https://www.facebook.com/Snipertraderoriginal" },
                    { icon: "fab fa-youtube", title: "Our YouTube Channel", link: "https://www.youtube.com/@Snipertraderoriginal" },
                    { icon: "fab fa-whatsapp", title: "WhatsApp Contact", link: "https://wa.me/+8801769930497" }
                ],
                bn: [
                    { icon: "fas fa-user-plus", title: "নতুন অ্যাকাউন্ট খুলুন", link: "https://one.exnesstrack.org/a/z76hwk8dxo" },
                    { icon: "fas fa-exchange-alt", title: "Exness-এ পার্টনার পরিবর্তন", link: "partner-change.html" },
                    { icon: "fab fa-telegram", title: "আমাদের টেলিগ্রাম চ্যানেল", link: "https://t.me/+rPYVSwVjt1FlOTY1" },
                    { icon: "fab fa-facebook", title: "আমাদের ফেসবুক পেজ", link: "https://www.facebook.com/Snipertraderoriginal" },
                    { icon: "fab fa-youtube", title: "আমাদের ইউটিউব চ্যানেল", link: "https://www.youtube.com/@Snipertraderoriginal" },
                    { icon: "fab fa-whatsapp", title: "হোয়াটসঅ্যাপে যোগাযোগ", link: "https://wa.me/8801769930497" }
                ]
            },
            risk: {
                en: [ { title: "High Risk Investment", desc: "Leveraged trading magnifies both profits and risks. Small market movements can lead to the loss of your entire capital." }, { title: "Not Financial Advice", desc: "Information on this platform is for educational purposes only and not direct investment advice." }, { title: "Do Your Own Research", desc: "Blindly following signals is dangerous. Always conduct your own analysis before entering any trade." }, { title: "Past Performance", desc: "The historical success of any strategy does not guarantee future results. The market is highly volatile." } ],
                bn: [ { title: "উচ্চ ঝুঁকি বিনিয়োগ", desc: "লিভারেজ ট্রেডিং লাভ এবং ঝুঁকি উভয়কেই বহুগুণ বাড়িয়ে দেয়। সামান্য বাজার মুভমেন্ট আপনার সম্পূর্ণ মূলধন হারানোর কারণ হতে পারে।" }, { title: "আর্থিক পরামর্শ নয়", desc: "এই প্ল্যাটফর্মের তথ্য শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে। এটিকে সরাসরি বিনিয়োগ পরামর্শ হিসেবে বিবেচনা করা উচিত নয়।" }, { title: "নিজে গবেষণা করুন", desc: "অন্ধভাবে সিগন্যাল অনুসরণ করা বিপজ্জনক। যেকোনো ট্রেডে প্রবেশের আগে সর্বদা নিজের বিশ্লেষণ করুন।" }, { title: "অতীতের পারফরম্যান্স", desc: "যেকোনো কৌশলের ঐতিহাসিক সাফল্য ভবিষ্যতের ফলাফলের নিশ্চয়তা দেয় না। বাজার অত্যন্ত পরিবর্তনশীল।" } ]
            },
            contact: {
                email: { icon: 'fas fa-envelope', value: 'sheikhraselrobinofficial.bd@gmail.com', href: 'mailto:sheikhraselrobinofficial.bd@gmail.com' },
                phone: { icon: 'fas fa-phone', value: '8801769930497', href: 'tel:+8801769930497' },
                address: { icon: 'fas fa-map-marker-alt', value: 'Radhanagar, lepushipahi Road, Pabna Sadar' }
            },
            premiumBenefits: {
                en: [
                    { icon: "fas fa-signal", title: "Daily Trading Signals", desc: "Receive high-probability trading signals every day to guide your decisions." },
                    { icon: "fas fa-chalkboard-teacher", title: "Live Trading Classes", desc: "Participate in live classes where we analyze the market and trade together." },
                    { icon: "fas fa-lightbulb", title: "Advanced Strategies", desc: "Learn exclusive and advanced trading strategies not available to the public." },
                    { icon: "fas fa-headset", title: "24/7 Priority Support", desc: "Get your questions answered anytime with our dedicated premium support." }
                ],
                bn: [
                    { icon: "fas fa-signal", title: "দৈনিক ট্রেডিং সিগন্যাল", desc: "আপনার সিদ্ধান্তকে গাইড করতে প্রতিদিন হাই-প্রোবাবিলিটি ট্রেডিং সিগন্যাল গ্রহণ করুন।" },
                    { icon: "fas fa-chalkboard-teacher", title: "লাইভ ট্রেডিং ক্লাস", desc: "লাইভ ক্লাসে অংশগ্রহণ করুন যেখানে আমরা একসাথে বাজার বিশ্লেষণ এবং ট্রেড করি।" },
                    { icon: "fas fa-lightbulb", title: "অ্যাডভান্সড স্ট্র্যাটেজি", desc: "বিশেষ এবং উন্নত ট্রেডিং কৌশল শিখুন যা পাবলিকলি পাওয়া যায় না।" },
                    { icon: "fas fa-headset", title: "২৪/৭ অগ্রাধিকার সাপোর্ট", desc: "আমাদের ডেডিকেটেড প্রিমিয়াম সাপোর্টের মাধ্যমে যেকোনো সময় আপনার প্রশ্নের উত্তর পান।" }
                ]
            }
        }
    };

    let currentLang = localStorage.getItem('lang') || 'bn';
    let subtitleInterval;

    const dom = {
        html: document.documentElement,
        body: document.body,
        langBtn: document.getElementById('langBtn'),
        themeSwitcherBtn: document.getElementById('themeSwitcherBtn'),
        translatableElements: document.querySelectorAll('[data-key]'),
        featuresGrid: document.querySelector('.features-grid'),
        educationSection: document.getElementById('education'),
        resourcesList: document.querySelector('.resources-list'),
        riskWarningContent: document.getElementById('risk-warning-content'),
        benefitsGrid: document.getElementById('benefits-grid'),
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

    const setTheme = (theme) => {
        localStorage.setItem('theme', theme);
        dom.body.classList.toggle('dark-mode', theme === 'dark');
        
        const icon = dom.themeSwitcherBtn.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    };

    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        dom.html.lang = lang;
        dom.langBtn.textContent = lang === 'bn' ? 'EN' : 'BN';

        const titleElement = document.querySelector('title');
        if (titleElement) {
            const titleKey = titleElement.getAttribute('data-key');
            if (titleKey && dataStore.translations[lang]?.[titleKey]) {
                titleElement.textContent = dataStore.translations[lang][titleKey];
            }
        }

        dom.translatableElements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (dataStore.translations[lang]?.[key]) {
                 if (el.tagName === 'INPUT' && el.type === 'button') {
                    el.value = dataStore.translations[lang][key];
                } else {
                    el.textContent = dataStore.translations[lang][key];
                }
            }
        });
        
        populateAllDynamicContent();
        startSubtitleRotation();
    };

    const startSubtitleRotation = () => {
        const subtitleEl = document.getElementById('rotating-subtitle');
        if (!subtitleEl) return;
        if (subtitleInterval) clearInterval(subtitleInterval);

        const subtitles = dataStore.content.heroSubtitles[currentLang];
        let currentIndex = 0;

        subtitleEl.textContent = subtitles[currentIndex];
        subtitleEl.classList.remove('fade-out');

        subtitleInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % subtitles.length;
            subtitleEl.classList.add('fade-out');
            setTimeout(() => {
                subtitleEl.textContent = subtitles[currentIndex];
                subtitleEl.classList.remove('fade-out');
            }, 500);
        }, 5000);
    };

    const populateAllDynamicContent = () => {
        populateFeatures();
        populateEducation();
        populateGallery(); 
        populateResources();
        populateRiskWarnings();
        populatePremiumBenefits();
        observeAnimations();
    };

    const populateFeatures = () => {
        if (!dom.featuresGrid) return;
        const data = dataStore.content.features[currentLang] || [];
        dom.featuresGrid.innerHTML = data.map(item => `
            <div class="feature-card animate-on-scroll">
                <div class="feature-icon"><i class="${item.icon}"></i></div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>`).join('');
    };
    
    const populatePremiumBenefits = () => {
        if (!dom.benefitsGrid) return;
        const data = dataStore.content.premiumBenefits[currentLang] || [];
        dom.benefitsGrid.innerHTML = data.map(item => `
            <div class="benefit-card">
                <i class="${item.icon} benefit-icon"></i>
                <div class="benefit-content">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
            </div>`).join('');
    };

    const populateEducation = () => {
        if (!dom.educationSection) return;
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
    
    const populateGallery = () => {
        const container = document.getElementById('gallery-tab');
        if (container) {
            const data = dataStore.content.gallery[currentLang] || [];
            container.innerHTML = `<div class="gallery-grid">${data.map(item => `
                <a href="${item.link}" target="_blank" class="gallery-card animate-on-scroll" style="text-decoration: none;">
                    <h3><i class="fab ${item.icon}"></i> ${item.title}</h3>
                    <p>${item.desc}</p>
                </a>`).join('')}
            </div>`;
        }
    };

    const populateResources = () => {
        if (!dom.resourcesList) return;
        const data = dataStore.content.resources[currentLang] || [];
        dom.resourcesList.innerHTML = data.map(item => `
            <a href="${item.link}" class="resource-item animate-on-scroll" target="${item.link.startsWith('http') ? '_blank' : '_self'}">
                <div class="resource-icon"><i class="${item.icon}"></i></div>
                <div class="resource-content"><h3>${item.title}</h3></div>
            </a>`).join('');
    };

    const populateRiskWarnings = () => {
        if (!dom.riskWarningContent) return;
        const data = dataStore.content.risk[currentLang] || [];
        dom.riskWarningContent.innerHTML = data.map(item => `
            <div class="warning-item animate-on-scroll">
                <div class="warning-item-header">
                    <i class="fas fa-exclamation-triangle warning-item-icon"></i>
                    <h3>${item.title}</h3>
                </div>
                <p>${item.desc}</p>
            </div>`).join('');
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
    
    dom.themeSwitcherBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    dom.mobileMenuBtn.addEventListener('click', () => dom.mainNav.classList.toggle('active'));
    
    if (dom.closeWelcomeBtn) {
        dom.closeWelcomeBtn.addEventListener('click', () => closeModal(dom.welcomeModal));
    }
    if (dom.contactModalCloseBtn) {
        dom.contactModalCloseBtn.addEventListener('click', () => closeModal(dom.contactModal));
    }
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

    if (dom.tabBtns.length > 0) {
        dom.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                dom.tabBtns.forEach(b => b.classList.remove('active'));
                dom.tabContents.forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                const tabContent = document.getElementById(`${btn.dataset.tab}-tab`);
                if(tabContent) tabContent.classList.add('active');
            });
        });
    }
    
    window.addEventListener('scroll', () => {
        if(dom.header) dom.header.classList.toggle('scrolled', window.scrollY > 50)
    });

    if (dom.mainNav) {
        dom.mainNav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && dom.mainNav.classList.contains('active')) {
                dom.mainNav.classList.remove('active');
            }
        });
    }

    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.previousElementSibling.value;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalTextKey = 'copy_btn_text';
                const copiedTextKey = 'copied_btn_text';
                
                button.textContent = dataStore.translations[currentLang][copiedTextKey];
                
                setTimeout(() => {
                    button.textContent = dataStore.translations[currentLang][originalTextKey];
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });

    // --- INITIALIZATION ---
    const preferredTheme = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferredTheme);
    setLanguage(currentLang);
    
    if (dom.welcomeModal && !sessionStorage.getItem('welcomeShown')) {
        setTimeout(() => {
            if (dom.welcomeModal) dom.welcomeModal.style.display = 'block';
            sessionStorage.setItem('welcomeShown', 'true');
        }, 1500);
    }
});