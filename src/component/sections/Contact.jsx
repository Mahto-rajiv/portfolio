import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const Contact = () => (
  <section id="contact" className="py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <p className="text-center text-gray-600 mb-2">Get in Touch</p>
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

      <div className="bg-white rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <a
            href="mailto:rajivmahto8864@gmail.com"
            className="w-full max-w-sm inline-flex items-center gap-3 px-6 py-5 bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)] transition-all"
          >
            <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800">
              <Mail className="w-5 h-5" />
            </span>
            <span className="text-gray-700 font-medium">rajivmahto8864@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rajiv-mahto-b928bb253/"
            target="_blank"
            className="w-full max-w-sm inline-flex items-center gap-3 px-6 py-5 bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)] transition-all"
          >
            <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800">
              <Linkedin className="w-5 h-5" />
            </span>
            <span className="text-gray-700 font-medium">LinkedIn</span>
          </a>

          <a
            href="https://github.com/Mahto-rajiv/"
            target="_blank"
            className="w-full max-w-sm inline-flex items-center gap-3 px-6 py-5 bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)] transition-all"
          >
            <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800">
              <Github className="w-5 h-5" />
            </span>
            <span className="text-gray-700 font-medium">GitHub</span>
          </a>

          {/* Second row, centered card */}
          <a
            href="https://wa.me/+916355656614" 
            target="_blank"
            className="w-full max-w-sm inline-flex items-center gap-3 px-6 py-5 bg-white rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)] transition-all md:col-start-2"
          >
            <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-800">
              <FaWhatsapp className="w-5 h-5" />
            </span>
            <span className="text-gray-700 font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
