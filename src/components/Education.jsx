import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering - BE, Artificial Intelligence",
    institution: "University of Mumbai",
    year: "Aug 2025 — May 2028",
    grade: "",
    details: "Focusing on Artificial Intelligence, Databases, and Communication."
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic College",
    year: "Sep 2022 — May 2025",
    grade: "80.11%",
    details: "Focused on Web Development and core engineering principles."
  }
];

const Education = () => {
  return (
    <motion.section 
      className="education" 
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="education__inner">
        <motion.div 
          className="education__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-num">02</span>
          <h2 className="section-title">Education</h2>
          <p className="section-sub">My academic background</p>
        </motion.div>

        <div className="education__timeline">
          <div className="education__line"></div>
          {educationData.map((edu, index) => (
            <motion.div 
              key={edu.id} 
              className="education__item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="education__dot"></div>
              <div className="education__content">
                <span className="education__year">{edu.year}</span>
                <h3 className="education__degree">{edu.degree}</h3>
                <h4 className="education__institution">{edu.institution}</h4>
                {edu.grade && (
                  <div className="education__meta">
                    <span className="education__grade">{edu.grade}</span>
                  </div>
                )}
                <p className="education__details">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
