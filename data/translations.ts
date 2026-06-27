import { useState, useEffect, createContext, useContext } from 'react';

// Data file for projects
export interface Project {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  technologies: string[];
  liveDemo: string;
  github: string;
}

export const projects: Project[] = [
{
  id: 1,
  title: 'E-Commerce Platform',
  titleAr: 'منصة متجر إلكتروني متكاملة',

  description:
    'A modern responsive e-commerce platform built with React.js and Vite using JavaScript and Tailwind CSS. Includes product browsing, authentication, search, product details, shopping cart, checkout flow, wishlist functionality, API integration, and form validation.',

  descriptionAr:
    'منصة متجر إلكتروني حديثة ومتجاوبة مبنية باستخدام React.js و Vite مع JavaScript و Tailwind CSS. تشمل تسجيل الدخول، البحث، عرض المنتجات، تفاصيل المنتجات، سلة المشتريات، إتمام الطلبات، قائمة المفضلة، ربط الـ API والتحقق من النماذج.',

  image: '/Ecommerce.jpeg',

  technologies: [
    'React.js',
    'Vite',
    'JavaScript',
    'Tailwind CSS',
    'React Context API',
    'React Router',
    'Axios',
    'Formik',
    'Yup',
    'React Query'
  ],

  liveDemo: 'https://ecommerce-y4r1.vercel.app',

  github: 'https://github.com/mohamedfrontenddev-byte/Ecommerce',
},
 {
  id: 2,
  title: 'smart system',
  titleAr: 'منصه لإدارة المشاريع ومتابعة المهام',
  description:
    'A modern property listing platform with advanced search, filters, and interactive map integration.',
  descriptionAr:
    'منصة حديثة لإدراج العقارات مع بحث متقدم وفلاتر وتكامل خريطة تفاعلية.',
  image: '/ProjectManageme.png',
  technologies: [
    'Next.js',
    'React',
    'JavaScript',
    'Bootstrap',
    'API Integration'
  ],
  liveDemo: 'https://smart-project-dashboard.vercel.app',
  github: 'https://github.com/mohamedfrontenddev-byte/SmartProjectDashboard',
},
 {
  id: 3,
  title: 'BranchSync',
  titleAr: 'نظام إدارة الفروع والمخزون',
  description:
    'A multi-branch inventory management system for tracking products, stock levels, and branch operations.',
  descriptionAr:
    'نظام لإدارة الفروع والمخزون يسمح بمتابعة المنتجات والكميات وحركة الفروع.',
  image: '/StocSync.jpeg',
  technologies: [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Redux'
  ],
  liveDemo: 'https://stock-sync-tau.vercel.app',
  github: 'https://github.com/mohamedfrontenddev-byte/StockSync',
}
];

// Language context type
export interface LanguageContextType {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const translations = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cv': 'View CV',

    // Hero
    'hero.name': 'Mohamed Allam',
    'hero.title': 'Front-End Developer',
    'hero.description': 'I build modern, scalable and high-performance web experiences using React, Next.js, JavaScript and Tailwind CSS.',
    'hero.viewProjects': 'View Projects',
    'hero.viewCV': 'View CV',
    'hero.available': 'Available for work',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Get to know me',
    'about.description': 'Front-End Developer specializing in building modern, fast, and responsive user interfaces using React and Next.js. I focus on clean code, responsive design, modern UI, and exceptional user experience.',
    'about.cleanCode': 'Clean Code',
    'about.responsive': 'Responsive Design',
    'about.modernUI': 'Modern UI',
    'about.ux': 'User Experience',
    'about.connect': 'Let\'s Connect',

    // Skills
    'skills.title': 'My Skills',
    'skills.subtitle': 'Technologies I work with',
    'skills.frontend': 'Frontend',
    'skills.tools': 'Tools',
    'skills.concepts': 'Concepts',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some of my recent work',
    'projects.liveDemo': 'Live Demo',
    'projects.github': 'GitHub',
    'projects.viewAll': 'View All Projects',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s work together',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Something went wrong. Please try again.',
    'contact.info': 'Contact Information',
    'contact.location': 'Cairo, Egypt',

    // Footer
    'footer.name': 'Mohamed Allam',
    'footer.role': 'Front-End Developer',
    'footer.copyright': 'All rights reserved.',
    'footer.madeWith': 'Made with',

    // CV
    'cv.professionalSummary': 'Professional Summary',
    'cv.skills': 'Skills',
    'cv.projects': 'Projects',
    'cv.experience': 'Experience',
    'cv.education': 'Education',
    'cv.contact': 'Contact Information',
    'cv.download': 'Download CV',
  },
  ar: {
    // Navbar
    'nav.about': 'عنّي',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'تواصل',
    'nav.cv': 'عرض السيرة',

    // Hero
    'hero.name': 'محمد علام',
    'hero.title': 'مطور واجهة أمامية',
    'hero.description': 'أبني تجارب ويب حديثة وقابلة للتطوير وعالية الأداء باستخدام React وNext.js وJavaScript وTailwind CSS.',
    'hero.viewProjects': 'عرض المشاريع',
    'hero.viewCV': 'عرض السيرة الذاتية',
    'hero.available': 'متاح للعمل',

    // About
    'about.title': 'نبذة عنّي',
    'about.subtitle': 'تعرف علي',
    'about.description': 'مطور واجهة أمامية متخصص في بناء واجهات مستخدم حديثة وسريعة ومتجاوبة باستخدام React وNext.js. أركز على الكود النظيف، التصميم المتجاوب، واجهة المستخدم الحديثة، وتجربة المستخدم الممتازة.',
    'about.cleanCode': 'كود نظيف',
    'about.responsive': 'تصميم متجاوب',
    'about.modernUI': 'واجهة حديثة',
    'about.ux': 'تجربة المستخدم',
    'about.connect': 'لنتواصل',

    // Skills
    'skills.title': 'مهاراتي',
    'skills.subtitle': 'التقنيات التي أعمل بها',
    'skills.frontend': 'واجهة أمامية',
    'skills.tools': 'أدوات',
    'skills.concepts': 'مفاهيم',

    // Projects
    'projects.title': 'مشاريعي المميزة',
    'projects.subtitle': 'بعض أعمالي الأخيرة',
    'projects.liveDemo': 'عرض مباشر',
    'projects.github': 'GitHub',
    'projects.viewAll': 'عرض كل المشاريع',

    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'لنعمل معاً',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.sending': 'جاري الإرسال...',
    'contact.success': 'تم إرسال الرسالة بنجاح!',
    'contact.error': 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    'contact.info': 'معلومات التواصل',
    'contact.location': 'القاهرة، مصر',

    // Footer
    'footer.name': 'محمد علام',
    'footer.role': 'مطور واجهة أمامية',
    'footer.copyright': 'جميع الحقوق محفوظة.',
    'footer.madeWith': 'صنع بـ',

    // CV
    'cv.professionalSummary': 'الملخص المهني',
    'cv.skills': 'المهارات',
    'cv.projects': 'المشاريع',
    'cv.experience': 'الخبرة',
    'cv.education': 'التعليم',
    'cv.contact': 'معلومات التواصل',
    'cv.download': 'تحميل السيرة الذاتية',
  },
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: (key: string) => key,
});
