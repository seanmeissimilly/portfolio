import React from 'react';
import githubIcon from '../assets/img/nav-icon1.svg';
import linkedinIcon from '../assets/img/nav-icon2.svg';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex flex-col items-center">
                <div className="mb-4 flex justify-center">
                    <a href="https://github.com/seanmeissimilly" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <img src={githubIcon} alt="GitHub" className="w-6 h-6 transition-transform transform hover:scale-110" />
                    </a>
                    <a href="https://www.linkedin.com/in/sean-meissimilly-15082a23a/" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 transition-transform transform hover:scale-110" />
                    </a>
                </div>
                <div className="text-center">
                    <p className="text-sm">&copy; {currentYear} Sean Meissimilly. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
