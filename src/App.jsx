import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import {useEffect} from "react";
import Home from "@/pages/Home.jsx";
import Header from "@/components/Header.jsx";
import About from "@/pages/About.jsx";
import Footer from "@/components/Footer.jsx";
import ScrollToTopButton from "@/components/ScrollToTopButton.jsx";
import Skills from "@/pages/Skills.jsx";
import Experience from "@/pages/Experience.jsx";
import Education from "@/pages/Education.jsx";
import Projects from "@/pages/Project.jsx";
import Certification from "@/pages/Certification.jsx";
import Contact from "@/pages/Contact.jsx";
import NotFound from "@/pages/NotFound.jsx";
import ScrollToTop from "@/components/ScrollToTop.jsx";
import {trackPageView} from "@/lib/mixpanel.js";

const routeTitles = {
    "/": "Home",
    "/about": "About",
    "/experience": "Experience",
    "/skills": "Skills",
    "/education": "Education",
    "/projects": "Projects",
    "/certifications": "Certifications",
    "/contact": "Contact",
};

function PageViewTracker() {
    const location = useLocation();
    useEffect(() => {
        const title = routeTitles[location.pathname] || "Not Found";
        trackPageView(location.pathname, title);
    }, [location.pathname]);
    return null;
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <ScrollToTop />
                <PageViewTracker />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/certifications" element={<Certification/>}/>
                    <Route path="/contact" element={<Contact/>}/>

                    {/* Catch-all route for unknown paths */}
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <Footer/>
                <ScrollToTopButton/>
            </BrowserRouter>
        </>
    )
}

export default App
