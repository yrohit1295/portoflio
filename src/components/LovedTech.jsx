import {
    FaDocker, FaAws, FaPython, FaPhp, FaReact, FaGitAlt
} from 'react-icons/fa';
import {
    SiFlask, SiLaravel, SiMysql, SiPostman, SiTailwindcss
} from 'react-icons/si';

function LovedTech() {
    const tools = [
        { name: 'Laravel', icon: <SiLaravel />, note: 'Fast backend scaffolding' },
        { name: 'Flask', icon: <SiFlask />, note: 'Lightweight microservices' },
        { name: 'Docker', icon: <FaDocker />, note: 'Isolated, repeatable environments' },
        { name: 'AWS Lambda', icon: <FaAws />, note: 'Scalable functions-as-a-service' },
        { name: 'MySQL', icon: <SiMysql />, note: 'Simple and reliable storage' },
        { name: 'Python', icon: <FaPython />, note: 'ETL, scripting, APIs' },
        { name: 'PHP', icon: <FaPhp />, note: 'Clean RESTful APIs' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, note: 'Beautiful UIs, quickly' },
        { name: 'React.js', icon: <FaReact />, note: 'Frontend experimentation' },
        { name: 'Git', icon: <FaGitAlt />, note: 'Version control confidence' },
        { name: 'Postman', icon: <SiPostman />, note: 'API testing powerhouse' },
    ];

    return (
        <section className="bg-white text-black py-16 px-6" id="loved-tech">
            <div className="max-w-6xl mx-auto text-center space-y-12">
                <h2 className="text-3xl font-bold">Tech I Love Working With</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-md transition"
                        >
                            <div className="text-3xl text-green-600 mb-2">{tool.icon}</div>
                            <h3 className="font-semibold">{tool.name}</h3>
                            <p className="text-sm text-gray-500">{tool.note}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LovedTech;
