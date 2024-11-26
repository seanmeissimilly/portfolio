import React from 'react';
import { SiGithub } from 'react-icons/si';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-white p-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-200 p-4 rounded">
                        <h3 className="text-xl font-bold">Repositorio Virtual</h3>
                        <p>Una aplicación web construida con React, Tailwind CSS y Django REST Framework, que permite la autenticación de usuarios, almacenamiento de documentos, videos y herramientas, además de un foro y comentarios en las publicaciones.</p>
                        <a href="https://github.com/seanmeissimilly/repositorio-virtual" target="_blank" rel="noopener noreferrer" className="text-blue-500 inline-flex items-center mt-2">
                            <SiGithub className="mr-2" /> Ver en GitHub
                        </a>
                    </div>
                    <div className="bg-gray-200 p-4 rounded">
                        <h3 className="text-xl font-bold">Proyecto 2</h3>
                        <p>Descripción breve del Proyecto 2. Este proyecto incluye características como...</p>
                        <a href="https://github.com/seanmeissimilly/proyecto-2" target="_blank" rel="noopener noreferrer" className="text-blue-500 inline-flex items-center mt-2">
                            <SiGithub className="mr-2" /> Ver en GitHub
                        </a>
                    </div>
                    <div className="bg-gray-200 p-4 rounded">
                        <h3 className="text-xl font-bold">Proyecto 3</h3>
                        <p>Descripción breve del Proyecto 3. Este proyecto incluye características como...</p>
                        <a href="https://github.com/seanmeissimilly/proyecto-3" target="_blank" rel="noopener noreferrer" className="text-blue-500 inline-flex items-center mt-2">
                            <SiGithub className="mr-2" /> Ver en GitHub
                        </a>
                    </div>
                    {/* Añade más proyectos aquí según sea necesario */}
                </div>
            </div>
        </section>
    );
}

export default Projects;
