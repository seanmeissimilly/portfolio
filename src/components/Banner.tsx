import React from 'react';

const Banner: React.FC = () => {
    return (
        <section id="banner" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-extrabold mb-6">Welcome to My Portfolio</h1>
                <p className="text-2xl mb-4">I'm Sean Meissimilly, a FullStack Developer with expertise in web programming, and more.</p>
                <p className="text-lg mb-6">I build scalable web applications and provide comprehensive solutions from front-end to back-end.</p>

            </div>
        </section>
    );
};

export default Banner;
