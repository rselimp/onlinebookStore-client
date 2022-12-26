import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
//13.clicking the view details button, the user will be taken to the service details page.
const ServiceCard = ({service}) => {
    const { _id,img,price, title} = service
    return (
      <div className="card w-96 bg-base-100 shadow-xl dark:bg-gray-700">
      <PhotoProvider>
      <figure className="px-10 pt-10">
        <PhotoView src={img}>
        <img src={img} alt="" style={{objectFit:'cover'}} className="rounded-xl" />
        </PhotoView>
      </figure>
      </PhotoProvider>
      <div className="card-body items-center text-center dark:text-white">
        <h2 className="card-title">{title}</h2>৭
        <p>Price:${price}</p>   
        <div className="card-actions">
          <Link to={`/allreview/${_id}`}>
          <button className="btn btn-outline btn-accent dark:text-white">View Details</button>
          </Link>
          

        </div>
      </div>
    </div>
    );
};

export default ServiceCard;