import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        blog: "Blog",
        contact: "Contact",
        pages: "Pages",
        signin: "Sign In",
        signup: "Sign Up"
      },
      // Hero Section
      hero: {
        title: "Professional Software Development & IT Solutions",
        subtitle: "We provide cutting-edge software development, cybersecurity, and web development services to help your business thrive in the digital world.",
        getStarted: "Get Started",
        viewPortfolio: "View Portfolio"
      },
      // Features
      features: {
        title: "Our Core Services",
        subtitle: "We offer comprehensive IT solutions tailored to meet your business needs with the latest technologies and best practices.",
        webDev: {
          title: "Web Development",
          description: "Modern, responsive websites and web applications built with cutting-edge technologies like React, Next.js, and Node.js."
        },
        mobileDev: {
          title: "Mobile Development",
          description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter."
        },
        cybersecurity: {
          title: "Cybersecurity",
          description: "Comprehensive security audits, penetration testing, and implementation of robust security measures."
        },
        cloudSolutions: {
          title: "Cloud Solutions",
          description: "Cloud migration, infrastructure setup, and DevOps solutions using AWS, Azure, and Google Cloud."
        },
        aiMl: {
          title: "AI & Machine Learning",
          description: "Custom AI solutions, machine learning models, and data analytics to drive business intelligence."
        },
        consulting: {
          title: "IT Consulting",
          description: "Strategic IT consulting to help you make informed technology decisions and optimize your digital infrastructure."
        }
      },
      // About
      about: {
        title: "Leading IT Solutions Provider",
        subtitle: "We are a team of experienced developers and IT professionals dedicated to delivering innovative solutions that drive business growth.",
        experience: "Years of Experience",
        projects: "Completed Projects",
        clients: "Happy Clients",
        expertise: {
          title: "Our Expertise",
          security: "Advanced Security",
          performance: "High Performance",
          scalability: "Scalable Solutions",
          support: "24/7 Support"
        }
      },
      // Services
      services: {
        title: "Comprehensive IT Services",
        subtitle: "From concept to deployment, we provide end-to-end IT solutions that help businesses succeed in the digital age.",
        webDevelopment: {
          title: "Web Development",
          description: "Custom web applications, e-commerce platforms, and enterprise solutions.",
          features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Security Implementation"]
        },
        mobileDevelopment: {
          title: "Mobile Development",
          description: "Native and hybrid mobile applications for all platforms.",
          features: ["iOS Development", "Android Development", "Cross-platform", "App Store Optimization"]
        },
        cybersecurity: {
          title: "Cybersecurity Services",
          description: "Protect your business with our comprehensive security solutions.",
          features: ["Security Audits", "Penetration Testing", "Compliance", "Incident Response"]
        }
      },
      // Contact
      contact: {
        title: "Get In Touch",
        subtitle: "Ready to start your next project? Contact us today for a free consultation.",
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message",
        info: {
          address: "123 Tech Street, IT District, City 12345",
          phone: "+1 (555) 123-4567",
          email: "info@megahost.com"
        }
      },
      // Footer
      footer: {
        description: "Leading provider of software development, cybersecurity, and IT consulting services.",
        links: "Useful Links",
        services: "Services",
        support: "Support & Help",
        newsletter: {
          title: "Subscribe to Our Newsletter",
          description: "Stay updated with the latest technology trends and our service offerings.",
          placeholder: "Enter your email",
          subscribe: "Subscribe"
        }
      }
    }
  },
  ua: {
    translation: {
      // Navigation
      nav: {
        home: "Головна",
        about: "Про нас",
        services: "Послуги",
        blog: "Блог",
        contact: "Контакти",
        pages: "Сторінки",
        signin: "Увійти",
        signup: "Реєстрація"
      },
      // Hero Section
      hero: {
        title: "Професійна розробка ПЗ та IT-рішення",
        subtitle: "Ми надаємо передові послуги з розробки програмного забезпечення, кібербезпеки та веб-розробки, щоб допомогти вашому бізнесу процвітати в цифровому світі.",
        getStarted: "Почати",
        viewPortfolio: "Переглянути портфоліо"
      },
      // Features
      features: {
        title: "Наші основні послуги",
        subtitle: "Ми пропонуємо комплексні IT-рішення, адаптовані до потреб вашого бізнесу з використанням найновіших технологій та кращих практик.",
        webDev: {
          title: "Веб-розробка",
          description: "Сучасні, адаптивні веб-сайти та веб-додатки, створені з використанням передових технологій, таких як React, Next.js та Node.js."
        },
        mobileDev: {
          title: "Мобільна розробка",
          description: "Нативні та кросплатформні мобільні додатки для iOS та Android з використанням React Native та Flutter."
        },
        cybersecurity: {
          title: "Кібербезпека",
          description: "Комплексні аудити безпеки, тестування на проникнення та впровадження надійних заходів безпеки."
        },
        cloudSolutions: {
          title: "Хмарні рішення",
          description: "Міграція в хмару, налаштування інфраструктури та DevOps рішення з використанням AWS, Azure та Google Cloud."
        },
        aiMl: {
          title: "ШІ та машинне навчання",
          description: "Індивідуальні рішення ШІ, моделі машинного навчання та аналітика даних для бізнес-аналітики."
        },
        consulting: {
          title: "IT-консалтинг",
          description: "Стратегічний IT-консалтинг для прийняття обґрунтованих технологічних рішень та оптимізації цифрової інфраструктури."
        }
      },
      // About
      about: {
        title: "Провідний постачальник IT-рішень",
        subtitle: "Ми - команда досвідчених розробників та IT-професіоналів, які прагнуть надавати інноваційні рішення для зростання бізнесу.",
        experience: "Років досвіду",
        projects: "Завершених проектів",
        clients: "Задоволених клієнтів",
        expertise: {
          title: "Наша експертиза",
          security: "Передова безпека",
          performance: "Висока продуктивність",
          scalability: "Масштабовані рішення",
          support: "Підтримка 24/7"
        }
      },
      // Services
      services: {
        title: "Комплексні IT-послуги",
        subtitle: "Від концепції до впровадження, ми надаємо повний спектр IT-рішень, які допомагають бізнесу досягати успіху в цифрову епоху.",
        webDevelopment: {
          title: "Веб-розробка",
          description: "Індивідуальні веб-додатки, платформи електронної комерції та корпоративні рішення.",
          features: ["Адаптивний дизайн", "SEO оптимізація", "Оптимізація продуктивності", "Впровадження безпеки"]
        },
        mobileDevelopment: {
          title: "Мобільна розробка",
          description: "Нативні та гібридні мобільні додатки для всіх платформ.",
          features: ["iOS розробка", "Android розробка", "Кросплатформність", "Оптимізація App Store"]
        },
        cybersecurity: {
          title: "Послуги кібербезпеки",
          description: "Захистіть свій бізнес за допомогою наших комплексних рішень безпеки.",
          features: ["Аудити безпеки", "Тестування на проникнення", "Відповідність стандартам", "Реагування на інциденти"]
        }
      },
      // Contact
      contact: {
        title: "Зв'яжіться з нами",
        subtitle: "Готові розпочати свій наступний проект? Зв'яжіться з нами сьогодні для безкоштовної консультації.",
        name: "Ваше ім'я",
        email: "Ваш email",
        message: "Ваше повідомлення",
        send: "Надіслати повідомлення",
        info: {
          address: "вул. Технологічна 123, IT район, Місто 12345",
          phone: "+38 (050) 123-4567",
          email: "info@megahost.com"
        }
      },
      // Footer
      footer: {
        description: "Провідний постачальник послуг з розробки програмного забезпечення, кібербезпеки та IT-консалтингу.",
        links: "Корисні посилання",
        services: "Послуги",
        support: "Підтримка та допомога",
        newsletter: {
          title: "Підпишіться на нашу розсилку",
          description: "Будьте в курсі останніх технологічних трендів та наших послуг.",
          placeholder: "Введіть ваш email",
          subscribe: "Підписатися"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;