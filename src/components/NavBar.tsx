import React from 'react';
import { Button } from "./ui/button";

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
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
                    <a href="#contact" className="mx-2">
                        <Button>Contact</Button>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
