import React, { useState } from 'react';
import { Button } from "./ui/button";
import cvPDF from '../assets/CV-David.pdf';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownloadClick = () => {
        setIsLoading(true);

        // Simulate a delay for loading animation
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = cvPDF;
            link.download = "Sean_Meissimilly_CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setIsLoading(false);
        }, 1000); // 1 segundos de simulación de carga
    };

    return (
        <section id="about" className="bg-gray-100 p-8">
            <div className="container mx-auto text-center max-w-2xl">
                <motion.h2
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>
                <motion.div
                    className="bg-white shadow-md rounded-lg p-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-lg mb-4"><strong>Name:</strong> Sean Meissimilly</p>
                    <h3 className="text-2xl font-semibold mt-6 mb-4">🎓 Education</h3>
                    <div className="text-left">
                        <p className="text-lg font-bold">Universidad Tecnológica de la Habana CUJAE, La Habana</p>
                        <ul className="list-disc list-inside ml-4">
                            <li className="text-lg">Computer Engineering, 2024</li>
                        </ul>
                    </div>
                    <div className="mt-8 inline-block">
                        <Button
                            className={`bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ${isLoading ? 'cursor-not-allowed' : ''}`}
                            onClick={handleDownloadClick}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <motion.div
                                    className="loader inline-block w-4 h-4 border-2 border-t-2 border-white rounded-full animate-spin"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                ></motion.div>
                            ) : (
                                "Download CV"
                            )}
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;




