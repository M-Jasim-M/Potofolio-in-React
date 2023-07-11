
import { useUserAuth } from "../../Usecontext/UserAuthContext";
import './Service.css';
import { Icon } from '@iconify/react';
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Service() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0 }); // Animate the div to the original position (x: 0) from the left side
  }, [controls]);
  return (
    <>
   <div className="smain">
    <motion.div className="schil1"
    initial={{ x: -400 }} // Position the div offscreen to the left side
    animate={controls}
    transition={{ duration: 2 }}
    >
    <div className="sfront">FrontEnd Development Service</div>
    <div className="copy">I Am Able To Copy The UI-Design</div>
    <div className="res copy">Able To Create Responsive Design <br/>For All Divises</div>
    <div className="amim copy">Able To Add animation In The website</div>
<div className="inte copy">Able To Add Sign-up Login Functionality
</div>
<div className="inte copy">Able To Store Form Data In firebase database.</div>

<div className='butt' onClick={()=>{window.open("https://wa.me/message/PF2RNIYMZY6MP1")}}>Lets Talk<Icon className='icon' icon="uil:message" /></div>
    </motion.div>
<div className="schil2">

<img src="https://ashallendesign.co.uk/images/custom/ash-on-a-laptop.png" alt="" />
</div>

   </div>
    </>
  )
}
