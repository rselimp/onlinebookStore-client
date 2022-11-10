import React from 'react';
import { Link } from 'react-router-dom';
//13.clicking the view details button, the user will be taken to the service details page.
const ServiceCard = ({service}) => {
    const { _id,img,price, title} = service
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Price:${price}</p>   
        <div className="card-actions">
          <Link to={`/carddetailsview/${_id}`}>
          <button className="btn btn-outline btn-accent">View Details</button>
          </Link>
          

        </div>
      </div>
    </div>
    );
};

export default ServiceCard;