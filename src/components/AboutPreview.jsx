import { Link } from 'react-router-dom';

function AboutPreview() {
    return (
        <section className="bg-white text-black px-6 py-16" id="about-preview">
            <div className="max-w-5xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">About Me</h2>

                <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                    I’m a Full Stack Software Engineer based in Dundalk, Ireland, with over 8 years of experience
                    building scalable SaaS platforms, secure APIs, and data-driven backend systems.
                    I specialize in backend development using PHP (Laravel), Python (Flask), and MySQL,
                    with a strong focus on automation, clean code, and system optimization.
                </p>

                <Link
                    to="/about"
                    className="inline-block mt-4 text-green-700 underline font-medium hover:text-green-900"
                >
                    Read more →
                </Link>
            </div>
        </section>
    );
}

export default AboutPreview;
