import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <About />
            <Footer />
        </>
    );
}

export default HomePage;
