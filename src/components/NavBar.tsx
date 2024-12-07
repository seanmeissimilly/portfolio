import React from 'react';
import { Button } from "./ui/button";
import { motion } from 'framer-motion';

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
                    <a href="#banner" className="mx-2">
                        <Button>Home</Button>
                    </a>
                    <a href="#projects" className="mx-2">
                        <Button>Projects</Button>
                    </a>
                    <a href="#skills" className="mx-2">
                        <Button>Skills</Button>
                    </a>
                    <a href="#about" className="mx-2">
                        <Button>About</Button>
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}

export default NavBar;

