import React from 'react';

import {useState} from 'react'
import Plan from './Plan'
import Finaltime from './Racetime'
import NewPace from './NewPace'
import Home from './Home'
import Navbar from './Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles.css';
export function App() {

  return (
    
    <body>
 
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/newpace" element={<NewPace />}/>
        <Route path="/mlpred" element={<Finaltime/>}/>
        <Route path="runplan" element={<Plan/>}/>
      </Routes>
    </BrowserRouter>
    </body>
    
  )
}
export default App;