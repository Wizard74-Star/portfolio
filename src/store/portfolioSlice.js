import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: 'Thomas Con',
    title: 'Senior Full-Stack Developer',
    location: 'Orlando, FL, United States',
    description: 'Senior Full-Stack Developer with 7+ years of professional experience delivering scalable, high-performance web platforms and advanced video-streaming systems. Proven expertise across frontend, backend, and real-time media pipelines, with a strong focus on clean architecture, performance optimization, and production-ready solutions.',
  },
  experience: [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'CMBG FBC-nflix',
      period: '2022 – 2025',
      location: 'Orlando, Florida',
      description: 'Led the design and development of large-scale, production-ready web platforms with a strong focus on video streaming, media processing, and performance optimization.',
      achievements: [
        'Built and maintained end-to-end solutions using React.js, Next.js, Vue.js, Nuxt.js, and Tailwind CSS, delivering responsive, high-performance user experiences across desktop and mobile devices',
        'Architected and implemented backend services and APIs using Node.js, NestJS, FastAPI, Django, and Flask, supporting both RESTful and GraphQL communication',
        'Designed and optimized video streaming pipelines using FFmpeg, enabling real-time and on-demand streaming with low latency and high reliability',
        'Integrated YOLO, NVIDIA DeepStream, NVIDIA Jetson, and NVIDIA Omniverse to deliver GPU-accelerated video analytics and intelligent streaming solutions',
        'Managed and optimized databases including PostgreSQL, MySQL, MongoDB, and Redis, ensuring scalability, data integrity, and high availability',
        'Collaborated closely with cross-functional teams, mentoring junior developers and contributing to architectural decisions and long-term platform evolution',
      ],
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'TechNova Solutions',
      period: '2018 – 2022',
      location: 'Tampa, Florida',
      description: 'Developed and maintained full-stack web applications using JavaScript, TypeScript, Python, React.js, and Node.js, delivering reliable and scalable solutions for client-facing products.',
      achievements: [
        'Built backend APIs and services with Flask and Django, focusing on clean architecture, security, and performance',
        'Implemented responsive frontend interfaces using HTML, CSS, SASS, and modern JavaScript frameworks',
        'Worked with relational and NoSQL databases including MySQL, PostgreSQL, and MongoDB, contributing to schema design and query optimization',
        'Participated in code reviews, debugging, and performance tuning to improve overall system stability and maintainability',
        'Collaborated with designers and stakeholders to translate business requirements into high-quality technical implementations',
      ],
    },
  ],
  education: {
    degree: 'Bachelor of Computer Science',
    university: 'University of Florida',
    period: '2012 – 2016',
    location: 'Gainesville, Florida',
    description: 'Completed a comprehensive curriculum covering software engineering, data structures, algorithms, databases, and web technologies. Built a strong foundation in backend and frontend development, system design, and scalable application architecture. Participated in practical projects involving full-stack web development and API-based systems.',
  },
  skills: {
    languages: [
      'Python – API development, backend services, data processing, automation',
      'JavaScript (ES6+) – modern web application development',
      'TypeScript – large-scale frontend and backend applications',
    ],
    backend: [
      'FastAPI – high-performance APIs, async programming',
      'Django – scalable backend systems, ORM, authentication',
      'Flask – lightweight microservices',
      'Node.js – event-driven backend architecture',
      'NestJS – enterprise-grade backend frameworks',
      'RESTful API Design',
      'GraphQL API Development',
      'Authentication & Authorization (JWT, OAuth)',
    ],
    frontend: [
      'React.js – SPA development, hooks, state management',
      'Next.js – SSR/SSG, performance optimization, SEO',
      'Vue.js / Nuxt.js – component-based UI, SSR applications',
      'HTML5 / CSS3 / SASS – semantic markup, responsive layouts',
      'Tailwind CSS / Tailwind UI – modern utility-first styling, rapid UI development',
      'Responsive & Mobile-First Design',
      'Cross-Browser Compatibility',
    ],
    video: [
      'FFmpeg – video encoding, transcoding, streaming pipelines',
      'Live Streaming & Video-on-Demand (VOD)',
      'Media Optimization & Performance Tuning',
      'Streaming Workflow Automation',
    ],
    databases: [
      'PostgreSQL – relational database design & optimization',
      'MySQL – transactional data management',
      'MongoDB – NoSQL document-based storage',
      'Redis – caching, session management, performance optimization',
      'Database Schema Design & Query Optimization',
    ],
    ai: [
      'Computer Vision: NVIDIA YOLO, object detection, real-time video analytics',
      'Acceleration Platforms: NVIDIA DeepStream, Jetson',
      'Simulation & Visualization: NVIDIA Omniverse',
      'GPU Optimization: High-performance inference and streaming workloads',
    ],
    architecture: [
      'Microservices Architecture',
      'Monolithic to Microservices Migration',
      'Asynchronous Processing',
      'Scalable System Design',
      'Third-Party API Integration',
    ],
    practices: [
      'Clean Code & Code Refactoring',
      'Test-Driven Development (TDD)',
      'Unit & Integration Testing',
      'Agile / Scrum Methodologies',
      'Code Reviews & Technical Documentation',
    ],
    softSkills: [
      'Strong problem-solving and analytical skills',
      'Ability to work independently and take ownership of features end-to-end',
      'Clear communication with technical and non-technical stakeholders',
      'Mentoring junior developers and collaborating in cross-functional teams',
      'Adaptability and continuous learning mindset',
    ],
    devops: [
      'Git / GitHub / GitLab',
      'CI/CD Pipelines',
      'Docker (containerization basics)',
      'Environment Configuration & Deployment',
      'Performance Monitoring & Debugging',
    ],
  },
  projects: [
    {
      id: 1,
      title: 'Underground Shirts',
      description: 'Custom apparel ecommerce platform with live design tools. Developed Vue.js frontend and NestJS backend for design uploads, pricing logic, and payment gateway integration.',
      url: 'https://www.undergroundshirts.com/',
      image: '',
      imageName: 'undergroundshirts.png',
      role: 'Developed custom product design tools with Vue.js; implemented NestJS backend for design uploads, pricing logic, and order API; integrated payment gateways.',
      technologies: ['Vue.js', 'NestJS', 'Payment Gateway Integration', 'E-commerce'],
    },
    {
      id: 2,
      title: 'NoBudge',
      description: 'Indie cinema streaming platform for independent films. Built React.js UI with Django/Flask backend for media handling, video playback, and search functionality.',
      url: 'https://nobudge.com/',
      image: '',
      imageName: 'nobudge.png',
      role: 'Built dynamic film browsing UI with React.js, implemented backend services in Django/Flask for media and metadata handling; integrated video playback features and search.',
      technologies: ['React.js', 'Django', 'Flask', 'Video Streaming', 'Search'],
    },
    {
      id: 3,
      title: 'Bean Box',
      description: 'Boutique coffee subscription ecommerce platform. Developed Next.js subscription management with Django backend, Stripe integration, and optimized SSR performance.',
      url: 'https://beanbox.com/',
      image: '',
      imageName: 'beanbox.png',
      role: 'Developed subscription management views in Next.js with seamless UI transitions. Built backend checkout and payment management with Django & Stripe integration. Improved SEO and site performance via SSR with caching and image optimization.',
      technologies: ['Next.js', 'Django', 'Stripe', 'SEO', 'Performance Optimization', 'SSR'],
    },
  ],
  theme: {
    darkMode: false,
  },
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.theme.darkMode = !state.theme.darkMode;
    },
  },
});

export const { toggleDarkMode } = portfolioSlice.actions;
export default portfolioSlice.reducer;

