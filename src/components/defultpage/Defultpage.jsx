
import './defult.css';
import { useUserAuth } from "../../Usecontext/UserAuthContext";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { NavLink } from 'react-router-dom';
import timg from '../../Asects/Images/timg.jpg';
import dpic from '../../Asects/Images/dpic.png';

export default function Defultpage() {


  return (
    <>
    <div className='dmain'>
         <motion.div className='chi1'
         initial={{ opacity: 0, y: 40 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 2 }}
       >
          HI'<br/> I am M-Jasim-M<br/><span className='front'>A FrontEnd Developer</span>
          <div className="sig">Login to see my potofolio</div>
          <div className="l2"><NavLink to="/login">Login</NavLink></div>
         </motion.div>

    
        <motion.div className='chi2'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        >
        <img src={timg} alt="" />
        <img src="dpic.png" alt="" />
        </motion.div>
    


    </div>
    </>
  )
}