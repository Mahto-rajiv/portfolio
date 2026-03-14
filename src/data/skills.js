import { SiPython, SiDjango, SiFastapi, SiPostgresql, SiReact, SiTypescript, SiTailwindcss, SiDocker, SiLinux, SiNginx, SiGithub, SiSelenium } from 'react-icons/si';
import { Bot, Code2, Workflow } from 'lucide-react';

export const skills = {
  backend: [
    { name: 'Python', icon: SiPython },
    { name: 'Django / DRF', icon: SiDjango },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'REST APIs', icon: Code2 },
  ],
  frontend: [
    { name: 'React', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind', icon: SiTailwindcss },
  ],
  infrastructure: [
    { name: 'Docker', icon: SiDocker },
    { name: 'Linux', icon: SiLinux },
    { name: 'Nginx', icon: SiNginx },
    { name: 'CI/CD', icon: SiGithub },
  ],
  automation: [
    { name: 'Selenium', icon: SiSelenium },
    { name: 'Web Automation', icon: Bot },
    { name: 'Task Automation', icon: Workflow },
  ],
};
