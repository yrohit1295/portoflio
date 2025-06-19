import profileImage from '@/assets/profile.png';
import BeyondTheCode from "@/components/BeyondTheCode.jsx";
import DownloadCV from "@/components/DownloadCV.jsx";

function AboutPage() {
    return (
        <>
        <section className="bg-[#0f0f0f] text-white min-h-screen px-6 py-24" id="about">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Text */}
                <div className="space-y-6 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-400">About Me</h2>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                        I’m a backend-focused software engineer based in Dundalk, Ireland, with a strong foundation in building scalable SaaS platforms, automation pipelines, and RESTful APIs using PHP, Python, and JavaScript.
                    </p>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                        With over 8 years of experience across startups and enterprise projects, I’ve contributed to high-impact products in CRM integration, job ingestion systems, and cloud-native data workflows. I work extensively with frameworks like Laravel and Flask, containerization with Docker, and AWS services including Lambda and SQS.
                    </p>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                        I’m passionate about clean code, system reliability, and mentoring fellow engineers. I strongly believe in writing maintainable, testable software and upholding best practices across development teams.
                    </p>

                    <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                        Academically, I hold a Master’s degree in Data Analytics from the National College of Ireland. Outside of work, I enjoy exploring the Irish coastline, learning new tools, and growing as a developer.
                    </p>

                    <DownloadCV />
                </div>

                {/* Right Side: Image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={profileImage}
                        alt="Rohit Yadav"
                        className="w-64 h-64 rounded-full border-4 border-green-400 shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>
            <BeyondTheCode />
        </>
    );
}

export default AboutPage;
