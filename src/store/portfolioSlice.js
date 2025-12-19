import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: 'Thomas Con',
    title: 'Senior Full-Stack Developer',
    location: 'Orlando, FL, United States',
    description: 'Senior Full-Stack Developer with 7+ years of professional experience (2018–2025) designing, developing, and scaling high-performance web and video streaming platforms. Proven expertise across frontend and backend architectures, with a strong focus on modern JavaScript frameworks, Python-based APIs, and real-time video processing workflows.',
  },
  experience: [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'CMBG FBC-nflix',
      period: '2022 – 2025',
      location: 'Orlando, Florida',
      description: 'Led end-to-end development of scalable web and video streaming platforms, supporting both live and on-demand media delivery.',
      achievements: [
        'Designed and implemented high-performance frontend applications using React.js, Next.js, Vue.js, Nuxt.js, Tailwind CSS, and Tailwind UI',
        'Built and maintained backend services using Python (FastAPI, Django, Flask) and Node.js (NestJS)',
        'Developed and optimized video streaming pipelines using FFmpeg',
        'Managed and optimized databases including PostgreSQL, MySQL, MongoDB, and Redis',
        'Improved system stability, scalability, and maintainability through clean architecture',
      ],
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'TechNova Solutions',
      period: '2018 – 2022',
      location: 'Tampa, Florida',
      description: 'Developed and maintained full-stack web applications using JavaScript, TypeScript, Python, and Node.js.',
      achievements: [
        'Built dynamic user interfaces with React.js and Vue.js',
        'Created backend APIs and microservices using Django, Flask, and Express.js',
        'Integrated SQL and NoSQL databases, improving query performance',
        'Participated in system design discussions and code reviews',
        'Assisted in early-stage video and media feature development',
      ],
    },
  ],
  education: {
    degree: 'Bachelor of Computer Science',
    university: 'University of Florida',
    period: '2012 – 2016',
    location: 'Gainesville, Florida',
    description: 'Completed a comprehensive curriculum covering software engineering, data structures, algorithms, databases, and web technologies.',
  },
  skills: {
    languages: ['Python', 'JavaScript (ES6+)', 'TypeScript'],
    backend: [
      'FastAPI',
      'Django',
      'Flask',
      'Node.js',
      'NestJS',
      'RESTful API Design',
      'GraphQL API Development',
      'Authentication & Authorization (JWT, OAuth)',
    ],
    frontend: [
      'React.js',
      'Next.js',
      'Vue.js / Nuxt.js',
      'HTML5 / CSS3 / SASS',
      'Tailwind CSS / Tailwind UI',
      'Responsive & Mobile-First Design',
    ],
    video: [
      'FFmpeg',
      'Live Streaming & Video-on-Demand (VOD)',
      'Media Optimization & Performance Tuning',
      'Streaming Workflow Automation',
    ],
    databases: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Database Schema Design & Query Optimization',
    ],
    devops: [
      'Git / GitHub / GitLab',
      'CI/CD Pipelines',
      'Docker',
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

