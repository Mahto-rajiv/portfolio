import React from 'react';
import { skills } from '../data/skills';

const Skills = () => (
  <section id="skills" className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <p className="text-center text-gray-600 mb-2">Explore My</p>
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-6 text-center">Programming Languages</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.programmingLanguages.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <skill.icon size={24} className="text-gray-700" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-6 text-center">Backend Development</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.backend.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <skill.icon size={24} className="text-gray-700" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-6 text-center">Frontend Development</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.frontend.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <skill.icon size={24} className="text-gray-700" />
                <span className="font-medium text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-6 text-center">Data Management Systems</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.databases.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <skill.icon size={24} className="text-gray-700" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold mb-6 text-center">Scraping and Automation</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.scraping.map((skill) => (
              <div key={skill.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <skill.icon size={24} className="text-gray-700" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {skills.tools.map((skill) => (
            <div key={skill.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <skill.icon size={24} className="text-gray-700" />
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
