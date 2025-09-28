import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

// Destructure required icons
const { FiAward, FiStar, FiZap, FiUsers, FiBriefcase, FiMapPin, FiCheckCircle } = FiIcons;

// =====================================================================
// 1. CRITERIA DEFINITIONS (Unchanged)
// =====================================================================

// CRITERIA 1: LIFELONG PROFESSIONAL SERVICE PROVIDER 
const CRITERIA_LIFELONG = [
  "Total Service Years (20+ Years)",
  "Research & Publication Volume",
  "Projects & Capacity Building Initiatives",
  "Newly Introduced Service Methodologies"
];

// CRITERIA 2: BEST UNIQUE WORK AND SERVICE PROVIDER
const CRITERIA_UNIQUE = [
  "Novelty & Innovation of Solution",
  "Impact Beyond Core Responsibilities",
  "Expansion/Scaling of Unique Services",
  "Documented Improvement in Service Quality"
];

// CRITERIA 3: BEST SERVICE PROVIDER IN VARIOUS WORK LEADERSHIP
const CRITERIA_LEADERSHIP = [
  "Duration of Quality Leadership (10+ Years)",
  "Documentation on Effective Practices",
  "Service Accessibility Improvements",
  "Institutional Performance Comparison"
];

// CRITERIA 4: MODEL HEALTH EXTENSION WORKER 
const CRITERIA_HEW = [
  "Model Family Health Service (>70% Effective)",
  "Maternal/Child Health Improvement (>85%)",
  "Local Facility Effectiveness (>50%)",
  "Continuous Service in Designated Locality"
];


// Helper function to get the correct criteria list
const getCategoryCriteria = (category) => {
  switch (category) {
    case 'Lifelong Professional Service Provider':
      return CRITERIA_LIFELONG;
    case 'Unique Work and Service Provider':
      return CRITERIA_UNIQUE;
    case 'Service Provider in Various Work Leadership':
      return CRITERIA_LEADERSHIP;
    case 'Model Health Extension Worker':
      return CRITERIA_HEW;
    default:
      return [];
  }
};


// Helper function to get the icon for a category
const getCategoryIcon = (category) => {
  switch (category) {
    case 'Lifelong Professional Service Provider':
      return FiBriefcase;
    case 'Unique Work and Service Provider':
      return FiZap;
    case 'Service Provider in Various Work Leadership':
      return FiUsers;
    case 'Model Health Extension Worker':
      return FiAward;
    default:
      return FiAward;
  }
};

const Awardees = () => {
  // Array of 14 key regions/administrations (Alphabetically sorted)
  const ethiopianRegions = [
    'Addis Ababa City Administration', 'Afar Region', 'Amhara Region', 'Benishangul-Gumuz Region', 
    'Central Ethiopia Regional State', 'Dire Dawa City Administration', 'Gambella Region',
    'Harari Region', 'Oromia Region', 'Sidama Region', 'Somali Region', 
    'South West Ethiopia Peoples’ Region (SWEPR)', 'Southern Nations, Nationalities, and Peoples’ Region (SNNPR)',
    'Tigray Region'
  ];
  
  // Base list of names to generate unique candidates for each category
  const lifelongNames = [
    'Dr. Almaz Kebede', 'Dr. Tesfaye Negash', 'W/ro Zewditu Mamo', 'Ato Birhanu Tadesse', 
    'Dr. Etenesh Lemma', 'Ato Fikru Mekonnen', 'W/ro Genet Abebe', 'Dr. Haile Mariam',
    'Ato Isayas Girma', 'W/ro Kidist Fikru', 'Dr. Lema Tesfaye', 'Ato Mebratu Belay',
    'W/ro Negisti Desta', 'Dr. Obsa Kemal'
  ];

  const uniqueNames = [
    'Mr. Solomon Abebe', 'Mr. Kaleab Tadesse', 'Dr. Hiwot Getachew', 'Ato Yohannes Bekele',
    'W/ro Selamawit Tilahun', 'Dr. Elias Girmay', 'Ato Getachew Dadi', 'W/ro Hana Kassa',
    'Dr. Muse Endale', 'Ato Robel Tesema', 'W/ro Tigist Hailu', 'Dr. Wondimu Assefa',
    'Ato Zewdu Lemma', 'W/ro Netsanet Fasil'
  ];

  const leadershipNames = [
    'Dr. Abraham Hailu', 'W/ro Bethlehem Fekadu', 'Ato Chala Hunde', 'Dr. Desta Gebre',
    'W/ro Eleni Tsegaye', 'Ato Firew Sisay', 'Dr. Geleta Ayana', 'W/ro Habiba Ali',
    'Ato Kaleb Demissie', 'Dr. Lidiya Ketema', 'W/ro Martha Tola', 'Ato Nardos Zewde',
    'Dr. Omar Abdi', 'W/ro Saron Mamo'
  ];


  // =====================================================================
  // GENERATE 14 CANDIDATES FOR LIFELONG PROFESSIONAL SERVICE PROVIDER
  // =====================================================================
  const lifelongAwardees = ethiopianRegions.map((region, index) => ({
    id: `100${index}`,
    name: lifelongNames[index % lifelongNames.length] + ' ' + String.fromCharCode(65 + index), 
    category: 'Lifelong Professional Service Provider',
    description: `Dedicated public health service for over 20 years in ${region}, focusing on protocol improvement and research contribution.`,
    votes: Math.floor(Math.random() * 25) + 10,
    imageUrl: `https://placehold.co/100x100/3e7d95/ffffff?text=L${index+1}`,
    region: region,
  }));

  // =====================================================================
  // GENERATE 14 CANDIDATES FOR UNIQUE WORK AND SERVICE PROVIDER
  // =====================================================================
  const uniqueWorkAwardees = ethiopianRegions.map((region, index) => ({
    id: `200${index}`,
    name: uniqueNames[index % uniqueNames.length] + ' ' + String.fromCharCode(65 + index),
    category: 'Unique Work and Service Provider',
    description: `Innovator in specialized care for ${region}, implementing a unique project to expand service accessibility using novel technology.`,
    votes: Math.floor(Math.random() * 25) + 10,
    imageUrl: `https://placehold.co/100x100/512bd4/ffffff?text=U${index+1}`,
    region: region,
  }));

  // =====================================================================
  // GENERATE 14 CANDIDATES FOR SERVICE PROVIDER IN VARIOUS WORK LEADERSHIP 
  // =====================================================================
  const leadershipAwardees = ethiopianRegions.map((region, index) => ({
    id: `300${index}`,
    name: leadershipNames[index % leadershipNames.length] + ' ' + String.fromCharCode(65 + index),
    category: 'Service Provider in Various Work Leadership',
    description: `Exceptional leader across multiple health facilities in ${region}, driving successful policy changes and improving staff performance over 10 years.`,
    votes: Math.floor(Math.random() * 25) + 10,
    imageUrl: `https://placehold.co/100x100/17a2b8/ffffff?text=LD${index+1}`,
    region: region,
  }));


  const initialAwardees = [
    ...lifelongAwardees, 
    ...uniqueWorkAwardees, 
    ...leadershipAwardees, 

    // =====================================================================
    // **CATEGORY 4: Model Health Extension Workers** (Placeholder)
    // =====================================================================
    { id: '5', name: 'Announcement Placeholder', category: 'Model Health Extension Worker', description: 'The Selected Model Health Extension Worker will be announced at the ARM conference.', votes: 0, imageUrl: 'https://placehold.co/100x100/fbb03b/ffffff?text=ARM', region: 'N/A', isPlaceholder: true },
  ];

  const [awardees, setAwardees] = useState(initialAwardees);
  const [hasVoted, setHasVoted] = useState(() => {
    return localStorage.getItem('hasVotedForAwardees') === 'true';
  });
  const [selectedNomineeId, setSelectedNomineeId] = useState(null);

  // Group awardees by category for display
  const groupedAwardees = awardees.reduce((acc, awardee) => {
    const category = awardee.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(awardee);
    return acc;
  }, {});
  
  // Sort Lifelong, Unique Work, and Leadership categories alphabetically by region
  const categoriesToSort = [
      'Lifelong Professional Service Provider', 
      'Unique Work and Service Provider',
      'Service Provider in Various Work Leadership' 
  ];
  categoriesToSort.forEach(category => {
      if (groupedAwardees[category]) {
          groupedAwardees[category].sort((a, b) => a.region.localeCompare(b.region));
      }
  });
  
  // Array of categories to maintain a consistent display order
  const categories = [
    'Lifelong Professional Service Provider',
    'Unique Work and Service Provider',
    'Service Provider in Various Work Leadership',
    'Model Health Extension Worker'
  ];

  // Function to handle voting 
  const handleVote = (awardeeId) => {
    if (awardees.find(a => a.id === awardeeId)?.isPlaceholder) return;
    
    if (!hasVoted && awardeeId === selectedNomineeId) {
      setAwardees(prevAwardees =>
        prevAwardees.map(awardee =>
          awardee.id === awardeeId ? { ...awardee, votes: awardee.votes + 1 } : awardee
        )
      );
      localStorage.setItem('hasVotedForAwardees', 'true');
      setHasVoted(true);
    }
  };

  // Function to handle radio button selection
  const handleSelection = (awardeeId, isPlaceholder) => {
    if (hasVoted || isPlaceholder) return; 
    
    setSelectedNomineeId(awardeeId);
  };

  return (
    <section 
      id="awardees" 
      // Changed background color to #015aa4 using Tailwind's arbitrary value notation
      className="py-20 relative overflow-hidden bg-[#015aa4]" 
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6" // Changed text to white for contrast
          >
           🌟 **2025 Annual Health Sector Award Nominees** 🏆
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8"> {/* Changed text to light gray for contrast */}
            Cast your vote for the **outstanding contributors** of the year, representing excellence across all regions of Ethiopia.
          </p>
        </motion.div>

        {/* Awardees List Grouped by Category */}
        <div className="max-w-7xl mx-auto">
          {categories.map((category, categoryIndex) => groupedAwardees[category] && (
            <div key={category} className="mb-16">
              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl font-extrabold text-center text-white mb-8 py-4 bg-blue-900 rounded-lg shadow-2xl border-b-4 border-blue-500" 
              >
                **{category.toUpperCase()}**
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {groupedAwardees[category].map((awardee, index) => (
                  <motion.div
                    key={awardee.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ y: awardee.isPlaceholder ? 0 : -8, scale: awardee.isPlaceholder ? 1 : 1.02, boxShadow: awardee.isPlaceholder ? "none" : "0 15px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.08)" }}
                    className={`rounded-xl shadow-lg p-8 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 ${
                        awardee.isPlaceholder 
                            ? 'bg-yellow-50 border-4 border-yellow-500 justify-center min-h-[400px]'
                            : 'bg-white border-t-4 border-blue-500' 
                    }`}
                  >
                    
                    {awardee.isPlaceholder ? (
                        <div className="flex flex-col items-center justify-center h-full">
                            <SafeIcon icon={FiAward} className="w-16 h-16 text-yellow-600 mb-4" />
                            <h3 className="text-xl font-bold text-yellow-800 mb-4">
                                Model Health Extension Worker
                            </h3>
                            <p className="text-lg font-semibold text-yellow-700">
                                **{awardee.description}**
                            </p>
                        </div>
                    ) : (
                      <>
                        {/* Awardee Image */}
                        <img
                          src={awardee.imageUrl}
                          alt={awardee.name}
                          className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-blue-500 p-1" 
                          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100/cccccc/000000?text=IMG" }}
                        />

                        {/* Category Icon */}
                        <SafeIcon icon={getCategoryIcon(awardee.category)} className="w-12 h-12 text-blue-600 mb-2" /> 
                        <h3 className="text-xl font-bold text-blue-900 mb-1">{awardee.name}</h3>
                        
                        {/* Region/City Administration (BOLDED) */}
                        <p className="text-xs font-semibold text-gray-500 mb-4 flex items-center">
                            <SafeIcon icon={FiMapPin} className="w-3 h-3 mr-1 text-red-500" />
                            **{awardee.region}**
                        </p>

                        <p className="text-gray-700 mb-4 text-sm flex-grow">{awardee.description}</p>
                        
                        {/* ===== CRITERIA CHECKLIST ===== */}
                        <div className="w-full text-left mb-6 p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <p className="text-xs font-bold text-blue-800 mb-2 uppercase">Selection Criteria Met:</p>
                            <ul className="space-y-1">
                                {getCategoryCriteria(awardee.category).map((criterion, i) => (
                                    <li key={i} className="flex items-start text-xs text-gray-700">
                                        <SafeIcon icon={FiCheckCircle} className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span>{criterion}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* ============================================== */}
                        
                        {/* ===== VOTE SELECTION (RADIO BUTTON) ===== */}
                        <div className="w-full mb-4">
                            <div className="flex items-center space-x-2 justify-center">
                                <input
                                    id={`select-${awardee.id}`}
                                    type="radio"
                                    name="awardee-selection" 
                                    value={awardee.id}
                                    checked={selectedNomineeId === awardee.id}
                                    onChange={() => handleSelection(awardee.id, awardee.isPlaceholder)}
                                    disabled={hasVoted}
                                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed" 
                                />
                                <label 
                                    htmlFor={`select-${awardee.id}`} 
                                    className={`text-base font-semibold ${hasVoted ? 'text-gray-400' : 'text-blue-800 cursor-pointer'}`}
                                >
                                    Select this Nominee
                                </label>
                            </div>
                        </div>
                        {/* ============================================== */}


                        <motion.button
                          onClick={() => handleVote(awardee.id)}
                          disabled={hasVoted || selectedNomineeId !== awardee.id}
                          whileHover={{ scale: (hasVoted || selectedNomineeId !== awardee.id) ? 1 : 1.05 }}
                          whileTap={{ scale: (hasVoted || selectedNomineeId !== awardee.id) ? 1 : 0.95 }}
                          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 w-full ${
                            (hasVoted || selectedNomineeId !== awardee.id) 
                              ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg' 
                          }`}
                        >
                          <SafeIcon icon={FiStar} className="w-5 h-5" />
                          <span>
                            {hasVoted 
                                ? 'Vote Submitted!' 
                                : (selectedNomineeId === awardee.id ? 'Confirm Final Vote' : 'Select Nominee to Vote')
                            }
                          </span>
                        </motion.button>
                        <p className="mt-2 text-sm text-gray-300 font-bold">{awardee.votes} votes</p> {/* Changed text to light gray for contrast */}
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awardees;