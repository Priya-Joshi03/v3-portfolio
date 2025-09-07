import React from 'react';
import { Code, Server, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded animate-fade-in-up" style={{ animationDelay: '0.1s' }}></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40">
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Strong interest in DevOps with hands-on experience in Docker, Kubernetes, and Jenkins. 
                Familiar with CI/CD pipelines, containerization, and automation practices. Quick learner 
                with a passion for optimizing workflows and exploring DevOps.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Code className="text-primary-600" size={24} />
                  </div>
                  <p className="text-sm font-semibold text-slate-600">Clean Code</p>
                </div>
                <div>
                  <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Server className="text-primary-600" size={24} />
                  </div>
                  <p className="text-sm font-semibold text-slate-600">DevOps</p>
                </div>
                <div>
                  <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Zap className="text-primary-600" size={24} />
                  </div>
                  <p className="text-sm font-semibold text-slate-600">Automation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">🎯 Mission</h3>
                <p className="text-slate-600">
                  To leverage DevOps practices and automation tools to streamline development processes and enhance system reliability.
                </p>
              </div>
              
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">💡 Vision</h3>
                <p className="text-slate-600">
                  Building scalable, efficient infrastructure solutions that empower teams to deliver high-quality software rapidly.
                </p>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">🚀 Values</h3>
                <p className="text-slate-600">
                  Continuous learning, collaboration, and innovation in the ever-evolving world of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;