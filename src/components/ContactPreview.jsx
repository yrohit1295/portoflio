import {Link} from "react-router-dom";

function ContactPreview() {
    return (
        <section className="bg-white text-black px-6 py-16" id="contact-preview">
            <div className="max-w-4xl mx-auto space-y-8 text-center">
                <h2 className="text-3xl font-bold">Get in Touch</h2>

                <p className="text-gray-600 max-w-xl mx-auto">
                    Whether you’re looking for a developer to join your team, need help on a project, or just want to say hello —
                    feel free to reach out. I'm currently open to full-time and contract opportunities.
                </p>

                {/* Contact Info */}
                <div className="space-y-4 text-sm">
                    <p>
                        📍 Dundalk, County Louth, Ireland
                    </p>
                    <p>
                        📧 <a href="mailto:yrohit12@outlook.com" className="text-green-600 hover:underline">yrohit12@outlook.com</a>
                    </p>
                    <p>
                        🔗 <a href="https://www.linkedin.com/in/yrohit1295" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                        LinkedIn Profile
                    </a>
                    </p>
                </div>

                {/* Optional CTA Button */}
                <Link
                    to="/contact"
                    className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-500 transition"
                >
                    Say Hello →
                </Link>
            </div>
        </section>
    );
}

export default ContactPreview;
