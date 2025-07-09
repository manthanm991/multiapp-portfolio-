import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { SUCCESS_MESSAGES, useRecaptcha } from '../../Auth';
import ShareButton from '../../components/common/ShareButton';
import { validateContactForm } from '../utils/validations';
import { contactForm } from '../api/ContactForm';
import '../../styles/pages/contact.css';

export default function Contact() {
  const [credentials, setCredentials] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const { getToken } = useRecaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});
    setIsSubmitting(true);

    const validationErrors = validateContactForm(credentials);
    if (validationErrors.length > 0) {
      toast.error(validationErrors[0]);
      setIsSubmitting(false);
      return;
    }

    try {
      const recaptchaToken = await getToken("contact_form");
      const result = await contactForm({ ...credentials, recaptchaToken: recaptchaToken });
      if (result.success) {
        toast.success(SUCCESS_MESSAGES.FORM_SUBMISSION_SUCCESS);
        setCredentials({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <React.Fragment>
      <section className='page-container'>
        <section className="page-header">
          <div className="header-style"></div>
          <div className="container">
            <h1>Contact Us</h1>
            <p className='contact-subtitle'>Any question or remarks? Just write  a message!</p>
          </div>
        </section>
        <div className='container p-5'>
          <div className='row px-5'>
            <div className='contact-container'>
              <div className='contact-info-panel'>
                <div className='contact-info-content'>
                  <div className='contact-info-header'>
                    <h2>Contact Information</h2>
                    <p className='contact-tagline'>Say something to start a live chat!</p>
                  </div>

                  <div className='contact-details'>
                    <div className='contact-item'>
                      <div className='contact-icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="currentColor" />
                        </svg>
                      </div>
                      <span>+91 00000-00000</span>
                    </div>

                    <div className='contact-item'>
                      <div className='contact-icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2" />
                          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </div>
                      <span>demo@gmail.com</span>
                    </div>

                    <div className='contact-item'>
                      <div className='contact-icon'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke="currentColor" strokeWidth="2" />
                          <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </div>
                      <span>Pune, Maharashtra, India</span>
                    </div>
                  </div>

                  <div className='social-media-section d-flex'>
                    <ShareButton direction='right' platforms={['instagram', 'github', 'linkedin', 'X']} />
                  </div>
                  <div className='contact-decorative-elements'>
                    <div className='contact-circle'></div>
                    <div className='contact-semi'></div>
                  </div>
                </div>

              </div>

              <div className='contact-form-panel'>
                <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" name="firstName" value={credentials.firstName} onChange={handleChange} required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" name="lastName" value={credentials.lastName} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange} required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={credentials.phone} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="form-field w-100">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Write your message.." value={credentials.message} onChange={handleChange} required />
                  </div>

                  <div className='row d-flex ms-auto w-50 mt-3'>
                    <button className="form-btn" type="submit" disabled={isSubmitting}> {isSubmitting ? 'Sending...' : 'Send Message'}</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>

      </section>
    </React.Fragment>
  )
}
