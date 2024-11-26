import React from 'react';

const Banner: React.FC = () => {
    return (
        <section id="banner" className="bg-blue-500 text-white p-8">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg">I'm Sean Meissimilly, a web developer with expertise in React, Tailwind CSS, and TypeScript.</p>
                <a
                    href="#contact"
                    className="mt-4 inline-block bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-200"
                >
                    Get in Touch
                </a>
            </div>
        </section>
    );
};

export default Banner;
