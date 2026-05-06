import React, { useEffect, useState } from 'react';
import './InteractiveGrid.css';

const InteractiveGrid = ({ isFixed = true, avoidRightSide = false, hideDim = false }) => {
  const [mousePosition, setMousePosition] = useState({ 
    x: typeof window !== 'undefined' ? window.innerWidth * 0.83 : -1000, 
    y: typeof window !== 'undefined' ? window.innerHeight * 0.7 : -1000 
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // If absolute, calculate position relative to the document so the mask aligns correctly
      // But actually, if the parent is at top: 0 (like Hero), pageX/pageY work perfectly.
      setMousePosition({
        x: isFixed ? e.clientX : e.pageX,
        y: isFixed ? e.clientY : e.pageY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFixed]);

  // Mask to avoid the right side (where the character usually is)
  const baseMask = avoidRightSide ? `linear-gradient(to right, black 30%, transparent 70%)` : `none`;

  return (
    <div 
      className="interactive-grid-container"
      style={{ 
        position: isFixed ? 'fixed' : 'absolute',
        zIndex: isFixed ? -10 : 2,
        maskImage: avoidRightSide ? baseMask : 'none',
        WebkitMaskImage: avoidRightSide ? baseMask : 'none'
      }}
    >
      {/* Base dim grid */}
      {!hideDim && <div className="interactive-grid interactive-grid--dim" />}
      
      {/* Cursor Ambient Glow (the soft light behind the grid) */}
      <div 
        className="interactive-grid-cursor-glow"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />

      {/* Bright glowing grid revealed by mouse mask */}
      <div 
        className="interactive-grid interactive-grid--bright"
        style={{
          WebkitMaskImage: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(250px circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
        }}
      />
    </div>
  );
};

export default InteractiveGrid;
