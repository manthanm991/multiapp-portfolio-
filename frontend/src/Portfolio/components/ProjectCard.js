import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectDetails from './ProjectDetails';
import BubbleAnimation from '../../components/common/BubbleAnimation';
import { categoryGradients } from '../utils/projects';

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getProjectGradient = (categories) => {
    if (!categories || categories.length === 0) { return categoryGradients.default; }

    const primaryCategory = categories[0];
    return categoryGradients[primaryCategory] || categoryGradients.default;
  };

  const formatCategories = (categories) => {
    if (!categories || categories.length === 0) { return 'Uncategorized'; }
    if (categories.length === 1) { return categories[0]; }
    if (categories.length === 2) { return categories.join(' & '); }
    return `${categories.slice(0, 2).join(', ')} +${categories.length - 2}`;
  };

  const BubbleLayer = () => (
    <>
      <BubbleAnimation color="blue" density="medium" speed="slow" />
      <BubbleAnimation color="orange" density="medium" speed="slow" />
      <BubbleAnimation color="purple" density="medium" speed="slow" />
      <BubbleAnimation color="red" density="medium" speed="slow" />
    </>
  );

  return (
    <React.Fragment>
      <div className="card shadow rounded-4 overflow-hidden mb-4">
        <div className="p-4 text-white position-relative" style={{ background: getProjectGradient(project.category) }} >
          <BubbleLayer />
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-success fw-medium">{project.status}</span>
            <div><i className="fa-solid fa-layer-group"></i> <span className="fw-semibold" title={project.category ? project.category.join(', ') : 'Uncategorized'} >{formatCategories(project.category)}</span>
            </div>
          </div>
          <h2 className="mt-2 fw-bold">{project.title}</h2>
          <p className="mb-0">{project.description}</p>
        </div>

        <div className="px-4 pt-3 details-container">
          <div className="d-flex justify-content-between text-muted small">
            <span><i className="fas fa-calendar-alt me-1"></i>{project.timePeriod}</span>
            <span><i className="fas fa-users me-1"></i>{project.teamSize}</span>
          </div>
          <div className="mt-3">
            <p className="fw-semibold mb-1"><i className="fas fa-code me-2"></i>Tech Stack</p>
            <div className="d-flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span key={index} className="badge bg-light text-dark border border-1 border-secondary px-3 py-2 rounded-pill"> {tech} </span>
              ))}
            </div>
          </div>

          <div className="d-flex gap-2 mt-4 mb-4 w-100 align-items-center justify-content-between">
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn text-white w-75 py-2 rounded-4 fs-5" style={{ background: getProjectGradient(project.category) }}>
              Try Here <i className="fas fa-arrow-up-right-from-square ms-2"></i>
            </a>
            <button className="btn btn-outline-secondary py-2 w-25 rounded-4 fs-5" onClick={() => setShowDetails(!showDetails)} >
              Details <i className={`fas ms-2 ${showDetails ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </button>
          </div>

          {showDetails && ( <ProjectDetails project={project} /> )}
        </div>
      </div>
    </React.Fragment>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
    timePeriod: PropTypes.string,
    status: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string),
    teamSize: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    challenges: PropTypes.string,
    impact: PropTypes.string,
    demoUrl: PropTypes.string,
    codeUrl: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;