import { Typewriter } from 'react-simple-typewriter';
import profileImage from "@/assets/profile.png";

function HomeSection() {
    return (
        <section className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-6 py-20 text-center">

            {/* Profile Image */}
            <img
                src={profileImage}
                alt="Rohit Yadav"
                className="w-36 h-36 rounded-full border-4 border-gray-300 shadow-md mb-6"
            />

            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                Hi, I'm Rohit Yadav 👋
            </h1>

            {/* Typewriter Subtitle */}
            <p className="text-green-400 text-lg md:text-xl font-semibold mb-6">
                <Typewriter
                    words={[
                        'Senior Software Engineer 👨‍💻',
                        'Backend Developer (PHP & Python)',
                        'ETL & SaaS Platform Builder',
                        'Mentor & Clean Code Champion',
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1500}
                />
            </p>

            {/* Description */}
            <p className="max-w-xl text-gray-400 mb-6 text-sm md:text-base">
                Backend-focused engineer building AI agents, secure APIs and automation pipelines for scalable cloud apps. Based in Dundalk, Ireland.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4">
                <a
                    href="#contact-preview"
                    className="bg-green-400 text-black px-6 py-2 rounded-full font-medium hover:bg-green-300 transition"
                >
                    Hire Me
                </a>
                <a
                    href="#about-preview"
                    className="border border-green-400 text-green-400 px-6 py-2 rounded-full font-medium hover:bg-green-400 hover:text-black transition"
                >
                    About Me
                </a>
            </div>
        </section>
    );
}

export default HomeSection;
