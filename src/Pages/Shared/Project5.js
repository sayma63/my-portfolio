import React from 'react';
import image1 from '../../Images/image5.JPG'
import image2 from '../../Images/mobile1.JPG'
import image3 from '../../Images/mobile2.JPG'

const Project5 = () => {
    const listStyle={listStyleType:'inherit'}
    return (
       <div>
           <h1 className='text-4xl text-center text-blue-700'>Projects Details</h1>
            <div className='flex justify-center items-center mt-6 '>
            
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
  <h2 class="card-title text-3xl font-bold text-blue-700">Phone Tracker</h2>
    <ul style={listStyle}>
        <li className='text-xl'>This website is about Phone Tracker</li>
        <li className='text-xl'>i added search field </li>
        <li className='text-xl'> i added any one can easily search phone </li>
        <li className='text-xl'>Show all phone details here</li>

        <li className='text-xl'><span className='text-bold text-xl text-blue-700'>Technologies:</span>i used html css bootrap javascript etc </li>

    </ul>
      <div class="card-actions justify-center">
     <button class="btn btn-primary"><a href="https://elastic-mirzakhani-062a39.netlify.app/">live Link</a></button>
    <button class="btn btn-primary"><a href="https://github.com/muhammadsajit/phone-tracker-website">Code Link</a></button>
    
   </div>
  </div>
</div>
        </div>
       </div>
    );

};

export default Project5;