import React from 'react';
import image1 from '../../Images/pic9.png'
import pic7 from '../../Images/4380747.jpg'
import pic8 from '../../Images/download (3).png'

const Service = () => {
    return (
        <div>
            <h1 className='text-bold text-7xl text-blue-400 text-center mb-6'>What I Do !</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 px-10 mb-10'>
            <div class="card w-96 bg-purple-200 shadow-xl">
  <figure className= 'px-10 pt-10'><img src={image1}  style={{height:'250px'}} alt="" /></figure>
  <div class="card-body">
  <h2 class="card-title text-xl font-bold text-blue-700">UI/UX Desgin</h2>
    <p>UI/UX design — is the design of any user interfaces, in which usability is just as important as the appearance.As a web developer i make ui/ux design for client requirement</p>
   
    
  </div>
</div>
            <div class="card w-96 bg-purple-200 shadow-xl">
  <figure className= 'px-10 pt-10'><img src={pic7}  style={{height:'250px'}} alt="" /></figure>
  <div class="card-body">
  <h2 class="card-title text-xl font-bold text-blue-700">Plain HTML/Css Website</h2>
    <p>I can development any project my html css very easily.It is easy to implement project using Html Css for client</p>
    
  </div>
</div>
            
            <div class="card w-96 bg-purple-200 shadow-xl">
  <figure className= 'px-10 pt-10'><img src={pic8}  style={{height:'250px'}} alt="" /></figure>
  <div class="card-body">
  <h2 class="card-title text-xl font-bold text-blue-700">Mern Stack Web Application</h2>
    <p>I can development any full stack web application by using mongodb nodejs expressjs javascript</p>
    
  </div>
</div>
            
    
  </div>
</div>
          
 
  

 
  
  
       
    );
};

export default Service;