import React, { useState, useEffect } from 'react';
import { SiGithub } from 'react-icons/si';
import Pagination from './Pagination';

const Projects: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const projectsPerPage = 3;
    const projects = [
        { title: 'Repositorio Virtual', description: 'Descripción del proyecto...', link: 'https://github.com/seanmeissimilly/repositorio-virtual' },
        { title: 'Proyecto 2', description: 'Descripción del proyecto...', link: 'https://github.com/seanmeissimilly/proyecto-2' },
        { title: 'Proyecto 3', description: 'Descripción del proyecto...', link: 'https://github.com/seanmeissimilly/proyecto-3' },
        { title: 'Proyecto 4', description: 'Descripción del proyecto...', link: 'https://github.com/seanmeissimilly/repositorio-virtual' },
        { title: 'Proyecto 5', description: 'Descripción del proyecto...', link: 'https://github.com/seanmeissimilly/proyecto-2' },
        { title: 'Proyecto 6', description: 'Descripción del proyecto...', link: 'https://github.com/seanmeissimilly/proyecto-3' },
    ];

    const totalPages = Math.ceil(projects.length / projectsPerPage);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const renderProjects = currentProjects.map((project, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 inline-flex items-center mt-2">
                <SiGithub className="mr-2" /> View on GitHub
            </a>
        </div>
    ));

    return (
        <section id="projects" className="bg-white p-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {renderProjects}
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </section>
    );
};

export default Projects;


