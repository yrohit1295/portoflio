import { FaCalendarAlt, FaGithub } from 'react-icons/fa';
import {projects} from '@/data/projectData.js'

function Projects() {

    return (
        <>
            <section className="bg-[#0f0f0f] text-white py-20 px-6 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-green-400 tracking-tight">
                        Projects
                    </h2>
                    <p className="text-center text-sm text-gray-400 max-w-2xl mx-auto mb-16">
                        These projects showcase hands-on applications of data engineering, system automation, and cloud-based design — built during my academic and professional journey.
                    </p>

                    <div className="relative">
                        {/* Timeline pipe */}
                        <div className="absolute top-0 left-[calc(50%-1px)] w-0.5 bg-green-600 h-full z-0" />

                        <div className="flex flex-col gap-y-20 relative z-10">
                            {projects.map((proj, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <div key={index} className="flex flex-col md:flex-row w-full items-center justify-between gap-4">
                                        {/* Mobile layout */}
                                        <div className="flex md:hidden flex-col items-center w-full text-center">
                                            {/* Dot */}
                                            <div className="w-4 h-4 bg-green-400 border-4 border-[#0f0f0f] rounded-full shadow-md z-10 mb-4"></div>

                                            {/* Card */}
                                            <div className="w-full bg-[#1b1b1b] border border-green-700 p-6 rounded-xl shadow-md text-justify">
                                                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                                                    <div className="text-left">
                                                        <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                                                            {proj.title}
                                                        </h3>
                                                    </div>
                                                    <a
                                                        href={proj.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-green-400 text-sm flex items-center gap-1 hover:underline whitespace-nowrap"
                                                    >
                                                        <FaGithub /> View Code
                                                    </a>
                                                </div>
                                                <div className="flex justify-between flex-wrap text-sm mb-2">
                                                    <span className="text-green-400 font-medium">{proj.institute}</span>
                                                    <span className="italic text-gray-400">{proj.place}</span>
                                                </div>
                                                <p className="text-sm text-gray-300 leading-relaxed mb-2">{proj.description}</p>
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

                                            {/* Date aligned right below dot */}
                                            <div className="mt-2 grid grid-cols-[10rem_auto] gap-2 items-center text-sm text-gray-400">
                                                <div></div> {/* spacer aligns with dot above */}
                                                <div className="flex items-center">
                                                    <FaCalendarAlt className="mr-2 text-green-300" />
                                                    <span>{proj.period}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Desktop layout */}
                                        <div className="hidden md:flex w-full items-center justify-between">
                                            {isLeft ? (
                                                <>
                                                    {/* Left card */}
                                                    <div className="md:w-5/12 pr-4 text-right">
                                                        <div className="bg-[#1b1b1b] border border-green-700 p-6 rounded-xl shadow-md hover:scale-105 transition-all text-justify">
                                                            <div className="flex justify-between items-center mb-2">
                                                                <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
                                                                <a
                                                                    href={proj.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-green-400 text-sm flex items-center gap-1 hover:underline"
                                                                >
                                                                    <FaGithub /> View Code
                                                                </a>
                                                            </div>
                                                            <div className="flex justify-between flex-wrap text-sm mb-2">
                                                                <span className="text-green-400 font-medium">{proj.institute}</span>
                                                                <span className="italic text-gray-400">{proj.place}</span>
                                                            </div>
                                                            <p className="text-sm text-gray-300 leading-relaxed mb-2">{proj.description}</p>
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
                                                    </div>

                                                    {/* Dot */}
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-5 h-5 bg-green-400 border-4 border-[#0f0f0f] rounded-full shadow-md"></div>
                                                    </div>

                                                    {/* Date */}
                                                    <div className="md:w-5/12 pl-4 text-left text-sm text-gray-400 flex items-start">
                                                        <div className="flex items-center">
                                                            <FaCalendarAlt className="mr-2 text-green-300" />
                                                            <span>{proj.period}</span>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    {/* Date */}
                                                    <div className="md:w-5/12 pr-4 text-right text-sm text-gray-400 flex items-start justify-end">
                                                        <div className="flex items-center">
                                                            <FaCalendarAlt className="mr-2 text-green-300" />
                                                            <span>{proj.period}</span>
                                                        </div>
                                                    </div>

                                                    {/* Dot */}
                                                    <div className="flex flex-col items-center">
                                                        <div className="w-5 h-5 bg-green-400 border-4 border-[#0f0f0f] rounded-full shadow-md"></div>
                                                    </div>

                                                    {/* Right card */}
                                                    <div className="md:w-5/12 pl-4 text-left">
                                                        <div className="bg-[#1b1b1b] border border-green-700 p-6 rounded-xl shadow-md hover:scale-105 transition-all text-justify">
                                                            <div className="flex justify-between items-center mb-2">
                                                                <h3 className="text-lg font-semibold text-white">{proj.title}</h3>
                                                                <a
                                                                    href={proj.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-green-400 text-sm flex items-center gap-1 hover:underline"
                                                                >
                                                                    <FaGithub /> View Code
                                                                </a>
                                                            </div>
                                                            <div className="flex justify-between flex-wrap text-sm mb-2">
                                                                <span className="text-green-400 font-medium">{proj.institute}</span>
                                                                <span className="italic text-gray-400">{proj.place}</span>
                                                            </div>
                                                            <p className="text-sm text-gray-300 leading-relaxed mb-2">{proj.description}</p>
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
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Light Background Summary */}
            <section className="bg-white text-black py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h3 className="text-2xl font-bold">Project Learnings & Impact</h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">
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
