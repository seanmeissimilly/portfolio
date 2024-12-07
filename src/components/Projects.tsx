import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SiGithub } from 'react-icons/si';
import Pagination from './Pagination';
import { motion } from 'framer-motion';

// Definir el tipo para los proyectos
type Project = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
};

const Projects: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [projects, setProjects] = useState<Project[]>([]);
    const projectsPerPage = 3;

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/seanmeissimilly/repos');
                const data: Project[] = response.data.map((project: Project) => ({
                    id: project.id,
                    name: project.name,
                    html_url: project.html_url,
                    description: project.description || 'No description provided',
                }));
                setProjects(data);
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
            }
        };

        fetchProjects();
    }, []);


    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const renderProjects = currentProjects.map((project) => (
        <motion.div
            key={project.id}
            className="bg-gray-200 p-4 rounded min-h-[200px] max-h-[300px] flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 inline-flex items-center mt-2">
                <SiGithub className="mr-2" /> View on GitHub
            </a>
        </motion.div>
    ));

    return (
        <section id="projects" className="bg-white p-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {renderProjects.length > 0 ? renderProjects : <p>No projects found</p>}
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
        </section>
    );
};

export default Projects;
