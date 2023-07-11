import React from 'react'
import './Error.css'
import { useUserAuth } from "../../Usecontext/UserAuthContext";
import { NavLink } from 'react-router-dom';

export default function Error() {
  return (
    <>
    <div className="emain">
    <div className='im'><img src="https://miro.medium.com/v2/resize:fit:1400/0*QOZm9X5er1Y0r5-t" alt="" /></div>
    <div className="go"><NavLink to="/">Go to Home</NavLink></div>
    </div>
    </>
  )
}
