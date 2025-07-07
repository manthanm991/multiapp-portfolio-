import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/components/carousal.css';

const Carousel = ({ images = [], autoSlideDelay = 5000, className = '', showIndicators = true, showNavButtons = true, showCounter = true,}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideRef = useRef(null);
  const startXRef = useRef(0);
  const diffXRef = useRef(0);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, currentIndex]);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    goToSlide(nextIndex);
  }, [currentIndex, images.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    goToSlide(prevIndex);
  }, [currentIndex, images.length, goToSlide]);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    autoSlideRef.current = setInterval(() => nextSlide(), autoSlideDelay);
    return () => clearInterval(autoSlideRef.current);
  }, [currentIndex, images.length, isPaused, autoSlideDelay, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = useCallback((e) => {
    startXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  }, []);

  const handleTouchMove = useCallback((e) => {
    const currentX = e.touches[0].clientX;
    diffXRef.current = startXRef.current - currentX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (Math.abs(diffXRef.current) > 50) {
      if (diffXRef.current > 0) nextSlide();
      else prevSlide();
    }
    setIsPaused(false);
  }, [nextSlide, prevSlide]);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  if (!images || images.length === 0) {
    return (
      <div className={`dynamic-carousel ${className}`}>
        <div className="carousel-container d-flex align-items-center justify-content-center">
          <div className="text-muted">No images to display</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`dynamic-carousel ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} >
      <div className="carousel-container">

        <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none', }} >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image.src} alt={image.alt || `Slide ${index + 1}`} loading="lazy" />
              {(image.title || image.description) && (
                <div className="carousel-slide-content">
                  {image.title && <div className="slide-title">{image.title}</div>}
                  {image.description && <div className="slide-description">{image.description}</div>}
                </div>
              )}
            </div>
          ))}
        </div>

        {showNavButtons && images.length > 1 && (
          <>
            <button className="carousel-nav carousel-prev" onClick={prevSlide} disabled={isTransitioning} aria-label="Previous slide" ><i className="fas fa-chevron-left"></i></button>

            <button className="carousel-nav carousel-next" onClick={nextSlide} disabled={isTransitioning} aria-label="Next slide" ><i className="fas fa-chevron-right"></i></button>
          </>
        )}

        {showIndicators && images.length > 1 && (
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button key={index} className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`} onClick={() => goToSlide(index)} disabled={isTransitioning} aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        )}

        {showCounter && images.length > 1 && (
          <div className="carousel-counter"><span>{currentIndex + 1}</span> / <span>{images.length}</span></div>
        )}
      </div>
    </div>
  );
};

export default Carousel;