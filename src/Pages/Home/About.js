import React from 'react';
import image from '../../Images/pic1.jpg'

const About = () => {
    return (
        <div class="hero min-h-screen  ">
        <div class="hero-content flex-col lg:flex-row-reverse gap-36  ">
        <div >
          <h1 className='text-5xl mb-4'>About <span className='text-blue-600 text-5xl mb-4'>Me</span></h1>

          <p className='text-2xl mb-4'>
              I am a Front-End Developer.I know very well HTML,CSS,Bootstrapt,React,NodeJs ,MongoDB.I create many projects Properly.Day By day I am trying to development my Website knowledge.I use new Frameworks for good looking Website and make website dynamic.
          </p>
          <h4 className='text-2xl mb-2'><span className='text-blue-600 text-2xl mb-2'>Age</span> 22</h4>
          <h4 className='text-2xl mb-2'><span className='text-blue-600 text-2xl mb-2'>Nationality</span> Bangladeshi</h4>
          <h4 className='text-2xl mb-2'><span className='text-blue-600 text-2xl mb-2'>Address</span> 1172/A,uttorkhan Balurmat,Ajompur,Uttora,Dhaka-1230</h4>
          <h4 className='text-2xl mb-2'><span className='text-blue-600 text-2xl mb-2'>Phone</span> +08801601772065</h4>
          <h4 className='text-2xl mb-2'><span className='text-blue-600 text-2xl mb-2'>Email</span> saymasumi106353@gmail.com</h4>
          </div>
          <div class="avatar gap-36 ">
        <div class="w-96 mask mask-hexagon">
          <img src={image} />
        </div>
        </div>
        
      </div>
          
         
      </div>
    );
};

export default About;