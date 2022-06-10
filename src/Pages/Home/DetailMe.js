import React from 'react';
import image from '../../Images/pic.jpg';
import download from '../../Images/download.pdf'

const DetailMe = () => {

  return (

    <div class="hero min-h-screen  ">
      <div class="hero-content flex-col lg:flex-row-reverse  ">
        <div class="avatar ">
          <div class="w-96 mask mask-hexagon">
            <img src={image} />
          </div>
        </div>
        <div >
          <h1 class="text-4xl font-bold">Hello, I am</h1>
          <h1 class="text-5xl font-bold py-6 text-blue-400"> SAYMA AKTER</h1>
          <p class="py-6 text-2xl">I am  Front-End Web Developer.I always try to make new design in my website.Day by day I increase my skills to make A good looking Website and function prooerly</p>
          <a href={download} download='download' className='btn btn-primary'>Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default DetailMe;