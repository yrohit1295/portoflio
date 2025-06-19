import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 150);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className={`fixed bottom-6 right-6 z-50 p-3 rounded-full 
        backdrop-blur-md bg-white/10 border border-white/20 text-green-400
        shadow-lg hover:bg-white/20 transition-all duration-300 ease-in-out
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
      `}
        >
            <FaArrowUp className="text-xl" />
        </button>
    );
}

export default ScrollToTopButton;
