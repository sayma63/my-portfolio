import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../Images/image1.JPG'
import image2 from '../../Images/image2.JPG'
import image3 from '../../Images/image3.JPG'
import image4 from '../../Images/image4.JPG'
import image5 from '../../Images/image5.JPG'




const AllProjects = () => {
    return (
        <div>
            <h1 className='text-bold text-5xl text-blue-400 text-center mb-6'>My Projects</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 px-10 mb-10'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure className= 'px-10 pt-10'><img src={image1} className="w-full" style={{height:'200px'}} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title font-bold text-blue-700">Smart Watch Shop</h2>
    <p>Description:It is a website of smart watch.Here a user can easily review of a watch product.In this website i make dashboard. In this section I implement rechart.In this project I used  React Js, React Router, Bootstrap.</p>
    <div className="card-actions justify-center">
  <button className="btn btn-primary w-44"  ><Link to='project1'>Detail</Link></button>
</div> 
   
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure className= 'px-10 pt-10'><img src={image2} className="w-full" style={{height:'200px'}} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title font-bold text-blue-700">Medical Health Care</h2>
    <p>Description:It is a website of medical health care service.A user can easily attain all services here.In this project I implement login and logout page with firebase authentication.I also used there ReactJs, React Router, React firebase Hooks, bootstrap.</p>
    <div className="card-actions justify-center">
  <button className="btn btn-primary w-44"  ><Link to='project2'>Detail</Link></button>
</div> 
   
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure className= 'px-10 pt-10'><img src={image3} className="w-full" style={{height:'200px'}} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title font-bold text-blue-700">Car Parts Manufacturer</h2>
    <p>Description:This website is about parts of car Manufacturer. An admin can easily show all users order, add product, manage product.In this project I also implement stripe payment gateway.I used ReactJs, Tailwind, Daisy UI, Firebase, React Router, NodeJs, Express, MongoDB etc.</p>
    
    <div className="card-actions justify-center">
  <button className="btn btn-primary w-44"  ><Link to='project3'>Detail</Link></button>
</div> 
   
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure className= 'px-10 pt-10'><img src={image4} className="w-full" style={{height:'200px'}} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title font-bold text-blue-700">Convention Center</h2>
    <p>Description:This website about convention-center.i use in this project html,css, bootstrap.In this website i made banner.different package of convention center</p>
    <div className="card-actions justify-center">
  <button className="btn btn-primary w-44"  ><Link to='project4'>Detail</Link></button>
</div> 
   
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure className= 'px-10 pt-10'><img src={image5} className="w-full" style={{height:'200px'}} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title font-bold text-blue-700">Phone Tracker</h2>
    <p>Description:This website is about Phone Tracker.In this project i added any one can easily search phone and show all phone details here.i use html css bootrap javascript etc</p>
     <div className="card-actions justify-center">
  <button className="btn btn-primary w-44"  ><Link to='project5'>Detail</Link></button>
</div> 
   
  </div>
</div>
  
  
 
  

 
  
  
        </div>
        </div>
    );
};

export default AllProjects;
//<p>Admin Email:mehedi@gmail.com, pass:123456</p>


{/* <div class="card-actions justify-center">
<button class="btn btn-primary"><a href="https://teal-semolina-029878.netlify.app/">Live Link</a></button>
<button class="btn btn-primary"><a href="https://github.com/muhammadsajit/smart-watch-website">Code Link</a></button>

</div> */}

{/* <div class="card-actions justify-center">
      <button class="btn btn-primary"><a href="https://medical-health-care-385a2.web.app/">Live Link</a></button>
      <button class="btn btn-primary"><a href="https://github.com/muhammadsajit/medical-health-care">Code Link</a></button>
      
    </div> */}


    // <div class="card-actions justify-center">
    //   <button class="btn btn-primary"><a href="https://car-parts-manufacturer-8ca56.web.app/">live Link</a></button>
    //   <button class="btn btn-primary"><a href="https://github.com/muhammadsajit/car-parts-manufacturer-client">Client  Link</a></button>
    //   <button class="btn btn-primary"><a href="https://github.com/muhammadsajit/car-parts-server"> Server Link</a></button>
       
     // </div>    
      
    



{/* <div class="card-actions justify-center">
      <button class="btn btn-primary"><a href="https://lucid-heyrovsky-6fea42.netlify.app/">Live Link</a></button>
      <button class="btn btn-primary"><a href="https://github.com/muhammadsajit/convention-center-website">Code Link</a></button>
      
    </div> */}

    

  //   <div class="card-actions justify-center">
  //   <button class="btn btn-primary"><a href="https://elastic-mirzakhani-062a39.netlify.app/">live Link</a></button>
  //   <button class="btn btn-primary"><a href="https://github.com/muhammadsajit/phone-tracker-website">Code Link</a></button>
    
  // </div>