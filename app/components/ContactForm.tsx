'use client'

import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactForm.css';

interface ContactFormProps {
  contactRef: React.RefObject<HTMLElement>;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ contactRef }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For now, create a mailto link as fallback
      const mailtoLink = `mailto:semahegn.adugna1@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={contactRef} className="contact-section">
      <h2 className="section-title">
        Get In Touch<span className="title-dot">.</span>
      </h2>
      <p className="section-subtitle">
        Have a question or want to work together? Feel free to reach out!
      </p>

      {/* Photon Dots Around Form */}
      <div className="photon-field">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="photon-dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="cosmic-console glass-morph">
        <div className="form-grid">
          {/* Name Field */}
          <div className="form-field">
            <label htmlFor="name" className="field-label">
              <User className="label-icon" />
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`quantum-input ${errors.name ? 'error' : ''}`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="field-error">
                <AlertCircle className="error-icon" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="form-field">
            <label htmlFor="email" className="field-label">
              <Mail className="label-icon" />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`quantum-input ${errors.email ? 'error' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="field-error">
                <AlertCircle className="error-icon" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="form-field">
          <label htmlFor="subject" className="field-label">
            <MessageSquare className="label-icon" />
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`quantum-input ${errors.subject ? 'error' : ''}`}
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="field-error">
              <AlertCircle className="error-icon" />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="form-field">
          <label htmlFor="message" className="field-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`quantum-input ${errors.message ? 'error' : ''}`}
            placeholder="Tell me about your project or inquiry..."
          />
          {errors.message && (
            <p className="field-error">
              <AlertCircle className="error-icon" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
        >
          {isSubmitting ? (
            <>
              <div className="spinner"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="button-icon" />
              Send Message
            </>
          )}
          <div className="button-glow"></div>
        </button>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="status-message success">
            <CheckCircle className="status-icon" />
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="status-message error">
            <AlertCircle className="status-icon" />
            Something went wrong. Please try again or email me directly.
          </div>
        )}
      </form>

      {/* Social Links */}
      <div className="social-section">
        <p className="social-text">Or connect with me on:</p>
        <div className="social-icons">
          {[
            { icon: '💼', href: 'https://www.linkedin.com/in/semahegn-adugna/', label: 'LinkedIn' },
            { icon: '🐙', href: 'https://github.com/Seme30', label: 'GitHub' },
            { icon: '📧', href: 'mailto:semahegn.adugna1@gmail.com', label: 'Email' },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
