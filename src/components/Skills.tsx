import React from 'react';
import Glitch from './Glitch';

interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'frontend' | 'backend' | 'tools';
  color: string;
  description: string;
  subSkills?: Skill[];
}

interface SkillNodeProps {
  skill: Skill;
  depth?: number;
  noChildren?: boolean;
  hideConnector?: boolean;
}

const SkillNode: React.FC<SkillNodeProps> = ({
  skill,
  depth = 0,
  noChildren = false,
  hideConnector = false,
}) => {
  const levelColors = {
    Beginner: '#FF007F',
    Intermediate: '#FFD500',
    Advanced: '#00F0FF',
  };

  return (
    <div className="relative pl-8 ml-4 group">
      {/* Vertical connecting line for non-root nodes */}
      {depth > 0 && (
        <div
          className="absolute left-0 top-4 w-px bg-cyber-blue/40"
          style={{ height: `calc(100% - 1.5rem)` }}
        />
      )}

      {/* Skill box */}
      <div className="relative bg-cyber-darkblue border border-cyber-blue/20 rounded-lg p-4 mb-4
        transition-all duration-300 hover:border-cyber-blue/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
        {/* Horizontal connector for non-root nodes unless hidden */}
        {depth > 0 && !hideConnector && (
          <div className="absolute -left-8 top-1/2 w-8 h-px bg-cyber-blue/40" />
        )}

        <div className="text-gray-300 font-cyber text-lg mb-2">{skill.name}</div>
        <div
          className="text-sm mb-2 font-mono"
          style={{ color: levelColors[skill.level] }}
        >
          [{skill.level}]
        </div>
        <div className="text-gray-400 text-sm">{skill.description}</div>
      </div>

      {/* Render sub-skills vertically if available */}
      {!noChildren && skill.subSkills && (
        <div className="ml-8">
          {skill.subSkills.map((subSkill) => (
            <SkillNode
              key={subSkill.name}
              skill={subSkill}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const SkillsTree: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "Core Competencies",
      level: "Advanced",
      category: "frontend",
      color: "#00F0FF",
      description: "Primary technical expertise areas",
      subSkills: [
        {
          name: "Frontend Architecture",
          level: "Advanced",
          category: "frontend",
          color: "#00F0FF",
          description: "React ecosystem, State management, Component design",
          subSkills: [
            { name: "React", level: "Advanced", category: "frontend", color: "#00F0FF", description: "Building user interfaces" },
            { name: "TypeScript", level: "Advanced", category: "frontend", color: "#00F0FF", description: "Type-safe development" },
            { name: "Performance Optimization", level: "Intermediate", category: "frontend", color: "#00F0FF", description: "Bundle optimization, Lazy loading" },
          ]
        },
        {
          name: "Backend Systems",
          level: "Intermediate",
          category: "backend",
          color: "#FF007F",
          description: "Server-side development & infrastructure",
          subSkills: [
            { name: "Node.js", level: "Advanced", category: "backend", color: "#FF007F", description: "REST/GraphQL APIs" },
            { name: "Database Design", level: "Intermediate", category: "backend", color: "#FF007F", description: "SQL/NoSQL solutions" },
            { name: "Cloud Infrastructure", level: "Intermediate", category: "backend", color: "#FF007F", description: "AWS, Docker, CI/CD" },
          ]
        },
        {
          name: "Development Ecosystem",
          level: "Advanced",
          category: "tools",
          color: "#FFD500",
          description: "Tooling & workflow optimization",
          subSkills: [
            { name: "Version Control", level: "Advanced", category: "tools", color: "#FFD500", description: "Git workflows" },
            { name: "DevOps", level: "Intermediate", category: "tools", color: "#FFD500", description: "Containerization, Orchestration" },
            { name: "UX/UI Design", level: "Intermediate", category: "tools", color: "#FFD500", description: "Figma, Prototyping" },
          ]
        }
      ]
    }
  ];

  const coreSkill = skills[0];

  return (
    <section id="skills" className="section bg-cyber-black relative">
      {/* Background cyberpunk grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(#00F0FF 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-cyber font-bold inline-block mb-4">
            <Glitch text="SKILLS" color="yellow" />
            <span className="text-cyber-blue"> & </span>
            <Glitch text="TECH" color="yellow" />
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My technical arsenal and expertise, continuously enhanced and upgraded for peak performance.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Top node: Core Competencies */}
          <SkillNode skill={coreSkill} depth={0} noChildren={true} />

          {/* Connector: vertical for mobile (shown only on small screens) */}
          <div className="block sm:hidden w-px h-8 bg-cyber-blue/40"></div>

          {/* Connector: horizontal for larger screens */}
          <div className="hidden sm:block relative w-full">
            <div className="absolute top-4 left-0 w-full h-px bg-cyber-blue/40"></div>
          </div>

          {/* Branch container:
              - On mobile: stacked vertically (flex-col)
              - On larger screens: laid out horizontally (sm:flex-rzow) */}
          <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8">
            {coreSkill.subSkills?.map((branch) => (
              <div key={branch.name}>
                <SkillNode skill={branch} depth={1} hideConnector={true} />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Grid remains unchanged */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-cyber text-white mb-4">TECH STACK</h3>
            <div className="h-[1px] w-24 bg-cyber-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
               "TypeScript" , "NextJS" ,  "React" , "Node.js" , "Tailwind" , "MySQL" ,
              "PostgreSQL" , "Java" , "Flutter" , "Dart" , "Firebase" , "Spring Boot" ,
            ].map((tech, index) => (
              <div
                key={tech}
                className="bg-cyber-darkblue border border-cyber-blue/20 rounded-lg p-4 text-center hover:border-cyber-blue/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-gray-300 font-mono text-sm">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTree;
