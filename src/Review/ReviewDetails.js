import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProviders';
//14.implement the delete option
const ReviewDetails = ({review,handleDelete}) => {
    const{user} = useContext(AuthContext);
    const{ _id,customer,serviceName, email,message} = review
    




    return (
        <>
        
            <tr className='border'>
        
        <td className='dark:bg-gray-700 dark:text-white '>{customer}</td>
        <td className='dark:bg-gray-700 dark:text-white ' >{serviceName}</td>
        <td className='dark:bg-gray-700 dark:text-white '>{email}</td>
        <td className='dark:bg-gray-700 dark:text-white '>{message}</td>
        <th className='dark:bg-gray-700 dark:text-white'>
            {/* <Link to ={`/update/${user._id}`}>
            <button  className='btn btn-warning'>Update</button>
            </Link> */}
            

        </th>
        <th className='dark:bg-gray-700 '>
            <button onClick={() =>handleDelete(_id)} className='btn dark: text-white btn-outline btn-error dark:text-white rounded-full'>Delete</button>

        </th>
      </tr>   
        
        </>
      
    );
};

export default ReviewDetails;