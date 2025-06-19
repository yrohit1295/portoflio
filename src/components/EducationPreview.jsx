import { Link } from 'react-router-dom';

function EducationPreview() {
    return (
        <section className="bg-[#0f0f0f] text-white px-6 py-16" id="education-preview">
            <div className="max-w-5xl mx-auto space-y-10 text-center">
                <h2 className="text-3xl font-bold">Education</h2>

                {/* Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {/* MSc */}
                    <div className="border border-gray-800 rounded-lg p-6 bg-[#1a1a1a] shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">
                            M.Sc. in Data Analytics
                        </h3>
                        <p className="text-sm text-gray-400 mb-1">
                            <strong>Jan 2020 – Jan 2022</strong> | National College of Ireland, Dublin
                        </p>
                        <p className="text-sm text-gray-300">
                            Specialized in data science, statistics, and machine learning. Delivered big data projects using Hadoop, MapReduce, and Python. Built distributed ETL pipelines and recommendation systems.
                        </p>
                    </div>

                    {/* B.Tech */}
                    <div className="border border-gray-800 rounded-lg p-6 bg-[#1a1a1a] shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">
                            B.Tech in Computer Science and Engineering
                        </h3>
                        <p className="text-sm text-gray-400 mb-1">
                            <strong>2012 – 2016</strong> | Amity University Madhya Pradesh
                        </p>
                        <p className="text-sm text-gray-300">
                            Studied programming, algorithms, databases, and systems. Completed internships and academic projects in backend development. Graduated with a strong technical foundation.
                        </p>
                    </div>
                </div>

                <Link
                    to="/education"
                    className="inline-block text-green-400 underline font-medium hover:text-green-300 mt-4"
                >
                    View full education →
                </Link>
            </div>
        </section>
    );
}

export default EducationPreview;
