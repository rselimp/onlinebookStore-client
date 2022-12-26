import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProviders';
import useTitle from '../../hooks/useTitle';

//6.create a button for google sign in signin with a click handler
//13.Implement email/password-based authentication.

const Login = () => {
    const{login,providerLogin,githubProviderLogin,forgotPassword} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const[userEmail, setUserEmail] =useState('');


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
        navigate(from, {replace: true});
      })
      .catch(error =>console.error(error))
    }

    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn =() =>{

      githubProviderLogin(githubProvider)
      .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
      })
      .catch(error =>console.error(error))

    }
    const handleEmailBlur =event =>{
      const email = event.target.value;
      setUserEmail(email);
    }

    const handleForgotPassword =() =>{
      if(!userEmail){
        alert('Please enter your remail address')
        return;
      }
      forgotPassword(userEmail)
      .then( () =>{
        alert('Password reset email sent.Please check your email')
      })
      .catch(error  =>{
        console.error(error);
      })
    }



    return (
        <div className="hero w-full dark:bg-gray-700">
  <div className="hero-content">
    
    <div className="card flex-shrink-0 shadow-2xl bg-base-100 my-20 py-20 dark:bg-gray-800" style={{width:'450px'}}>
    
    <h1 className="text-5xl text-center font-bold dark:text-white">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onBlur={handleEmailBlur} type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-4">
          <input className="btn btn-outline btn-accent dark:text-white" type="submit" value="Login" />
        </div>
        <p> <button onClick={handleForgotPassword} className='btn btn-ghost btn-sm capitalize'>Forgot password?</button> </p>
        <p className=' mt-2 dark:text-white'>Don't have an account please <Link className='text-orange-600' to='/register'>Register</Link></p>
      </form>
      <div className='ml-8 mb-2'>-
      <button onClick={handleGoogleSignIn} className='btn btn-outline btn-accent dark:text-white'><span className='text-orange-500' ><FaGoogle></FaGoogle></span><span className='ml-2 capitalize'>Login with Google</span></button>
      </div>
      <div className='ml-8'>
      <button onClick={handleGithubSignIn} className='btn btn-outline btn-accent dark:text-white'><span className='text-orange-500'><FaGithub></FaGithub></span><span className='ml-2 capitalize'>Login with Github</span></button>
      </div>
    </div> 

  </div>
</div>
    );
};

export default Login;