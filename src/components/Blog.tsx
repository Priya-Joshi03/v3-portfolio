import React from "react";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Managing Docker with Python's OS Module",
      excerpt: "A step-by-step guide to controlling Docker containers using Python scripts that execute system commands for automation.",
      date: "2025-09-07",
      readTime: "6 min read",
      tags: ["Python", "Docker", "Automation"],
      url: "https://medium.com/@priyajoshi03082003/managing-docker-containers-with-pythons-os-module-f72229c883dd",
      technical: true
    },
    {
      title: "What is Ansible & how to Install and Configure Ansible on RHEL 9",
      excerpt: "An introduction to Ansible as an open-source automation tool, its architecture, features, and a step-by-step setup of Ansible on AWS with controller and target nodes.",
      date: "2025-09-07",
      readTime: "8 min read",
      tags: ["Ansible", "Automation", "Configuration Management", "AWS"],
      url: "https://medium.com/@priyajoshi03082003/what-is-ansible-how-to-install-and-configure-ansible-on-rhel-9-bdac3168de14",
      technical: true
    },
    {
      title: "Case Study On — How Companies Use Kubernetes & It's Installation",
      excerpt: "An introduction to Kubernetes for orchestrating containerized applications, its benefits, top companies using it, and a step-by-step setup with Minikube.",
      date: "2024-02-05",
      readTime: "7 min read",
      tags: ["Kubernetes", "Containers", "Orchestration"],
      url: "https://medium.com/@priyajoshi03082003/case-study-on-how-companies-use-kubernetes-its-installation-57fa201b21f0",
      technical: true
    },
    {
      title: "Three Tier Architecture Setup Inside Docker",
      excerpt: "A practical walkthrough of deploying a three-tier web application using MySQL for data, WordPress for frontend, and Docker for containerized integration.",
      date: "2025-09-07",
      readTime: "6 min read",
      tags: ["Docker", "WordPress", "3-Tier Architecture"],
      url: "https://medium.com/@priyajoshi03082003/three-tier-architecture-setup-inside-docker-08267a038027",
      technical: true
    },
    {
      title: "What is yum and How to configure it in RHELv9?",
      excerpt: "A Step by step guide for installing the Yellowdog Updater Modified tool for installing, updating, and managing packages with automatic dependency resolution.",
      date: "2025-09-07",
      readTime: "5 min read",
      tags: ["Linux", "RHEL", "Package Management"],
      url: "https://medium.com/@priyajoshi03082003/what-is-yum-and-how-to-configure-it-in-rhelv9-8c2e4731192f",
      technical: false
    },
    {
      title: "Containerize Any Tool or Technology with Docker",
      excerpt: "A step-by-step guide to containerizing a simple Node.js application using Dockerfiles, images, and containers for portability and scalability.",
      date: "2024-11-25",
      readTime: "5 min read",
      tags: ["Docker", "Node.js", "Containers"],
      url: "https://medium.com/@priyajoshi03082003/containerize-any-tool-or-technology-with-docker-c2fa9bc38c0b",
      technical: false
    },
    {
      title: "How Instagram Benefits from Using Python for Massive Data Scaling",
      excerpt: "A case study on Instagram's adoption of Python and Django to handle massive growth, optimize efficiency, and deliver seamless experiences to over 900 million active users.",
      date: "2023-10-21",
      readTime: "7 min read",
      tags: ["Python", "Django", "Case Study", "Instagram"],
      url: "https://medium.com/@priyajoshi03082003/how-instagram-benefits-from-using-python-for-massive-data-scaling-892753a7a376",
      technical: false
    },
    {
      title: "Operating System, Virtualization & RHEL v9 Installation On Oracle Virtual Box",
      excerpt: "An introduction to operating systems, their launch methods, and a practical setup of Red Hat Enterprise Linux 9 using Oracle VirtualBox.",
      date: "2023-11-13",
      readTime: "7 min read",
      tags: ["Operating Systems", "Virtualization", "RHEL 9", "VirtualBox"],
      url: "https://medium.com/@priyajoshi03082003/operating-system-virtualization-rhel-v9-installation-on-oracle-virtual-box-d305e4b0e5eb",
      technical: false
    }
  ];

  // Sort blogs: technical first, then by date (newest first)
  const sortedBlogs = blogPosts.sort((a, b) => {
    if (a.technical && !b.technical) return -1;
    if (!a.technical && b.technical) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in-up">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded animate-fade-in-up" style={{ animationDelay: "0.1s" }}></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Sharing insights and learnings from my DevOps journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBlogs.map((post, index) => (
            <article 
              key={index}
              className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(post.url, '_blank')}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`rounded-full p-3 mr-4 ${post.technical ? 'bg-green-100' : 'bg-blue-100'}`}>
                    <BookOpen className={`${post.technical ? 'text-green-600' : 'text-blue-600'}`} size={24} />
                  </div>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${post.technical ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                  {post.technical ? 'Technical' : 'Basic'}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">{post.readTime}</span>
                <div className="flex items-center text-primary-600 group-hover:text-primary-700 transition-colors">
                  <span className="text-sm font-medium mr-2">Read More</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
