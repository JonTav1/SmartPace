import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){


    return(
    
        <nav>
            <div className="nav-items" >      
            <a href="/">Home</a>
            <a href="/mlpred">Get ML Prediction</a>
            <a href="/newpace">Get New Pace</a>
            <a href="/runplan">Get Run Plan</a>      
            </div>
        </nav>
    
    )
}
export default Navbar