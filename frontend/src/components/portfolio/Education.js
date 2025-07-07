import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/pages/education.css';
import FlipCard from '../common/FlipCard';
import { EDUCATION_DATA, EDUCATION_FLIPCARD_DATA } from '../../utils/constants';

const Education = () => {
  return (
    <React.Fragment>
      <div className="page-container page-section">
        <section className="page-header">
          <div className="header-style"></div>
          <div className="container">
            <h1>Education</h1>
            <p className="header-subtitle">My Academic Journey</p>
          </div>
        </section>

        <section className="page-content">
          <div className="container p-0">
            <div className="education-timeline">
              {EDUCATION_DATA.map((edu, index) => {
                const flipInfo = EDUCATION_FLIPCARD_DATA[edu.key];

                return (
                  <div key={edu.id} className="education-item">
                    <div className="timeline-marker">
                      <div className="timeline-dot"></div>
                      {index < EDUCATION_DATA.length - 1 && <div className="timeline-line"></div>}
                    </div>

                    <div className="education-content-wrapper">
                      <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                          <div className="common-card">
                            <div className="education-card-header">
                              <h3 className="common-title">{edu.degree}</h3>
                              <div className="institution-info">
                                <h4 className="common-subtitle">{edu.institution}</h4>
                                <p className="common-location">
                                  <i className="fas fa-map-marker-alt"></i> {edu.location}
                                </p>
                              </div>
                            </div>

                            <div className="education-card-body">
                              <div className="common-meta d-flex justify-content-between">
                                <span className="common-meta-item">
                                  <i className="fas fa-calendar-alt"></i> {edu.period}
                                </span>
                                <span className="common-meta-item">
                                  <i className="fas fa-star"></i> {edu.cgpa}
                                </span>
                              </div>

                              <p className="common-description">{edu.description}</p>

                              <div className="key-courses">
                                <h5 className="common-section-header">
                                  <i className="fas fa-book"></i>
                                  Key Courses:
                                </h5>
                                <div className="common-tag-container">
                                  {edu.courses.map((course, courseIndex) => (
                                    <span key={courseIndex} className="common-tag">
                                      {course}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                          <div className="flip-card-container me-4">
                            <FlipCard
                              imageUrl={flipInfo?.images}
                              altText={`${edu.institution} campus`}
                              mapEmbedUrl={flipInfo?.mapEmbedUrl}
                              height="300px"
                              className={`${edu.key} education-flip-card me-5`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="page-nav-links">
              <Link to="/about" className="nav-link">
                <i className="fas fa-user"></i> Back to About
              </Link>
              <Link to="/experience" className="nav-link">
                <i className="fas fa-briefcase"></i> View Experience
              </Link>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Education;