import type { Project, Skill, Experience, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payments, and an intuitive admin dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Task Manager',
    description: 'Smart productivity app powered by AI that auto-prioritizes tasks, suggests deadlines, and generates summaries.',
    tags: ['Next.js', 'OpenAI', 'TailwindCSS', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Real-Time Chat App',
    description: 'Scalable messaging platform supporting group chats, file sharing, end-to-end encryption and voice messages.',
    tags: ['React', 'Socket.io', 'Redis', 'Express'],
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard with customizable widgets, real-time charts, and export capabilities.',
    tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'DevOps Pipeline Tool',
    description: 'CI/CD automation platform that streamlines deployment workflows with one-click rollback and monitoring.',
    tags: ['Docker', 'Kubernetes', 'Go', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracker with AI-powered workout plans, nutrition tracking, and social challenges.',
    tags: ['React Native', 'GraphQL', 'MongoDB', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export const skills: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'TailwindCSS', level: 92, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'Python / Django', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 82, category: 'backend' },
  { name: 'GraphQL', level: 78, category: 'backend' },
  { name: 'Docker / K8s', level: 72, category: 'tools' },
  { name: 'AWS / GCP', level: 70, category: 'tools' },
  { name: 'Git / CI-CD', level: 88, category: 'tools' },
  { name: 'Figma / Design', level: 65, category: 'tools' },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Full-Stack Engineer',
    company: 'TechNova Inc.',
    period: '2022 – Present',
    description: [
      'Led development of microservices architecture serving 2M+ daily active users.',
      'Reduced API response times by 40% through query optimization and caching strategies.',
      'Mentored a team of 6 engineers and conducted regular code reviews.',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Redis'],
  },
  {
    id: 2,
    role: 'Full-Stack Developer',
    company: 'CloudSoft Solutions',
    period: '2020 – 2022',
    description: [
      'Built and shipped 12 client-facing web applications from concept to production.',
      'Integrated third-party APIs including Stripe, Twilio, and Google Maps.',
      'Improved frontend performance scores by 35% using lazy loading and code splitting.',
    ],
    technologies: ['Vue.js', 'Python', 'Django', 'Docker', 'MySQL'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'PixelCraft Agency',
    period: '2018 – 2020',
    description: [
      'Designed and developed pixel-perfect UI components for 20+ client projects.',
      'Collaborated with designers to create smooth, accessible animations.',
      'Introduced TypeScript to the codebase, reducing runtime errors by 60%.',
    ],
    technologies: ['React', 'JavaScript', 'SASS', 'Figma', 'Jest'],
  },
];
