import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { experiences } from '../data/experiences';

// Render inline **bold** while keeping existing Title: rest behavior
const renderBold = (txt) => {
  if (!txt) return null;
  const parts = txt.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-black">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const renderHighlight = (text) => {
  if (!text) return null;
  const idx = text.indexOf(':');
  if (idx > 0) {
    const title = text.slice(0, idx).trim();
    const rest = text.slice(idx + 1).trim();
    return (
      <span>
        <strong className="font-bold text-black">{title}:</strong> {renderBold(rest)}
      </span>
    );
  }
  return <span>{renderBold(text)}</span>;
};

const Experience = () => (
  <section id="experience" className="py-16 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Professional Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 shadow-lg transition-all duration-300 ease-out overflow-hidden hover:shadow-2xl hover:-translate-y-0.5"
          >
            {/* Header */}
            <div className="px-6 md:px-8 pt-6 pb-3">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">{exp.company}</h3>
                <div className="mt-1 md:mt-0 text-left md:text-right">
                  <p className="text-xs sm:text-sm font-bold text-black">{exp.role}</p>
                  <div className="flex items-center justify-start md:justify-end gap-2 text-gray-700">
                    <FaCalendarAlt className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
                    <span className="text-xs sm:text-sm font-bold text-black">{exp.duration}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 border-b-2 border-gray-800" />
            </div>

            {/* Body */}
            <div className="px-6 md:px-8 pb-6">
              <ul className="list-disc pl-6 space-y-3 text-gray-700 text-xs md:text-sm">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="leading-relaxed">{renderHighlight(h)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
