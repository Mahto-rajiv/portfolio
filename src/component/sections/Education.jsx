import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => (
  <section id="education" className="py-16 px-4 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        Education Journey <GraduationCap className="w-10 h-10" />
      </h2>

      <div className="space-y-8">
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎓</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Gujarat University</h3>
              <p className="text-lg text-gray-700 mb-2">Bachelor of Computer Applications (BCA)</p>
              <p className="text-gray-600">2021 - 2024</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🏫</div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Raja Ram Vidhya Vihar</h3>
              <p className="text-lg text-gray-700 mb-2">Higher Secondary School</p>
              <p className="text-gray-600">2019 - 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
