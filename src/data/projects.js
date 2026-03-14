export const projects = [
  {
    title: 'FullStackNoteApp',
    summary: 'A production-ready full-stack note-taking system with secure auth and real-time CRUD.',
    features: [
      'JWT auth with automatic token refresh and blacklist security',
      'Automated deployment pipeline via GitHub Actions CI/CD',
      'Zero-downtime SSL setup with Let\'s Encrypt + Nginx',
      'Deployed to production on AWS EC2'
    ],
    architectureFlow: 'React → Django DRF → PostgreSQL (NeonDB)',
    images: ['note_home.png', 'note_login.png', 'note_register.png', 'note_profile.png', 'note_addm.png', 'note_updatem.png', 'note_pinned.png'],
    basePath: '/images/noteapp/',
    tech: ['Python', 'Django DRF', 'ReactJS', 'AWS EC2', 'NeonDB', 'GitHub Actions'],
    github: 'https://github.com/Mahto-rajiv/noteapp-django-react',
    live: 'https://noteapphub.netlify.app/login/',
  },
  {
    title: 'Thought Exchanger Tweet',
    summary: 'A social platform featuring follow graphs, notification systems, and media handling.',
    features: [
      'Real-time notification engine for follows, likes, and comments',
      'Complete social graph with follow/unfollow relationship tracking',
      'Media upload pipeline for profile images and tweet attachments',
      'Full authentication flow including password reset'
    ],
    architectureFlow: 'Django Templates → Django Monolith → SQLite3',
    images: ['tweet_home.png', 'tweet_profile.png', 'tweet_login_page.png', 'tweet_register_page.png', 'tweet_notification.png'],
    basePath: '/images/tweet/',
    tech: ['Python', 'Django', 'JavaScript', 'Bootstrap', 'SQLite3'],
    github: 'https://github.com/Mahto-rajiv/thought-exchanger-tweet',
  },
  {
    title: 'CodeCollab Hub',
    summary: 'A collaborative coding environment with real-time sync and live in-browser execution.',
    features: [
      'Real-time multi-user collaboration via WebSocket sync',
      'Redis-backed JWT sessions with sub-millisecond token lookup',
      'In-browser code execution via WebContainer API (No Docker)',
      'AI-powered code assistance integrated into the editor'
    ],
    architectureFlow: 'React (Socket.io) → Node.js (Express) → Redis',
    images: ['chatPage.png', 'login.png', 'register.png'],
    basePath: '/images/CodeCollabHub/',
    tech: ['React', 'Node.js', 'Socket.io', 'Express.js', 'Redis', 'WebContainer API'],
    github: 'https://github.com/Mahto-rajiv/Basic-Ai-Agent/tree/main/fronted',
    githubBackend: 'https://github.com/Mahto-rajiv/Basic-Ai-Agent/tree/main/Backend',
  },
  {
    title: 'JavaScript & DOM Projects',
    problem: 'Needed to deeply understand browser APIs, DOM manipulation, and async patterns through hands-on engineering — not just reading docs.',
    summary: 'A collection of 10+ mini-projects exploring browser APIs, DOM manipulation, and async patterns.',
    features: [
      'API integration with real-world data sources (news, weather)',
      'Client-side state persistence with Local Storage',
      'Custom event-driven architecture patterns',
      'Built without framework abstractions'
    ],
    architectureFlow: 'Vanilla JS (DOM/Fetch) → External APIs → LocalStorage',
    images: ['jshome.png', 'newswebapp.png', 'weather.png', 'todo.png', 'crausal1.png', 'fetchAPi.png', 'colorchanger.png', 'datecolor.png', 'guess.png', 'count.png'],
    basePath: '/images/javascriptDomProject/',
    tech: ['JavaScript', 'CSS', 'DOM APIs', 'Fetch API', 'Local Storage'],
    github: 'https://github.com/Mahto-rajiv/javascript-projects',
    live: 'https://mahto-rajiv.github.io/javascript-projects/',
  },
];
