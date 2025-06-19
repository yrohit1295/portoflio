import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import profileImage from '@/assets/profile.png';
import DownloadCV from "@/components/DownloadCV.jsx";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-green-400 font-semibold' : 'hover:text-green-400';

    return (
        <header className="bg-[#0f0f0f] text-white shadow-md w-full z-50 sticky top-0 left-0 border-b border-gray-800">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Left: Logo */}
                <NavLink to="/" className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={profileImage} alt="Rohit Yadav" className="w-full h-full object-cover" />
                </NavLink>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-6 text-sm font-medium">
                        <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                        <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
                        <li><NavLink to="/skills" className={navLinkClass}>Skills</NavLink></li>
                        <li><NavLink to="/experience" className={navLinkClass}>Experience</NavLink></li>
                        <li><NavLink to="/education" className={navLinkClass}>Education</NavLink></li>
                        <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
                        <li><NavLink to="/certifications" className={navLinkClass}>Certifications</NavLink></li>
                        <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
                    </ul>

                    <DownloadCV />
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white text-xl"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open menu"
                >
                    <FaBars />
                </button>
            </nav>

            {/* Side Drawer Menu (Mobile Only) */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#0f0f0f] z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                        className="text-white text-xl"
                    >
                        <FaTimes />
                    </button>
                </div>

                <ul className="flex flex-col items-start px-6 space-y-5 text-sm font-medium">
                    {[
                        { to: '/', label: 'Home' },
                        { to: '/about', label: 'About' },
                        { to: '/skills', label: 'Skills' },
                        { to: '/experience', label: 'Experience' },
                        { to: '/education', label: 'Education' },
                        { to: '/projects', label: 'Projects' },
                        { to: '/certifications', label: 'Certifications' },
                        { to: '/contact', label: 'Contact' },
                    ].map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={navLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <DownloadCV />
                    </li>
                </ul>
            </div>

            {/* Overlay (optional) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-40 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    );
}

export default Header;
