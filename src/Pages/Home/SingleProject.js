import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProject = ({project}) => {
    const {id,name,img,description}=project;
    // const navigate= useNavigate()
    // const navigateDetail= (id)=>{
    //    navigate(`/projects/${id}`)  
    // }
    return (
        <div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
       <figure className= 'px-10 pt-10'><img src={img} className="w-full" style={{height:'200px'}} alt="" /></figure>
<div className="card-body">
<h2 className="card-title font-bold text-blue-700">{name}</h2>
<p><span className='text-xl'> Description:  {description?.length < 80 ? description : description.slice(0, 70)+"..read more.."}</span></p>





{/* <div className="card-actions justify-center">
  <button className="btn btn-primary w-full" onClick={()=>navigateDetail( project.id)} >Details</button>
</div> */}
</div>
</div>
    </div>
    );
};

export default SingleProject;
