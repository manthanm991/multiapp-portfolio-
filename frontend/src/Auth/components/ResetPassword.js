import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormField from '../../components/common/FormField';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { validateField, resetPassword, handleAuthError, ROUTES } from '../../Auth';
import '../../styles/auth.css';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { password, confirmPassword } = form;
    const passwordErrors = validateField('Password', password, { required: true, minLength: 8 });
    
    if (passwordErrors.length > 0) {
      toast.error(passwordErrors[0]);
      return false;
    }

    const confirmPasswordErrors = validateField('Confirm Password', confirmPassword, { required: true, match: password });
    
    if (confirmPasswordErrors.length > 0) {
      toast.error(confirmPasswordErrors[0]);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      await resetPassword(token, form.password);
      toast.success('Password has been reset successfully!');
      setSubmitted(true);
      setTimeout(() => navigate(ROUTES.LOGIN), 3000);
    } catch (error) {
      toast.error(handleAuthError(error) || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  const renderSuccessMessage = () => (
    <div className="text-center">
      <div className="text-success mb-3">
        <i className="fas fa-check-circle fa-3x"></i>
      </div>
      <h3>Password Reset Successful</h3>
      <p className="text-muted">Your password has been updated successfully.</p>
      <p className="text-muted">Redirecting to login...</p>
    </div>
  );

  const renderResetForm = () => (
    <>
      <div className="text-center mb-4">
        <h3>Reset Your Password</h3>
        <p className="text-muted">Enter your new password below.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <FormField id="password" name="password" type="password" label="New Password" placeholder="Enter new password" value={form.password} onChange={handleChange} required disabled={loading} autoComplete="new-password" />

        <FormField id="confirmPassword" name="confirmPassword" type="password" label="Confirm Password" placeholder="Confirm new password" value={form.confirmPassword} onChange={handleChange} required disabled={loading} autoComplete="new-password" />

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? ( <LoadingSpinner size="sm" text="Resetting..." /> ) : ( 'Reset Password' )}
        </button>
      </form>
    </>
  );

  return (
    <div className="reset-container">
      <div className="logo-container">
        <img src="/assets/images/logo.png" alt="Company Logo" className="logo" />
      </div>

      {submitted ? renderSuccessMessage() : renderResetForm()}
    </div>
  );
};

export default ResetPassword;