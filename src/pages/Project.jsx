import { FaCalendarAlt, FaGithub } from 'react-icons/fa';
import {projects} from '@/data/projectData.js'

function Projects() {

    return (
        <>
            <section className="bg-[#0f0f0f] text-white py-20 px-4 sm:px-6 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-green-400 tracking-tight">
                        Projects
                    </h2>
                    <p className="text-center text-sm text-gray-400 max-w-2xl mx-auto mb-16">
                        These projects showcase hands-on applications of data engineering, system automation, and cloud-based design — built during my academic and professional journey.
                    </p>

                    <div className="relative">
                        {/* Timeline pipe - desktop only */}
                        <div className="hidden md:block absolute top-0 left-[calc(50%-1px)] w-0.5 bg-green-600 h-full z-0" />

                        {/* Mobile: left border line */}
                        <div className="md:hidden absolute top-0 left-4 w-0.5 bg-green-600 h-full z-0"></div>

                        <div className="flex flex-col gap-y-10 md:gap-y-20 relative z-10">
                            {projects.map((proj, index) => {
                                const isLeft = index % 2 === 0;

                                const card = (
                                    <div className="bg-[#1b1b1b] border border-green-700 p-4 sm:p-6 rounded-xl shadow-md hover:scale-[1.02] md:hover:scale-105 transition-all text-left">
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1">
                                            <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                                                {proj.title}
                                            </h3>
                                            <a
                                                href={proj.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-green-400 text-sm flex items-center gap-1 hover:underline whitespace-nowrap"
                                            >
                                                <FaGithub /> View Code
                                            </a>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between flex-wrap text-sm mb-1 gap-0.5">
                                            <span className="text-green-400 font-medium">{proj.institute}</span>
                                            <span className="italic text-gray-400">{proj.place}</span>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-400 mb-3 gap-1">
                                            <FaCalendarAlt className="text-green-300 shrink-0" />
                                            <span>{proj.period}</span>
                                        </div>
                                        <p className="text-sm text-gray-300 leading-relaxed mb-3">{proj.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {proj.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs bg-green-800 text-white px-2 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );

                                const date = (
                                    <div className="hidden md:flex items-center text-sm text-gray-400">
                                        <FaCalendarAlt className="mr-2 text-green-300" />
                                        <span>{proj.period}</span>
                                    </div>
                                );

                                return (
                                    <div key={index} className="flex flex-row w-full items-center justify-between">
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

            {/* Light Background Summary */}
            <section className="bg-white text-black py-12 sm:py-16 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold">Project Learnings & Impact</h3>
                    <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
                        These academic projects helped me apply theoretical knowledge to practical problems using Python,
                        MapReduce, and big data frameworks like Hadoop. From working with streaming data to building scalable
                        recommender systems, I gained hands-on experience in data engineering workflows, distributed computing,
                        and performance optimization under real-world constraints.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Projects;
