import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider/AuthProviders';

const AddAReview = () => {
    const { user } = useContext(AuthContext)
  
    const { title } = useLoaderData();

    const handleAddSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered'
        const message = form.message.value
        console.log(name,email,message)
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
        <div>
            <div className='ml-80'>
                <h2 className='text-3xl mb-4 mt-4' >Add a Review</h2>
                <form onSubmit={handleAddSubmit} >
                    <div>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full mb-2 " />
                        <input type="text" name='email' placeholder="email" className="input input-bordered w-full mb-2  " />
                        <textarea name='message' className="textarea textarea-bordered w-full" placeholder="text"></textarea>
                    </div>
                    <div className="mt-4">
                        <input className="btn btn-outline btn-accent" type="submit" value="Submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAReview;