import React, { useState, useEffect, useRef } from 'react';
import '../../styles/components/share_button.css'; 
import { SOCIAL_PLATFORMS, SHARE_DEFAULTS } from '../../utils/constants';

const ShareButton = ({ 
  platforms = SHARE_DEFAULTS.platforms, 
  direction = SHARE_DEFAULTS.direction, 
  shareUrl = window.location.href, 
  shareText = SHARE_DEFAULTS.shareText 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const shareContainerRef = useRef(null);
  const platformsArray = Array.isArray(platforms) ? platforms : [platforms];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareContainerRef.current && !shareContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleShare = (platform) => {
    const platformData = SOCIAL_PLATFORMS[platform];
    if (!platformData?.getUrl) return;

    const url = platformData.getUrl(shareUrl, shareText);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getTransformStyle = (index) => {
    if (!isOpen) return { transform: 'scale(0)', opacity: 0 };
    
    const totalPlatforms = platformsArray.length;
    const baseStyle = { opacity: 1 };
    
    switch (direction) {
      case 'circular': {
        const angle = -90 + (360 / totalPlatforms) * index;
        const radian = (angle * Math.PI) / 180;
        const radius = 80;
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;
        return { ...baseStyle, transform: `translate(${x}px, ${y}px)` };
      }
      case 'top':
        return { ...baseStyle, transform: `translateY(-${(index + 1) * 60}px)` };
      case 'right':
        return { ...baseStyle, transform: `translateX(${(index + 1) * 60}px)` };
      case 'bottom':
        return { ...baseStyle, transform: `translateY(${(index + 1) * 60}px)` };
      case 'left':
        return { ...baseStyle, transform: `translateX(-${(index + 1) * 60}px)` };
      default:
        return { ...baseStyle, transform: 'scale(1)' };
    }
  };

  const getIconStyle = (platform) => {
    const platformData = SOCIAL_PLATFORMS[platform];
    if (!platformData) return {};

    const baseStyle = { 
      fontSize: '1.5em', 
      textShadow: `0 0 30px ${platformData.shadowColor}` 
    };

    if (platformData.gradient) {
      return { 
        ...baseStyle, 
        background: platformData.gradient, 
        WebkitBackgroundClip: 'text', 
        backgroundClip: 'text', 
        color: 'transparent' 
      };
    }

    return { ...baseStyle, color: platformData.color };
  };

  return (
    <div className="share-container" ref={shareContainerRef}>
      <input 
        type="checkbox" 
        checked={isOpen} 
        onChange={handleToggle} 
        className="share-toggle" 
        name="shareIcon" 
      />
      
      <div className="share-links">
        {platformsArray.map((platform, index) => {
          const platformData = SOCIAL_PLATFORMS[platform];
          if (!platformData) return null;

          return (
            <button 
              key={platform} 
              className="share-link" 
              style={{ 
                ...getTransformStyle(index), 
                transitionDelay: `${index * 0.1}s` 
              }} 
              onClick={() => handleShare(platform)}
              aria-label={`Share on ${platform}`}
            >
              <i className={platformData.icon} style={getIconStyle(platform)} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShareButton;