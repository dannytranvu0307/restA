import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage  from "./components/pages/Home";
import Login from "./components/pages/Login";
import Favorite from "./components/pages/Favorite";
import Video from "./components/pages/Video";
import SignUp from "./components/pages/Signup";


function App() {


 
  return (
    <Router>     
    <Navbar />
    <div>
     <Routes>
     <Route path='' element={<Homepage />} />
     <Route path='/favorite' element={<Favorite/>} />
     <Route path='/sign-up' element={<SignUp />} />
     <Route path="/Login" element= {<Login />} />
     <Route path="/video/:id" element= {<Video />} />
     </Routes>
   </div>
    
     
   </Router>
  );
}

export default App;
