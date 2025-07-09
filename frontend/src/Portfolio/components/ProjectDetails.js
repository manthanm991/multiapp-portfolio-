import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/pages/projects.css';

const ProjectDetails = ({ project }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState(null);

  const hasData = (data) => {
    if (!data) return false;
    if (Array.isArray(data)) return data.length > 0;
    if (typeof data === 'object') return Object.keys(data).length > 0;
    if (typeof data === 'string') return data.trim().length > 0;
    return true;
  };

  const availableTabs = [
    {
      id: 'overview',
      label: 'Overview',
      icon: 'fas fa-eye',
      hasData: hasData(project?.longDescription) || hasData(project?.duration) || hasData(project?.role) || hasData(project?.client)
    },
    {
      id: 'features',
      label: 'Features',
      icon: 'fas fa-star',
      hasData: hasData(project?.features)
    },
    {
      id: 'tech',
      label: 'Technology Stack',
      icon: 'fas fa-code',
      hasData: hasData(project?.technologies) || hasData(project?.techStack)
    },
    {
      id: 'challenges',
      label: 'Challenges',
      icon: 'fas fa-bullseye',
      hasData: hasData(project?.challenges)
    },
    {
      id: 'outcomes',
      label: 'Outcomes',
      icon: 'fas fa-chart-line',
      hasData: hasData(project?.outcomes)
    }
  ].filter(tab => tab.hasData);

  React.useEffect(() => {
    if (availableTabs.length > 0 && !availableTabs.find(tab => tab.id === activeTab)) {
      setActiveTab(availableTabs[0].id);
    }
  }, [availableTabs, activeTab]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (availableTabs.length === 0) {
    return (
      <div className="alert alert-info mt-4">
        <i className="fas fa-info-circle me-2"></i>
        No additional project details available.
      </div>
    );
  }

  return (
    <div className="project-details mt-4">
      <div className="shadow-sm">
        <div className="container-fluid px-0 mb-3 proj-details-nav">
          <ul className="nav nav-tabs text-light">
            {availableTabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <button className={`nav-link px-3 py-3 ms-3 text-nowrap ${ activeTab === tab.id ? 'active text-warning' : 'text-light' }`} onClick={() => setActiveTab(tab.id)} style={{ backgroundColor: activeTab === tab.id ? 'transparent' : 'transparent', transition: 'all 0.3s ease' }} >
                  <i className={`${tab.icon} me-2`}></i>
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-fluid px-0">
        {activeTab === 'overview' && (
          <div className="row g-4">
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-3">
                <div className="card-body p-4">
                  {project?.longDescription && (
                    <p className="text-muted mb-4 fs-6 lh-base">
                      {project.longDescription}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && project?.features && (
            <div className="row g-4">
              {project.features.map((feature, index) => (
                <div key={index} className="col-md-6">
                  <div className="card bg-light shadow-sm rounded-3 h-100 hover-shadow">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-start">
                        <div className="me-3 fs-2">{feature.icon || '⭐'}</div>
                        <div>
                          <h5 className="card-title text-dark mb-2">
                            {typeof feature === 'string' ? feature : feature.title}
                          </h5>
                          {feature.description && (
                            <p className="card-text text-muted small">{feature.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        )}

        {activeTab === 'tech' && (
            <div className="row g-4">
              {project?.technologies && project.technologies.map((tech, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm rounded-3 h-100 hover-shadow">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h5 className="card-title text-dark mb-0">{tech.name}</h5>
                        <span className="badge bg-light text-dark border">{tech.category}</span>
                      </div>
                      <p className="card-text text-muted small">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {!project?.technologies && project?.techStack && (
                <div className="col-12">
                  <div className="card border-0 shadow-sm rounded-3">
                    <div className="card-body p-4">
                      <h5 className="card-title text-dark mb-3">Technologies Used</h5>
                      <div className="d-flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <span key={index} className="badge bg-primary bg-gradient px-3 py-2 rounded-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
        )}

        {activeTab === 'challenges' && project?.challenges && (
            <div className="accordion" id="challengesAccordion">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="accordion-item border-0 shadow-sm rounded-3 mb-3">
                  <h4 className="accordion-header">
                    <button
                      className="accordion-button collapsed rounded-3 fw-semibold"
                      type="button"
                      onClick={() => toggleSection(`challenge-${index}`)}
                      style={{ backgroundColor: '#f8f9fa' }}
                    >
                      <i className="fas fa-lightbulb text-warning me-2"></i>
                      {challenge.title}
                    </button>
                  </h4>
                  <div className={`accordion-collapse collapse ${expandedSection === `challenge-${index}` ? 'show' : ''}`}>
                    <div className="accordion-body bg-light rounded-3">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="border-start border-danger border-3 ps-3">
                            <h6 className="text-danger fw-semibold mb-2">
                              <i className="fas fa-exclamation-triangle me-1"></i>
                              Problem
                            </h6>
                            <p className="text-muted small mb-0">{challenge.problem}</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="border-start border-success border-3 ps-3">
                            <h6 className="text-success fw-semibold mb-2">
                              <i className="fas fa-check-circle me-1"></i>
                              Solution
                            </h6>
                            <p className="text-muted small mb-0">{challenge.solution}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        )}

        {activeTab === 'outcomes' && project?.outcomes && (
          <div>
            <div className="row g-4 mb-4">
              {project.outcomes.map((outcome, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card border-0 shadow-sm rounded-3 text-center h-100 hover-shadow">
                    <div className="card-body p-4">
                      <div className="fw-bold text-primary mb-2">{outcome.value}</div>
                      <h5 className="card-title text-dark mb-2">{outcome.metric}</h5>
                      <p className="card-text text-muted small">{outcome.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
              <div className="card-body p-4 text-white" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
                <div className="text-center">
                  <h4 className="card-title mb-3">
                    <i className="fas fa-trophy me-2"></i>
                    Project Impact
                  </h4>
                  <p className="mb-0">
                    {project.impact || 'This project successfully delivered measurable business value, improved user experience, and demonstrated technical excellence across all aspects of development.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    longDescription: PropTypes.string,
    duration: PropTypes.string,
    role: PropTypes.string,
    client: PropTypes.string,
    features: PropTypes.array,
    technologies: PropTypes.array,
    techStack: PropTypes.array,
    challenges: PropTypes.array,
    outcomes: PropTypes.array,
    impact: PropTypes.string,
    testimonial: PropTypes.shape({
      text: PropTypes.string,
      author: PropTypes.string,
      position: PropTypes.string,
      avatar: PropTypes.string
    })
  }).isRequired
};

export default ProjectDetails;