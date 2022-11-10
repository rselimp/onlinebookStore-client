import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProviders';
import useTitle from '../../hooks/useTitle';
//12.spinner on the services page, and the login and register page
const Register = () => {
    const {createUser}  = useContext(AuthContext)
    useTitle('Register')
    const handleSignUp = event =>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const password= form.password.value;

        createUser(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          event.target.reset();
        })
        .catch(error =>console.error(error))

    }

    return (
        <div className="hero w-full">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-20">
    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-outline btn-accent" type="submit" value="Register" />
        </div>
      </form>
      <p className='text-center'>Already have an account <Link className='text-orange-600' to='/login'>Login</Link></p>
    </div> 
  </div>
</div>
    );
};

export default Register;