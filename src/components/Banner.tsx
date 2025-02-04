import React from 'react';
import { MdEmail } from "react-icons/md";
import githubIcon from '../assets/img/nav-icon2.svg';
import linkedinIcon from '../assets/img/nav-icon1.svg';
import { motion } from 'framer-motion';

const Banner: React.FC = () => {
    return (
        <section
            id="banner"
            className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8 md:py-12"
        >
            <div className="container mx-auto text-center px-4">
                {/* Título principal */}
                <motion.h1
                    className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Welcome to My Portfolio
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    className="text-base md:text-lg mb-6 text-gray-200 font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    I'm Sean Meissimilly, a FullStack Developer specializing in scalable web solutions.
                </motion.p>

                {/* Iconos de contacto */}
                <motion.div
                    className="flex justify-center space-x-4 mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {/* Email */}
                    <a
                        href="mailto:seanmeissimilly@yahoo.com"
                        className="hover:scale-110 transition-transform transform hover:text-blue-300"
                        aria-label="Email"
                    >
                        <MdEmail className="w-8 h-8 text-white" />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/seanmeissimilly"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform transform hover:text-gray-300"
                        aria-label="GitHub"
                    >
                        <img src={githubIcon} alt="GitHub" className="w-8 h-8 invert" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/sean-meissimilly-15082a23a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform transform hover:text-blue-300"
                        aria-label="LinkedIn"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 invert" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;