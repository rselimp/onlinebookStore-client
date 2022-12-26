import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';


const Services = () => {
    const[services,setServices] =useState([]);
    const [noOfElement, setnoOfElement]= useState(3)
    const loadMore =() =>{
        setnoOfElement(noOfElement)
    }
    
    
    const slice = services.slice(0, noOfElement)
    useEffect( () =>{
        fetch('https://assign11-crud-onlinebookstore-server.vercel.app/services')
        .then(res => res.json())
        .then(data =>setServices(data))

    },[])

    
    return (
        <div className='text-center dark:bg-gray-600'>
            <p className='text-2xl font-bold text-range-500 dark:text-white mb-8'>Online BookStore Services</p>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 ml-4'>
            {
                slice.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
            }
        </div>
        
           
        
        <Link to ='/servicecardview'><button onClick={() =>loadMore()} className='btn btn-dark'>
        See all
        </button></Link>
        
        
        </div>
    );
};

export default Services;