import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const { FiMail, FiPhone, FiMapPin, FiSend, FiGlobe } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
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
                      <SafeIcon icon={FiMail} className="w-6 h-6 text-cyan-200" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-gray-200">arm@moh.gov.et</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                      <SafeIcon icon={FiPhone} className="w-6 h-6 text-cyan-200" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone</p>
                      <p className="text-gray-200">+251 (914) 555-2025</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full">
                      <SafeIcon icon={FiMapPin} className="w-6 h-6 text-cyan-200" />
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
                    <SafeIcon icon={FiGlobe} className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/FMoHealth"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-white/20 text-white rounded-full transition-colors hover:bg-[#1877f2] hover:text-white"
                  >
                    <SafeIcon icon={FaFacebook} className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/FMoHealthEthiopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-white/20 text-white rounded-full transition-colors hover:bg-[#1DA1F2] hover:text-white"
                  >
                    <SafeIcon icon={FaTwitter} className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/channel/UC-your-channel-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 bg-white/20 text-white rounded-full transition-colors hover:bg-[#FF0000] hover:text-white"
                  >
                    <SafeIcon icon={FaYoutube} className="w-6 h-6" />
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
                  >
                    <motion.div
                      className="absolute inset-0 bg-[#013c71]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <SafeIcon icon={FiSend} className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Send Message</span>
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