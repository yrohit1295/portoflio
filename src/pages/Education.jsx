import {FaCalendarAlt} from "react-icons/fa";

function Education() {
    const education = [
        {
            degree: 'M.Sc. in Data Analytics',
            institute: 'National College of Ireland',
            place: 'Dublin, Ireland',
            period: 'Jan 2021 – Jan 2022',
            description:
                'Gained strong analytical and programming skills in data analysis, machine learning, and visualization. Focused on practical applications and real-world problem-solving in a data-driven environment.',
        },
        {
            degree: 'B.Tech in Computer Science & Engineering',
            institute: 'Amity University',
            place: 'Gwalior, India',
            period: 'Jun 2012 – Jun 2016',
            description:
                'Studied foundational and advanced topics in computer science including algorithms, databases, web technologies, and software engineering. Built a strong base in backend development and system design.',
        },
    ];

    return (
        <>
            {/* Dark Timeline Section */}
            <section className="bg-[#0f0f0f] text-white py-20 px-6 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-green-400">Education</h2>
                    <p className="text-center text-sm text-gray-400 max-w-2xl mx-auto mb-16">
                        My academic background combines data science, programming, and system design — equipping me with the analytical and technical foundation to thrive in real-world software development.
                    </p>


                    <div className="relative">
                        {/* Center vertical pipe */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-green-600 h-full z-0"></div>

                        <div className="flex flex-col gap-y-20 relative z-10">
                            {education.map((edu, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col md:flex-row w-full items-center justify-between"
                                    >
                                        {/* Left-aligned card */}
                                        {isLeft ? (
                                            <>
                                                <div className="md:w-5/12 pr-4 text-right">
                                                    <div className="bg-[#1b1b1b] border border-green-700 p-6 rounded-xl shadow-md hover:scale-105 transition-all text-justify">
                                                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                                                        <div className="flex justify-between items-baseline flex-wrap mb-2">
                                                            <p className="text-sm font-medium text-green-400">{edu.institute}</p>
                                                            <p className="text-sm text-gray-400 italic">{edu.place}</p>
                                                        </div>
                                                        <p className="text-sm text-gray-300 leading-relaxed">{edu.description}</p>
                                                    </div>
                                                </div>

                                                {/* Dot */}
                                                <div className="hidden md:flex flex-col items-center">
                                                    <div className="w-5 h-5 bg-green-400 border-4 border-[#0f0f0f] rounded-full shadow-md"></div>
                                                </div>

                                                {/* Period */}
                                                <div className="md:w-5/12 pl-4 text-left text-sm text-gray-400 flex items-start">
                                                    <div className="flex items-center">
                                                        <FaCalendarAlt className="mr-2 text-green-300" />
                                                        <span>{edu.period}</span>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                {/* Period */}
                                                <div className="md:w-5/12 pr-4 text-right text-sm text-gray-400 flex items-start justify-end">
                                                    <div className="flex items-center">
                                                        <FaCalendarAlt className="mr-2 text-green-300" />
                                                        <span>{edu.period}</span>
                                                    </div>
                                                </div>

                                                {/* Dot */}
                                                <div className="hidden md:flex flex-col items-center">
                                                    <div className="w-5 h-5 bg-green-400 border-4 border-[#0f0f0f] rounded-full shadow-md"></div>
                                                </div>

                                                {/* Right-aligned card */}
                                                <div className="md:w-5/12 pl-4 text-left">
                                                    <div className="bg-[#1b1b1b] border border-green-700 p-6 rounded-xl shadow-md hover:scale-105 transition-all text-justify">
                                                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                                                        <div className="flex justify-between items-baseline flex-wrap mb-2">
                                                            <p className="text-sm font-medium text-green-400">{edu.institute}</p>
                                                            <p className="text-sm text-gray-400 italic">{edu.place}</p>
                                                        </div>
                                                        <p className="text-sm text-gray-300 leading-relaxed">{edu.description}</p>
                                                    </div>
                                                </div>
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
            <section className="bg-white text-black py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h3 className="text-2xl font-bold">Academic Foundations & Growth</h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        My academic background has laid a solid foundation for data-driven software development and
                        analytical thinking. From structured engineering at Amity to advanced analytics at NCI, I’ve built
                        the skills needed to solve real-world problems using modern technologies.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Education;
