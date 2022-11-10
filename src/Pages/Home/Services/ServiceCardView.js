import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServies from './AllServies';

const ServiceCardView = () => {
  const allServices =useLoaderData()
  return(
  <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
{
  allServices.map(services => <AllServies key={services._id} services={services} ></AllServies>)
}
  </div>

  );
};

export default ServiceCardView;