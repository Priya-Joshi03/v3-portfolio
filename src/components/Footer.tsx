import React from 'react';
import { Github, Linkedin, Mail, Download, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Priya Joshi</h3>
            <p className="text-slate-300 leading-relaxed">
              DevOps Engineer passionate about containerization, automation, and optimizing development workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-300 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-primary-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/Priya-Joshi03"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/joshipriya27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:joshipriya8985@gmail.com"
                className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              <Download className="mr-2" size={16} />
              Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2024 Priya Joshi. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center">
            Made with <Heart className="mx-1 text-red-500" size={16} /> and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;