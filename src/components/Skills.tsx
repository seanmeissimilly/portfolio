import React from 'react';
import { SiJavascript, SiPython, SiTypescript, SiDjango, SiExpress, SiNodedotjs, SiJirasoftware, SiReact, SiRedux, SiTailwindcss, SiPostgresql, SiMariadb, SiMysql, SiMongodb, SiLinux, SiGithub } from 'react-icons/si';
import { DiJava } from "react-icons/di";
import { motion } from 'framer-motion';
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";


const Skills: React.FC = () => {
    return (
        <section id="skills" className="bg-gray-100 p-8">
            <div className="container mx-auto">
                <motion.h2
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Skills
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
                        <ul className="list-disc list-inside">
                            <li><DiJava className="inline mr-2" />Java</li>
                            <li><SiPython className="inline mr-2" />Python</li>
                            <li><SiTypescript className="inline mr-2" />TypeScript</li>
                            <li><SiJavascript className="inline mr-2" />JavaScript</li>
                            <li><TbBrandCSharp className="inline mr-2" />C#</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Frameworks and Libraries</h3>
                        <ul className="list-disc list-inside">
                            <li><SiDjango className="inline mr-2" />Django Rest Framework</li>
                            <li><SiExpress className="inline mr-2" />Express JS</li>
                            <li><SiNodedotjs className="inline mr-2" />Node JS</li>
                            <li><SiJirasoftware className="inline mr-2" />JSP</li>
                            <li><SiReact className="inline mr-2" />React JS</li>
                            <li><SiRedux className="inline mr-2" />Redux</li>
                            <li><SiTailwindcss className="inline mr-2" />Tailwind CSS</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Version Control</h3>
                        <ul className="list-disc list-inside">
                            <li><SiGithub className="inline mr-2" />Git</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Databases</h3>
                        <ul className="list-disc list-inside">
                            <li><SiPostgresql className="inline mr-2" />PostgreSQL</li>
                            <li><SiMariadb className="inline mr-2" />MariaDB</li>
                            <li><DiMsqlServer className="inline mr-2" />SQL Server</li>
                            <li><SiMysql className="inline mr-2" />MySQL</li>
                            <li><SiMongodb className="inline mr-2" />MongoDB</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Operating Systems</h3>
                        <ul className="list-disc list-inside">
                            <li><SiLinux className="inline mr-2" />Linux (experience working with the operating system)</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
                        <ul className="list-disc list-inside">
                            <li>Effective communication</li>
                            <li>Teamwork</li>
                            <li>Fast learning</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">Languages</h3>
                        <ul className="list-disc list-inside">
                            <li>Spanish: Native</li>
                            <li>English: Intermediate</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
