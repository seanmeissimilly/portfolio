import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <About />
            <Footer />
        </div>
    );
};

export default HomePage;