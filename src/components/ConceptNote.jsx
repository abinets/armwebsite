import React from 'react';
import { motion } from 'framer-motion';

// Accept an onClose prop from the parent component
const ConceptNote = ({ onClose }) => {
    const handleCloseClick = () => {
        // Call the onClose function passed from the parent
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="font-calibreRegular leading-relaxed text-gray-800 max-w-4xl mx-auto p-5 md:p-10">
                <button
                    onClick={handleCloseClick}
                    className="absolute top-0 right-0 text-gray-700 hover:text-red-500 text-2xl font-bold px-4 py-2 rounded-full focus:outline-none"
                    aria-label="Close Concept Note"
                    style={{ marginTop: '8px', marginRight: '8px' }}
                >
                    &times;
                </button>
            <motion.img
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                src="/27tharmconcept.png"
                alt="27th ARM Exhibition Banner"
                className="w-full h-auto mb-8"
            />

            <a
                href="/Concept-Note.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Download Concept Note (PDF)
            </a>

            <section id="concept-note">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl font-calibreBold mb-2"
                >
                    Concept Note
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Introduction
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-4"
                >
                    The annual Health Sector Review Meeting is held each year to reflect on past experiences and shape the future of Ethiopia's health sector. This event serves as a platform for decision-makers, stakeholders, and all parties involved in contributing to health in the country to come together and share their insights. This year, the 27th Health Sector Review Meeting will take place in Jimma, under the theme "Driving Health Gains Through Sustainable Investments and Innovations." The meeting will take place from October 22 to 24, 2025, in Jimma City, Ethiopia.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mb-4"
                >
                    The healthcare sector is at a pivotal moment where sustainable investment and innovative solutions are critical to addressing global health challenges. This exhibition aims to showcase advancements in health technology, sustainable practices, and investment strategies that foster innovation in healthcare. By bringing together stakeholders from various sectors, we can highlight successful initiatives and inspire future collaborations.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mb-4"
                >
                    This year's ARM Exhibition is unique. It is fully digitalized, with all content displayed on screens, minimizing the use of print materials. Interactive video content is used for presentations.
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Rationale
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mb-4"
                >
                    The exhibition serves as a vital platform to showcase the achievements in innovations and sustainable investment in the health sector. By bringing together diverse stakeholders—such as healthcare professionals, policymakers, researchers, and investors—it facilitates knowledge exchange and collaboration. This collaborative environment encourages discussions on best practices and addresses the multifaceted challenges facing healthcare today.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="mb-4"
                >
                    Additionally, the exhibition aims to raise awareness about the importance of sustainable health practices and influence policy decisions. By engaging a broader audience through a digital and interactive format, the event seeks to drive interest and support for health initiatives. Ultimately, it aspires to attract investments that will enhance healthcare systems and improve health outcomes for communities across Ethiopia.
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Objectives
                </motion.h3>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="list-disc list-inside mb-4 space-y-1"
                >
                    <li><motion.strong>Showcase Innovations:</motion.strong> Present both implemented and conceptualized technologies and solutions.</li>
                    <li><motion.strong>Showcase Sustainable Financing:</motion.strong> Highlight current efforts at the national, regional, hospital, and agency levels to promote sustainable financing.</li>
                    <li><motion.strong>Facilitate Knowledge Sharing:</motion.strong> Create a platform that enables experts, innovators, and investors to share their insights and experiences.</li>
                    <li><motion.strong>Encourage Collaboration:</motion.strong> Foster partnerships between public and private sectors to drive sustainable health investments.</li>
                </motion.ul>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Exhibition Components
                </motion.h3>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="list-disc list-inside mb-4 space-y-1"
                >
                    <li><motion.strong>Interactive Displays:</motion.strong> Engaging presentations of innovative health solutions, including virtual reality experiences, video demonstrations, and infographics. The exhibition is strictly digital; no print materials or banners are allowed.</li>
                    <li><motion.strong>Quality Content:</motion.strong> Informative and engaging content providing valuable insights into innovative practices or sustainable investment. All content will be custom edited by Digital LEO.</li>
                    <li><motion.strong>Display Booth:</motion.strong> Set up according to the thematic area. Each thematic area is assigned a single booth, where exhibitors selected for that area will present. An interactive display and booth are provided by the organizers.</li>
                    <li><motion.strong>Exhibitors:</motion.strong> Organizations or individuals participating in the exhibition to showcase their products or services.</li>
                </motion.ul>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Participant Selection
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="mb-4"
                >
                    The Ministry will invite potential exhibitors who can reflect progress in sustainable investment and innovation. The organizing team has established the selection criteria, emphasizing the quality of content in accordance with standard graphic guidelines and the timely preparation of materials for the exhibition.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="mb-4"
                >
                    The exhibition focuses on reflecting best practices and achievements in the thematic areas. Thus, participants will be selected based on the content they submit, and a collaborative presentation approach involving regions, partners, agencies, and hospitals will be encouraged to effectively showcase the current status of the health sector in sustainable investment and innovation.
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Thematic Areas
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    className="mb-4"
                >
                    Along with the main theme of the Annual Review Meeting, "Driving Health Gains Through Sustainable Investments and Innovations," the exhibition is set to focus on the following sub-themes:
                </motion.p>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.9 }}
                    className="list-disc list-inside mb-4 space-y-1"
                >
                    <li>Transforming Service Delivery through Redesigning Primary Health Care (PHC)</li>
                    <li>Harnessing Innovation, Data, and Digital Transformation</li>
                    <li>Advancing Sustainable Health System Financing</li>
                    <li>Building a Resilient Health Workforce</li>
                    <li>Strengthening Emergency Preparedness and Management in Humanitarian, Disaster, and Conflict Settings</li>
                    <li>Enhancing Medical Supply and Local Production</li>
                </motion.ul>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Expected Outcomes
                </motion.h3>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.1 }}
                    className="list-disc list-inside mb-4 space-y-1"
                >
                    <li>Increased awareness of sustainable investment opportunities and innovation in health.</li>
                    <li>Enhanced collaboration among stakeholders in the health sector.</li>
                    <li>A repository of innovative practices and solutions that can be shared nationally and globally.</li>
                    <li>Identification of key areas for future investment and innovation in each thematic area.</li>
                </motion.ul>
            </section>

            <hr className="my-10 border-t border-gray-300" />

            <section id="selection-criteria-details">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                    className="text-4xl font-calibreBold mb-2"
                >
                    Exhibition Selection Criteria
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.3 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Overview
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.4 }}
                    className="mb-4"
                >
                    Each year, the ARM Exhibition is held in conjunction with the review meeting, with the primary aim of showcasing progress in the health sector related to the meeting's selected theme. Previous exhibitions have featured participants from regional bureaus, agencies, and hospitals. While these exhibitions have successfully highlighted achievements within the health sector, they have also faced challenges, such as low regional participation and unsatisfactory content presentations.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                    className="mb-4"
                >
                    To address these issues, this year the organizing team has established strict selection criteria to enhance the quality and relevance of the exhibition. By implementing these measures, we aim to elevate the overall impact of the event and ensure a more robust representation of the health sector's advancements.
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.6 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Selection Criteria 1: Organization Type
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.7 }}
                    className="mb-4"
                >
                    The following organizational types have been selected to participate in the exhibition:
                </motion.p>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.8 }}
                    className="list-disc list-inside mb-4 space-y-1"
                >
                    <li>Regional Health Bureau</li>
                    <li>Agencies</li>
                    <li>Partners and donors</li>
                    <li>Hospitals</li>
                    <li>Academic and research institutions</li>
                    <li>Startups</li>
                    <li>Private sector</li>
                </motion.ul>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 2.9 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Selection Criteria 2: Collaboration/Partnership
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.0 }}
                    className="mb-4"
                >
                    The exhibition is set up based on thematic areas. Due to the limited number of available spaces, a few exhibitors will be selected to present. Therefore, a collaborative approach among the aforementioned organizations will be greatly appreciated. We highly encourage partners and donors to collaborate with the regions, agencies, and government service providers they have been working with, in alignment with the event's theme.
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 3.1 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Selection Criteria 3: Relevance
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.2 }}
                    className="mb-4"
                >
                    The theme for the 27th ARM is "Driving Health Gains Through Sustainable Investments and Innovations." All materials and presentations prepared for the exhibition must align with this theme and the listed thematic areas, showcasing how sustainable investments and innovative solutions can enhance health outcomes. Exhibitors are encouraged to highlight their initiatives, programs, and technologies that contribute to these sustainable investments and innovations, demonstrating the tangible benefits of their efforts in driving health gains. The following should be considered:
                </motion.p>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.3 }}
                    className="list-disc list-inside mb-4 space-y-1"
                >
                    <li><motion.strong>Innovation and Uniqueness:</motion.strong> Showcases should present novel, innovative, or creative solutions to modern health sector issues. Preference will be given to innovations that have never been displayed at ARM previously.</li>
                    <li><motion.strong>Practicality and Proven Impact:</motion.strong> Solutions should demonstrate measurable outcomes, pilot experience, or strong potential for scalability and sustainability. Exhibitors must show proof of impact on health service delivery, financing, workforce, emergency preparedness, or supply systems.</li>
                    <li><motion.strong>Sustainability and Investment Potential:</motion.strong> Initiatives must prioritize cost-effectiveness, sustainability models, or local investment/scale-up potential.</li>
                    <li><motion.strong>Sharing and Learning Knowledge:</motion.strong> Exhibitors must commit to providing learning materials, demonstrations, or interactive sessions to maximize knowledge exchange.</li>
                </motion.ul>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 3.4 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Selection Criteria 4: Content Quality
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.5 }}
                    className="mb-4"
                >
                    Addressing content quality is crucial to maintaining the desired appearance of the exhibition. Therefore, a design guideline has been prepared for exhibitors to follow when creating their digital and print materials.
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 3.6 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Selection Criteria 5: Compliance and Ethical Standards
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.7 }}
                    className="mb-4"
                >
                    Exhibitions must be in harmony with national health policies and ethics, and not promote untested or unsafe technologies.
                </motion.p>
            </section>

            <hr className="my-10 border-t border-gray-300" />

            <section id="application-requirements-details">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 3.8 }}
                    className="text-4xl font-calibreBold mb-2"
                >
                    Application Requirements
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 3.9 }}
                    className="mb-4"
                >
                    Potential exhibitors are expected to submit:
                </motion.p>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 4.0 }}
                    className="list-disc list-inside mb-4 space-y-1"
                >
                    <li>Concept note: a max of 2 pages that explains the innovation, how it fits with the theme/subtheme, its impact, and scalability potential.</li>
                    <li>Brief organizational profile: (institution type, previous related activities, contact information).</li>
                    <li>Technical requirements for exhibition (exhibition booth size, power supply needs, digital display, etc.).</li>
                </motion.ul>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 4.1 }}
                    className="mb-4"
                >
                    Only applications submitted via the ARM website (https://arm.moh.gov.et) are accepted.
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 4.2 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Selection Process
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 4.3 }}
                    className="mb-4"
                >
                    Applications will be reviewed by the ARM Exhibition Committee against the above criteria. Successful exhibitors will be contacted and sent exhibition guidelines and stand allocations.
                </motion.p>
            </section>

            <hr className="my-10 border-t border-gray-300" />

            <section id="graphics-guideline-details">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 4.4 }}
                    className="text-4xl font-calibreBold mb-2"
                >
                    Standard Graphics Guideline
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 4.5 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    General Guidelines
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 4.6 }}
                    className="mb-4"
                >
                    In consideration of the general audience, the contents should be descriptive in plain language (Amharic & English) with Key Performance Indicators, pictures, charts, and numbers to make the information clear and attract the audience. You must prepare or choose videos that support the content of your exhibition. Decorations and designs should be related to the objectives and contents of the exhibition.
                </motion.p>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 4.7 }}
                    className="list-disc list-inside mb-4 space-y-1"
                >
                    <li><motion.strong>Logo:</motion.strong> High-quality logos of the Ministry, Exhibition (ARM), and organization should be used in hierarchy:</li>
                    <ul className="list-circle list-inside ml-5 mt-1 space-y-1">
                        <li>Ministry of Health logo should be on the top left corner.</li>
                        <li>Exhibition (ARM) logo should be on the top right corner.</li>
                        <li>The organization logo should be in the top center.</li>
                    </ul>
                    <li><motion.strong>Caption:</motion.strong> Should be written in Amharic & English.</li>
                    <li><motion.strong>Numbers:</motion.strong> Important milestones that represent your achievement.</li>
                    <li><motion.strong>Pictures:</motion.strong> Pictures that properly explain what you do must be high resolution (300dpi).</li>
                </motion.ul>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 4.8 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Graphic Guidelines for Video
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 4.9 }}
                    className="mb-4"
                >
                    To be effective at a large exhibition, a video or presentation on an electrical display must be designed to capture attention and communicate a message quickly and clearly in a noisy, crowded environment.
                </motion.p>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 5.0 }}
                    className="list-disc list-inside mb-4 space-y-1"
                >
                    <li>Your videos must explain your work, products, and services in a clear and simple manner.</li>
                    <li>They must highlight the unique insights into sustainable financing and innovation.</li>
                    <li>The videos must be self-explanatory and should not depend on an exhibitor to be there to explain.</li>
                    <li><motion.strong>Be Concise and Visually Driven:</motion.strong> The content should be short, ideally 1 to 3 minutes, built around strong visuals, dynamic animations, and minimal on-screen text. Avoid long narratives and too much data or information. Focus on emotional appeal and showing your product in action rather than just stating facts.</li>
                    <li>The videos must be well-produced, with clear video quality (must be high-definition, at least 1080p, MP4 and MOV are preferred).</li>
                    <li><motion.strong>File Size:</motion.strong> Individual files must not exceed 500MB.</li>
                    <li><motion.strong>Compatibility:</motion.strong> Content must run on Windows, Mac, and Android.</li>
                    <li>Participants can submit up to five videos per thematic area.</li>
                    <li><motion.strong>Sound is Secondary:</motion.strong> Assume most attendees won't be able to hear the audio due to the surrounding noise. If you do use sound, make it instrumental and subtle to avoid bothering neighbors. Captions or subtitles are a must to ensure the message is understood.</li>
                    <li>Please share your video with the organizers through the mechanism set by the team.</li>
                    <li>Delay in submission will result in the disqualification of the content.</li>
                </motion.ul>

                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 5.1 }}
                    className="text-2xl font-calibreBold mt-6 mb-2"
                >
                    Graphic Guideline for Booth Backdrop Sticker
                </motion.h3>
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 5.2 }}
                    className="list-disc list-inside mb-4 space-y-1"
                >
                    <li>Design your sticker to fit the back side of the booth.</li>
                    <li>We recommend designing your sticker using the entire booth dimension. Your specific booth place and size will be communicated by the event organizers.</li>
                    <li>All texts must be placed at least 20 cm away from all edges.</li>
                    <li>We recommend not putting any text or numbers up to 70 cm high from the bottom of the sticker to avoid being covered by display items or furniture.</li>
                    <li>Design submission in PNG, JPEG, or PDF format.</li>
                    <li>Printing should only be done after formal approval from the organizing team.</li>
                </motion.ul>
            </section>

            <a
                href="/Concept-Note.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Download Concept Note (PDF)
            </a>

            <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                src="/27tharmconcept.png"
                alt="27th ARM Exhibition Banner"
                className="w-full h-auto mt-8"
            />

            <div className="flex justify-center mt-8 relative">
                {/* Top right X button */}
                <button
                    onClick={handleCloseClick}
                    className="absolute top-0 right-0 text-gray-700 hover:text-red-500 text-2xl font-bold px-4 py-2 rounded-full focus:outline-none"
                    aria-label="Close Concept Note"
                    style={{ marginTop: '8px', marginRight: '8px' }}
                >
                    &times;
                </button>
                {/* Centered Close button */}
                <button
                    onClick={handleCloseClick}
                    className="py-3 px-6 border border-transparent shadow-sm text-lg font-semibold rounded-full text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default ConceptNote;