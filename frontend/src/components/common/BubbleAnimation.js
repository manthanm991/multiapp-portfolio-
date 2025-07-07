import React, { useState, useEffect, useRef } from 'react';
import '../../styles/components/bubble_animation.css';

const BubbleAnimation = ({ color = 'blue', density = 'medium', speed = 'medium' }) => {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  const colorSchemes = {
    blue: {
      gradient: { start: 'rgba(135, 206, 235, 0.3)', middle: 'rgba(100, 149, 237, 0.2)',end: 'rgba(0, 100, 200, 0.1)' },
      stroke: 'rgba(135, 206, 235, 0.3)',
      highlight: 'rgba(255, 255, 255, 0.6)',
      shadow: 'rgba(135, 206, 235, 0.3)'
    },
    red: {
      gradient: { start: 'rgba(255, 99, 132, 0.3)', middle: 'rgba(255, 69, 100, 0.2)', end: 'rgba(220, 20, 60, 0.1)' },
      stroke: 'rgba(255, 99, 132, 0.3)',
      highlight: 'rgba(255, 255, 255, 0.6)',
      shadow: 'rgba(255, 99, 132, 0.3)'
    },
    green: {
      gradient: { start: 'rgba(144, 238, 144, 0.3)', middle: 'rgba(102, 205, 170, 0.2)', end: 'rgba(34, 139, 34, 0.1)' },
      stroke: 'rgba(144, 238, 144, 0.3)',
      highlight: 'rgba(255, 255, 255, 0.6)',
      shadow: 'rgba(144, 238, 144, 0.3)'
    },
    purple: {
      gradient: { start: 'rgba(186, 85, 211, 0.3)', middle: 'rgba(147, 112, 219, 0.2)', end: 'rgba(138, 43, 226, 0.1)' },
      stroke: 'rgba(186, 85, 211, 0.3)',
      highlight: 'rgba(255, 255, 255, 0.6)',
      shadow: 'rgba(186, 85, 211, 0.3)'
    },
    orange: {
      gradient: { start: 'rgba(255, 165, 0, 0.3)', middle: 'rgba(255, 140, 0, 0.2)', end: 'rgba(255, 69, 0, 0.1)' },
      stroke: 'rgba(255, 165, 0, 0.3)',
      highlight: 'rgba(255, 255, 255, 0.6)',
      shadow: 'rgba(255, 165, 0, 0.3)'
    }
  };

  const getBubbleCount = () => {
    switch(density) {
      case 'low': return 4;
      case 'medium': return 7;
      case 'high': return 10;
      default: return 7;
    }
  };

  const getAnimationDuration = () => {
    switch(speed) {
      case 'slow': return 10;
      case 'medium': return 7;
      case 'fast': return 4;
      default: return 7;
    }
  };

  const getBubbleSize = (baseSize) => {
    if (containerSize.width === 0 || containerSize.height === 0) {
      return baseSize; // fallback to base size if container not measured yet
    }
    const minSize = Math.min(containerSize.width, containerSize.height);
    const scaleFactor = Math.max(0.5, Math.min(1.5, minSize / 400));
    return Math.max(15, baseSize * scaleFactor);
  };

  const currentScheme = colorSchemes[color] || colorSchemes.blue;
  const bubbleCount = getBubbleCount();
  const animationDuration = getAnimationDuration();

  const BubbleSVG = ({ size = 50, delay = 0, index = 0 }) => {
    const actualSize = getBubbleSize(size);
    const gradientId = `bubbleGradient-${color}-${index}-${Date.now()}`;
    const filterId = `bubbleGlow-${color}-${index}-${Date.now()}`;
    
    return (
      <svg 
        width={actualSize} 
        height={actualSize} 
        viewBox="0 0 100 100" 
        className="bubble-svg" 
        style={{ 
          animationDuration: `${animationDuration}s`, 
          animationDelay: `${delay}s`, 
          filter: `drop-shadow(0 0 5px ${currentScheme.shadow})`,
          zIndex: 1
        }} 
      >
        <defs>
          <radialGradient id={gradientId} cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor={currentScheme.gradient.start} />
            <stop offset="70%" stopColor={currentScheme.gradient.middle} />
            <stop offset="100%" stopColor={currentScheme.gradient.end} />
          </radialGradient>
          <filter id={filterId}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <circle cx="50" cy="50" r="45" fill={`url(#${gradientId})`} stroke={currentScheme.stroke} strokeWidth="2" filter={`url(#${filterId})`} />
        <ellipse cx="35" cy="25" rx="8" ry="12" fill={currentScheme.highlight} opacity="0.8" />
      </svg>
    );
  };

  const generateBubbles = () => {
    const bubbles = [];
    const baseSizes = [25, 35, 40, 50, 30, 45, 35, 28, 38, 42];
    
    for (let i = 0; i < bubbleCount; i++) {
      const size = baseSizes[i % baseSizes.length];
      const delay = Math.random() * animationDuration;
      bubbles.push( <BubbleSVG key={`${i}-${color}-${Date.now()}`} size={size} delay={delay} index={i} /> );
    }
    
    return bubbles;
  };

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };

    // Initial size update
    const timeoutId = setTimeout(updateSize, 100);
    
    // Add resize listener
    window.addEventListener('resize', updateSize);
    
    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="bubble-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      <div className="bubbles">
        {generateBubbles()}
      </div>
    </div>
  );
};

export default BubbleAnimation;