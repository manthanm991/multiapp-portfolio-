import { Link } from 'react-router-dom';
import React from 'react';
import '../../styles/pages/about.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='page-container'>
                <section className="page-header">
                    <div className="header-style"></div>
                    <div className="container">
                        <h1>About Me</h1>
                    </div>
                </section>

                <section className="page-content">
                    <div className="container p-0">
                        <div className="row p-2">
                            <div className="col-lg-4">
                                <div className="about-image">
                                    <img src="https://res.cloudinary.com/bluestock-career-app/image/upload/v1751673520/My%20Portfolio%20Data/m_zmlefw.jpg" alt="Profile" className="img-fluid rounded" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="about-text">
                                    <h2>Hello! I'm a <span className='about-text-highlight'>passionate developer</span></h2>
                                    <p className="lead">
                                        I'm a full-stack developer with a passion for creating innovative web applications
                                        and solving complex problems through code. I love working with modern technologies
                                        and am always eager to learn new skills.
                                    </p>
                                    <p>
                                        My journey in software development started during my college years, and since then,
                                        I've been continuously learning and growing in this field. I enjoy working on both
                                        frontend and backend technologies, creating seamless user experiences and robust
                                        server-side solutions.
                                    </p>
                                    <p>
                                        When I'm not coding, you can find me exploring new technologies, reading tech blogs,
                                        or working on personal projects. I believe in continuous learning and staying
                                        updated with the latest industry trends.
                                    </p>

                                    <div className="page-nav-links">
                                        <Link to="/education" className="nav-link">
                                            <i className="fas fa-graduation-cap"></i> View Education
                                        </Link>
                                        <Link to="/experience" className="nav-link">
                                            <i className="fas fa-briefcase"></i> View Experience
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="skills-section">
                            <h3>Technical Skills</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Frontend Technologies</h5>
                                    <div className="skill-list">
                                        <div className="skill-item">
                                            <span className="skill-name">React.js</span>
                                            <div className="skill-bar">
                                                <div className="skill-progress" style={{ width: '90%' }}></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <span className="skill-name">JavaScript</span>
                                            <div className="skill-bar">
                                                <div className="skill-progress" style={{ width: '85%' }}></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <span className="skill-name">HTML/CSS</span>
                                            <div className="skill-bar">
                                                <div className="skill-progress" style={{ width: '95%' }}></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <span className="skill-name">Bootstrap</span>
                                            <div className="skill-bar">
                                                <div className="skill-progress" style={{ width: '80%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h5>Backend Technologies</h5>
                                    <div className="skill-list">
                                        <div className="skill-item">
                                            <span className="skill-name">Node.js</span>
                                            <div className="skill-bar">
                                                <div className="skill-progress" style={{ width: '85%' }}></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <span className="skill-name">Express.js</span>
                                            <div className="skill-bar">
                                                <div className="skill-progress" style={{ width: '80%' }}></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <span className="skill-name">MongoDB</span>
                                            <div className="skill-bar">
                                                <div className="skill-progress" style={{ width: '75%' }}></div>
                                            </div>
                                        </div>
                                        <div className="skill-item">
                                            <span className="skill-name">MySQL</span>
                                            <div className="skill-bar">
                                                <div className="skill-progress" style={{ width: '70%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="interests-section">
                            <h3>Interests & Hobbies</h3>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="interest-item">
                                        <i className="fas fa-code"></i>
                                        <h5>Coding</h5>
                                        <p>Building innovative solutions</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="interest-item">
                                        <i className="fas fa-book"></i>
                                        <h5>Reading</h5>
                                        <p>Tech blogs and documentation</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="interest-item">
                                        <i className="fas fa-gamepad"></i>
                                        <h5>Gaming</h5>
                                        <p>Strategy and puzzle games</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="interest-item">
                                        <i className="fas fa-music"></i>
                                        <h5>Music</h5>
                                        <p>Listening to various genres</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
};

export default About;