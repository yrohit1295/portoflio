import { FaHiking, FaMusic, FaBook, FaLeaf, FaBrain, FaCoffee } from 'react-icons/fa';

function BeyondTheCode() {
    const interests = [
        {
            icon: <FaHiking />,
            title: 'Long Walks, Clear Thoughts\'',
            description: 'I enjoy peaceful walks, especially along the coast or in parks — it helps me reset and refocus after deep coding sessions.',
        },
        {
            icon: <FaMusic />,
            title: 'Music-Driven Focus',
            description: 'Coding deep with instrumental playlists — no distractions, just flow.',
        },
        {
            icon: <FaBook />,
            title: 'Always Learning',
            description: 'Whether it’s Python internals or backend scaling, I never stop reading.',
        },
        {
            icon: <FaLeaf />,
            title: 'Green Tech Enthusiast',
            description: 'Passionate about clean energy and sustainability in software systems.',
        },
        {
            icon: <FaBrain />,
            title: 'Think Before You Build',
            description: 'I value planning and clarity before diving into code.',
        },
        {
            icon: <FaCoffee />,
            title: 'Coffee + VS Code',
            description: 'Dark theme, centered terminal, and a flat white to get things done.',
        },
    ];

    return (
        <section className="bg-gray-50 text-black py-16 px-6" id="beyond-the-code">
            <div className="max-w-6xl mx-auto text-center space-y-12">
                <h2 className="text-3xl font-bold">Beyond the Code</h2>

                <p className="text-gray-600 max-w-xl mx-auto">
                    I’m more than just a software engineer — here’s a glimpse into the values and interests that shape how I work and live.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
                    {interests.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition">
                            <div className="text-2xl text-green-500 mb-2">{item.icon}</div>
                            <h3 className="font-semibold mb-1">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BeyondTheCode;
