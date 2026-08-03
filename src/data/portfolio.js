// Single source of truth for all portfolio content.

export const personal = {
  name: 'Rahul Biradar',
  role: '',
  experienceBadge: '2+ Years Experience',
  experience: '2.4 Years',
  company: 'Sanvima Solutions Private Limited',
  duration: 'April 2024 – June 2026',
  careerHighlights: [
    'Promoted from Junior Developer to Senior Developer.',
    'Led a team of three developers.',
    'Worked directly with clients to gather and implement business requirements.',
    'Developed and maintained production-ready enterprise web applications.',
  ],
   aboutHighlights: [
    'Passionate about building scalable, secure, and user-focused web applications.',
    'Transform business requirements into clean, maintainable, and efficient software solutions.',
    'Write high-quality code with a strong focus on performance, scalability, and reliability.',
    'Continuously learn and adapt to modern technologies while delivering real business value.',
  ],
}

export const summary = `I'm a Full Stack Developer passionate about building scalable business applications that solve real-world challenges. Over the past 2.4 years, I've worked across ERP, Healthcare, and Education domains, developing enterprise web applications, admin panels, and REST APIs used in production environments.

I enjoy transforming business requirements into reliable, user-friendly solutions using React.js, PHP, Slim Framework, CodeIgniter, and MySQL. From developing new features and optimizing databases to integrating APIs and maintaining live applications, I focus on writing clean, maintainable code that delivers long-term value.`

export const heroTechStack = ['React.js', 'PHP', 'Slim Framework', 'MySQL']

export const heroIntro = `I'm passionate about building production-ready full-stack applications that solve real-world business challenges. From intuitive admin panels and scalable ERP systems to robust REST APIs, I enjoy creating secure, high-quality solutions with clean, maintainable code.`

export const heroHighlights = [
  'Enterprise Applications',
  'ERP Systems',
  'Admin Panels',
  'REST APIs',
  'Production Deployments',
]

export const experience = [
  {
    title: 'Junior Developer (Full Stack)',
    company: 'Sanvima Solutions Private Limited',
    duration: 'April 2024 – July 2026',
    responsibilities: [
      'Developed and maintained enterprise web applications across ERP, Healthcare, and Education domains.',
      'Delivered production-ready features and enhanced existing business modules based on evolving business requirements.',
      'Built and enhanced secure admin panels using CodeIgniter 3 & 4 following the MVC architecture.',
      'Designed, developed, and integrated REST APIs using PHP Slim Framework for seamless data communication.',
      'Integrated React.js frontend applications with backend services and REST APIs to deliver responsive user experiences.',
      'Implemented authentication and role-based access control (RBAC) across multiple user roles.',
      'Resolved production issues, fixed critical bugs, and optimized existing application features to improve system reliability.',
      'Optimized MySQL database queries and improved application performance through efficient data handling.',
      'Collaborated directly with clients to gather business requirements and implement effective software solutions.',
      'Led a team of three developers during the development and enhancement of the Alpha ERP project, ensuring timely feature delivery.',
    ],
  },
]

export const projects = [
  {
  id: 'alpha-erp',
  name: 'Alpha ERP',
  tagline: 'Enterprise Recruitment, Staffing & Workforce Management System',

  description:
    'Alpha ERP is an enterprise recruitment and workforce management platform developed for consultancy operations. Built using CodeIgniter 4 and MySQL, the application streamlines recruitment workflows, candidate management, employee management, timesheet tracking, invoice generation, payroll processing, and administrative operations through role-based access for Admins, HR, Team Members, and Candidates.',

  responsibilities: [
    'ERP Customization',
    'Recruitment Workflow',
    'Candidate Management',
    'Employee Management',
    'Timesheet Tracking',
    'Invoice Generation',
    'Payroll Module',
    'Production Support',
  ],

  techStack: [
    'CodeIgniter 4',
    'PHP',
    'MySQL',
    'Bootstrap',
    'JavaScript',
    'jQuery',
    'DataTables',
  ],
},
  {
  id: 'medayus',
  name: 'Medayus',

  tagline: 'Healthcare Appointment & Hospital Management Platform',

  description:
  'Medayus is a healthcare management platform that enables patients to register, book appointments, and consult doctors through a React.js application. The system features dedicated Admin and Doctor portals for managing locations, departments, doctors, schedules, patients, appointments, prescriptions, blogs, and application settings, providing a centralized platform for efficiently managing hospital operations and patient care.',
  responsibilities: [
    'Appointment Booking',
    'API Integration',
    'Admin Panel',
    'Doctor Management',
    'Schedule Management',
    'Email Notifications',
    'Image Uploads',
    'Production Support',
  ],

  techStack: [
    'React.js',
    'Slim Framework',
    'PHP',
    'CodeIgniter 3',
    'MySQL',
    'Bootstrap',
    'JavaScript',
  ],
},
  {
  id: 'kalakakshaaha',
  name: 'Kalakakshaaha',

  tagline: 'Online Learning & Tutor Management Platform',

  description:
  'Kalakakshaaha is an online learning platform that connects students with tutors, trainers, and institutes across various learning categories. It features a comprehensive admin panel for managing tutors, courses, categories, locations, CMS content, advertisements, and platform settings, while enabling students to discover nearby tutors through location-based search.',

  responsibilities: [
    'Tutor Management',
    'Student Management',
    'Approval Workflow',
    'Location-Based Search',
    'Course Management',
    'Admin Panel',
    'Admin Notifications',
    'Production Support',
  ],

  techStack: [
    'React.js',
    'Slim Framework',
    'CodeIgniter 4',
    'PHP',
    'MySQL',
    'Bootstrap',
    'JavaScript',
    'jQuery',
  ],
}
]



export const skills = [
  {
    category: 'Frontend',
    items: [
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
    ],
  },
  {
    category: 'Backend',
    items: [
      'PHP',
      'CodeIgniter 3',
      'CodeIgniter 4',
      'Slim Framework',
      'Node.js',
      'Express.js',
      'Python'
    ],
  },
  {
    category: 'Database',
    items: [
      'MySQL',
      'SQLite',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Postman',
      'phpMyAdmin',
      'Composer',
      'XAMPP',
      'WinSCP',
    ],
  },
  {
    category: 'Concepts',
    items: [
      'REST APIs',
      'MVC Architecture',
      'Authentication',
      'Role-Based Access Control (RBAC)',
      'API Integration',
      'Responsive Design',
      'Production Support',
    ],
  },
];





export const contact = {
  phone: '9515743214',
  email: 'rahulbiradar.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rahul-biradar-371459190/',
  github: 'https://github.com/Rahul-Biradar-09',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'summary', label: 'About Me' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
