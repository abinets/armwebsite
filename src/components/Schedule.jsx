import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiUser } = FiIcons;

// Main title for the entire schedule
const MAIN_TITLE = 'FIELD VISIT PROGRAMME OF THE 27th ANNUAL REVIEW MEETING OF THE HEALTH SECTOR';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1); // Set to Day 2 initially for demonstration

  const days = [
    {
      date: 'October 22',
      title: 'Day 1 - Field Visit Programme',
      description: 'The inaugural day is dedicated to **field visits** across the Jimma Zone, allowing participants to observe and engage directly with local health facilities, including health centers, hospitals, and the Jimma University CSH.',
      sessions: [
        { time: '7:00 AM', title: 'Field Visit Departure (All Groups)', speaker: 'Responsible Persons listed per Group' },
        { time: 'Morning/Afternoon', title: 'Group 1 Field Visit: Gomma Woreda (Beshasha HC, Koye Seja Comprehensive HP, Agaro HC)', speaker: 'Lead: H.E Dr.Mekdes Daba | Group lead: Pro. Afework Kasu' },
        { time: 'Morning/Afternoon', title: 'Group 2 Field Visit: Saka Chokorsa Woreda (Shashemene HP, Saka HC, Saka Hospital)', speaker: 'Lead: H.E Dr.Dereje Duguma' },
        { time: 'Morning/Afternoon', title: 'Group 3 Field Visit: Shebe Sombo Woreda & Jimma City (Ateiro Gafre HP, Sombo HC, Odda Hule General Private Hospital, Jimma University CSH)', speaker: 'Lead: H.E Seharela Abdulahi' },
        { time: 'Morning/Afternoon', title: 'Group 4 Field Visit: Manna Woreda & Jimma City (Butture HP, Yabbu HC, Jimma HC, EPSS Jimma Branch)', speaker: 'Lead: H.E Firehiwot Abebe' },
        { time: '6:00 PM', title: 'MoH Dinner at Haile Resort', speaker: 'Ministry of Health' }
      ]
    },
    {
      date: 'October 23',
      title: 'Day 2 - Group/Panel Discussion Programme',
      description: 'The second day focuses on **intensive panel and group discussions** across five critical thematic areas, covering health sector reform, sustainable financing, digitization, patient safety, and local manufacturing.',
      sessions: [
        { 
          time: '08:30 - 11:00 AM', 
          title: 'Panel Discussion: Current outbreak management and emergency response (G1)', 
          speaker: 'Thematic Area: Current Outbreak Management and Emergency preparedness and Response | Moderators: Dr. Selamawit Mengesha, Dr. Melkamu Abete | Panelists: Dr Dereje Deguma, Dr Mesay Hailu, Belay Bezabih, Prof Francois Kansula, Dr. Gelila Mengistu' 
        },
        { 
          time: '08:30 - 11:00 AM', 
          title: 'Group Discussion: Hospital Reform for a Resilient Health System (G2)', 
          speaker: 'Thematic Area: Health Sector Reform | Moderators: Abdukerim Mengistu ( ARHB), Dr. Elubabor Buno | Panelists: Dr. Muluken Tesfaye, Dr. Abrham Eshetu, Dr. Shimeles Gezahagn, Dr.Solomon Worku' 
        },
        { 
          time: '08:30 - 11:00 AM', 
          title: 'Panel Discussion: High impact interventions for SDG3 acceleration (G3)', 
          speaker: 'Thematic Area: Current Landscape of RMNCH and Sustainable Financing | Moderators: Endeshaw Shibiru, Dr. Mariamawit Asfaw | Panelists: H.E. Tirumar Abate, Hanna Mekuannint, Dr.Markos, Dr.Addis Tamire' 
        },
        { 
          time: '08:30 - 11:00 AM', 
          title: 'Panel Discussion: Health Intelligence : Building Ethiopia’s Data-Driven Future (G4)', 
          speaker: 'Thematic Area: Digitization and Data Use | Moderators: Dr. Mussa Ahmed, Prof. Binyam Chakilu | Panelists: Mr. Mesoud Mohammed, Dr. Awoke Misganaw, Mr. Gemechis Melkamu' 
        },
        { 
          time: '08:30 - 11:00 AM', 
          title: 'Panel Discussion: Investment & Innovation to accelerate sustainable Health System Performance (G5)', 
          speaker: 'Thematic Area: Harnessing Innovation, Data and Digital Transformation | Moderators: Dr. Amanuel Haile, Prof Tsinuel Girma | Panelists: Prof. Afework Kasu, Prof. Netsane Workneh, Dr Girma Ababi, Boru Shana, W/t Heran Gerba, Dr.Taddese Teferi' 
        },
        { time: '11:00 - 11:30 AM', title: 'Health Break', speaker: '' },
        { 
          time: '11:30 AM - 1:30 PM', 
          title: 'Panel Discussion: Advancing Safer Care and Combating Antimicrobial Resistance (G1)', 
          speaker: 'Topic: Integrating Patient Safety and AMR Strategies for a Resilient Health System | Thematic Area: Advancing Patient Safety & AMR Integration | Moderators: Ibrahim Temam, Dr. Ishmael Shemsedin | Panelists: Dr. Fahmi Mohammed, Dr. Kalid Sherefa, Mr. Wondwossen Shiwarega' 
        },
        { 
          time: '11:30 AM - 1:30 PM', 
          title: 'Group Discussion: Health sector reform for redesigning the health system (G2)', 
          speaker: 'Thematic Area: Health sector reform | Moderator: Dr. Daniel H/meskel | Panelist: Habtamu Demisse' 
        },
        { 
          time: '11:30 AM - 1:30 PM', 
          title: 'Panel Discussion: Building a Resilient Health Financing System (G3)', 
          speaker: 'Topic: Leveraging Domestic Resource Mobilization and Innovative Financing Mechanisms | Thematic Area: Current Landscape of RMNCH and Sustainable Financing | Moderators: Samuel Darge, Dr. Girmaye Dinsa | Panelists: Dr. Addis Tamire, Yamerot Andualem, Leulseged Ageze, Dr Muluken Argaw, Fetiya Kedir' 
        },
        { 
          time: '11:30 AM - 1:30 PM', 
          title: 'Panel Discussion: Achieving Health Sector Digital transformation (G4)', 
          speaker: 'Topic: Advancing Unified Digital Health Ecosystem | Thematic Area: Digitization and Data Use | Moderators: Tsigereda Kifle, Prof. Binyam Chakilu | Panelists: Ato Gemechis, Dr Tesfaye Biru, Prof. Muluemebet, Ato Eyasu' 
        },
        { 
          time: '11:30 AM - 1:30 PM', 
          title: 'Panel Discussion: Strengthening HRH investment (G5)', 
          speaker: 'Topic: Strengthening HRH investment, evidence use and innovation to building a resilient health Workforce | Thematic Area: Building Resilient Health Workforce | Moderators: Yassin Habib, Dr.Fantu Abebe | Panelists: Dr. Robel, Jemal Mohammed, Mesfin Kifle, Amare Hailekiros, Tariku Dukamo' 
        },
        { time: '1:30 PM - 2:30 PM', title: 'Working Lunch', speaker: '' },
        { 
          time: '2:30 PM - 5:30 PM', 
          title: 'Panel Discussion: Unlocking the Potential of Local Pharmaceuticals Manufacturing (G1)', 
          speaker: 'Topic: From dependency to resilience | Thematic Area: Strengthening medical supply and local production | Moderators: Prof. Afework Kassu, Dr. Yohannes Chala | Panelists: Ms Heran Gerba, Dr. Abdulkadir Gelgelo, Solomon Abdellah, Dr. Abebe Genetu' 
        },
        { 
          time: '2:30 PM - 5:30 PM', 
          title: 'Group Discussion: Integrated Medical Device Management Strategy (G2)', 
          speaker: 'Topic: Access to and efficient utilization of Medical Device | Thematic Area: Strengthening medical supply and local production | Moderators: Achalu Abadir, Woltegi Begalo | Panelists: Reggasa Bayisa, Dr. Dawit Asseffa' 
        },
        { 
          time: '2:30 PM - 5:30 PM', 
          title: 'Panel Discussion: Re-envisioning PHC to emerging realities (G3)', 
          speaker: 'Topic: Re-envisioning PHC to emerging realities and systemic risk and Building Resilient health system through PHC | Thematic Area: Re-envisioning PHC | Moderators: Dr .Hellina Worku, Dr. Abdi Amin | Panelists: Israel Ataro, Dessalew emaway, Dr. Bokona Guta, Dr. Yibeltal Kifle, Dr. Ruth Nigatu' 
        },
        { 
          time: '2:30 PM - 5:30 PM', 
          title: 'Panel Discussion: Strengthening Growth Monitoring and Promotion (GMP) Services (G4)', 
          speaker: 'Topic: Lessons, Opportunities, and Way Forward | Thematic Area: Addressing Non-Communicable Diseases and Promoting Healthy Lifestyles | Moderators: Dr. Sisay Sinamo, Dr. Abel Asefa | Panelists: Dr. Yitayish, Alemayehu Eshetu, Hiwot Darsene, Dr Gezahegn Kebede' 
        },
        { 
          time: '2:30 PM - 5:30 PM', 
          title: 'Panel Discussion: Driving Quality Outcomes through Robust Healthcare Regulatory (G5)', 
          speaker: 'Topic: Enhancing Facility Standards, Accreditation, and Regulatory | Thematic Area: Enhancing Facility Standards, Accreditation, and Regulatory | Moderator: Dr.Mohammed Shikur | Panelists: Yilma Mengistu, Endalkachew Tsedal, Henok Hailu, Dr. Abay Sisay' 
        },
        { time: '6:00 PM', title: 'ORHB Dinner at Aba Jifar Palace', speaker: 'Oromia Regional Health Bureau (ORHB)' }
      ]
    },
    {
      date: 'October 24',
      title: 'Day 3 - Working Programme',
      description: 'The final day is the **official working session**, featuring high-level keynote speeches, opening remarks from regional and federal leaders, the presentation of the Annual Performance Report and Core Plan, and a final Plan Agreement and Communiqué.',
      sessions: [
        { time: '08:30 – 09:00 AM', title: 'Arrival of Guests', speaker: 'ARM Participants' },
        { time: '09:00 – 09:15 AM', title: 'Program starts with the national Anthem of Ethiopia', speaker: 'Master of Ceremony' },
        { time: '09:15 – 09:30 AM', title: 'Brief Cultural Music Show', speaker: 'The regional cultural band' },
        { time: '09:30 – 09:35 AM', title: 'Introducing work program', speaker: 'Dr. Muluken Argaw, Strategic Affairs Executive Officer, Ministry of Health' },
        { time: '09:35 – 09:45 AM', title: 'Welcoming Note', speaker: 'Prof. Netsanet Workneh Head of the Oromia RHB' },
        { time: '09:45 – 09:55 AM', title: 'Keynote Address', speaker: 'Ambassador Christine Pirenn, HPN representative' },
        { time: '09:55 – 10:15 AM', title: 'Opening remark', speaker: 'H.E. Dr. Mekdes Daba, Minister of Health' },
        { time: '10:15 – 10:35 AM', title: 'Opening Speech', speaker: 'H.E. Shimelis Abdisa, President Oromia Regional State' },
        { time: '10:35 – 11:35 AM', title: 'Presentation of awards', speaker: 'H.E. The president of Oromia Regional state, H.E. The Minister of Health' },
        { time: '11:35 – 12:05 PM', title: 'Opening of the exhibition', speaker: 'H.E. The president of Oromia Regional state, H.E. The Minister of Health' },
        { time: '12:05 – 12:30 PM', title: 'Group picture', speaker: 'Participants' },
        { time: '12:30 – 02:00 PM', title: 'WORKING LUNCH', speaker: '' },
        { time: '02:00 – 02:50 PM', title: 'Presentation of the Report on EFY 2017 Performance and EFY 2018 Core Plan', speaker: 'Dr. Muluken Argaw, Strategic Affairs Executive Officer' },
        { time: '02:50 – 03:05 PM', title: 'ARM Documentary', speaker: 'Public relations and communication' },
        { time: '03:05 – 04:05 PM', title: 'Pannal on Group discussion Reflection', speaker: 'Rapporteur' },
        { time: '04:05 – 04:30 PM', title: 'Reflections and take away messages on ARM 2025', speaker: 'Oromia RHB Head, HPN delegate, Special guest, Representative of Associations, Representative of HEW Oromia Regional State' },
        { time: '04:30 – 04:50 PM', title: '2018 Plan agreement with RHB Heads', speaker: 'MOH and RHBs' },
        { time: '04:50 – 05:00 PM', title: 'Joint Statement of ARM 2025 Participants/Communiqué', speaker: 'Strategic Affairs Executive Officer Dr. Muluken Argaw' },
        { time: '05:00 – 05:15 PM', title: 'Selection of the host for ARM 2026', speaker: 'Participants' },
        { time: '05:15 – 05:30 PM', title: 'Closing Remark', speaker: 'H.E Mekdes Daba, Minister of Health' }
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
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 max-w-4xl mx-auto">
              {MAIN_TITLE}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ARM Schedule
            </h3>
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
                      {day.title.split(' - ')[0]} - {day.date}
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
                  {days[activeDay].title}
                </h3>
                {/* Added Day Description */}
                <p className="text-sm mt-1 opacity-90">{days[activeDay].description}</p>
              </div>
              
              <div className="p-6">
                <div> 
                  {days[activeDay].sessions.map((session, index) => {
                    const lines = session.speaker.split(' | ');
                    let speakerDetails = [];

                    lines.forEach(line => {
                        const parts = line.split(':');
                        if (parts.length > 1) {
                            const label = parts[0].trim();
                            const content = parts.slice(1).join(':').trim();
                            speakerDetails.push({ label, content });
                        } else {
                            // Handle cases where there's no label:colon (e.g., just a name or simple text)
                            speakerDetails.push({ label: '', content: line });
                        }
                    });

                    return (
                      <React.Fragment key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6 p-4 rounded-lg hover:bg-gray-50/10 transition-colors"
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
                              <div className="flex flex-col items-start space-y-1 text-gray-200 mt-2">
                                {speakerDetails.map((detail, detailIndex) => (
                                  <div key={detailIndex} className="flex items-start space-x-2 text-sm">
                                    {/* Only show the user icon on the very first line of the speaker info */}
                                    {detailIndex === 0 && <SafeIcon icon={FiUser} className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                                    <span className={detailIndex !== 0 ? 'ml-6' : ''}>
                                      {/* Apply bold style directly to the label */}
                                      {detail.label && <span className="font-bold mr-1">{detail.label}:</span>}
                                      {detail.content}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                        {/* Stylish Separator */}
                        {index < days[activeDay].sessions.length - 1 && (
                          <hr className="w-full mx-auto border-none h-px bg-cyan-300/30 my-2" />
                        )}
                      </React.Fragment>
                    );
                  })}
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
