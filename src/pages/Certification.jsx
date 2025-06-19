function Certifications() {
    const certifications = [
        {
            title: 'Docker Foundations Professional Certificate',
            org: 'Docker, Inc',
            issued: 'Mar 2025',
            expires: '',
            skills: ['Containerization', 'Docker Products'],
        },
        {
            title: 'Programming with Python Professional Certificate',
            org: 'OpenEDG Python Institute',
            issued: 'Mar 2025',
            expires: '',
            skills: ['Python', 'Object-Oriented Programming (OOP)'],
        },
        {
            title: 'Certified Sugar Developer Specialist',
            org: 'SugarCRM',
            issued: 'Feb 2023',
            expires: 'Feb 2025',
            skills: ['SugarCRM', 'PHP', 'Restful APIs'],
        },
        {
            title: 'Certified Sugar Administration Specialist',
            org: 'SugarCRM',
            issued: 'Aug 2023',
            expires: 'Aug 2025',
            skills: ['SugarCRM Administrator'],
        },
        {
            title: 'Excel for Data Analysis and Visualization',
            org: 'edX',
            issued: 'Nov 2015',
            credentialId: '8a0c2293a7d9471fb9ca1edd0e117cbb',
            skills: ['Python', 'Data Analysis', 'Data Visualization'],
        },
        {
            title: 'Querying with Transact-SQL',
            org: 'edX',
            issued: 'May 2015',
            credentialId: '10b9a812366749cfb3925b5475a19658',
            skills: ['SQL']
        },
        {
            title: 'Programming in Scratch',
            org: 'edX',
            issued: 'Apr 2015',
            credentialId: '147892267ede4d28be04812522a382b4',
        },
        {
            title: 'Introduction to CS & Python',
            org: 'edX',
            issued: 'Mar 2015',
            credentialId: '35d6ed50f04f4178abfa1bf8fad0c7e8',
        },
        {
            title: 'Principles of Written English',
            org: 'edX',
            issued: 'Dec 2013',
            credentialId: 'c435cb0217404e2ca54dc7519cdae09b',
        },,
        {
            title: 'Google Analytics for Beginners',
            org: 'Google Analytics',
            issued: 'May 2021',
            expires: 'May 2024',
        },
    ];

    return (
        <>
            {/* Dark section */}
            <section className="bg-[#0f0f0f] text-white py-20 px-6 min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-green-400">Certifications</h2>
                    <p className="text-center text-sm text-gray-400 max-w-2xl mx-auto mb-16">
                        Below are the certifications I’ve earned over the years — covering cloud tools, programming,
                        data analysis, and software platforms — each contributing to my continuous learning and
                        professional growth.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="relative bg-gradient-to-br from-[#1c1c1c] to-[#111] p-6 rounded-xl border border-green-700 shadow-xl hover:shadow-2xl transition duration-300"
                            >
                                <div className="mb-3">
                                    <h3 className="text-lg font-semibold text-green-400 leading-snug">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">{cert.org}</p>
                                </div>

                                <p className="text-xs text-gray-500 mb-2">
                                    Issued: {cert.issued}
                                    {cert.expires && <> &nbsp;|&nbsp; Expires: {cert.expires}</>}
                                </p>

                                {cert.credentialId && (
                                    <p className="text-[10px] text-gray-600 italic">
                                        Credential ID: {cert.credentialId}
                                    </p>
                                )}

                                {cert.skills && cert.skills.length > 0 && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {cert.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-green-800 text-white px-2 py-1 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Light section */}
            <section className="bg-white text-black py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h3 className="text-2xl font-bold">Lifelong Learning</h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        I’ve earned certifications across data analytics, programming, cloud tools, and productivity
                        software. These have helped sharpen my technical skills and reflect my commitment to ongoing
                        learning and professional development.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Certifications;
