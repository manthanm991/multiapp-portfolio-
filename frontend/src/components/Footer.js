import { Link } from 'react-router-dom';
import ShareButton from './common/ShareButton';
import { PERSONAL_INFO } from '../utils/constants';
import '../styles/components/footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const Name = PERSONAL_INFO.name;
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="profile-header">
                            <img src={process.env.REACT_APP_LOGO_64} alt="Logo" className="logo-icon" width={38}
                                height={38} />
                            <div>
                                <h5 className="profile-name">{Name}</h5>
                                <p className="profile-title">Software Developer</p>
                            </div>
                        </div>

                        <div className="footer-contact-info">
                            <p className="footer-contact-item">
                                <i className="fas fa-map-marker-alt me-2 text-primary"></i>
                                {PERSONAL_INFO.location}
                            </p>
                            <p className="footer-contact-item">
                                <i className="fas fa-envelope me-2 text-primary"></i>
                                {PERSONAL_INFO.email}
                            </p>
                            <p className="footer-contact-item">
                                <i className="fas fa-phone me-2 text-primary"></i>
                                {PERSONAL_INFO.phone}
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">
                        <h6 className="section-title">Quick Links</h6>
                        <div className="row">
                            <div className="col-6">
                                <ul className="footer-nav-list">
                                    <li className="footer-nav-item">
                                        <Link to="/" className="footer-nav-link">
                                            <i className="fas fa-home me-2"></i>Home
                                        </Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link to="/about" className="footer-nav-link">
                                            <i className="fas fa-user me-2"></i>About
                                        </Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link to="/education" className="footer-nav-link">
                                            <i className="fas fa-graduation-cap me-2"></i>Education
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="footer-nav-list">
                                    <li className="footer-nav-item">
                                        <Link to="/experience" className="footer-nav-link">
                                            <i className="fas fa-briefcase me-2"></i>Experience
                                        </Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link to="/projects" className="footer-nav-link">
                                            <i className="fas fa-project-diagram me-2"></i>Projects
                                        </Link>
                                    </li>
                                    <li className="footer-nav-item">
                                        <Link to="/contact" className="footer-nav-link">
                                            <i className="fas fa-envelope me-2"></i>Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="resources-section">
                            <h6 className="subsection-title">Resources</h6>
                            <div className="d-flex flex-wrap gap-3">
                                <a href={process.env.REACT_APP_RESUME_DOWNLOAD_LINK} className="resource-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-file-pdf me-1"></i>Resume
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="availability-section">
                            <p className="availability-text">Available for:</p>
                            <div className="availability-badges">
                                <span className="availability-badge">Freelance Projects</span>
                                <span className="availability-badge">Full-time Roles</span>
                                <span className="availability-badge">Collaborations</span>
                            </div>
                        </div>

                        <div className="social-section">
                            <h6 className="social-title">Connect with me on these handles:</h6>
                            <div className="social-button-container">
                                <ShareButton direction="circular" platforms={['github', 'instagram', 'X', 'whatsapp', 'linkedin', 'email']} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="footer-divider" />
                <div className="row align-items-center mt-3 mb-3">
                    <div className="col-md-8">
                        <div className="d-flex flex-wrap align-items-center gap-3">
                            <p className="copyright-text">
                                © {currentYear} <span className='text-primary'>{Name}</span>. All rights reserved.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 text-md-end">
                        <p className="crafted-text text-center">
                            <i className="fas fa-code me-1"></i>
                            Crafted with <i className="fas fa-heart text-danger mx-1"></i> by
                            <span className="text-primary fst-italic text-decoration-underline ms-1">{Name}</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}