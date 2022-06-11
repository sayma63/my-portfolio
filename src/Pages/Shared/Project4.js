import React from 'react';
import image1 from '../../Images/image4.JPG'
import image2 from '../../Images/wed1.JPG'
import image3 from '../../Images/wed2.JPG'

const Project4 = () => {
    const listStyle={listStyleType:'inherit'}
    return (
       <div>
           <h1 className='text-4xl text-center text-blue-700'>Projects Details</h1>
            <div className='flex justify-center items-center mt-6'>
            
            <div class="card w-full bg-base-100 shadow-xl h-screen">
  


            <div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
    <img src={image1} style={{height:'300px'}} class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src={image2} style={{height:'300px'}} class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src={image3} style={{height:'300px'}} class="w-full" />
  </div> 
 
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
 
</div>

  
  
  
  
 
  <div class="card-body">
  <h2 class="card-title text-3xl font-bold text-blue-700">Convention Center</h2>
    <ul style={listStyle}>
        <li className='text-xl'>This website about convention-center</li>
        <li className='text-xl'>In this website i made banner</li>
        <li className='text-xl'> I added different package of convention center.</li>
        <li className='text-xl'>I added frequent question part </li>

        <li className='text-xl'><span className='text-bold text-xl text-blue-700'>Technologies:</span>i used in this project html,css, bootstrap. </li>

    </ul>
    <div class="card-actions justify-center">
      <button class="btn btn-primary"><a href="https://lucid-heyrovsky-6fea42.netlify.app/">Live Link</a></button>
      <button class="btn btn-primary"><a href="https://github.com/muhammadsajit/convention-center-website">Code Link</a></button>
      
    </div> 
  </div>
</div>
        </div>
       </div>
    );

};

export default Project4;