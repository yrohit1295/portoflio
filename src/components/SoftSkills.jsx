import { FaRegLightbulb, FaUsers, FaCodeBranch, FaBookOpen, FaRegCheckCircle, FaChalkboardTeacher } from 'react-icons/fa';

function SoftSkills() {
    const traits = [
        {
            icon: <FaRegLightbulb />,
            title: 'Problem Solver',
            description: 'I enjoy breaking complex problems into elegant, maintainable solutions.',
        },
        {
            icon: <FaUsers />,
            title: 'Collaborative',
            description: 'Thrive in Agile teams, cross-functional discussions, and technical reviews.',
        },
        {
            icon: <FaCodeBranch />,
            title: 'Version Control Expert',
            description: 'Use Git and branching workflows daily across multi-developer environments.',
        },
        {
            icon: <FaBookOpen />,
            title: 'Document & Deliver',
            description: 'Strong advocate of API docs, clean commit messages, and reusable code.',
        },
        {
            icon: <FaChalkboardTeacher />,
            title: 'Mentor & Knowledge Sharer',
            description: 'Support juniors and foster code quality through mentoring and peer reviews.',
        },
        {
            icon: <FaRegCheckCircle />,
            title: 'Clean Code Mindset',
            description: 'Passionate about writing readable, testable, and scalable code.',
        },
    ];

    return (
        <section className="bg-white text-black py-16 px-6" id="soft-skills">
            <div className="max-w-6xl mx-auto space-y-12">
                <h2 className="text-3xl font-bold text-center">How I Work</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {traits.map((trait, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
                        >
                            <div className="text-green-600 text-3xl mb-4">{trait.icon}</div>
                            <h3 className="font-semibold text-lg mb-2">{trait.title}</h3>
                            <p className="text-sm text-gray-600">{trait.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SoftSkills;
