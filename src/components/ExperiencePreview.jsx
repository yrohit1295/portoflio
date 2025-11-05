import { Link } from 'react-router-dom';

function ExperiencePreview() {
    return (
        <section id="experience-preview" className="bg-white text-black px-6 py-16">
            <div className="max-w-5xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Work Experience</h2>

                <div className="space-y-6 text-left text-sm md:text-base">
                    <div>
                        <strong>Senior Software Engineer</strong> @ Zenbundle
                        <span className="block text-gray-400 text-xs">Aug 2025 – Present | Dublin, Ireland</span>
                        <p>
                            Leading AI agent and full-stack development for Zenbundle’s SaaS platform. Built scalable FastAPI backends, React.js frontends, and cloud-native solutions using AWS, Docker, and Kubernetes.
                        </p>
                    </div>
                    <div>
                        <strong>Developer</strong> @ Provident CRM
                        <span className="block text-gray-400 text-xs">Jul 2022 – Nov 2024 | Dublin, Ireland</span>
                        <p>
                            Designed and maintained backend solutions for SaaS-based CRM platforms using PHP and JavaScript. Built RESTful APIs for plugin development and managed environment deployments using Docker.
                        </p>
                    </div>

                    <div>
                        <strong>Software Engineer</strong> @ LinkedIn
                        <span className="block text-gray-400 text-xs">Oct 2021 – Jun 2022 | Dublin, Ireland</span>
                        <p>
                            Developed Python-based web crawlers for the Job Ingestion Team using Scrapy. Implemented and maintained data scraping and cleansing pipelines in a Kanban Agile setup.
                        </p>
                    </div>

                    <div>
                        <strong>Senior Software Engineer</strong> @ QA InfoTech (now Qualitest)
                        <span className="block text-gray-400 text-xs">Jun 2016 – Jan 2021 | Noida, India</span>
                        <p>
                            Created and maintained APIs using Laravel and Flask. Built data extraction pipelines, integrated Google NLP and AWS Lambda/SQS for scalable ETL processes. Mentored junior developers and delivered solutions in Agile sprints.
                        </p>
                    </div>
                </div>
                <Link
                    to="/experience"
                    className="inline-block text-green-700 underline font-medium hover:text-green-900 mt-4"
                >
                    View full experience →
                </Link>
            </div>
        </section>
    );
}

export default ExperiencePreview;
