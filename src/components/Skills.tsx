import React, { useState, useEffect, useRef } from 'react';
import { Container, Globe, Settings, GitBranch, Code, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'Docker', level: 85, icon: Container, color: 'bg-blue-500' },
    { name: 'Kubernetes', level: 80, icon: Globe, color: 'bg-indigo-500' },
    { name: 'Linux', level: 90, icon: Settings, color: 'bg-green-500' },
    { name: 'Jenkins', level: 75, icon: GitBranch, color: 'bg-orange-500' },
    { name: 'Python', level: 70, icon: Code, color: 'bg-yellow-500' },
    { name: 'Team Player', level: 95, icon: Users, color: 'bg-purple-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in-up">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded animate-fade-in-up" style={{ animationDelay: '0.1s' }}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.name}
                className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`${skill.color} rounded-full p-3 mr-4`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">{skill.name}</h3>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-slate-600 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                        isVisible ? 'animate-progress' : 'w-0'
                      }`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;