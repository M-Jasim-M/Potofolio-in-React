import React, { useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import './popup.css';

// Firebase configuration (replace with your own config)
const firebaseConfig = {
  // Your Firebase config here
  apiKey: "AIzaSyBDAIJcXvEWTIDVnLFBjX0eAJQyRp4XwTg",
    authDomain: "react-app-12750.firebaseapp.com",
    databaseURL: "https://react-app-12750-default-rtdb.firebaseio.com",
    projectId: "react-app-12750",
    storageBucket: "react-app-12750.appspot.com",
    messagingSenderId: "244877137927",
    appId: "1:244877137927:web:d09c6dcf9c8585edd3f2a2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a reference to the database
const database = firebase.database();

function MyComp() {
  const [inputValue, setInputValue] = useState('');
  const [practicemes, setPracticemes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for changes in the "practicemes" node
    const practicemesRef = database.ref('practicemes');
    practicemesRef.on('value', (snapshot) => {
      const practicemeData = snapshot.val();
      const practicemeList = Object.values(practicemeData);
      setPracticemes(practicemeList);
    });

    // Listen for authentication state changes
    firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Cleanup listener when component unmounts
    return () => {
      practicemesRef.off();
    };
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Store the practiceme in the database
    const newPracticemeRef = database.ref('practicemes').push();
    newPracticemeRef.set({
      text: inputValue,
      userId: user.uid,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    });

    // Clear the input field
    setInputValue('');
  };

  return (
    <div className="chmain">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
       <div className='chat' >
      <ul className="message-list ">
        {practicemes.map((practiceme) => (
          <li
            key={practiceme.key}
            className={`message ${
              practiceme.userId === user?.uid ? 'current-user' : ''
            }`}
          >
            <span className="message-text">{practiceme.text}</span>
          </li>
          
        ))}
      </ul>
      </div>
    </div>
  );
}

export default MyComp;
