import {BrowserRouter, Routes, Route} from "react-router-dom";
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

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <ScrollToTop />
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
