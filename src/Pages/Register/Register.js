import { success } from 'daisyui/src/colors';
import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProviders';
import useTitle from '../../hooks/useTitle';
import app from '../../firebase/firebase.config';
//12.spinner on the services page, and the login and register page

const auth = getAuth(app)

const Register = () => {
  const[passwordError, setPasswordError] =useState('')
  const [success, setSuccess] = useState(false)
    const {createUser, verifyEmail}  = useContext(AuthContext)
    useTitle('Register')
    const handleSignUp = event =>{
        event.preventDefault();
        setSuccess(false)
        const form =event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password= form.password.value;

        createUser(name,email,password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          verifyEmail();
          setSuccess(true)
          event.target.reset();
          updateUserName(name);
        })
        .catch(error =>{
          console.error(error);
          setPasswordError(error.message)
          event.target.reset();
          })


    }

    verifyEmail()
    .then( () =>{
      alert('Please check your email and verify')
    })

    const updateUserName =(name) =>{
      updateProfile(auth.currentUser,{
          displayName:name
      })
      .then( () =>{
        console.log('update')
      })
      .catch(error=>console.error(error))
  }


    
    return (


        <div className="hero dark:bg-gray-700">
  <div className="hero-content">
    
    <div className="card flex-shrink-0 shadow-2xl bg-base-100 my-20 py-20 dark:bg-gray-800" style={{width:'450px'}}>
    <div className=''>
    <h1 className="text-5xl text-center font-bold dark:text-white">Sign Up</h1>
      <form onSubmit={handleSignUp} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <p className='text-red-600'>{passwordError}</p>
        {success && <p className='text-sky-500'>User Created Successfully.</p>}
        <div className="form-control mt-6">
          <input className="btn btn-outline btn-accent dark:text-white" type="submit" value="Register" />
        </div>
      </form>
    </div>
      <p className='text-center dark:text-white'>Already have an account, Please <Link className='text-orange-600' to='/login'>Login</Link></p>
    </div> 
  </div>
</div>
    );
};

export default Register;