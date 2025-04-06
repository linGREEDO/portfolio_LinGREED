
import React, { useState } from 'react';
import Glitch from './Glitch';
import { ExternalLink, Github, Lock, Cpu, Globe, Server, Shield } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  secure?: boolean;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Rekan Group",
      description: "A responsive, multilingual website and admin panel for Rekan Group, showcasing their diverse projects while streamlining management.",
      image: "/img/rekangroup.png",
      tags: [ "Next.js", "Tailwind", "React", "Node.js","TypeScript", "MySQL"],
      liveUrl: "https://rekangroup.com",
      // repoUrl: "https://github.com/example/neural-dashboard",
      secure: true
    }
  ];

  const filters = ['all','TypeScript','Node.js','Next.js', 'Flutter', 'Supabase'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="section bg-cyber-black/40 relative">
      {/* Background data streams */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="data-stream opacity-5"></div>
      </div>

      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <div className="border-2 border-cyber-red/30 inline-block px-4 py-1 mb-4">
            <h2 className="text-3xl md:text-4xl font-cyber font-bold uppercase tracking-wide">
              <Glitch text="Projects" color="red" />
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-sm">// EXECUTED OPERATIONS // DATA ARCHIVES</p>
        </div>

        {/* Filter Controls */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 font-mono text-sm border transition-all ${
                filter === activeFilter
                  ? 'bg-cyber-red text-cyber-black border-cyber-red'
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-cyber-red/50'
              }`}
            >
              {filter === 'all' ? 'ALL' : filter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-cyber-black border border-cyber-red/30 group relative overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image with Cyberpunk overlay */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Digital noise overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent opacity-70"></div>

                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 30, 30, 0.1) 1px, transparent 1px),
                                   linear-gradient(to bottom, rgba(255, 30, 30, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>

                {project.secure && (
                  <div className="absolute top-2 right-2 bg-cyber-black/70 p-1 rounded-sm border border-cyber-red/30">
                    <Lock size={14} className="text-cyber-red" />
                  </div>
                )}

                {/* Tags as cyberpunk badges */}
                <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="bg-cyber-black/80 border border-cyber-red/50 px-2 py-0.5 text-cyber-red text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="bg-cyber-black/80 border border-cyber-red/50 px-2 py-0.5 text-cyber-red text-xs font-mono">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                <h3 className="font-cyber text-lg text-cyber-red mb-2 group-hover:text-cyber-yellow transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm font-mono mb-4">
                  {project.description}
                </p>

                {/* Project Links */}
                <div className="flex justify-between items-center pt-4 border-t border-cyber-red/10">
                  <div className="space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyber-red hover:text-cyber-yellow transition-colors"
                      >
                        <Globe size={16} className="mr-1" />
                        <span className="text-xs font-mono">LIVE</span>
                      </a>
                    )}

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyber-red hover:text-cyber-yellow transition-colors"
                      >
                        <Github size={16} className="mr-1" />
                        <span className="text-xs font-mono">CODE</span>
                      </a>
                    )}
                  </div>

                  <div className="opacity-50">
                    {project.tags.includes('React') && <Cpu size={14} className="inline text-cyber-yellow mr-1" />}
                    {project.tags.includes('Node.js') && <Server size={14} className="inline text-cyber-green mr-1" />}
                    {project.tags.includes('Socket.io') && <Shield size={14} className="inline text-cyber-yellow" />}
                  </div>
                </div>
              </div>

              {/* Hover Animation - Digital circuit effect */}
              {hoveredProject === project.id && (
                <>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-red to-transparent"></div>
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-cyber-red via-transparent to-transparent"></div>
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyber-red to-transparent"></div>
                  <div className="absolute right-0 bottom-0 w-0.5 h-full bg-gradient-to-b from-cyber-red via-transparent to-transparent"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
