import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Support from "./components/Support";
import Upload from "./components/Upload"
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Validate from "./pages/Validate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"



function App() {
  return (
    
     <>
     <Navbar/>
     <Router>
      
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/edit' element={<Edit/>} />
      <Route path='/validate' element={<Validate/>} />
      </Routes>
      
    </Router>
     </>
  );
}

export default App;
