import React from 'react';
import image1 from '../../Images/image1.JPG'

import image2 from '../../Images/review.JPG'
import image3 from '../../Images/dashboard (1).JPG'

const Project1 = () => {
    const listStyle={listStyleType:'inherit'}
    return (
       <div>
           <h1 className='text-4xl text-center text-blue-700'>Projects Details</h1>
            <div className='flex justify-center items-center mt-6'>
            
            <div class="card w-3/6 bg-base-100 shadow-xl h-screen">
  


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
  <h2 class="card-title text-3xl font-bold text-blue-700">Smart Watch Shop</h2>
    <ul style={listStyle}>
        <li className='text-xl'>It is a website of smart watch.</li>
        <li className='text-xl'>Here a user can easily review of a watch product.</li>
        <li className='text-xl'>In this website i make dashboard. In this section I implement rechart.</li>
        <li className='text-xl'>There i added blog section for question</li>
        <li className='text-xl'><span className='text-bold text-xl text-blue-700'>Technologies:</span>  In this project I used  React Js, React Router, Bootstrap.</li>

    </ul>
     <div class="card-actions justify-center">
<button class="btn btn-primary"><a href="https://teal-semolina-029878.netlify.app/">Live Link</a></button>
<button class="btn btn-primary"><a href="https://github.com/muhammadsajit/smart-watch-website">Code Link</a></button>

</div> 
    
  </div>
</div>
        </div>
       </div>
    );
};

export default Project1;