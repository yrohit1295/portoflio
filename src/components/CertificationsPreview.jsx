import { Link } from 'react-router-dom';

function CertificationsPreview() {
    return (
        <section className="bg-[#0f0f0f] text-white px-6 py-16" id="certifications-preview">
            <div className="max-w-5xl mx-auto space-y-10 text-center">
                <h2 className="text-3xl font-bold">Certifications</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {/* Python Certification */}
                    <div className="border border-gray-800 rounded-lg p-6 bg-[#1a1a1a] shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">
                            Programming with Python Professional Certificate
                        </h3>
                        <p className="text-sm text-gray-400 mb-1">
                            Issued by OpenEDG Python Institute | <span className="italic">2025</span>
                        </p>
                        <p className="text-sm text-gray-300">
                            Gained hands-on experience in Python programming, covering data structures, functions, OOP, and error handling with industry-recognized credentialing.
                        </p>
                    </div>

                    {/* Docker Certification */}
                    <div className="border border-gray-800 rounded-lg p-6 bg-[#1a1a1a] shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-green-400 mb-2">
                            Docker Foundations Professional Certificate
                        </h3>
                        <p className="text-sm text-gray-400 mb-1">
                            Issued in <span className="italic">2025</span>
                        </p>
                        <p className="text-sm text-gray-300">
                            Learned the core concepts of containerization using Docker, including image creation, container orchestration, and deployment best practices.
                        </p>
                    </div>
                </div>

                <Link
                    to="/certifications"
                    className="inline-block text-green-400 underline font-medium hover:text-green-300 mt-4"
                >
                    View all certifications →
                </Link>
            </div>
        </section>
    );
}

export default CertificationsPreview;
