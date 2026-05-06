import React from 'react';
import { motion } from 'framer-motion';
import './StatsTicker.css';

const stats = [
  { value: '18+', label: 'Projects Built' },
  { value: 'React', label: '+ Python Stack' },
  { value: '2024', label: 'Shipping Since' },
  { value: '∞', label: 'Curiosity' },
];

const StatsTicker = () => {
  return (
    <motion.section 
      className="ticker"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="ticker__track">
        {[...Array(3)].map((_, repeat) => (
          <div className="ticker__group" key={repeat}>
            {stats.map((s, i) => (
              <React.Fragment key={i}>
                <div className="ticker__stat">
                  <span className="ticker__value">{s.value}</span>
                  <span className="ticker__label">{s.label}</span>
                </div>
                <span className="ticker__sep">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default StatsTicker;
