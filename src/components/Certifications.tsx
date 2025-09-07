import React from 'react';
import { Award, Calendar, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Linux V9 Training',
      organization: 'Linux World',
      period: 'Oct 2023 – Jan 2024',
      description: 'Comprehensive Linux system administration and command-line proficiency',
      skills: ['Linux Administration', 'Shell Scripting', 'System Configuration']
    },
    {
      title: 'Kubernetes CKA & CKAD Training',
      organization: 'Linux World',
      period: 'Jan 2024 – Mar 2024',
      description: 'Advanced Kubernetes administration and application deployment',
      skills: ['Kubernetes', 'Container Orchestration', 'Application Deployment']
    },
    {
      title: 'Docker (DCA) Training',
      organization: 'Linux World',
      period: 'Oct 2023 – Jan 2024',
      description: 'Docker containerization and Docker Certified Associate preparation',
      skills: ['Docker', 'Containerization', 'Docker Compose']
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in-up">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded animate-fade-in-up" style={{ animationDelay: '0.1s' }}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-full p-3 mr-4">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <CheckCircle className="text-green-500 float-right" size={20} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2">{cert.title}</h3>
              <p className="text-primary-600 font-semibold mb-3">{cert.organization}</p>
              
              <div className="flex items-center text-slate-500 mb-4">
                <Calendar size={16} className="mr-2" />
                <span className="text-sm">{cert.period}</span>
              </div>

              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                {cert.description}
              </p>

              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700 mb-2">Key Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;