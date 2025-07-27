'use client';

import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';


// Form data interface
interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  reasonToContact: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    email: '',
    reasonToContact: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      // Reset form on success
      setFormData({ name: '', phoneNumber: '', email: '', reasonToContact: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 ">
      <div className=" mx-auto">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-5 overflow-hidden">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-2 bg-[#0D1A26] text-white p-8 lg:py-12">
            <div className="space-y-8">
              {/* Registered Address */}
              <div>
                <h2 className="text-xl font-semibold mb-3">Registered Address</h2>
                <p className="text-gray-300 leading-relaxed">
                  201-42, Kate Business Center, Al Bustan Building, Al Sadd, Doha, Qatar
                </p>
                <p className="text-gray-300 mt-2">CIN: U65910MH1984PLC032639</p>
              </div>

              {/* Nodal Officer Details */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Nodal Officer Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-gray-400 text-sm">Email</h3>
                    <p className="text-gray-200">nodal.officer@madadfintech.com</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">Contact Number</h3>
                    <p className="text-gray-200">+974 3039 0833</p>
                    <p className="text-gray-400 text-xs">Except on Fri-Sat & Public Holidays</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">Officer Name</h3>
                    <p className="text-gray-200">Mr. Abdul Aziz Hamdan</p>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">Officer Address:</h3>
                    <p className="text-gray-200">1st Floor, 201-42, Kate Business Center, Al Bustan Building, Al Sadd, Doha, Qatar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields */}
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}
                  placeholder="i.e. John Doe" required
                  className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}
                  placeholder="i.e. +1-234-567-7890" required
                  className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                  placeholder="i.e. john@mail.com" required
                  className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="reasonToContact" className="text-sm font-medium text-gray-700">Reason to Contact</label>
                 <select
                    id="reasonToContact"
                    name="reasonToContact"
                    value={formData.reasonToContact}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a reason</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="funding">Funding Application</option>
                    <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleInputChange}
                  placeholder="Type your message here..." required rows={4}
                  className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical"
                />
              </div>
              
              {/* Submit Button */}
              <div>
                <button
                  type="submit" disabled={isSubmitting}
                  className="w-auto bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-md transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


