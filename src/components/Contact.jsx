import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Inline SVG for icons to avoid external dependencies
const FiMail = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const FiPhone = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2.06 15.15 15.15 0 0 1-5.26-1.14c-1.39-.7-2.9-1.99-4.71-3.8-1.81-1.81-3.1-3.32-3.8-4.71A15.15 15.15 0 0 1 2.02 6.18 2 2 0 0 1 4.08 4h3a2 2 0 0 1 2 2c0 1.44-.22 2.37-1.14 3.65-.67.9-.62 1.95.14 2.8l2.92 2.92c.85.76 1.9.81 2.8.14 1.28-.92 2.21-1.14 3.65-1.14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const FiMapPin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const FiSend = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const FiGlobe = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const FaFacebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.47 209.25 245.56V312h-40v-56h40v-48c0-39.28 23.53-62.88 68.32-62.88 17.56 0 35.31 3.12 40.58 4.75v48.25h-28.71c-22.34 0-26.71 11.23-26.71 26.2v37.56h55.21l-8.91 56h-46.3v179.91C413.31 482.47 504 379.78 504 256z"></path>
  </svg>
);

const FaTwitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" {...props}>
    <path d="M459.37 151.716c.162 1.637.243 3.3.243 5.066 0 51.574-39.364 110.66-110.658 110.66-21.68 0-41.97-.935-59.544-2.528 20.25 1.455 40.457 2.182 60.106 2.182 72.868 0 132.062-59.195 132.062-132.064 0-1.895-.035-3.774-.105-5.636a94.484 94.484 0 0 0 23.473-24.469c-21.734 9.692-45.132 16.216-69.835 19.31a94.137 94.137 0 0 0 42.13-67.11c-23.75 14.12-50.117 24.5-78.504 29.83A94.382 94.382 0 0 0 197.662 60.2c-51.58 0-93.533 41.953-93.533 93.533 0 7.37.91 14.654 2.65 21.634a265.815 265.815 0 0 1-193.3-97.644c-1.84 3.16-2.85 6.78-2.85 10.663 0 32.42 16.5 61.026 41.67 77.585-18.068-.585-35.187-5.526-50.05-13.824v1.168c0 45.474 32.333 83.21 75.13 91.895-7.854 2.146-16.142 3.298-24.697 3.298-6.042 0-11.958-.585-17.728-1.558 11.936 37.152 46.54 64.212 87.73 64.97-32.08 25.17-72.585 40.158-116.637 40.158-7.59 0-15.086-.452-22.476-1.35 40.796 26.155 89.263 41.442 141.795 41.442 169.835 0 262.864-140.73 262.864-262.864 0-4.008-.09-7.99-.27-11.968a186.425 186.425 0 0 0 45.746-47.56z"></path>
  </svg>
);

const FaYoutube = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" {...props}>
    <path d="M549.655 124.083c-6.236-21.725-24.764-37.525-46.49-44.621C474.363 60.672 389.65 48 288 48s-186.363 12.672-215.165 31.462c-21.725 7.096-40.254 22.896-46.49 44.621C29.627 151.776 24 195.848 24 256c0 60.152 5.627 104.224 16.208 131.917 6.236 21.725 24.764 37.525 46.49 44.621C98.428 451.328 183.136 464 288 464s189.572-12.672 218.374-31.462c21.725-7.096 40.254-22.896 46.49-44.621C554.373 351.224 560 307.152 560 256c0-51.152-5.627-95.224-16.345-131.917zm-208.799 157.659-106.671-55.51a15.827 15.827 0 0 0-16.142-.047c-5.745 2.76-9.157 8.163-9.157 14.15v112.59c0 5.987 3.412 11.39 9.157 14.15a15.827 15.827 0 0 0 16.142-.047l106.67-55.51a15.77 15.77 0 0 0 0-28.266z"></path>
  </svg>
);


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage('');

    try {
      // Send a POST request to the backend contact endpoint
      const response = await fetch('https://arm.moh.gov.et/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Server error occurred.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage(`Failed to send message: ${error.message}. Please try again.`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <hr className="h-0.5 w-1/2 mx-auto border-none bg-[#015aa4] shadow-lg shadow-[#000000]" style={{ boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.4)' }} />

      <section id="contact" className="py-20 bg-gradient-to-br from-[#015aa4] to-[#013c71]" style={{ scrollMarginTop: '80px' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Have questions about the conference? We're here to help!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                      <FiMail className="w-6 h-6 text-cyan-200" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-200">arm@moh.gov.et</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                      <FiPhone className="w-6 h-6 text-cyan-200" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-gray-200">+251 (914) 555-2025</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                      <FiMapPin className="w-6 h-6 text-cyan-200" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Address</p>
                      <p className="text-gray-200">
                        Ministry of Health<br />
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Connect with Us
                </h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://arm.moh.gov.et"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-white/20 text-white rounded-full transition-colors hover:bg-[#159ae0] hover:text-white"
                  >
                    <FiGlobe className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/FMoHealth"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-white/20 text-white rounded-full transition-colors hover:bg-[#1877f2] hover:text-white"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/FMoHealthEthiopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-white/20 text-white rounded-full transition-colors hover:bg-[#1DA1F2] hover:text-white"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/channel/UC-your-channel-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-white/20 text-white rounded-full transition-colors hover:bg-[#FF0000] hover:text-white"
                  >
                    <FaYoutube className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#015aa4] to-[#0273a4] text-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold mb-3">
                  ARM Information
                </h4>
                <p className="text-gray-200 mb-4">
                  For registration assistance, speaker inquiries, or general conference
                  information, please don't hesitate to reach out to our team.
                </p>
                <p className="text-gray-200">
                  We typically respond within 24 hours.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-[#0273a4]/70 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send us a Message
                </h3>

                {message && (
                  <div className={`p-4 rounded-lg mb-4 text-center font-semibold ${message.includes('success') ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {message}
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-[#49A6E9] focus:border-transparent transition-colors placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-[#49A6E9] focus:border-transparent transition-colors placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-[#49A6E9] focus:border-transparent transition-colors resize-none placeholder-gray-400"
                      placeholder="Your message here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#49A6E9] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group hover:bg-[#3A8FC4]"
                    disabled={isSaving}
                  >
                    <motion.div
                      className="absolute inset-0 bg-[#013c71]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <FiSend className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">
                      {isSaving ? 'Sending...' : 'Send Message'}
                    </span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
