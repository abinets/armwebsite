import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiInfo, FiImage, FiClock, FiCheckCircle } = FiIcons;

const Venue = () => {
  const siteLocations = [
    {
      title: 'Seka Woreda',
      description: 'Step back in time at the historic Abajifar Palace, once the residence of King Abajifar. This site offers cultural insights and a glimpse into the regional history, providing a unique backdrop for ARM discussions.',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.805566373801!2d36.82729111477063!3d7.678783694409396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b0758410940199%3A0x6a05e55b4b1a4a5!2sAbajifar%20Palace%20Museum!5e0!3m2!1sen!2set!4v1678912345679!5m2!1sen!2set',
      images: [
        'https://placehold.co/600x400/015aa4/white?text=Seka+Woreda+1',
        'https://placehold.co/600x400/015aa4/white?text=Seka+Woreda+2',
        'https://placehold.co/600x400/015aa4/white?text=Seka+Woreda+3',
        'https://placehold.co/600x400/015aa4/white?text=Seka+Woreda+4',
        'https://placehold.co/600x400/015aa4/white?text=Seka+Woreda+5',
      ],
      visitInfo: [
        'Date: October 22, 2025',
        'Total Participants: 80',
        'Distance from Jimma City: 45 km',
        'Focus: Community health initiatives, rural healthcare challenges for ARM attendees'
      ],
    },
    {
      title: 'Agaro Area',
      description: 'A serene lake perfect for relaxation and recreation. Recent restoration efforts have made it a vibrant spot, offering a refreshing break and informal networking opportunity for ARM participants.',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.67056024467!2d36.816654014770685!3d7.694697994399763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b074a3502b4d21%3A0x7d2836696b9d6e8e!2sLake%20Boye!5e0!3m2!1sen!2set!4v1678912345680!5m2=1sen!2set',
      images: [
        'https://placehold.co/600x400/015aa4/white?text=Agaro+Area+1',
        'https://placehold.co/600x400/015aa4/white?text=Agaro+Area+2',
        'https://placehold.co/600x400/015aa4/white?text=Agaro+Area+3',
        'https://placehold.co/600x400/015aa4/white?text=Agaro+Area+4',
      ],
      visitInfo: [
        'Date: October 15, 2025',
        'Total Participants: 100',
        'Distance from Jimma City:60 km',
        'Focus: Relaxation, informal networking for ARM attendees'
      ],
    },
    {
      title: 'Jimma Town Area',
      description: 'Immerse yourself in the bustling atmosphere of Jimma\'s central market. Experience local commerce and traditional Ethiopian goods, offering a cultural immersion for ARM guests.',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.81830206259!2d36.830635214770635!3d7.677322994410291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b07584102b4d23%3A0x7d2836696b9d6e8f!2sJimma%20Central%20Market!5e0!3m2!1sen!2set!4v1678912345681!5m2!1sen!2set',
      images: [
        'https://placehold.co/600x400/015aa4/white?text=Jimma+Market+1',
        'https://placehold.co/600x400/015aa4/white?text=Jimma+Market+2',
        'https://placehold.co/600x400/015aa4/white?text=Jimma+Market+3',
      ],
      visitInfo: [
        'Date: October 15, 2025',
        'Total Participants: 60',
        'Distance from Jimma City: 2 km',
        'Focus: Local economy, cultural product insight for ARM delegates'
      ],
    },
    {
      title: 'Limmu Genet Area',
      description: 'A significant administrative building with architectural interest. While primarily an administrative center, its design reflects the town\'s governance, relevant for understanding local policy context for ARM.',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8291884589286!2d36.82944321477062!3d7.676067994411139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b07584104c01d1%3A0x7d2836696b9d6e90!2sJimma%20Town%20Hall!5e0!3m2!1sen!2set!4v1678912345682!5m2!1sen!2set',
      images: [
        'https://placehold.co/600x400/015aa4/white?text=Limmu+Genet+1',
        'https://placehold.co/600x400/015aa4/white?text=Limmu+Genet+2',
        'https://placehold.co/600x400/015aa4/white?text=Limmu+Genet+3',
      ],
      visitInfo: [
        'Date: October 15, 2025',
        'Total Participants: 40',
        'Distance from Jimma City: 1 km',
        'Focus: Governance structure, urban development relevant to ARM themes'
      ],
    },
  ];

  const [activeImage, setActiveImage] = useState({});

  const navigateImage = (siteTitle, direction) => {
    setActiveImage(prev => {
      const currentSite = siteLocations.find(site => site.title === siteTitle);
      if (!currentSite) return prev;

      const currentImageIndex = prev[siteTitle] || 0;
      let newIndex = currentImageIndex + direction;

      if (newIndex < 0) newIndex = currentSite.images.length - 1;
      if (newIndex >= currentSite.images.length) newIndex = 0;

      return { ...prev, [siteTitle]: newIndex };
    });
  };

  return (
    <>
      <hr className="h-0.5 w-1/2 mx-auto border-none bg-[#015aa4] shadow-lg shadow-[#000000]" style={{boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.4)'}}/>

      <section id="visits" className="py-20 bg-gradient-to-br from-[#015aa4] to-[#013c71]" style={{ scrollMarginTop: '80px' }}>
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Venues & Itinerary
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Discover the main conference venue and a selection of fascinating sites to visit as part of the Annual Review Meeting.
            </p>
          </motion.div>

          {/* Venue Section */}
          <section className="pb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Main Conference Venue</h3>
              <p className="text-gray-200 max-w-2xl mx-auto">
                The Annual Review Meeting will be held at a premier location in the heart of Jimma.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-[#015aa4] to-[#0273a4] text-white rounded-xl p-8 mb-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-cyan-200" />
                    <h3 className="text-2xl font-bold">Kora Tushine Convention Center, Jimma University</h3>
                  </div>
                  <p className="text-gray-200 mb-4">
                    Jimma, Oromia Region
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">
                      World-Class Facilities
                    </h4>
                    <p className="text-gray-200 leading-relaxed">
                      The venue provides the perfect environment for our conference, with state-of-the-art technology and comfortable meeting spaces.
                    </p>
                  </div>

                  <div className="bg-[#0273a4]/70 rounded-lg p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <SafeIcon icon={FiInfo} className="w-5 h-5 text-cyan-200" />
                      <h4 className="text-lg font-semibold text-white">
                        Venue Benefits
                      </h4>
                    </div>
                    <ul className="space-y-2 text-gray-200">
                      <li>• Centrally located near top hotels and restaurants</li>
                      <li>• Easily accessible within the city</li>
                      <li>• Modern conference facilities with latest technology</li>
                      <li>• Ample parking and accessibility features</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://i.ytimg.com/vi/pgjORbFCwVo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZV9RlBk5cYayEFs46e7R5H4nUHA"
                    alt="Jimma Traditional Coffee Center"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="mt-6">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8mVXTdgp88BLMw941FczhNkj8Nl5Yh1UVcw4J8uLwTqFQgGboW7kwEyX7EyDlXsKBWg&usqp=CAU"
                    alt="Jimma coridors"
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Site Visits Section */}
          <section className="pt-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Site Visits</h2>
              <p className="text-gray-200 max-w-3xl mx-auto">
                Discover key locations and learn about their significance and visiting details for the Annual Review Meeting.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {siteLocations.map((site, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative bg-[#0273a4]/70 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 pb-4 text-white rounded-t-xl flex items-center space-x-3 bg-gradient-to-r from-[#015aa4] to-[#0273a4]">
                    <SafeIcon icon={FiMapPin} className="w-8 h-8 text-cyan-200" />
                    <h3 className="text-3xl font-bold">{site.title}</h3>
                  </div>

                  <div className="p-6 text-gray-200">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="mb-6"
                    >
                      <h4 className="flex items-center space-x-2 text-xl font-semibold text-white mb-3">
                        <SafeIcon icon={FiInfo} className="w-5 h-5 text-cyan-200" />
                        <span>About this Site</span>
                      </h4>
                      <p className="leading-relaxed">{site.description}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="mb-6"
                    >
                      <h4 className="flex items-center space-x-2 text-xl font-semibold text-white mb-3">
                        <SafeIcon icon={FiImage} className="w-5 h-5 text-cyan-200" />
                        <span>Photo Gallery</span>
                      </h4>
                      <div className="relative w-full h-64 bg-gray-600 rounded-lg overflow-hidden mb-3">
                        <img
                          src={site.images[activeImage[site.title] || 0]}
                          alt={`${site.title} image`}
                          className="w-full h-full object-cover transition-opacity duration-300"
                          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/015aa4/white?text=Image+Error" }}
                        />
                        <div className="absolute inset-0 flex items-center justify-between p-2">
                          <button
                            onClick={() => navigateImage(site.title, -1)}
                            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors focus:outline-none"
                            aria-label="Previous image"
                          >
                            ❮
                          </button>
                          <button
                            onClick={() => navigateImage(site.title, 1)}
                            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors focus:outline-none"
                            aria-label="Next image"
                          >
                            ❯
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-200 text-right">
                        {activeImage[site.title] !== undefined ? activeImage[site.title] + 1 : 1} / {site.images.length}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="mb-6"
                    >
                      <h4 className="flex items-center space-x-2 text-xl font-semibold text-white mb-3">
                        <SafeIcon icon={FiMapPin} className="w-5 h-5 text-cyan-200" />
                        <span>Location Map</span>
                      </h4>
                      <div className="w-full h-64 bg-gray-600 rounded-lg overflow-hidden">
                        <iframe
                          src={site.mapEmbedUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map of ${site.title}`}
                        ></iframe>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <h4 className="flex items-center space-x-2 text-xl font-semibold text-white mb-3">
                        <SafeIcon icon={FiClock} className="w-5 h-5 text-cyan-200" />
                        <span>Visit Information (ARM Focus)</span>
                      </h4>
                      <ul className="list-disc list-inside text-gray-200 space-y-1">
                        {site.visitInfo.map((info, infoIndex) => (
                          <motion.li
                            key={infoIndex}
                            className="flex items-start space-x-2"
                            whileHover={{ scale: 1.03, color: '#49A6E9', x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-cyan-200 flex-shrink-0 mt-1" />
                            <span>{info}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Venue;