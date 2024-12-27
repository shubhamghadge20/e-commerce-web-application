import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const errors = {};
    
    // Name validation: Ensure name is not empty and contains only letters (optional)
    if (!name.trim()) {
      errors.name = 'Name is required.';
    }

    // Email validation: Ensure email follows a valid email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      errors.email = 'Email is required.';
    } else if (!emailPattern.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    // Message validation: Ensure message is not empty
    if (!message.trim()) {
      errors.message = 'Message is required.';
    }

    setErrors(errors);

    // Return true if no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submission
    if (validateForm()) {
      // Replace this with actual form submission logic
      setStatus('Your message has been sent!');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    } else {
      setStatus(null);
    }
  };

  useEffect(() => {
    // Focus on the first invalid input field after submission attempt
    if (Object.keys(errors).length > 0) {
      const firstErrorField = document.querySelector('.border-red-500');
      if (firstErrorField) {
        firstErrorField.focus();
      }
    }
  }, [errors]);

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg text-gray-600">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg text-gray-600">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-lg text-gray-600">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
              rows="4"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>

        {status && (
          <p className="text-green-600 text-center mt-4 bg-green-100 p-3 rounded-md shadow-md">{status}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
