import React from 'react';
import { Calendar } from 'lucide-react';
import { experiences } from '../data/experiences';

const renderHighlight = (text) => {
  if (!text) return null;
  const idx = text.indexOf(':');
  if (idx > 0) {
    const title = text.slice(0, idx).trim();
    const rest = text.slice(idx + 1).trim();
    return (
      <span>
        <strong className="font-semibold">{title}:</strong> {rest}
      </span>
    );
  }
  return <span>{text}</span>;
};

const Experience = () => (
  <section id="experience" className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
            {/* Header */}
            <div className="px-6 md:px-8 pt-6 pb-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{exp.company}</h3>
                <div className="mt-3 md:mt-0 text-right">
                  <p className="text-lg font-semibold text-gray-900">{exp.role}</p>
                  <div className="flex items-center justify-end gap-2 text-gray-700">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-[2px] bg-gray-200" />
            </div>

            {/* Body */}
            <div className="px-6 md:px-8 pb-6">
              <ul className="space-y-3">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-gray-800 leading-relaxed">
                    <span className="mt-1">•</span>
                    {renderHighlight(h)}
                  </li>
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
