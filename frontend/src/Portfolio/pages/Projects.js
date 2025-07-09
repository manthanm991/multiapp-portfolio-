import React, { useState } from 'react';
import { projects } from '../utils/projects';
import ProjectCard from '../components/ProjectCard';
import '../../styles/pages/projects.css';

function Projects() {
  const [activeNavProject, setActiveNavProject] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [visCtgStartInd, setvisCtgStartInd] = useState(0);

  const projectsPerPage = 3;
  const visibleNavItems = 4;

  const getUniqueCategories = () => {
    const allCategories = projects.flatMap(project => project.category);
    return [...new Set(allCategories)].sort();
  };

  const uniqueCategories = getUniqueCategories();

  const handleNavClick = (category) => {
    setActiveNavProject(category);
    setCurrentPage(1);
  };

  const handlePrevCategories = () => { if (visCtgStartInd > 0) { setvisCtgStartInd(visCtgStartInd - 1); } };
  const handleNextCategories = () => { if (visCtgStartInd + visibleNavItems < uniqueCategories.length) { setvisCtgStartInd(visCtgStartInd + 1); } };

  const filteredProjects = activeNavProject === 'all' ? projects : projects.filter(project => project.category.includes(activeNavProject));
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);
  const visibleCategories = uniqueCategories.slice(visCtgStartInd, visCtgStartInd + visibleNavItems);

  const handlePageChange = (pageNumber) => { setCurrentPage(pageNumber); };
  const truncateCategory = (category, maxLength = 25) => { return category.length > maxLength ? category.substring(0, maxLength) + '...' : category; };

  return (
    <React.Fragment>
      <div className='page-container'>
        <section className="page-header">
          <div className="header-style"></div>
          <div className="container">
            <h1>My Projects</h1>
          </div>
        </section>
        <section className="page-content">
          <div className={`projects-nav rounded-pill`}>
            <nav className='navbar navbar-expand-lg'>
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <button className={`nav-link ${activeNavProject === 'all' ? 'active' : ''} me-2`} onClick={() => handleNavClick('all')} >
                        All Projects
                      </button>
                    </li>

                    <div className='project-nav-btns d-flex align-items-center'>
                      <button className="btn btn-sm me-2 project-prev-nav-btn" onClick={handlePrevCategories} disabled={visCtgStartInd === 0} title="Previous Categories" >
                        <i className="fas fa-chevron-left"></i>
                      </button>

                      <div className="d-flex">
                        {visibleCategories.map((category, index) => (
                          <li key={`${category}-${index}`} className="nav-item">
                            <button className={`nav-link text-nowrap ${activeNavProject === category ? 'active' : ''} d-flex justify-content-around`} onClick={() => handleNavClick(category)} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: '100px' }} title={category} >
                              {truncateCategory(category)}
                            </button>
                          </li>
                        ))}
                      </div>

                      <button className="btn btn-sm ms-2 project-next-nav-btn" onClick={handleNextCategories} disabled={visCtgStartInd + visibleNavItems >= uniqueCategories.length} title="Next Categories" >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div className='projects'>
            <div className="container-fluid px-0">
              {currentProjects.length > 0 ? (
                <>
                  <div className="row g-4">
                    {currentProjects.map((project) => (
                      <div key={project.id} className="col-12">
                        <ProjectCard project={project} />
                      </div>
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-4">
                      <nav aria-label="Projects pagination">
                        <ul className="pagination custom-pagination">
                          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} >
                              <i className="fas fa-chevron-left"></i>
                            </button>
                          </li>

                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                            <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                              <button className="page-link" onClick={() => handlePageChange(pageNumber)} > {pageNumber} </button>
                            </li>
                          ))}

                          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                              <i className="fas fa-chevron-right"></i>
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  )}
                </>
              ) : (
                <div className="alert alert-info text-center py-5">
                  <i className="fas fa-info-circle fa-2x mb-3 text-muted"></i>
                  <h5>No Projects Found</h5>
                  <p className="mb-0"> No projects match the selected category "{activeNavProject}". Try selecting "All Projects" to see all available projects.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Projects;