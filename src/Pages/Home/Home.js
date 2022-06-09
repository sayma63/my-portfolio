import React from 'react';
import About from './About';
import Contact from './Contact';
import DetailMe from './DetailMe';
import Projects from './Projects';
import Skill from './Skill';

const Home = () => {
    return (
        <div className='mx-auto bg-purple-100'>

           <DetailMe></DetailMe>

            <About></About>
            <Skill></Skill>
            
            <Projects></Projects>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;