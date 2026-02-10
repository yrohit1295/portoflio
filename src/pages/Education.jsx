import {education} from '@/data/educationData.js'
import {FaCalendarAlt} from "react-icons/fa";

function Education() {

    return (
        <>
            {/* Dark Timeline Section */}
            <section className="bg-[#0f0f0f] text-white py-20 px-4 sm:px-6 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-green-400">Education</h2>
                    <p className="text-center text-sm text-gray-400 max-w-2xl mx-auto mb-16">
                        My academic background combines data science, programming, and system design — equipping me with the analytical and technical foundation to thrive in real-world software development.
                    </p>

                    <div className="relative">
                        {/* Center vertical pipe - desktop only */}
                        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-green-600 h-full z-0"></div>

                        {/* Mobile: left border line */}
                        <div className="md:hidden absolute top-0 left-4 w-0.5 bg-green-600 h-full z-0"></div>

                        <div className="flex flex-col gap-y-10 md:gap-y-20 relative z-10">
                            {education.map((edu, index) => {
                                const isLeft = index % 2 === 0;

                                const card = (
                                    <div className="bg-[#1b1b1b] border border-green-700 p-4 sm:p-6 rounded-xl shadow-md hover:scale-[1.02] md:hover:scale-105 transition-all text-left">
                                        <h3 className="text-lg sm:text-xl font-semibold text-white">{edu.degree}</h3>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline flex-wrap mb-1 gap-0.5">
                                            <p className="text-sm font-medium text-green-400">{edu.institute}</p>
                                            <p className="text-sm text-gray-400 italic">{edu.place}</p>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-400 mb-3 gap-1">
                                            <FaCalendarAlt className="text-green-300 shrink-0" />
                                            <span>{edu.period}</span>
                                        </div>
                                        <p className="text-sm text-gray-300 leading-relaxed">{edu.description}</p>
                                    </div>
                                );

                                const date = (
                                    <div className="hidden md:flex items-center text-sm text-gray-400">
                                        <FaCalendarAlt className="mr-2 text-green-300" />
                                        <span>{edu.period}</span>
                                    </div>
                                );

                                return (
                                    <div
                                        key={index}
                                        className="flex flex-row w-full items-center justify-between"
                                    >
                                        {/* Mobile layout: dot + card */}
                                        <div className="md:hidden flex items-start gap-4 w-full">
                                            <div className="relative flex-shrink-0 mt-6">
                                                <div className="w-4 h-4 bg-green-400 border-[3px] border-[#0f0f0f] rounded-full shadow-md relative left-[5px]"></div>
                                            </div>
                                            <div className="flex-1 min-w-0">{card}</div>
                                        </div>

                                        {/* Desktop layout: alternating timeline */}
                                        {isLeft ? (
                                            <>
                                                <div className="hidden md:block md:w-5/12 pr-4 text-right">{card}</div>
                                                <div className="hidden md:flex flex-col items-center">
                                                    <div className="w-5 h-5 bg-green-400 border-4 border-[#0f0f0f] rounded-full shadow-md"></div>
                                                </div>
                                                <div className="hidden md:block md:w-5/12 pl-4 text-left">{date}</div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="hidden md:flex md:w-5/12 pr-4 text-right justify-end">{date}</div>
                                                <div className="hidden md:flex flex-col items-center">
                                                    <div className="w-5 h-5 bg-green-400 border-4 border-[#0f0f0f] rounded-full shadow-md"></div>
                                                </div>
                                                <div className="hidden md:block md:w-5/12 pl-4 text-left">{card}</div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Light Background Summary Section */}
            <section className="bg-white text-black py-12 sm:py-16 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold">Academic Foundations & Growth</h3>
                    <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
                        My academic background has laid a solid foundation for data-driven software development and
                        analytical thinking. From structured engineering at Amity to advanced analytics at NCI, I've built
                        the skills needed to solve real-world problems using modern technologies.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Education;
