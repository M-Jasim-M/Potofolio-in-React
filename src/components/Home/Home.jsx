import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useUserAuth } from "../../Usecontext/UserAuthContext";
import MyComponent from "../Chat";
import Pop from "../Popupbox";
import './Home.css';
import timg from '../../Asects/Images/timg.jpg'


const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0 }); // Animate the div to the original position (x: 0) from the left side
  }, [controls]);
  // const { user } = useUserAuth();
  // //  {/* <div className="p-4 box mt-3 text-center">
  // //       Hello Welcome <br />
  // //       {user && user.email}
  // //     </div> */}
  const khan = ()=>{
    window.open("https://wa.me/message/PF2RNIYMZY6MP1");
  }
  return (
    <>
    <div className="hmain">
     <motion.div className="mchil1"
     initial={{ x: -400 }} // Position the div offscreen to the left side
     animate={controls}
     transition={{ duration: 2 }}
     >
      <div className="jan">Hello, <br/>I Am M-Jasim-M<br/><span className="color">A Frontend Developer</span></div>
       <div className="expl">IF you like my work hire<br/>Me For an Internship</div>
       <button onClick={khan}>Hire Me</button>
     </motion.div>
  
  <div className="mchil2">
  <motion.div
        style={{ position: "relative", width: "0px", height: "0px" }}
        animate={{
          x: [15, 15, -20, 15], // Animate the image position from 0px to 5px to -5px and back to 0px
        }}
        transition={{
          duration: 2, // Animation duration for each movement
          repeat: Infinity, // Repeat the animation indefinitely
          repeatType: "reverse", // Reverse the animation after each iteration
        }}
      >
        <img
          src={timg} // Replace with your actual image path
          alt="Your Image"
        />
      </motion.div>

  </div>

    </div>

      
      {/* <Pop/> */}
    </>
  );
};

export default Home;
