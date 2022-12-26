// import React, { useContext } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../../context/AuthProvider/AuthProviders';

// const CardDetailsView = () => {
//     const {user}  =useContext(AuthContext)
//     const {price,img,title,description} = useLoaderData();


//     const handleReviewSubmit =event =>{
//         event.preventDefault();
//         const form = event.target;
//         const name =form.name.value;
//         const email = user?.email || 'unregistered'
//         const message =form.message.value

//         const review ={
//             customer:name,
//             serviceName:title,
//             email,  
//             message

//         }

//         fetch('https://assign11-crud-onlinebookstore-server.vercel.app/reviews',{
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(review)
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             if(data.acknowledged){
//                 alert('Review Post Successfully')
//                 form.reset();
//             }
//         })
//         .catch(error =>console.error(error))
//     }


//     return (
//         <div className='flex'>
//             <div className="card w-96 bg-base-100 shadow-xl">
//         <figure><img src={img} alt="" /></figure>
//         <div className="card-body">
//             <h2 className="card-title">{title}</h2>
//             <p>Price:${price}</p>
//             <p>Description: {description}</p>
//             <div className="card-actions justify-end">
//                 <Link to='/servicecardview'>
//                 <button className="btn btn-primary">All Services</button>
//                 </Link>
         
//     </div>
//   </div>
  
// </div>
//     <div className='ml-80 border-2'>
//      <h2 className='text-4xl mb-4' >Review Section</h2>
//         <form onSubmit={handleReviewSubmit} >
//         <div className=''>
//         <input type="text" name='name' placeholder="Name" className="input input-bordered w-full mb-2 " />
//         <input type="text" name='email' placeholder="email" className="input input-bordered w-full mb-2  " />
//         <textarea name='message' className="textarea textarea-bordered w-full" placeholder="text"></textarea>
//         </div>
//         <div className="mt-4">
//           <input className="btn btn-outline btn-accent" type="submit" value="Submit" />
          
         
//         </div>
        
//         </form>
        
//         <p>Please At First login and register to see the <Link to='/reviews'><span className='bg-sky-300 rounded'>Reviews</span></Link></p>
        
// </div>
      
// </div>
        
//     );
// };

// export default CardDetailsView;