import React, { useState, useEffect, useRef } from 'react';
import InteractiveGrid from './InteractiveGrid';
import './Hero.css';

const Hero = () => {
  const firstName = "YUVRAJ";
  const lastName = "CHAUDHARI";
  const fullName = firstName + " " + lastName;
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState(0); // 0: typing, 1: divider, 2: subtitle, 3: badges
  const heroRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const type = setInterval(() => {
      if (i < fullName.length) {
        i++;
        setCharCount(i);
      } else {
        clearInterval(type);
        setTimeout(() => setPhase(1), 200);
        setTimeout(() => setPhase(2), 700);
        setTimeout(() => setPhase(3), 1100);
      }
    }, 80);
    return () => clearInterval(type);
  }, []);

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scroll = window.scrollY;
        const bg = heroRef.current.querySelector('.hero__bg');
        const content = heroRef.current.querySelector('.hero__content');
        if (bg) bg.style.transform = `scale(1.1) translateY(${scroll * 0.3}px)`;
        if (content) content.style.transform = `translateY(${scroll * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine how many chars of each name to show
  const firstNameVisible = fullName.substring(0, Math.min(charCount, firstName.length));
  const lastNameVisible = charCount > firstName.length + 1
    ? lastName.substring(0, charCount - firstName.length - 1)
    : '';
  const cursorOnFirst = charCount <= firstName.length;

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__bg" />
      <div className="hero__gradient" />
      
      {/* Hero-specific grid overlaying the background */}
      <InteractiveGrid isFixed={false} avoidRightSide={false} hideDim={true} />

      <div className="hero__content">
        <div className="hero__label">
          <span className="hero__label-line" />
          <span className={`hero__label-text ${phase >= 2 ? 'show' : ''}`}>Full-Stack Developer</span>
        </div>

        <h1 className="hero__name">
          <span className="hero__name-line">
            {firstNameVisible.split('').map((char, i) => (
              <span key={`f-${i}`} className="hero__char">{char}</span>
            ))}
            {cursorOnFirst && <span className="hero__cursor">|</span>}
          </span>
          <span className="hero__name-line">
            {lastNameVisible.split('').map((char, i) => (
              <span key={`l-${i}`} className="hero__char">{char}</span>
            ))}
            {!cursorOnFirst && <span className="hero__cursor">|</span>}
          </span>
        </h1>

        <div className={`hero__divider ${phase >= 1 ? 'show' : ''}`} />

        <div className={`hero__badges ${phase >= 3 ? 'show' : ''}`}>
          <span className="hero__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
            Open to Work
          </span>
          <span className="hero__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            Creative Developer
          </span>
          <span className="hero__badge">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            Tech Enthusiast
          </span>
        </div>
      </div>

      <div className={`hero__scroll ${phase >= 3 ? 'show' : ''}`}>
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;
