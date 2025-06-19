import { experiences } from '@/data/experiencedata.js';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Experience() {
    return (
        <>
            <section className="bg-[#0f0f0f] text-white py-20 px-6 min-h-screen">
                <div className="max-w-6xl mx-auto text-center space-y-10">
                    <h2 className="text-4xl font-bold text-center mb-4 text-green-400">Experience</h2>
                    <p className="text-center text-sm text-gray-400 max-w-2xl mx-auto mb-16">
                        Over the past 8 years, I’ve worked across startups and enterprise teams delivering scalable systems and data-driven solutions in diverse environments.
                    </p>

                    <div className="relative">
                        {/* Center vertical pipe */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-green-600 h-full z-0"></div>

                        <div className="flex flex-col gap-y-20 relative z-10">
                            {experiences.map((exp, index) => {
                                const isLeft = index % 2 === 0;

                                const card = (
                                    <div className="bg-[#1b1b1b] border border-green-700 p-6 rounded-xl shadow-md hover:scale-105 transition-all text-justify">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                                            <p className="text-green-400 text-sm font-medium">{exp.company}</p>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-400 mb-2 gap-1">
                                            <FaMapMarkerAlt className="text-green-400" />
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-sm text-gray-300 mb-4">{exp.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {exp.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-green-800 text-white text-xs px-2 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );

                                const date = (
                                    <div className="flex items-center text-sm text-gray-400">
                                        <FaCalendarAlt className="mr-2 text-green-300" />
                                        <span>{exp.period}</span>
                                    </div>
                                );

                                return (
                                    <div key={index} className="flex flex-col md:flex-row w-full items-center justify-between">
                                        {isLeft ? (
                                            <>
                                                <div className="md:w-5/12 pr-4 text-right">{card}</div>
                                                <div className="hidden md:flex flex-col items-center">
                                                    <div className="w-5 h-5 bg-green-400 border-4 border-[#0f0f0f] rounded-full shadow-md"></div>
                                                </div>
                                                <div className="md:w-5/12 pl-4 text-left">{date}</div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="md:w-5/12 pr-4 text-right flex justify-end">{date}</div>
                                                <div className="hidden md:flex flex-col items-center">
                                                    <div className="w-5 h-5 bg-green-400 border-4 border-[#0f0f0f] rounded-full shadow-md"></div>
                                                </div>
                                                <div className="md:w-5/12 pl-4 text-left">{card}</div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Light Summary Section */}
            <section className="bg-white text-black py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h3 className="text-2xl font-bold">Teamwork & Impact</h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Across all roles, I’ve consistently focused on delivering high-quality,
                        maintainable solutions under tight deadlines. From mentoring junior
                        developers to streamlining deployment processes and engaging in Agile
                        collaboration, my aim has always been to create meaningful, resilient software.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Experience;
