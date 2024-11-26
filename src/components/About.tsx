import React from 'react';
import { Button } from "./ui/button";
import cvPDF from '../assets/CV-David.pdf';

const About: React.FC = () => {
    return (
        <section id="about" className="bg-gray-100 p-8">
            <div className="container mx-auto text-center max-w-2xl">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <p className="text-lg mb-4"><strong>Name:</strong> Sean Meissimilly</p>
                    <h3 className="text-2xl font-semibold mt-6 mb-4">🎓 Education</h3>
                    <div className="text-left">
                        <p className="text-lg font-bold">Universidad Tecnológica de la Habana CUJAE, La Habana</p>
                        <ul className="list-disc list-inside ml-4">
                            <li className="text-lg">Computer Engineering, 2024</li>
                        </ul>
                    </div>
                    <a href={cvPDF} download="Sean_Meissimilly_CV.pdf" className="mt-8 inline-block">
                        <Button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                            Download CV
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;


