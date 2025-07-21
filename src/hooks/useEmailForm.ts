'use client';

import { useState } from 'react';
import { emailService, analyticsService } from '@/lib/api';
import { validateEmail } from '@/utils/helpers';

interface UseEmailFormReturn {
  email: string;
  setEmail: (email: string) => void;
  isLoading: boolean;
  error: string;
  success: boolean;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  clearMessages: () => void;
}

export const useEmailForm = (): UseEmailFormReturn => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const clearMessages = () => {
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages
    clearMessages();
    
    // Validate email
    if (!email.trim()) {
      setError('Please enter an email address.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      // Send email via API
      await emailService.sendWaitlistEmail(email);
      
      // Track analytics event
      await analyticsService.trackEvent('join_waitlist', email);
      
      // Show success message
      setSuccess(true);
      setEmail(''); // Clear form
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Failed to send email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    isLoading,
    error,
    success,
    handleSubmit,
    clearMessages
  };
};
