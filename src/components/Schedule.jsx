import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiUser } = FiIcons;

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  const days = [
    {
      date: 'October 22',
      title: 'Day 1',
      sessions: [
        { time: '8:00 AM', title: 'Field Visit Diparture from Town', speaker: 'Led By Coordinators' },
        { time: '10:30 AM', title: 'Arrive on Selected Sites', speaker: 'Led By Higher Officials' },
        { time: '12:00 PM', title: 'Lunch & Networking', speaker: 'Led By Site Coordinators' },
        { time: '1:30 PM', title: 'Selected Facilities Visit', speaker: 'Led By Higher Officials' },
        { time: '3:00 PM', title: 'Discussion and Feedback', speaker: 'Led By Higher Officials' },
        { time: '4:30 PM', title: 'Return back to the Town', speaker: 'Led By Coordinators' }
      ]
    },
    {
      date: 'October 23',
      title: 'Day 2',
      sessions: [
        { time: '9:00 AM', title: 'Opening Remark', speaker: 'Dr. Mekdes Daba' },
        { time: '9:30 AM', title: 'Key Note Remark' , speaker: 'Regional Representative' },
        { time: '10:00 AM', title: 'Award Ceremony' , speaker: 'Led By Coordinators' },
        { time: '11:00 AM', title: 'Exhibition Visit' , speaker: 'Led by Coordinators' },
        { time: '12:00 PM', title: 'Lunch & Poster Session', speaker: '' },
        { time: '1:30 PM', title: 'Pannel Discussion', speaker: 'Led by Coordinators' },
        { time: '3:00 PM', title: 'Pannel Discussion', speaker: 'Led by Coordinators' },
        { time: '4:30 PM', title: 'Day 1 Recap', speaker: 'Dr. Mekdes Daba' }
      ]
    },
    {
      date: 'October 24',
      title: 'Day 3',
      sessions: [
        { time: '9:00 AM', title: 'Annual Performance Report', speaker: 'Dr. Muluken K.' },
        { time: '10:30 AM', title: 'Pannel Discussion', speaker: 'Dr. Habas A' },
        { time: '12:00 PM', title: 'Lunch & Awards Ceremony', speaker: '' },
        { time: '1:30 PM', title: 'Global Health Inoviations and Local Context', speaker: 'Dr. Sophie Gagnon' },
        { time: '3:00 PM', title: 'Pannel Discussion', speaker: 'Dr. Ahmed Yusuf' },
        { time: '4:30 PM', title: 'Closing Remarks & Networking', speaker: 'ARM Committee' }
      ]
    }
  ];

  return (
    <>
      <hr className="h-0.5 w-1/2 mx-auto border-none bg-[#015aa4] shadow-lg shadow-[#000000]" style={{boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.4)'}}/>
      
      <section id="schedule" className="py-20 bg-[#015aa4]" style={{ scrollMarginTop: '80px' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ARM Schedule
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Three days of intensive learning, networking, and collaboration
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-10">
              <div className="bg-[#0273a4]/70 rounded-xl p-2 shadow-xl flex flex-wrap">
                {days.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDay(index)}
                    className={`px-4 md:px-6 py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 relative overflow-hidden group m-1 ${
                      activeDay === index
                        ? 'bg-[#49A6E9] text-white shadow-md'
                        : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">
                      {day.title} - {day.date}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0273a4]/70 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#015aa4] to-[#49A6E9] text-white p-6">
                <h3 className="text-2xl font-bold">
                  {days[activeDay].title} - {days[activeDay].date}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {days[activeDay].sessions.map((session, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6 p-4 rounded-lg hover:bg-gray-50/10 transition-colors border-b border-gray-500/20 last:border-b-0"
                    >
                      <div className="flex-shrink-0 md:w-32 text-left md:text-right">
                        <div className="flex items-center space-x-2 justify-start md:justify-end">
                          <SafeIcon icon={FiClock} className="w-4 h-4 text-cyan-200" />
                          <span className="text-sm font-semibold text-gray-200">
                            {session.time}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {session.title}
                        </h4>
                        {session.speaker && (
                          <div className="flex items-center space-x-2 text-gray-200">
                            <SafeIcon icon={FiUser} className="w-4 h-4" />
                            <span className="text-sm">{session.speaker}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;