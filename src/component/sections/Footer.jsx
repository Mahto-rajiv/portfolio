import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <div className="flex justify-center gap-8 mb-6">
        <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
        <a href="#experience" className="hover:text-gray-300 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
      </div>
      <p className="text-gray-400">Copyright © 2025 Rajiv Mahto. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
