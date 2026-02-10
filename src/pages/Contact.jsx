import React, { useState, useRef } from 'react';
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaCheckCircle,
    FaTimesCircle,
    FaTimes
} from 'react-icons/fa';
import {trackEvent} from "@/lib/mixpanel.js";

function Contact() {
    const [toast, setToast] = useState({ type: '', message: '' });
    const formRef = useRef(null);
    const toastTimeoutRef = useRef(null);
    const FORMSPREE_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`;
    console.log(FORMSPREE_ENDPOINT);

    const showToast = (type, message) => {
        clearTimeout(toastTimeoutRef.current);
        setToast({ type, message });
        toastTimeoutRef.current = setTimeout(() => {
            setToast({ type: '', message: '' });
        }, 5000);
    };

    const handleCloseToast = () => {
        clearTimeout(toastTimeoutRef.current);
        setToast({ type: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;
        const formData = new FormData(form);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                form.reset();
                trackEvent("Contact Form Submit");
                showToast('success', 'Your message has been sent successfully!');
            } else {
                throw new Error();
            }
        } catch {
            showToast('error', 'Something went wrong. Please try again.');
        }
    };

    return (
        <>
            {/* Toast Notification */}
            {toast.message && (
                <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
                    <div
                        className={`flex items-start gap-4 px-4 py-3 rounded-lg shadow-md text-white relative
            ${toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
                    >
                        <div className="pt-1">
                            {toast.type === 'success' ? (
                                <FaCheckCircle className="text-2xl" />
                            ) : (
                                <FaTimesCircle className="text-2xl" />
                            )}
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold">{toast.message}</p>
                        </div>
                        <button
                            onClick={handleCloseToast}
                            className="absolute top-2 right-2 text-white hover:text-gray-200"
                        >
                            <FaTimes />
                        </button>
                    </div>
                </div>
            )}

            {/* Contact Section */}
            <section className="bg-[#0f0f0f] text-white py-20 px-6 min-h-screen">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
                    {/* Left Column */}
                    <div className="md:w-1/2 space-y-8">
                        <h2 className="text-4xl font-bold text-green-400">Let’s Connect</h2>
                        <p className="text-gray-400">
                            I’m always happy to talk about new ideas, collaboration opportunities, or just chat about tech.
                            Reach out through the form or connect on my social channels below.
                        </p>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-green-400" />
                                <a href="mailto:yrohit12@outlook.com" className="hover:underline">yrohit12@outlook.com</a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaPhoneAlt className="text-green-400" />
                                <span>+353 89 988 9055</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-green-400" />
                                <span>Dundalk, Ireland</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaLinkedin className="text-green-400" />
                                <a href="https://linkedin.com/in/yrohit1295" className="hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/yrohit1295</a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaGithub className="text-green-400" />
                                <a href="https://github.com/yrohit1295" className="hover:underline" target="_blank" rel="noopener noreferrer">github.com/yrohit1295</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="md:w-1/2">
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-[#1b1b1b] border border-green-700 p-8 rounded-xl shadow-xl space-y-5"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border border-gray-600 focus:outline-none focus:border-green-500"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border border-gray-600 focus:outline-none focus:border-green-500"
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                required
                                className="w-full px-4 py-2 rounded bg-[#0f0f0f] text-white border border-gray-600 focus:outline-none focus:border-green-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section className="bg-white text-black py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h3 className="text-2xl font-bold text-green-600">Let’s Build Something Great Together</h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Whether you’re looking for a developer to collaborate with, a problem-solver for your next challenge,
                        or just someone who’s passionate about clean, scalable solutions — I’d love to connect.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Contact;
