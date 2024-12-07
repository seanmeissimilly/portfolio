import React from 'react';
import { Button } from "./ui/button";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavBar: React.FC = () => {
    return (
        <motion.nav
            className="bg-gray-800 text-white p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    My Portfolio
                </div>
                <div>
                    <Link to="banner" smooth={true} duration={500} className="mx-2 cursor-pointer">
                        <Button>Home</Button>
                    </Link>
                    <Link to="projects" smooth={true} duration={500} className="mx-2 cursor-pointer">
                        <Button>Projects</Button>
                    </Link>
                    <Link to="skills" smooth={true} duration={500} className="mx-2 cursor-pointer">
                        <Button>Skills</Button>
                    </Link>
                    <Link to="about" smooth={true} duration={500} className="mx-2 cursor-pointer">
                        <Button>About</Button>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}

export default NavBar;


