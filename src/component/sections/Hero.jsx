import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Hero = () => (
  <section id="profile" className="pt-24 pb-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-gray-600 mb-2">Hello, I'm</p>
      <h1 className="inline-block text-5xl md:text-6xl font-bold mb-4 leading-[1.2] pb-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
        Rajiv Mahto
      </h1>
      <p className="text-2xl text-gray-700 mb-8">Software Developer</p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a
          href="/assets/Rajiv Mahto.pdf"
          className="px-6 py-3 bg-white border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all"
          target="_blank"
        >
          View Resume
        </a>
        <a
          href="/assets/Rajiv Mahto.pdf"
          download
          className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all"
        >
          Download Resume
        </a>
      </div>

      <div className="flex justify-center gap-4">
        <a href="https://www.linkedin.com/in/rajiv-mahto-b928bb253/" target="_blank" className="p-2 hover:scale-110 transition-transform">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="https://github.com/Mahto-rajiv/" target="_blank" className="p-2 hover:scale-110 transition-transform">
          <Github className="w-6 h-6" />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
