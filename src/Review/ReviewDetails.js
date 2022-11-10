import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProviders';
//14.implement the delete option
const ReviewDetails = ({review,handleDelete}) => {
    const{user} = useContext(AuthContext);
    const{ _id,customer,serviceName, email,message} = review
    




    return (
        <tr>
        
        <td>{customer}</td>
        <td>{serviceName}</td>
        <td>{email}</td>
        <td>{message}</td>
        <th>
            {/* <Link to ={`/update/${user._id}`}>
            <button  className='btn btn-warning'>Update</button>
            </Link> */}
            

        </th>
        <th>
            <button onClick={() =>handleDelete(_id)} className='btn btn-warning'>Delete</button>

        </th>
      </tr>   
    );
};

export default ReviewDetails;