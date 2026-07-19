// Pure project data (safe to import from both server and client components).
// This file must not import anything from React, Next, or any other client API.

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
      'React Query',
    ],
    liveDemo: 'https://ecommerce-y4r1.vercel.app',
    github: 'https://github.com/mohamedfrontenddev-byte/Ecommerce',
  },
  {
    id: 2,
    title: 'Smart System',
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
      'API Integration',
    ],
    liveDemo: 'https://smart-project-dashboard-system.vercel.app',
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
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Redux'],
    liveDemo: 'https://stock-sync-tau.vercel.app',
    github: 'https://github.com/mohamedfrontenddev-byte/StockSync',
  },
   {
    id: 4 ,
    title: 'restaurant',
    titleAr: 'نظام إدارة المطاعم',
    description:
      'A restaurant management system for managing orders, inventory, and staff.',
    descriptionAr:
      'نظام إدارة المطاعم يسمح بإدارة الطلبات والمخزون وضوابط الموظفين',
    image: '/restaurant.png',
    technologies: ['React','next.js','typeScript','Tailwind CSS','Zustand'],
    liveDemo: 'https://restaurant-management-dashboard-esj.vercel.app',
    github: 'https://github.com/mohamedfrontenddev-byte/Restaurant-Management-Dashboard.git',
    
  }, 

];
