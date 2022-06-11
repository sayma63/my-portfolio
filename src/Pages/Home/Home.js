import React from 'react';
import Carusel from '../Shared/Carusel';




import About from './About';
import AllProjects from './AllProjects';
import Blog from './Blog';
import Contact from './Contact';
import DetailMe from './DetailMe';
import Projects from './Projects';
import Service from './Service';
import Skill from './Skill';

const Home = () => {
    return (
        <div className='mx-auto bg-purple-100'>


  

       
       
        <DetailMe></DetailMe>
        
          
           

            <About></About>
            <Service></Service>
            
            
            <AllProjects></AllProjects>
            <Skill></Skill>
            
            {/* <Projects></Projects> */}
            <Contact></Contact>
            
        </div>
    );
};

export default Home;