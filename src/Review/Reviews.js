import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProviders';
import useTitle from '../hooks/useTitle';
import ReviewDetails from './ReviewDetails';
//11.reviews" page will be a private route and show only the reviews that the current user .
const Reviews = () => {
    useTitle('Reviews')
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] =useState([])



    useEffect(  () =>{
        fetch(`https://assign11-crud-onlinebookstore-server.vercel.app/reviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('bookstore-token')}`
            }
        })
        .then(res =>res.json())
        .then(data => setReviews(data))


    },[user?.email])

    const  handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review')
        if(proceed){
            fetch(`https://assign11-crud-onlinebookstore-server.vercel.app/reviews/${id}`,{
                method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data =>
                {
                    console.log(data);
                    if(data.deletedCount > 0){
                        alert('Deleted Successfully')
                        const  remaining = reviews.filter(rvw => rvw._id !==id);
                        setReviews(remaining)
                    }
                
                })
        }
    }



    return (
        <div >
            

            <div className="overflow-x-auto">
            <table className="table w-full">

            <thead>
            <tr>

            <th className='dark:bg-gray-500 dark:text-white '>Customer Name</th>
            <th className='dark:bg-gray-500 dark:text-white'>Service</th>
            <th className='dark:bg-gray-500 dark:text-white'>Email</th>
            <th className='dark:bg-gray-500 dark:text-white'>Text</th>
            <th className='dark:bg-gray-500 dark:text-white '></th>
            <th className='dark:bg-gray-500 dark:text-white'></th>
         </tr>
            </thead>
            <tbody className=''>
     {
        reviews &&
        reviews?.map(review =><ReviewDetails
             key={review._id}
              review={review}
              handleDelete={handleDelete} 
            
              ></ReviewDetails>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Reviews;