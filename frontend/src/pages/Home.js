import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCard from '../components/common/AnimatedCard';
import '../styles/pages/home.css';

const Home = () => {
    return (
        <React.Fragment>
            <section className="hero-section page-section">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="hero-content">
                                <h1 className="hero-title">Hi, I'm <span className="highlight">Manthan Makode</span></h1>
                                <h2 className="hero-subtitle">Full Stack Developer</h2>
                                <p className="hero-description">
                                    Passionate about creating innovative web applications and solving complex problems through code.
                                </p>
                                <div className="hero-buttons">
                                    <Link to="/projects" className="btn btn-primary view-work-btn">View My Work</Link>
                                    <a href={process.env.REACT_APP_RESUME_DOWNLOAD_LINK} className="btn btn-outline download-cv" download>
                                        <i className="fas fa-download"></i> Download CV
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex">
                            <div className="hero-image ms-auto me-4">
                                <img src="https://res.cloudinary.com/bluestock-career-app/image/upload/v1751673520/My%20Portfolio%20Data/m_zmlefw.jpg" alt="Profile" className="profile-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-cards-section">
                <div className="container-fluid d-flex justify-content-around">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <AnimatedCard to="/about" iconClass="fas fa-user" title="About Me" text="Learn more about my background and interests" />
                        </div>
                        <div className="col-md-4 mb-4">
                            <AnimatedCard to="/projects" iconClass="fas fa-code" title="Projects" text="Explore my latest work and applications" />
                        </div>
                        <div className='col-md-4 mb-4'>
                            <AnimatedCard to="/skills" iconClass="fas fa-tools" title="Skills" text="Explore my tech stack and tools" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Home;