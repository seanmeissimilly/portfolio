import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import cvPDF_ES from '../assets/CV-David-ES.pdf';
import cvPDF_EN from '../assets/CV-David-EN.pdf';
import { motion } from 'framer-motion';

interface LoadingState {
    es: boolean;
    en: boolean;
}

const About: React.FC = () => {
    const [isLoading, setIsLoading] = useState<LoadingState>({ es: false, en: false });

    const handleDownloadClick = (lang: 'es' | 'en') => {
        setIsLoading((prevState) => ({ ...prevState, [lang]: true }));
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = lang === 'es' ? cvPDF_ES : cvPDF_EN;
            link.download = lang === 'es' ? 'David_CV_ES.pdf' : 'David_CV_EN.pdf';
            link.click();
            setIsLoading((prevState) => ({ ...prevState, [lang]: false }));
        }, 1000); // Simulación de carga
    };

    const isValidLang = (lang: string): lang is 'es' | 'en' => {
        return ['es', 'en'].includes(lang);
    };

    return (
        <section id="about" className="bg-gray-100 p-8">
            <div className="container mx-auto text-center max-w-md">
                <motion.h2
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>
                <motion.div
                    className="bg-white shadow rounded-lg p-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-xl font-semibold mb-4">🎓 Education</h3>
                    <p className="text-base">
                        Computer Engineering, 2024 <br />
                        Universidad Tecnológica de la Habana CUJAE, La Habana
                    </p>

                    <div className="mt-6 flex justify-center space-x-4">
                        {['es', 'en'].map((lang) => (
                            isValidLang(lang) && (
                                <motion.button
                                    key={lang}
                                    className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-4 rounded shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ${isLoading[lang] ? 'cursor-not-allowed' : ''
                                        }`}
                                    onClick={() => handleDownloadClick(lang)}
                                    disabled={isLoading[lang]}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isLoading[lang] ? (
                                        <motion.div
                                            className="loader inline-block w-4 h-4 border-2 border-t-2 border-white rounded-full animate-spin"
                                        ></motion.div>
                                    ) : (
                                        <>
                                            <FiDownload className="inline-block w-4 h-4 mr-2" />
                                            CV {lang.toUpperCase()}
                                        </>
                                    )}
                                </motion.button>
                            )
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
