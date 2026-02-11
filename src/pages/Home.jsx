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