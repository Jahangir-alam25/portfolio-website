import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import ContactUs from '../ContactUs/ContactUs';
import Education from '../Education/Education';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <MyProjects></MyProjects>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;