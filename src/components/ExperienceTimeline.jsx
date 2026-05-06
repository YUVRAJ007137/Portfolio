import React from 'react';
import { motion } from 'framer-motion';
import './ExperienceTimeline.css';

const experiences = [
  {
    year: "Jul 2024 — Nov 2024",
    company: "E-Cell, IIT Bombay",
    role: "Campus Ambassador (Internship)",
    tags: ["Communication", "Marketing Strategy"],
    note: "Remote • Mumbai, Maharashtra, India"
  },
  {
    year: "May 2024 — Sep 2024",
    company: "Mountreach Solution Pvt. Ltd.",
    role: "Android Developer (Internship)",
    tags: ["Mobile App Development", "Android Studio"],
    note: "Hybrid • Amravati, Maharashtra, India"
  }
];

const ExperienceTimeline = () => {
  return (
    <motion.section 
      className="experience" 
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="experience__inner">
      <motion.div 
        className="experience__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-num">01</span>
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">Where I've been building things</p>
      </motion.div>

      <div className="experience__grid">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="exp-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="exp-card__top">
              <span className="exp-card__year">{exp.year}</span>
              <div className="exp-card__dot" />
            </div>
            <h3 className="exp-card__company">{exp.company}</h3>
            <p className="exp-card__role">{exp.role}</p>
            {exp.note && <p className="exp-card__note">{exp.note}</p>}
            {exp.tags && (
              <div className="exp-card__tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="exp-card__tag">{tag}</span>
                ))}
              </div>
            )}
            <div className="exp-card__glow" />
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
};

export default ExperienceTimeline;
