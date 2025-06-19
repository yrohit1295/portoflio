import {
    FaPython,
    FaPhp,
    FaJs,
    FaReact,
    FaDocker,
    FaAws,
    FaGit,
    FaLinux
} from 'react-icons/fa';
import {
    SiMysql,
    SiLaravel,
    SiFlask,
    SiHtml5,
    SiCss3,
    SiJquery,
    SiPostman,
    SiJira,
    SiGoogleanalytics
} from 'react-icons/si';
import SoftSkills from "@/components/SoftSkills.jsx";

function Skills() {
    const skills = [
        {name: 'Python', icon: <FaPython/>, note: 'ETL, scripting, APIs'},
        {name: 'PHP', icon: <FaPhp/>, note: 'Clean RESTful APIs'},
        {name: 'JavaScript', icon: <FaJs/>, note: 'Frontend dynamics & scripting'},
        {name: 'React.js', icon: <FaReact/>, note: 'Frontend experimentation'},
        {name: 'Laravel', icon: <SiLaravel/>, note: 'Fast backend scaffolding'},
        {name: 'Flask', icon: <SiFlask/>, note: 'Lightweight microservices'},
        {name: 'HTML5', icon: <SiHtml5/>, note: 'Semantic structure'},
        {name: 'CSS3', icon: <SiCss3/>, note: 'Responsive design styling'},
        {name: 'MySQL', icon: <SiMysql/>, note: 'Reliable relational database'},
        {name: 'AWS (Lambda, SQS)', icon: <FaAws/>, note: 'Serverless functions & queues'},
        {name: 'Docker', icon: <FaDocker/>, note: 'Isolated, repeatable environments'},
        {name: 'Git', icon: <FaGit/>, note: 'Version control confidence'},
        {name: 'Linux (Ubuntu)', icon: <FaLinux/>, note: 'Command-line efficiency'},
        {name: 'Postman', icon: <SiPostman/>, note: 'API testing powerhouse'},
        {name: 'Jira', icon: <SiJira/>, note: 'Agile project tracking'},
        {name: 'jQuery', icon: <SiJquery/>, note: 'DOM manipulation legacy'},
        {name: 'Google Analytics', icon: <SiGoogleanalytics/>, note: 'Web traffic insights'},
        {name: 'Google NLP', icon: <span className="text-lg">🔍</span>, note: 'Language processing API'}
    ];

    return (
        <>
            <section className="bg-[#0f0f0f] text-white py-16 px-6 min-h-screen">
                <div className="max-w-6xl mx-auto text-center space-y-10">
                    <h2 className="text-4xl font-bold text-green-400">Skills</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-sm">
                        Here are the technologies and tools I have hands-on experience with, spanning backend
                        development, cloud services, DevOps, and full-stack workflows.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-6">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="bg-[#1a1a1a] hover:bg-green-400 hover:text-black transition p-4 rounded-lg flex flex-col items-center justify-center text-center"
                            >
                                <div className="text-3xl mb-2">{skill.icon}</div>
                                <div className="text-sm font-semibold">{skill.name}</div>
                                <div className="text-xs text-gray-400 mt-1">
                                    {skill.note}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SoftSkills/>
        </>
    );
}

export default Skills;
