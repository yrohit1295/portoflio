import { Link } from 'react-router-dom';

function SkillsPreview() {
    return (
        <section id="skills-preview" className="bg-[#0f0f0f] text-white px-6 py-16">
            <div className="max-w-5xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Tech Stack</h2>
                <p className="text-md text-gray-300">
                    I specialize in backend-focused full-stack development, REST APIs, and cloud-native architecture.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                    {['PHP', 'Laravel', 'Python', 'Flask', 'MySQL', 'Docker', 'AWS', 'ETL'].map(skill => (
                        <span key={skill} className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                {skill}
              </span>
                    ))}
                </div>
                <Link
                    to="/skills"
                    className="inline-block text-green-400 underline font-medium hover:text-green-300 mt-4"
                >
                    View all skills →
                </Link>
            </div>
        </section>
    );
}

export default SkillsPreview;
