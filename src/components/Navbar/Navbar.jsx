import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUserAuth } from '../../Usecontext/UserAuthContext';
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import dpic from '../../Asects/Images/dpic.png';
import './Navbar.css';
import { motion } from "framer-motion";

export default function Navbar() {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='nmain'>

        <motion.div className="logo"
        animate={{
          x: [5, 5, -5, 5], // Animate the image position from 0px to 5px to -5px and back to 0px
        }}
        transition={{
          duration: 1.5, // Animation duration for each movement
          repeat: Infinity, // Repeat the animation indefinitely
          repeatType: "reverse", // Reverse the animation after each iteration
        }}
        >
      <li>
          <NavLink exact to="/">
            <img src={dpic} alt="" />
          </NavLink>
        </li>
        </motion.div>

        <div className="comp">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About me</NavLink>
        </li>
        <li>
          <NavLink to="/education">Education</NavLink>
        </li>
        <li>
          <NavLink to="/service">Services</NavLink>
        </li>
        <li>
          <NavLink to="/chat">Chat Now</NavLink>
        </li>
        </div>


        <div className='logout'>

        <li>
          {user ? (
            // 
            <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
        
        </div>
      
    </div>
  );
}
