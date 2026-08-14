import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Home from '../components/Home.jsx';
import AboutUs from '../components/AboutUs.jsx';

import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/about' element= {<Aboutus/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

