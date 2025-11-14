export const projects = [
  {
    title: 'FullStackNoteApp',
    description: "This is a full-stack note-taking application built using Django (DRF) for the backend and ReactJS for the frontend. It features secure user authentication with JWT, supporting registration, login, logout, token management, automatic token refresh, and blacklist handling for enhanced security. Users can seamlessly perform CRUD operations on notes—create, read, update, delete, pin, and unpin. Used github actions CI/CD to automate deployment The backend is deployed on AWS EC2 using Gunicorn and Nginx, with DuckDNS for domain management and Let's Encrypt SSL for secure HTTPS access. The frontend is hosted on Netlify, and the database is managed on NeonDB for high availability and performance.",
    images: ['note_home.png', 'note_login.png'],
    tech: ['Python', 'Django REST Framework', 'ReactJS', 'TailwindCSS', 'AWS EC2', 'NeonDB'],
    github: 'https://github.com/Mahto-rajiv/noteapp-django-react',
    live: 'https://noteapphub.netlify.app/login/',
    highlightTerms: [
      'Django', 'DRF', 'ReactJS', 'JWT', 'automatic token refresh', 'CRUD',
      'GitHub Actions', 'CI/CD', 'AWS EC2', 'Gunicorn', 'Nginx', 'DuckDNS',
      "Let's Encrypt SSL", 'Netlify', 'NeonDB'
    ]
  },
  {
    title: 'Thought Exchanger Tweet',
    description: 'Developed a Django-based social media platform enabling users to create, like, comment, and save tweets, with a follow/unfollow system and real-time notifications for activities like new followers, unfollowing, and tweet interactions. Built a secure authentication system with registration, login, logout, password reset, and profile management for updating profiles, uploading pictures, and managing tweets. Added media uploads for tweets and profile images to ensure a rich user experience. Enhanced interactivity with a modern UI, Bootstrap styling, and dynamic Toast Messages for real-time feedback (e.g., login success, new comments, likes, or errors).',
    images: ['tweet_home.png', 'tweet_profile.png'],
    tech: ['Python', 'Django', 'JavaScript', 'Bootstrap', 'SQLite3'],
    github: 'https://github.com/Mahto-rajiv/thought-exchanger-tweet',
    highlightTerms: ['Django', 'authentication', 'password reset', 'Bootstrap', 'Toast Messages']
  },
  {
    title: 'CodeCollab Hub',
    description: 'A real-time collaborative coding platform that allows multiple developers to code simultaneously with live updates and instant feedback. Features secure JWT-based authentication using Redis for efficient token management and seamless sessions. Integrated AI-powered code assistance and the WebContainer API to provide live code execution and instant preview functionality, enhancing the overall development experience.',
    images: ['rcenter.png'],
    tech: ['React', 'Node.js', 'Socket.io', 'Express.js', 'JWT', 'Redis', 'WebContainer API', 'TailwindCSS'],
    github: 'https://github.com/Mahto-rajiv/Basic-Ai-Agent',
    highlightTerms: ['real-time', 'JWT', 'Redis', 'WebContainer API', 'live code execution']
  },
  {
    title: 'JavaScript and DOM Projects',
    description: 'This is a JavaScript-based project where I showcase my JavaScript skills through various mini-projects. It includes features like dynamic user cards, a news web app, a weather finder, a to-do list with local storage, a stopwatch, an image carousel, and more.',
    images: ['rcenter.png'],
    tech: ['JavaScript', 'JavaScript', 'CSS', 'DOM', 'External APIS', 'Web LocalStorage', 'GitHub'],
    github: 'https://github.com/Mahto-rajiv/javascript-projects',
    live: 'https://mahto-rajiv.github.io/javascript-projects/',
    highlightTerms: ['JavaScript-based', 'JavaScript', 'dynamic user cards', 'news web app', 'weather finder', 'to-do list with local storage', 'stopwatch', 'image carousel']
  }
];
