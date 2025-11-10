import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="relative">
      {/* Hover-only card effect container */}
      <div className="mx-2 my-2 rounded-2xl transition-all duration-200 hover:bg-white hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:ring-1 hover:ring-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-white">R</div>
            <span>Portfolio</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-gray-700 hover:text-gray-900 transition-colors ${
                  activeSection === item.toLowerCase() ? 'font-semibold text-gray-900' : ''
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3 flex flex-col items-center text-center">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
