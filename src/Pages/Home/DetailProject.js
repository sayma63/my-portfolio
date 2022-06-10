import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Projects from './Projects';

const DetailProject = ({match}) => {
    const {id,}=useParams()

    

    const [detail, setDetail] = useState({});
    const {name}=detail
    
    useEffect(()=>{
        fetch(`projects.json/projects/${id}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setDetail(data)
            
        })
    },[])
    
    return (
        <div className='mb-5'>
           {name}
           
            
            
        </div>
    );
};

export default DetailProject;