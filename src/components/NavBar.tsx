import React from 'react';
import { Button } from "./ui/button";

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    Mi Portafolio
                </div>
                <div>
                    <a href="#inicio" className="mx-2">
                        <Button>Inicio</Button>
                    </a>
                    <a href="#proyectos" className="mx-2">
                        <Button>Proyectos</Button>
                    </a>
                    <a href="#skills" className="mx-2">
                        <Button>Skills</Button>
                    </a>
                    <a href="#acerca" className="mx-2">
                        <Button>Acerca de</Button>
                    </a>
                    <a href="#contacto" className="mx-2">
                        <Button>Contacto</Button>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

