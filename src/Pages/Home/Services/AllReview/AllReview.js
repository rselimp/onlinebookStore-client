import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProviders';
import Reviews from '../../../../Review/Reviews';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllReview = () => {

    const { user } = useContext(AuthContext)
    const {price, img, title, description } = useLoaderData();


    const handleReviewSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered'
        const message = form.message.value

        const review = {
            customer: name,
            serviceName: title,
            email,
            message

        }

        fetch('https://assign11-crud-onlinebookstore-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Post Successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }




    return (
        <div className='flex gap-20 dark:bg-gray-700'>
            <div>
            <h2 className='text-2xl text-center mt-4 dark:text-white'>Service Section</h2>
                <PhotoProvider>
                <div className="card w-full bg-base-100 shadow-xl dark:bg-gray-800 mt-4">
                    
                    <PhotoView src={img}>
                    <figure><img style={{objectFit:'cover'}} src={img} alt="" /></figure>
                    </PhotoView>
                    <div className="card-body dark:text-white">
                        <h2 className="card-title">{title}</h2>
                        <p>Price:${price}</p>
                        <p>Description: {description}</p>
                        <div className="card-actions justify-end">
                            <Link to='/servicecardview'>
                                <button className="btn btn-primary rounded-full">All Services</button>
                            </Link>

                        </div>
                    </div>

                </div>
                </PhotoProvider>
            </div>

            <div className='mr-10 mt-4 mb-4'>
                <h1 className='text-2xl mb-2 text-center dark:text-white'>Review Section</h1>
                <Reviews></Reviews>
                <p className='mt-4 text-2xl dark:text-white'>Please login to <Link to={'/addareview'}> <button className='btn btn-outline btn-accent dark:text-white rounded-full'><span>Add a Review</span></button></Link></p>
            </div>
        </div>
    );
};

export default AllReview;