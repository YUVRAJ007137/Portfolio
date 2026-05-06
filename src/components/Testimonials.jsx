import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "Raj Patel",
    role: "CTO, Tech Desk",
    avatar: "RP",
    text: "Yuvraj delivered the landing page in record time. The attention to detail and implementation quality exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Product Manager, AI Labs",
    avatar: "SC",
    text: "The Violence Detection System was incredibly impressive. Delivers real-time performance and is production-ready right out of the box.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Founder, Driving School Co",
    avatar: "MJ",
    text: "Built our entire management system. Professional, communicative, and solved complex problems with elegant solutions.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <motion.section
      className="testimonials-section"
      id="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="testimonials-section__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-num">05</span>
        <h2 className="section-title">Testimonials</h2>
        <p className="section-sub">What clients and collaborators say</p>
      </motion.div>

      <div className="testimonials-container">
        <button 
          className="testimonials-nav testimonials-nav--prev" 
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <motion.div
          key={activeIndex}
          className="testimonial-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="testimonial-card__rating">
            {Array(testimonials[activeIndex].rating)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="testimonial-card__star">★</span>
              ))}
          </div>

          <p className="testimonial-card__text">"{testimonials[activeIndex].text}"</p>

          <div className="testimonial-card__author">
            <div className="testimonial-card__avatar">
              {testimonials[activeIndex].avatar}
            </div>
            <div>
              <div className="testimonial-card__name">{testimonials[activeIndex].name}</div>
              <div className="testimonial-card__role">{testimonials[activeIndex].role}</div>
            </div>
          </div>
        </motion.div>

        <button 
          className="testimonials-nav testimonials-nav--next" 
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      <div className="testimonials-dots">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`testimonials-dot ${idx === activeIndex ? 'testimonials-dot--active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
