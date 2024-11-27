import React from 'react';
import githubIcon from '../assets/img/nav-icon2.svg';
import linkedinIcon from '../assets/img/nav-icon1.svg';
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex flex-col items-center">
                <div className="mb-4 flex justify-center">
                    <a href="mailto:seanmeissimilly@gmail.com" className="mx-2"> <MdEmail className="w-6 h-6 transition-transform transform hover:scale-110" /> </a>
                    <a href="https://github.com/seanmeissimilly" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <img src={githubIcon} alt="GitHub" className="w-6 h-6 transition-transform transform hover:scale-110 filter invert" />
                    </a>
                    <a href="https://www.linkedin.com/in/sean-meissimilly-15082a23a/" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 transition-transform transform hover:scale-110 filter invert" />
                    </a>
                </div>
                <div className='flex flex-col justify-between pb-4 sm:flex-row sm:items-center'>
                    <p className='pb-3 font-light sm:pb-0'>Made with ❤️ by Sean Meissimilly.</p>
                    <div className='flex flex-col flex-wrap items-start gap-3 sm:flex-row sm:items-center sm:gap-0 sm:space-x-6'>

                    </div>
                </div>
                <div className="text-center"><p className="text-sm">&copy; {currentYear} . All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
