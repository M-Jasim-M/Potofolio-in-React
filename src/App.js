import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./Usecontext/UserAuthContext";
import Defultpage from "./components/defultpage/Defultpage";
import Navbar from "./components/Navbar/Navbar";
import React from 'react';
import About from "./components/Aboutus/About";
import Error from "./components/errorpage/Error";
import Service from "./components/Services/Service";
import Myeduca from "./components/Myeduaction/Myeduca";
import MyComponent from "./components/Chat";
import MyComp from "./components/Practicechat";


function App() {
  return (
    <Container >
      <Row>
        <Col>
          <UserAuthContextProvider>
          <Navbar/>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />

<Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <About/> 
                  </ProtectedRoute>
                }
              />

<Route
                path="/education"
                element={
                  <ProtectedRoute>
                    <Myeduca/>
                  </ProtectedRoute>
                }
              />

<Route
                path="/service"
                element={
                  <ProtectedRoute>
                    <Service />
                  </ProtectedRoute>
                }
              />

<Route
                path="/chat"
                element={
                  <ProtectedRoute>
                    <MyComponent/>
                  </ProtectedRoute>
                }
              />

              <Route path="/" element={<Defultpage/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/pchat" element={<MyComp/>} />
              <Route path="*" element={<Error/>} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;