import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProviders';
import images from '../../images/gitbook2.png';
//9.now at header or anywhere else:use useContext hooks 
const Header = () => {
  const{user,logOut} = useContext(AuthContext)

  const handleSignOut =() =>{
    logOut()
    .then( () =>{})
    .catch(error =>console.error(error))
  }

    return (
        <div className="navbar bg-sky-100">
  <div className="flex-1">
   <img className='h-14 w-15' src={images} alt=""/><a href='/' className="btn btn-ghost normal-case text-xl">Book Store</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
    <li><Link to='/blog'>Blog</Link></li>
      {
        user?.email ?
        <>
        <li><Link to='/reviews'>Reviews</Link></li>
          <li><button onClick={handleSignOut} className="btn btn-ghost">Log Out</button></li>
        </>
        :
        <li><Link to='/login'>Login</Link></li>
      }
      
      <li><a href='/'>
        
        
      {user?.displayName}
      
  
        </a></li>
      
    </ul>
  </div>
</div>
    );
};

export default Header;