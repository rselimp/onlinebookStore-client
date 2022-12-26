import React from 'react';
import images from '../../images/images1.png';
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
//14. implement the meaningful footer section
const Footer = () => {
    return (

      <footer className="footer footer-center p-10 bg-sky-200 text-base-content rounded dark:bg-gray-500">
      <div className='dark:text-white'>
        <img className='h-14 w-18' src={images} alt="" />
        <p className="font-bold">
          Online Book Store <br/>Providing reliable tech since 1992
        </p> 
        <p>Copyright © 2022 - All right reserved</p>
      </div> 
      <div>
        <div className="grid grid-flow-col gap-4 dark:text-white">
          <FaGoogle></FaGoogle>
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
        </div>
      </div>
    </footer>
    );
};

export default Footer;