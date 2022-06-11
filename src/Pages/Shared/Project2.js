import React from 'react';
import image1 from '../../Images/medical3.JPG'
import image2 from '../../Images/medical1.JPG'
import image3 from '../../Images/medical2.JPG'
const Project2 = () => {
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
  <h2 class="card-title text-3xl font-bold text-blue-700">Medical Health Care</h2>
    <ul style={listStyle}>
        <li className='text-xl'>It is a website of medical health care service. </li>
        <li className='text-xl'>A user can easily attain all services here</li>
        <li className='text-xl'>In this project I implement login and logout page with firebase authentication</li>
        <li className='text-xl'>There i added blog section for question</li>
        <li className='text-xl'><span className='text-bold text-xl text-blue-700'>Technologies:</span>  In this project I used  React Js, React Router, Bootstrap.</li>

    </ul>
    <div class="card-actions justify-center">
      <button class="btn btn-primary"><a href="https://medical-health-care-385a2.web.app/">Live Link</a></button>
      <button class="btn btn-primary"><a href="https://github.com/muhammadsajit/medical-health-care">Code Link</a></button>
      
    </div> 
    
  </div>
</div>
        </div>
       </div>
    );
};



export default Project2;