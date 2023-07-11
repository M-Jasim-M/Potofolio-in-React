import React, { useState } from 'react';
import { useUserAuth } from "../Usecontext/UserAuthContext";
import './popup.css';

const PopupBox = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Popup Box</h3>
        <p>Popup content goes here.</p><br/>
        <img src="logo192.png" alt='image'/><br/>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Pop = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleHidePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={handleShowPopup}>Show</button>
      {showPopup && (
        <div className="popup-container">
          <PopupBox onClose={handleHidePopup} />
        </div>
      )}
    </div>
  );
};

export default Pop;
