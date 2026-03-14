/**
 * Centralized profile data — single source of truth for all personal info.
 * Positioned as a Backend Systems Engineer for recruiter targeting.
 */
export const profile = {
    name: 'Rajiv Mahto',
    title: 'Software Engineer',
    subtitle: 'Python · FastAPI · React · PostgreSQL',
    headline: 'I build backend systems that automate work, scale quietly, and solve real problems.',
    tagline: 'Engineer focused on building real-world systems including APIs, automation pipelines, backend services, and modern web applications.',
    email: 'rajivmahto8864@gmail.com',
    phone: '+916355656614',
    resumePath: '/assets/Rajiv Mahto.pdf',

    social: {
        github: 'https://github.com/Mahto-rajiv/',
        linkedin: 'https://www.linkedin.com/in/rajiv-mahto-b928bb253/',
        twitter: 'https://x.com/RajivKu90640484',
        instagram: 'https://www.instagram.com/rajivmahto_/',
        facebook: 'https://www.facebook.com/dev.rajiv.mahto/',
        whatsapp: 'https://wa.me/+916355656614',
    },

    navLinks: ['Skills', 'Experience', 'Projects', 'Approach', 'Education', 'Contact'],

    about:
        "I'm a Backend Systems Engineer who builds production-grade APIs, automation pipelines, and data systems. With 2+ years of experience shipping Django/DRF backends, scraping infrastructure, and real-time dashboards, I focus on writing clean, scalable code that solves real business problems — not just meets specs.",

    interests: [
        { emoji: '🎮', label: 'Gaming', description: 'Breaking high scores' },
        { emoji: '💻', label: 'Programming', description: 'Building things that scale' },
        { emoji: '🌐', label: 'Networking', description: 'Exploring how systems connect' },
    ],

    stats: [
        { value: '2+', label: 'Years Experience' },
        { value: '3', label: 'Companies' },
        { value: '10+', label: 'Projects Shipped' },
    ],

    /** Types of systems I build — for the "What I Build" section */
    systemTypes: [
        {
            icon: '⚡',
            title: 'API Platforms',
            description: 'RESTful APIs with Django/DRF and FastAPI — auth, RBAC, rate limiting, versioning.',
        },
        {
            icon: '🔄',
            title: 'Automation Systems',
            description: 'Bash scripts, CI/CD pipelines, deployment automation, and scheduled workflows.',
        },
        {
            icon: '🕷️',
            title: 'Web Scraping Systems',
            description: 'Large-scale scrapers with proxy rotation, scheduling, and data validation.',
        },
        {
            icon: '📊',
            title: 'Internal Dashboards',
            description: 'Django + React dashboards to monitor jobs, visualize metrics, and manage workflows.',
        },
        {
            icon: '🔧',
            title: 'Data Pipelines',
            description: 'ETL pipelines for data extraction, transformation, and loading into SQL databases.',
        },
        {
            icon: '🛠️',
            title: 'Dev Tooling',
            description: 'Internal tools, CLIs, and developer productivity utilities for engineering teams.',
        },
    ],
};
