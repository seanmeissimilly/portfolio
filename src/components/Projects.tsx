import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="bg-white p-8">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Aquí puedes añadir tus proyectos */}
                <div className="bg-gray-200 p-4 rounded">
                    <h3 className="text-xl font-bold">Project 1</h3>
                    <p>Descripción del proyecto 1.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded">
                    <h3 className="text-xl font-bold">Project 2</h3>
                    <p>Descripción del proyecto 2.</p>
                </div>
                <div className="bg-gray-200 p-4 rounded">
                    <h3 className="text-xl font-bold">Project 3</h3>
                    <p>Descripción del proyecto 3.</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
