import React from 'react';
import { motion } from 'framer-motion';
import './AboutStatement.css';

const skills = ["React", "Python", "JavaScript", "TypeScript", "Firebase", "Node.js", "Tailwind CSS", "Git", "SQL"];

const AboutStatement = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="about__inner">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-num">04</span>
          <h2 className="section-title">About</h2>
        </motion.div>

        <div className="bento-grid">
          {/* Card 1: Profile Image */}
          <motion.div
            className="bento-card bento-card--image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bento-card__image-container">
              {/* Floating Particles */}
              <div className="floating-particles">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
              </div>
              
              {/* Hexagon Profile Image */}
              <div className="hexagon-wrapper">
                <div className="hexagon-outer">
                  <img src="/profile.jpg" alt="Yuvraj Chaudhari" className="hexagon-inner" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Terminal Bio */}
          <motion.div
            className="bento-card bento-card--bio"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bento-card__content terminal-window">
              <div className="terminal-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-line">
                <span className="terminal-prompt">yuvraj@portfolio:~$</span> cat bio.txt
              </div>
              <p className="about__bio">
                I'm a full-stack developer currently in my Direct Second Year of BE in AI & ML.
                I believe in building systems that work — not just look pretty. I write clean code,
                move fast, and care deeply about the craft of shipping real-world software.
              </p>
              <div className="terminal-line">
                <span className="terminal-prompt">yuvraj@portfolio:~$</span> <span className="terminal-cursor"></span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Skills */}
          <motion.div
            className="bento-card bento-card--skills"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bento-card__content">
              <h3 className="bento-title">Tech Stack</h3>
              <div className="about__skills">
                {skills.map((skill, i) => (
                  <span key={i} className="about__skill">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Location */}
          <motion.div
            className="bento-card bento-card--location"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bento-card__content location-content">
              <div className="radar">
                <div className="radar-sweep"></div>
                <div className="radar-dot"></div>
              </div>
              <div className="location-text">
                <h3 className="bento-title" style={{ marginBottom: "4px" }}>Based In</h3>
                <p>Chalisgaon, Jalgaon</p>
                <p style={{ fontSize: "11px", color: "var(--text-secondary)", marginTop: "2px" }}>Maharashtra, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutStatement;
