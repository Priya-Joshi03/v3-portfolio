import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Cloud, 
  GitBranch, 
  Container, 
  Monitor, 
  Settings, 
  Zap,
  Code,
  Terminal,
  Cpu,
  HardDrive,
  Download,
  Github,
  Linkedin,
  ChevronDown
} from 'lucide-react';
import { Button } from './ui/Button';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const devopsTools = [
    { icon: Server, name: "Kubernetes", delay: 0 },
    { icon: Database, name: "PostgreSQL", delay: 0.2 },
    { icon: Cloud, name: "AWS", delay: 0.4 },
    { icon: GitBranch, name: "Git", delay: 0.6 },
    { icon: Container, name: "Docker", delay: 0.8 },
    { icon: Monitor, name: "Grafana", delay: 1.0 },
    { icon: Settings, name: "Ansible", delay: 1.2 },
    { icon: Zap, name: "Jenkins", delay: 1.4 },
    { icon: Code, name: "Terraform", delay: 1.6 },
    { icon: Terminal, name: "Linux", delay: 1.8 },
    { icon: Cpu, name: "Prometheus", delay: 2.0 },
    { icon: HardDrive, name: "Redis", delay: 2.2 },
  ];

  return (
    <section 
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
    >
      {/* Radial circle background pattern */}
      <div
        style={{
          transform: "translate(-50%, -50%)",
        }}
        className="absolute left-1/2 top-1/2 -z-10 mx-auto size-[800px] rounded-full border border-border/20 p-16 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] md:size-[1300px] md:p-32"
      >
        <div className="size-full rounded-full border border-border/20 p-16 md:p-32">
          <div className="size-full rounded-full border border-border/20"></div>
        </div>
      </div>

      {/* Floating DevOps Tools */}
      {devopsTools.map((tool, index) => {
        const Icon = tool.icon;
        const angle = (index / devopsTools.length) * 2 * Math.PI;
        const radius = 300 + Math.sin(Date.now() * 0.001 + index) * 50;
        const x = Math.cos(angle + Date.now() * 0.0005) * radius;
        const y = Math.sin(angle + Date.now() * 0.0005) * radius;
        
        return (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.6, 
              scale: 1,
              x: x + (mousePosition.x - window.innerWidth / 2) * 0.02,
              y: y + (mousePosition.y - window.innerHeight / 2) * 0.02,
            }}
            transition={{ 
              delay: tool.delay,
              duration: 0.8,
              x: { type: "spring", stiffness: 50 },
              y: { type: "spring", stiffness: 50 }
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
          >
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/20 hover:bg-card/50 transition-colors">
              <Icon className="size-6 text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-medium">{tool.name}</span>
            </div>
          </motion.div>
        );
      })}

      {/* Main Content */}
      <div className="container relative z-10 flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Zap className="size-4" />
                DevOps Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-foreground"
            >
              Priya Joshi
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium"
            >
              DevOps Engineer
            </motion.h2>

            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-primary border-none rounded"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Passionate about automating infrastructure, optimizing CI/CD pipelines, and building scalable cloud solutions. Expert in containerization, monitoring, and ensuring reliable deployments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Download className="mr-2 size-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.open('https://github.com/Priya-Joshi03', '_blank')}
              >
                <Github className="mr-2 size-4" />
                View GitHub
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.open('https://www.linkedin.com/in/joshipriya27', '_blank')}
              >
                <Linkedin className="mr-2 size-4" />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                style={{ padding: '2rem' }}
              />
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
              >
                <img
                  src="/images/priya.jpeg"
                  alt="Priya Joshi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </motion.div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Server className="size-8 text-primary" />
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Cloud className="size-8 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-muted-foreground hover:text-primary transition-colors duration-200" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
