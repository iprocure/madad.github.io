import emailjs from '@emailjs/browser';
import { EmailJSResponse } from '@/types';

// Initialize EmailJS
export const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }
};

// Send email using EmailJS
export const sendEmail = async (email: string): Promise<EmailJSResponse> => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      { email }
    );
    
    return {
      status: response.status,
      text: response.text
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
