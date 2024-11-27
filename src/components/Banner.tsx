import React from 'react';
import { MdEmail } from "react-icons/md";
import githubIcon from '../assets/img/nav-icon2.svg';
import linkedinIcon from '../assets/img/nav-icon1.svg';

const Banner: React.FC = () => {
    return (
        <section id="banner" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-12">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-extrabold mb-6">Welcome to My Portfolio</h1>
                <p className="text-2xl mb-4">I'm Sean Meissimilly, a FullStack Developer with expertise in web programming, and more.</p>
                <p className="text-lg mb-6">I build scalable web applications and provide comprehensive solutions from front-end to back-end.</p>
                <div className="flex justify-center mt-6">
                    <a href="mailto:seanmeissimilly@yahoo.com" className="mx-2">
                        <MdEmail className="w-8 h-8 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://github.com/seanmeissimilly" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <img src={githubIcon} alt="GitHub" className="w-8 h-8 transition-transform transform hover:scale-110 filter invert" />
                    </a>
                    <a href="https://www.linkedin.com/in/sean-meissimilly-15082a23a/" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 transition-transform transform hover:scale-110 filter invert" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;
