import React from "react";
import { ExternalLink, Github, Pocket as Docker, Monitor } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Docker Management Dashboard",
      description: "A single-pane Streamlit app to view and control containers, images, networks, volumes, logs, resource usage, and perform builds/pulls. Full Docker lifecycle management from the browser. Learned Docker SDK usage, runtime troubleshooting, and building secure remote control UIs.",
      technologies: ["Streamlit", "Python", "Docker SDK (python)", "Docker CLI", "Container lifecycle", "Image build & pull", "Volumes & networks", "Logs & metrics", "Web terminal"],
      github: "#",
      demo: "#",
      icon: Monitor,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Container WordPress App",
      description: "WordPress + MySQL in separate containers, learned containerization & DevOps basics.",
      technologies: ["Docker", "WordPress", "MySQL", "Docker Compose"],
      github: "#",
      demo: "#",
      icon: Docker,
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded animate-fade-in-up" style={{ animationDelay: "0.1s" }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index}
                className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${project.gradient} rounded-full p-4 mr-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">{project.title}</h3>
                </div>

                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-700 transition-colors duration-200 transform hover:scale-105"
                  >
                    <Github className="mr-2" size={20} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-200 transform hover:scale-105"
                  >
                    <ExternalLink className="mr-2" size={20} />
                    Demo
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;