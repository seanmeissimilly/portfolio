import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import cvPDF_ES from '../assets/CV-David-ES.pdf';
import cvPDF_EN from '../assets/CV-David-EN.pdf';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const [isLoading, setIsLoading] = useState<{ es: boolean, en: boolean }>({ es: false, en: false });

    const handleDownloadClick = (lang: 'es' | 'en') => {
        setIsLoading(prevState => ({ ...prevState, [lang]: true }));

        // Simulate a delay for loading animation
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = lang === 'es' ? cvPDF_ES : cvPDF_EN;
            link.download = lang === 'es' ? "David_CV_ES.pdf" : "David_CV_EN.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setIsLoading(prevState => ({ ...prevState, [lang]: false }));
        }, 1000); // 1 segundo de simulación de carga
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
                    <h3 className="text-2xl font-semibold mt-6 mb-4">🎓 Education</h3>
                    <div className="text-left">
                        <p className="text-lg font-bold">Universidad Tecnológica de la Habana CUJAE, La Habana</p>
                        <ul className="list-disc list-inside ml-4">
                            <li className="text-lg">Computer Engineering, 2024</li>
                        </ul>
                    </div>
                    <div className="mt-8 flex justify-center space-x-4">
                        <motion.button
                            className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ${isLoading.es ? 'cursor-not-allowed' : ''}`}
                            onClick={() => handleDownloadClick('es')}
                            disabled={isLoading.es}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {isLoading.es ? (
                                <motion.div
                                    className="loader inline-block w-4 h-4 border-2 border-t-2 border-white rounded-full animate-spin"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                ></motion.div>
                            ) : (
                                <>
                                    <FiDownload className="inline-block w-4 h-4 mr-2" />
                                    CV ES
                                </>
                            )}
                        </motion.button>
                        <motion.button
                            className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ${isLoading.en ? 'cursor-not-allowed' : ''}`}
                            onClick={() => handleDownloadClick('en')}
                            disabled={isLoading.en}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {isLoading.en ? (
                                <motion.div
                                    className="loader inline-block w-4 h-4 border-2 border-t-2 border-white rounded-full animate-spin"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                ></motion.div>
                            ) : (
                                <>
                                    <FiDownload className="inline-block w-4 h-4 mr-2" />
                                    CV EN
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
