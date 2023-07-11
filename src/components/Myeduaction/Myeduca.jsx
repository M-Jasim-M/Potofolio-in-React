import React from 'react'
import { useUserAuth } from "../../Usecontext/UserAuthContext";
import './Myeduca.css'
import img from '../../Asects/Images/img.png'
import { motion } from "framer-motion";
import { Icon } from '@iconify/react';

export default function Myeduca() {
  return (
    <>
    <div className="edmain">
     <motion.div className="edchil1"
       initial={{ y: -250 }} // Position the div offscreen to the top
       animate={{ y: 0 }} // Animate the div to the original position (y: 0)
       transition={{ duration: 3 }}
     >
     <div className="school">I Have pass Matric Exam in 2018.</div>
     <div className="school">I Have pass Fsc Exam in 2020.</div>
     <div className="school">Now I am Studing in Bs.</div>
     <div className="web">I Choose WebDevelopment as a Carrier</div>
     <div className='web web2'>I Have Complate Six Months trainig <br/>Now I Am In Search Of InterShip/Job</div>
     <div className="conn">Connect Me On WhatsApp</div>
     <div className='button' onClick={()=>{window.open("https://wa.me/message/PF2RNIYMZY6MP1")}}>Lets Talk<Icon className='icon' icon="uil:message" /></div>
     </motion.div>

     <div className="edchil2">

     <img src={img} alt="" />
     </div>

    </div>
    </>
  )
}
