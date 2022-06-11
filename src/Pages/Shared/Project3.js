import React from 'react';
import image1 from '../../Images/image3.JPG'
import image2 from '../../Images/car1.jpg'
import image3 from '../../Images/car2.jpg'
const Project3 = () => {
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
  <h2 class="card-title text-3xl font-bold text-blue-700">Car Parts Manufacturer</h2>
    <ul style={listStyle}>
        <li className='text-xl'>This website is about parts of car Manufacturer. </li>
        <li className='text-xl'>In this project I implement homepage included banner, tools, summary, gallery etc.</li>
        <li className='text-xl'>In this website I make a dashboard. here all user can individually show their orders/they can also delete the order.</li>
        <li className='text-xl'>I also implement their admin route. An admin can easily show all users order, add product, manage product</li>

        <li className='text-xl'><span className='text-bold text-xl text-blue-700'>Technologies:</span>I used ReactJs, Tailwind, Daisy UI, Firebase, React Router, NodeJs, Express, MongoDB etc.</li>

    </ul>
     <div class="card-actions justify-center">
      <button class="btn btn-primary"><a href="https://car-parts-manufacturer-8ca56.web.app/">live Link</a></button>
      <button class="btn btn-primary"><a href="https://github.com/muhammadsajit/car-parts-manufacturer-client">Client  Link</a></button>
      <button class="btn btn-primary"><a href="https://github.com/muhammadsajit/car-parts-server"> Server Link</a></button>
       
     </div>
    
  </div>
</div>
        </div>
       </div>
    );


};

export default Project3;