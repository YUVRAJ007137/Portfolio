import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkeletonCard from './SkeletonCard';
import './ProjectsTerminal.css';

const projects = [
  {
    id: 1,
    name: "Violence Detection System",
    description: "Real-time AI threat detection web app with live camera feeds. Identifies dangerous objects in under 100ms.",
    stack: ["TypeScript", "React", "Firebase", "OpenCV"],
    category: ["AI", "Web", "Real-time"],
    builtIn: "3 weeks",
    impact: "1000+ users",
    liveUrl: "https://violence-detector.vercel.app/",
    githubUrl: "https://github.com/YUVRAJ007137/Violence-Detection-system-public-repo",
    pin: true,
  },
  {
    id: 2,
    name: "TalkDrop",
    description: "Secure Made-in-India chat & file sharing app. WhatsApp-inspired real-time messaging with end-to-end encrypted file sharing, built with React Vite and Supabase.",
    stack: ["TypeScript", "React", "Vite", "Supabase", "Tailwind"],
    category: ["Web", "Full-stack", "Real-time"],
    builtIn: "8 weeks",
    impact: "Active development",
    liveUrl: "https://talk-drop.vercel.app/",
    githubUrl: "https://github.com/YUVRAJ007137/TalkDrop",
    pin: true,
  },
  {
    id: 3,
    name: "GrievanceOS",
    description: "AI-powered grievance management system. Streamlines complaint filing and resolution tracking with intelligent categorization powered by Google Gemini AI.",
    stack: ["TypeScript", "Next.js", "Supabase", "Gemini API", "Tailwind"],
    category: ["Web", "Full-stack", "AI"],
    builtIn: "12 weeks",
    impact: "Beta testing",
    liveUrl: "https://grievance-os.vercel.app/",
    githubUrl: "https://github.com/YUVRAJ007137/GrievanceOS",
    pin: true,
  },
  {
    id: 4,
    name: "Vote Smart AI",
    description: "AI-assisted voting platform with intelligent decision support. Helps voters make informed choices with ML-powered candidate analysis and voting recommendations.",
    stack: ["JavaScript", "React", "AI/ML", "Tailwind", "Vite"],
    category: ["Web", "AI", "Frontend"],
    builtIn: "3 weeks",
    impact: "MVP released",
    liveUrl: "https://vote-smart-ai-xi.vercel.app/",
    githubUrl: "https://github.com/YUVRAJ007137/Vote-smart-ai",
    pin: false,
  },
  {
    id: 5,
    name: "Restaurant Menu SaaS",
    description: "SaaS platform for restaurant menu management. Digital menu builder with real-time updates, inventory tracking, and multi-restaurant support.",
    stack: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind", "Vercel"],
    category: ["Web", "Full-stack", "SaaS"],
    builtIn: "4 weeks",
    impact: "In development",
    liveUrl: "https://restaurant-menu-saa-s.vercel.app/",
    githubUrl: "https://github.com/YUVRAJ007137/Restaurant-menu-SaaS",
    pin: false,
  },
  {
    id: 6,
    name: "Text-to-Image Generator",
    description: "Local Stable Diffusion v1 implementation with custom UI. Generate high-quality images offline without API rate limits.",
    stack: ["Python", "Flask", "Gradio", "Stable Diffusion"],
    category: ["AI", "Python", "Desktop"],
    builtIn: "2 weeks",
    impact: "5 studios",
    githubUrl: "https://github.com/YUVRAJ007137/text-to-image-generator",
    pin: false,
  },
  {
    id: 7,
    name: "Tech Desk Landing Page",
    description: "Production landing page for Tech Desk development agency. Built with modern React and Tailwind.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    category: ["Web", "Frontend"],
    builtIn: "5 days",
    impact: "50+ leads/month",
    liveUrl: "https://techdesk.studio",
    githubUrl: "https://github.com/YUVRAJ007137/Tech_Desk_Landing_page",
    pin: false,
  },
  {
    id: 8,
    name: "Driving School Management App",
    description: "Full-stack web application for managing driving school operations. Handles student management, scheduling, and payment processing.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    category: ["Web", "Full-stack", "Backend"],
    builtIn: "4 weeks",
    impact: "2 schools",
    githubUrl: "https://github.com/YUVRAJ007137/Driving-School-PHP-project",
    pin: false,
  }
];

const allCategories = ["All", "Web", "AI", "Frontend", "Backend", "Full-stack", "Python", "Real-time", "Desktop", "SaaS"];

const ProjectsTerminal = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(proj => {
    const categoryMatch = selectedCategory === "All" || proj.category.includes(selectedCategory);
    const searchMatch = proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        proj.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <motion.section
      className="projects-section"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="projects-section__inner">
      <motion.div
        className="projects-section__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">Things I've shipped into the world</p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        className="projects-search"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="projects-search__input"
          aria-label="Search projects"
        />
        <svg className="projects-search__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="projects-filter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`projects-filter__btn ${selectedCategory === cat ? 'projects-filter__btn--active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-list">
        <AnimatePresence mode="wait">
          {loading ? (
            Array(4)
              .fill(0)
              .map((_, idx) => (
                <div key={`skeleton-${idx}`}>
                  <SkeletonCard />
                </div>
              ))
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((proj, idx) => (
                <motion.div
                  key={proj.id}
                  className={`project-card project-card--no-thumbnail ${proj.pin ? 'project-card--featured' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="project-card__content">
                    <div>
                      <h3 className="project-card__name">{proj.name}</h3>
                      <div className="project-card__divider"></div>
                      <p className="project-card__desc">{proj.description}</p>

                      <div className="project-card__meta">
                        <span>Built in: {proj.builtIn}</span>
                      </div>

                      <div className="project-card__stack">
                        {proj.stack.map(tech => (
                          <span key={tech} className="project-card__tech">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="project-card__links">
                      {proj.liveUrl && (
                        <>
                          <a href={proj.liveUrl} className="project-card__link" aria-label={`View ${proj.name} live demo`}>Live Demo</a>
                          <span className="project-card__link-separator">•</span>
                        </>
                      )}
                      <a href={proj.githubUrl} className="project-card__link" target="_blank" rel="noopener noreferrer" aria-label={`View ${proj.name} GitHub`}>GitHub</a>
                    </div>
                  </div>
                </motion.div>
            ))
          ) : (
            <motion.div
              className="projects-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>No projects found. Try a different filter.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </motion.section>
  );
};

export default ProjectsTerminal;
