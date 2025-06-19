import HomeSection from "@/components/HomeSection.jsx";
import AboutPreview from "@/components/AboutPreview.jsx";
import ExperiencePreview from "@/components/ExperiencePreview.jsx";
import SkillsPreview from "@/components/SkillsPreview.jsx";
import ProjectsPreview from "@/components/ProjectsPreview.jsx";
import EducationPreview from "@/components/EducationPreview.jsx";
import CertificationsPreview from "@/components/CertificationsPreview.jsx";
import ContactPreview from "@/components/ContactPreview.jsx";

function Home() {
    return (
        <>
            <HomeSection />
            <AboutPreview />
            <SkillsPreview />
            <ExperiencePreview />
            <EducationPreview />
            <ProjectsPreview />
            <CertificationsPreview />
            <ContactPreview />
        </>
    );
}

export default Home;

// {/* Hero Section */}
// <section className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-6 md:px-20 text-center space-y-8">
//     {/* Profile Image */}
//     <motion.img
//         src={profileImage}
//         alt="Rohit Yadav"
//         className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-lg"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//     />
//
//     {/* Name + Typewriter */}
//     <motion.h1
//         className="text-4xl md:text-5xl font-bold"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.2 }}
//     >
//         Hi, I'm Rohit Yadav 👋
//     </motion.h1>
//
//     <motion.p
//         className="text-lg md:text-xl text-gray-400"
//         initial={{ y: 10, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 0.4 }}
//     >
//         <Typewriter
//             words={[
//                 'Full Stack Software Engineer 👨‍💻',
//                 'Backend Developer (PHP, Python)',
//                 'ETL & SaaS Platform Builder',
//                 'Mentor & Code Quality Advocate',
//             ]}
//             loop
//             cursor
//             cursorStyle="|"
//             typeSpeed={60}
//             deleteSpeed={40}
//             delaySpeed={1500}
//         />
//     </motion.p>
//
//     {/* Buttons */}
//     <div className="flex justify-center gap-4 pt-4">
//         <a
//             href="#contact"
//             className="bg-green-400 text-black px-6 py-2 rounded-full font-medium hover:bg-green-300 transition"
//         >
//             Hire Me
//         </a>
//         <a
//             href="#about-preview"
//             className="border border-green-400 text-green-400 px-6 py-2 rounded-full font-medium hover:bg-green-400 hover:text-black transition"
//         >
//             About Me
//         </a>
//     </div>
// </section>
//
// {/* About Me Preview Section */}
// <section id="about-preview" className="bg-[#fefae0] text-black px-6 py-16">
//     <div className="max-w-5xl mx-auto text-center space-y-6">
//         <h2 className="text-3xl font-bold">About Me</h2>
//         <p className="text-md md:text-lg max-w-3xl mx-auto">
//             I'm Rohit Yadav, a Full Stack Software Engineer based in Dundalk, Ireland
//             with 8+ years of experience delivering scalable SaaS platforms, APIs, and
//             backend systems. I specialize in PHP, Python, and modern cloud-native solutions.
//             I’m passionate about clean code, performance, and mentoring developers.
//         </p>
//         <a
//             href="/about"
//             className="inline-block mt-4 text-green-700 underline font-medium hover:text-green-900"
//         >
//             Learn more →
//         </a>
//     </div>
// </section>
//
// {/* Skills Preview - Black */}
// <section id="skills-preview" className="bg-[#0f0f0f] text-white px-6 py-16">
//     <div className="max-w-5xl mx-auto text-center space-y-6">
//         <h2 className="text-3xl font-bold">Tech Stack</h2>
//         <p className="text-md text-gray-300">
//             I specialize in backend-focused full-stack development, REST APIs, and cloud-native architecture.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
//             {['PHP', 'Laravel', 'Python', 'Flask', 'MySQL', 'Docker', 'AWS', 'ETL'].map(skill => (
//                 <span key={skill} className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
//                 {skill}
//               </span>
//             ))}
//         </div>
//         <a
//             href="/skills"
//             className="inline-block mt-4 text-green-400 underline font-medium hover:text-green-300"
//         >
//             View all skills →
//         </a>
//     </div>
// </section>
//
// <section id="experience-preview" className="bg-[#fefae0] text-black px-6 py-16">
//     <div className="max-w-5xl mx-auto text-center space-y-6">
//         <h2 className="text-3xl font-bold">Work Experience</h2>
//
//         <div className="space-y-6 text-left text-sm md:text-base">
//             <div>
//                 <strong>Developer</strong> @ Provident CRM
//                 <span className="block text-gray-400 text-xs">Jul 2022 – Nov 2024 | Dublin, Ireland</span>
//                 <p>
//                     Designed and maintained backend solutions for SaaS-based CRM platforms using PHP and JavaScript. Built RESTful APIs for plugin development and managed environment deployments using Docker.
//                 </p>
//             </div>
//
//             <div>
//                 <strong>Software Engineer</strong> @ LinkedIn
//                 <span className="block text-gray-400 text-xs">Oct 2021 – Jun 2022 | Dublin, Ireland</span>
//                 <p>
//                     Developed Python-based web crawlers for the Job Ingestion Team using Scrapy. Implemented and maintained data scraping and cleansing pipelines in a Kanban Agile setup.
//                 </p>
//             </div>
//
//             <div>
//                 <strong>Senior Software Engineer</strong> @ QA InfoTech (now Qualitest)
//                 <span className="block text-gray-400 text-xs">Jun 2016 – Jan 2021 | Noida, India</span>
//                 <p>
//                     Created and maintained APIs using Laravel and Flask. Built data extraction pipelines, integrated Google NLP and AWS Lambda/SQS for scalable ETL processes. Mentored junior developers and delivered solutions in Agile sprints.
//                 </p>
//             </div>
//         </div>
//
//         <a
//             href="/experience"
//             className="inline-block mt-4 text-green-400 underline font-medium hover:text-green-300"
//         >
//             View full experience →
//         </a>
//     </div>
// </section>
