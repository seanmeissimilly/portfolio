import React from 'react';
import { MdEmail } from "react-icons/md";
import githubIcon from '../assets/img/nav-icon2.svg';
import linkedinIcon from '../assets/img/nav-icon1.svg';
import { motion } from 'framer-motion';

const Banner: React.FC = () => {
    return (
        <section id="banner" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 md:p-12">
            <div className="container mx-auto text-center">
                <motion.h1
                    className="text-3xl md:text-5xl font-extrabold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Welcome to My Portfolio
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    I'm Sean Meissimilly, a FullStack Developer with expertise in web programming, and more.
                </motion.p>
                <motion.p
                    className="text-base md:text-lg mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    I build scalable web applications and provide comprehensive solutions from front-end to back-end.
                </motion.p>
                <motion.div
                    className="flex justify-center mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <a href="mailto:seanmeissimilly@yahoo.com" className="mx-2">
                        <MdEmail className="w-8 h-8 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://github.com/seanmeissimilly" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <img src={githubIcon} alt="GitHub" className="w-8 h-8 transition-transform transform hover:scale-110 filter invert" />
                    </a>
                    <a href="https://www.linkedin.com/in/sean-meissimilly-15082a23a/" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 transition-transform transform hover:scale-110 filter invert" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
