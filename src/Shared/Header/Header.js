import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProviders';
import images from '../../images/gitbook2.png';
import { BsMoonFill,BsFillSunFill,BsCheck } from "react-icons/bs";
//9.now at header or anywhere else:use useContext hooks 
const Header = () => {
  const{user,logOut} = useContext(AuthContext)
  const [theme, setTheme] = useState('light')

  const handleSignOut =() =>{
    logOut()
    .then( () =>{})
    .catch(error =>console.error(error))  
  }

const handleOnClick =() =>{
  if(localStorage.getItem('theme') === 'light'){
    setTheme('dark');
    localStorage.setItem('theme','dark');
  }
  else{
    setTheme('light');
    localStorage.setItem('theme','light')
  }
};

useEffect(() =>{
  const html = document.querySelector('html');
  if(localStorage.getItem('theme') ==='dark'){
    html.classList.add('dark');
    setTheme('dark')
  }
  else{
    html.classList.remove('dark');
    setTheme('light')
  }
},[theme])

useEffect(() =>{
  if(localStorage.getItem('theme') ===null){
    localStorage.setItem('theme', 'light')
  }
},[])





  // const handleOnChange =() =>{
  //   if(document.getElementById('toggle').checked){
  //     document.body.classList.add('dark')
  //   }
  //   else{
  //     document.body.classList.remove('dark')
  //   }
  // }


    return (
        <div className="navbar bg-sky-100 dark:bg-gray-600">
  <div className="flex-1">
   <img className='h-14 w-15 rounded-full' src={images} alt=""/><a href='/' className="btn btn-ghost normal-case text-xl dark:text-white">Book Store</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0 dark:text-white">

      
      
      {/* <label htmlFor="toggle" className='flex items-center cursor-pointer mb-12'>
      <div className='relative'>
        <input type="checkbox" id="toggle" className='sr-only' onChange={handleOnChange}></input>
        <div className='block bg-gray-600 w-14 h-8 rounded-full'></div>
        <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'></div>
      </div>
      <div className='ml-3 text-gray-700 font-medium dark:text-white'>
      Dark Mode!
      


      </div>
      </label> */}
      
      <button onClick={handleOnClick} className='p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center dark:bg-gray-500'>
      {
        theme === 'light' ? <BsMoonFill></BsMoonFill> :<BsFillSunFill></BsFillSunFill>
      }
      </button>

    <li><Link className='mr-2' to=''>Courses</Link></li>
    <li><Link className='mr-2' to=''>FAQ</Link></li>
    <li><Link className='mr-2'  to='/blog'>Blog</Link></li>
      {
        user?.uid ?
        <>
          <li><Link to='/reviews'>All Reviews</Link></li>
          <li><button onClick={handleSignOut} className="btn btn-ghost">Log Out</button></li>
        </>
        :
        <li><Link to='/login'>Login</Link></li>
      }
      <li>
      { 
        user?.photoURL?
        
      
      <img style={{height:'50px',borderRadius:'50%'}} title={user?.displayName}  src={user?.photoURL} alt=''/>
     :<FaUser></FaUser>
      
      

      } 
      </li>
    </ul>
  </div>
</div>
    );
};

// {/* <script>
//   function changeMode(toggle) {
//     if(document.getElementById('toggle').checked){
//       document.body.classList.add('dark')
//     }
//     else{
//       document.body.classList.remove('dark')
//     }
//   }
//     {
      
    
//     } */}
    

export default Header;