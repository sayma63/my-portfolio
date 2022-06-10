import React, { useEffect, useState } from 'react';
import Loading from '../Loading';
import SingleProject from './SingleProject';

const Projects = () => {

    const [projects,setProjects]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('projects.json')
        .then(res=>res.json())
        .then(data=>{
            setProjects(data)
            setLoading(false);
        })
    },[])
    return (
        <div>
            {
                 
                    loading?<div><Loading></Loading></div>:null
                
            }
            <h1 className='text-center text-purple-600 font-bold text-4xl mt-5 mb-6'>My Projects</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 px-10 mb-10'>
                {
                    projects.map(project=><SingleProject key={project.id}
                    project={project}></SingleProject>)
                }

            </div>
        </div>
    );
};

export default Projects;