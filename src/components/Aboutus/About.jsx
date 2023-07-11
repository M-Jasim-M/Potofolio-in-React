import React from 'react'
import './about.css';
import { useUserAuth } from "../../Usecontext/UserAuthContext";
import timg from '../../Asects/Images/timg.jpg';
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className='amain'>
     <motion.div className="achil1"
     initial={{ y: 300 }} // Position the div offscreen to the bottom
     animate={{ y: 0 }} // Animate the div to the original position (y: 0)
     transition={{ duration: 2 }}
     >
      
      <div className="fro">Frontend Developer <br/>Recently Complated Six Months<br/>
      Traning From Brandora</div>
      <div className="work">My Work</div>
      <div className="html">Html</div>
      <div className="css html">Css</div>
      <div className="boot html">Bootstrap</div>
      <div className="java html">JavaScript</div>
      <div className="react html">React Js</div>
      <div className="react html">FireBase, Login Signup</div>

      <div className="check">Check my Github Profile</div>
      <div className="git" on onClick={()=>{window.open("google.com")}}>Visit Github</div>
     </motion.div>

     <div className="achil2">
     <img
          src={timg} // Replace with your actual image path
          alt="Your Image"
        />
     </div>

    </div>
  )
}
