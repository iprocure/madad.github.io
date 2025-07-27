'use client';

import { useEmailForm } from '@/hooks/useEmailForm';

interface EmailFormProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
  showSuccessMessage?: boolean;
}

const EmailForm = ({ 
  className = 'flex form-container-hero',
  placeholder = 'Enter your email',
  buttonText = 'Join Waitlist',
  showSuccessMessage = true
}: EmailFormProps) => {
  const {
    email,
    setEmail,
    isLoading,
    error,
    success,
    handleSubmit,
    clearMessages
  } = useEmailForm();

  return (
    <div>
      <form onSubmit={handleSubmit} className={className}>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearMessages();
            }}
            placeholder={placeholder}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-green focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="input_email_submit_button disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Sending...' : buttonText}
          </button>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <div className="form_error_message mt-2">
          {error}
        </div>
      )}

      {/* Success Message */}
      {success && showSuccessMessage && (
        <div className="mt-2 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Thank you! You&apos;ve been added to our waitlist. We&apos;ll notify you when we launch.
        </div>
      )}
    </div>
  );
};

export default EmailForm;
