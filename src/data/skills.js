import { SiPython, SiJavascript, SiDjango, SiFastapi, SiHtml5, SiCss3, SiTailwindcss, SiReact, SiMongodb, SiMysql, SiRedis, SiGithub, SiGitlab, SiScrapy, SiN8N, SiDocker, SiPostman } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

export const skills = {
  programmingLanguages: [
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript }
  ],
  backend: [
    { name: 'Django', icon: SiDjango },
    { name: 'DRF (Django REST Framework)', icon: SiDjango },
    { name: 'FastAPI', icon: SiFastapi },
  ],
  frontend: [
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'TailwindCSS', icon: SiTailwindcss },
    { name: 'React', icon: SiReact },
    { name: 'JavaScript', icon: SiJavascript },
  ],
  databases: [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Redis', icon: SiRedis }
  ],
  scraping: [
    { name: 'Scrapy', icon: SiScrapy },
    { name: 'Browser-Automation', icon: SiN8N },
    { name: 'REST APIs', icon: SiFastapi },
  ],
  tools: [
    { name: 'GitHub', icon: SiGithub },
    { name: 'GitLab', icon: SiGitlab },
    { name: 'AWS', icon: FaAws },
    { name: 'Docker', icon: SiDocker },
    { name: 'Postman', icon: SiPostman }
  ]
};
