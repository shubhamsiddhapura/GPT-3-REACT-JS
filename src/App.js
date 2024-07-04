import React from 'react';
import './App.css';
import Artical from './Components/articals/Artical';
import Brand from './Components/brand/Brand';
import Cta from './Components/cta/Cta';
import Navbar from './Components/Navbar/Navbar';
import Blog from './Container/blog/Blog';
import Features from './Container/Feature/Features';
import Footer from './Container/Footer/Footer';
import Possiblity from './Container/possiblity/Possiblity';
import Header from './Container/Header/Header';
import WhatGPT3 from './Container/WhatGTP3/Whatgtp3'
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
   <div className='App'>
    <div className='gradient__bg'>
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possiblity/>
    <Cta/>
    <Blog/>
    <Footer/>

   </div>
  );
}

export default App;
