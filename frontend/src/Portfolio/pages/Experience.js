import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/pages/experience.css';
import { EXPERIENCE_DATA, EXPERIENCE_SKILLS } from '../utils/constants';

const Experience = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/skills') {
      const skillsSection = document.getElementById('skills-summary');
      if (skillsSection) { skillsSection.scrollIntoView({ behavior: 'smooth' }); }
    }
  }, [location]);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'full-time':
        return 'fas fa-briefcase';
      case 'internship':
        return 'fas fa-graduation-cap';
      case 'contract':
        return 'fas fa-handshake';
      case 'freelance':
        return 'fas fa-user-tie';
      default:
        return 'fas fa-work';
    }
  };

  return (
    <React.Fragment>
      <div className="page-container page-section">
        <section className="page-header">
          <div className="header-style"></div>
          <div className="container">
            <h1>Professional Experience</h1>
            <p className="header-subtitle">My journey through the tech industry</p>
          </div>
        </section>
        <section className="container-content">
          <div className="container">
            <div className="experience-grid">
              {EXPERIENCE_DATA.map((experience, index) => (
                <div key={experience.id} className="common-card">
                  <div className="experience-card-header">
                    <div className="company-info">
                      <h3 className="common-title">{experience.position}</h3>
                      <h4 className="common-subtitle">{experience.company}</h4>
                      <div className="common-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {experience.location}
                      </div>
                    </div>

                    <div className="experience-meta">
                      <div className="experience-duration">
                        <i className="fas fa-calendar-alt"></i>
                        {experience.duration}
                      </div>
                      <div className={`experience-type ${experience.type}`}>
                        <i className={getTypeIcon(experience.type)}></i>
                        {experience.type.replace('-', ' ')}
                      </div>
                    </div>
                  </div>

                  <div className="experience-card-body">
                    <p className="common-description">
                      {experience.description}
                    </p>

                    <div className="experience-highlights">
                      <h5 className="common-section-header">
                        <i className="fas fa-star"></i>
                        Key Achievements
                      </h5>
                      <div className="highlight-list">
                        {experience.highlights.map((highlight, idx) => (
                          <div key={idx} className="highlight-item">
                            <div className="highlight-icon"></div>
                            <div className="highlight-text">{highlight}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="experience-technologies">
                      <h5 className="common-section-header">
                        <i className="fas fa-tools"></i>
                        Technologies Used
                      </h5>
                      <div className="common-tag-container">
                        {experience.technologies.map((tech, idx) => (
                          <span key={idx} className="common-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="page-nav-links">
              <Link to="/about" className="nav-link">
                <i className="fas fa-user"></i> About Me
              </Link>
              <Link to="/education" className="nav-link">
                <i className="fas fa-graduation-cap"></i> Education
              </Link>
              <Link to="/projects" className="nav-link">
                <i className="fas fa-code"></i> Projects
              </Link>
            </div>
          </div>
        </section>

        <section className="skills-summary" id='skills-summary'>
          <div className="container">
            <h2>Professional Skills</h2>
            <div className="skills-grid">
              {EXPERIENCE_SKILLS.map((skillCategory, index) => (
                <div key={index} className="skill-category">
                  <h4>{skillCategory.category}</h4>
                  <ul>
                    {skillCategory.skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Experience;