import { Link } from 'react-router-dom';
import '../../styles/components/animated_card.css';

const AnimatedCard = ({ to, iconClass, title, text }) => {
  const lines = [
    { x1: 60, y1: 40, x2: 120, y2: 60, color: 'var(--pulse-blue-color)' },
    { x1: 120, y1: 60, x2: 180, y2: 45, color: 'var(--pulse-red-color)' },
    { x1: 180, y1: 45, x2: 240, y2: 70, color: 'var(--pulse-orange-color)' },
    { x1: 240, y1: 70, x2: 290, y2: 50, color: 'var(--pulse-green-color)' },
    { x1: 80, y1: 180, x2: 140, y2: 200, color: 'var(--pulse-purple-color)' },
    { x1: 140, y1: 200, x2: 200, y2: 180, color: 'var(--pulse-blue-color)' },
    { x1: 200, y1: 180, x2: 260, y2: 195, color: 'var(--pulse-red-color)' },
  ];

  const shapes = [
    { type: 'polygon', points: '300,25 310,15 320,25 310,35', fill: 'var(--pulse-blue-color)' },
    { type: 'polygon', points: '40,200 50,190 60,200 50,210', fill: 'var(--pulse-red-color)' },
    { type: 'rect', x: 280, y: 220, width: 12, height: 12, rx: 2, fill: 'var(--pulse-orange-color)' },
    { type: 'rect', x: 25, y: 120, width: 10, height: 10, rx: 2, fill: 'var(--pulse-green-color)' },
  ];

  const circles = [
    { cx: 60, cy: 40, r: 4, className: 'pulse-blue' },
    { cx: 120, cy: 60, r: 5, className: 'pulse-red' },
    { cx: 180, cy: 45, r: 3.5, className: 'pulse-orange' },
    { cx: 240, cy: 70, r: 4.5, className: 'pulse-green' },
    { cx: 290, cy: 50, r: 3, className: 'pulse-purple' },
    { cx: 80, cy: 180, r: 3, className: 'pulse-blue' },
    { cx: 140, cy: 200, r: 4, className: 'pulse-red' },
    { cx: 200, cy: 180, r: 3.5, className: 'pulse-orange' },
    { cx: 260, cy: 195, r: 4, className: 'pulse-green' },
    { cx: 310, cy: 175, r: 3, className: 'pulse-purple' },
    { cx: 45, cy: 100, r: 2, className: '', fill: 'var(--pulse-blue-color)', opacity: 0.7 },
    { cx: 300, cy: 120, r: 2.5, className: '', fill: 'var(--pulse-red-color)', opacity: 0.7 },
    { cx: 75, cy: 250, r: 2, className: '', fill: 'var(--pulse-orange-color)', opacity: 0.7 },
    { cx: 280, cy: 260, r: 2.5, className: '', fill: 'var(--pulse-green-color)', opacity: 0.7 },
    { cx: 25, cy: 220, r: 2, className: '', fill: 'var(--pulse-purple-color)', opacity: 0.7 },
  ];

  return (
    <Link to={to} className="nav-card">
      <div className="card animated-card">
        <svg className="card-background animated-card-background" viewBox="0 0 350 280" fill="none">
          <defs>
            <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1f1e1e" stopOpacity="0.9" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <rect width="100%" height="100%" fill="url(#backgroundGradient)" />
          <rect width="100%" height="100%" fill="url(#grid)" />

          {lines.map((line, i) => ( <line key={i} {...line} strokeWidth="1" opacity="0.3" /> ))}

          {shapes.map((shape, i) =>
            shape.type === 'polygon' ? ( <polygon key={i} points={shape.points} fill={shape.fill} opacity="0.4" className="floating" /> ) : ( <rect key={i} {...shape} opacity="0.4" className="floating" /> )
          )}

          {circles.map((circle, i) => (
            <circle key={i} {...circle} fill={circle.fill || undefined} filter={circle.className?.startsWith('pulse') ? 'url(#glow)' : undefined} />
          ))}
        </svg>

        <div className="card-body text-center animated-card-body">
          <i className={`card-icon ${iconClass} animated-card-icon`}></i>
          <h5 className="card-title animated-card-title">{title}</h5>
          <p className="card-text animated-card-text">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default AnimatedCard;