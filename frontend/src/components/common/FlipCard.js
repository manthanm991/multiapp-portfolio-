import React from 'react';
import '../../styles/components/flipcard.css';
import Carousel from './Carousal';

const FlipCard = ({ imageUrl, altText = "Place image", mapEmbedUrl, height = "300px", className = "" }) => {
  return (
    <div className={`flip-card ${className}`} style={{ height }}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
            <Carousel images={imageUrl} autoSlideDelay={2000} className={className} showIndicators={false} showNavButtons={false}/>
          <img src={imageUrl} alt={altText} className="flip-card-image" />
          <div className="image-overlay">
            <span className="hover-text">Hover to view location</span>
          </div>
        </div>
        <div className="flip-card-back">
          <iframe src={mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location Map" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;