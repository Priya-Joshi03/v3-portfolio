import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education: React.FC = () => {
  const education = [
    {
      degree: "Masters in Computer Application",
      school: "JECRC University",
      period: "2024 – Present",
      status: "In Progress",
      color: "bg-primary-500"
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "JVWU",
      period: "2019 – 2024",
      status: "Completed",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in-up">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded animate-fade-in-up" style={{ animationDelay: "0.1s" }}></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-primary-600 via-primary-500 to-primary-600 rounded-full shadow-lg"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-600 rounded-full z-10 shadow-lg border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className={`${item.color} rounded-full p-3 mr-4`}>
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.degree}</h3>
                    <p className="text-slate-600 mb-3 font-medium">{item.school}</p>
                    
                    <div className="flex items-center text-slate-500">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
