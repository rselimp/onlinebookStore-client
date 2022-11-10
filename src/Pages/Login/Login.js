import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProviders';
import useTitle from '../../hooks/useTitle';

//6.create a button for google sign in signin with a click handler
//13.Implement email/password-based authentication.

const Login = () => {
    const{login,providerLogin} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    useTitle('Login')
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        

        login(email,password)
        .then(result =>{
          const user = result.user;
          event.target.reset()
          const currentUser ={
            email: user.email 
          }
          console.log(user.email)

          //16.get jwt token
          fetch('https://assign11-crud-onlinebookstore-server.vercel.app/jwt',{
            method: 'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body:JSON.stringify(currentUser)
          })
          .then(res =>res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem('bookstore-token',data.token);
            navigate(from, {replace: true});
          })




        })
        .catch(error =>console.error(error))
    }

  const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn =() =>{
      providerLogin(googleProvider)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error =>console.error(error))
    }

    return (
        <div className="hero w-full">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-20">
    <h1 className="text-5xl text-center font-bold">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
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
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-outline btn-accent" type="submit" value="Login" />
        </div>
      </form>
    
      <p className='text-center'>Donot have an Account Please <Link className='text-orange-600 mt-2' to='/register'>Register</Link></p>
      <div className='ml-8'>
      <button onClick={handleGoogleSignIn} className='btn btn-primary'>Google SignIn</button>
      </div>
    </div> 

  </div>
</div>
    );
};

export default Login;