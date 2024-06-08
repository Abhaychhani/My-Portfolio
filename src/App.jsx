import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Settings from './pages/Settings/Settings';
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
