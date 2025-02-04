import React from 'react';
import { SiJavascript, SiPython, SiTypescript, SiNextdotjs, SiDjango, SiExpress, SiNodedotjs, SiJirasoftware, SiReact, SiRedux, SiTailwindcss, SiPostgresql, SiMariadb, SiMysql, SiMongodb, SiLinux, SiGithub } from 'react-icons/si';
import { DiJava, DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from 'framer-motion';

type Skill = {
    name: string;
    icon?: JSX.Element;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
};

const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: [
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Python", icon: <SiPython /> },
            { name: "Java", icon: <DiJava /> },
            { name: "C#", icon: <TbBrandCSharp /> },
        ],
    },
    {
        title: "Frameworks and Libraries",
        skills: [
            { name: "Django Rest Framework", icon: <SiDjango /> },
            { name: "React JS", icon: <SiReact /> },
            { name: "Redux", icon: <SiRedux /> },
            { name: "Express JS", icon: <SiExpress /> },
            { name: "Next JS", icon: <SiNextdotjs /> },
            { name: "Node JS", icon: <SiNodedotjs /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
            { name: "JSP", icon: <SiJirasoftware /> },
        ],
    },
    {
        title: "Version Control",
        skills: [
            { name: "Git", icon: <SiGithub /> },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "MariaDB", icon: <SiMariadb /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "SQL Server", icon: <DiMsqlServer /> },
        ],
    },
    {
        title: "Operating Systems",
        skills: [
            { name: "Linux (experience working with the operating system)", icon: <SiLinux /> },
        ],
    },
    {
        title: "Soft Skills",
        skills: [
            { name: "Effective communication" },
            { name: "Fast learning" },
            { name: "Teamwork and collaboration" },
            { name: "Problem-solving" },
            { name: "Adaptability" },
            { name: "Critical thinking" },
            { name: "Conflict resolution" },
        ],
    },
    {
        title: "Languages",
        skills: [
            { name: "Spanish: Native" },
            { name: "English: (B1) Intermediate" },
        ],
    },
];

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
    <li className="flex items-center">
        {skill.icon && <span className="mr-2">{skill.icon}</span>}
        {skill.name}
    </li>
);

const SkillCategorySection: React.FC<{ category: SkillCategory; delay: number }> = ({ category, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
    >
        <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
        <ul className="list-disc list-inside">
            {category.skills.map((skill, index) => (
                <SkillItem key={index} skill={skill} />
            ))}
        </ul>
    </motion.div>
);

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
                    {skillCategories.map((category, index) => (
                        <SkillCategorySection key={index} category={category} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;