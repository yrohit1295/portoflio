import { Link } from 'react-router-dom';

function ProjectsPreview() {
    return (
        <section className="bg-white text-black px-6 py-16" id="projects-preview">
            <div className="max-w-5xl mx-auto space-y-10 text-center">
                <h2 className="text-3xl font-bold">Projects</h2>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {/* Project 1 */}
                    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">
                            <a
                                href="https://github.com/yrohit1295/recommendationSystem"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-700 hover:underline"
                            >
                                Grocery Item Recommendation System
                            </a>
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                            <strong>Jul 2021 – Aug 2021</strong> | National College of Ireland
                        </p>
                        <p className="text-sm text-gray-700">
                            Built a recommendation system using Market Basket Analysis and Apriori algorithm on grocery datasets.
                            Integrated Hadoop HDFS and MapReduce (MRJob) to improve scalability and execution speed through data cleaning
                            and distributed processing.
                        </p>
                    </div>

                    {/* Project 2 */}
                    <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-semibold mb-2">
                            <a
                                href="https://github.com/yrohit1295/diaproject"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-700 hover:underline"
                            >
                                Streaming Content Analysis Using MapReduce
                            </a>
                        </h3>
                        <p className="text-sm text-gray-600 mb-1">
                            <strong>May 2021</strong> | National College of Ireland
                        </p>
                        <p className="text-sm text-gray-700">
                            Applied MapReduce on OTT streaming data to extract insights including content ratings, exclusive platforms,
                            and platform-wise content count. Implemented using Python and MRJob for distributed computing.
                        </p>
                    </div>
                </div>

                {/* Link to full projects */}
                <Link
                    to="/projects"
                    className="inline-block text-green-700 underline font-medium hover:text-green-900 mt-4"
                >
                    View all projects →
                </Link>
            </div>
        </section>
    );
}

export default ProjectsPreview;
