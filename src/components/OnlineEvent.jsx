import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMonitor, FiLink, FiVideo, FiYoutube, FiCheckCircle, FiInfo } = FiIcons;

const OnlineEvent = () => {
  return (
    <>
      <hr className="h-0.5 w-1/2 mx-auto border-none bg-[#015aa4] shadow-lg shadow-[#000000]" style={{ boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.4)' }} />

      <section id="online-event" className="py-20 bg-gradient-to-br from-[#015aa4] to-[#013c71]" style={{ scrollMarginTop: '80px' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Online Attendance & Registration
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Can't make it in person? Join us from anywhere in the world and be a part of the conversation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-[#015aa4] to-[#0273a4] text-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <SafeIcon icon={FiMonitor} className="w-6 h-6 text-cyan-200" />
                  <h3 className="text-2xl font-bold">Virtual Access</h3>
                </div>
                <p className="text-gray-200">
                  Register for virtual attendance to receive access to live streams, recordings, and interactive sessions.
                </p>
              </div>

              <div className="bg-[#0273a4]/70 rounded-xl p-8 shadow-lg">
                <h4 className="flex items-center space-x-2 text-xl font-semibold text-white mb-4">
                  <SafeIcon icon={FiLink} className="w-5 h-5 text-cyan-200" />
                  <span>Join Live Sessions</span>
                </h4>
                <p className="text-gray-200 mb-4">
                  Access the main hall sessions and keynote speeches live via our official streaming platforms.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://zoom.us/webinar/register/your_webinar_id" // Updated link for Zoom registration
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-[#49A6E9] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#3A8FC4] transition-colors"
                  >
                    <SafeIcon icon={FiVideo} className="w-5 h-5" />
                    <span>Register & Join via Zoom</span>
                  </a>
                  <a
                    href="https://www.youtube.com/live"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-colors"
                  >
                    <SafeIcon icon={FiYoutube} className="w-5 h-5" />
                    <span>Watch on YouTube Live</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#0273a4]/70 rounded-xl p-8 shadow-lg">
                <h4 className="flex items-center space-x-2 text-xl font-semibold text-white mb-3">
                  <SafeIcon icon={FiInfo} className="w-5 h-5 text-cyan-200" />
                  <span>Key Benefits for Online Attendees</span>
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start space-x-2">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-cyan-200 flex-shrink-0 mt-1" />
                    <span>Live Q&A with panelists (via chat)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-cyan-200 flex-shrink-0 mt-1" />
                    <span>Access to all session recordings after the event</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-cyan-200 flex-shrink-0 mt-1" />
                    <span>Digital event materials and presentations</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* The height of the YouTube embed has been increased */}
              <div className="rounded-xl overflow-hidden shadow-2xl" style={{ paddingTop: '56.25%', position: 'relative', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/your_live_stream_id"
                  title="Live Stream - Annual Review Meeting 2025"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                />
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-white mb-4">Live Stream: Main Stage</p>
                <p className="text-gray-200">
                  Tune in to watch the live event broadcast on our official YouTube channel. The stream will be active during the main sessions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineEvent;