import React from 'react'
import Navbar from './Navbar'
function Home(){



    return(
        <div className = "home">
        <Navbar></Navbar>
        <div className = "home-content">
        <h1>Welcome,</h1>
        <div className = "home-paragraphs">
        <p>This application uses a dataset of over 100,000 unique race results and a Random Forest Machine Learning model
            to determine a race pace for you, depending on your age and gender, based on other runners.
        </p>
        <br></br>
        <p>
        After you receive your suggested pace from the machine learning model, plug it into the "get new pace" tab, 
            which will adjust your pace for your body weight.
        </p>
        <br></br>
        <p> For an ai-generated run plan, go to "get run plan," which will give you a weekly run plan for a given distance,
            and the final time you'd like to run.</p>
            </div>
        </div>
        </div>
    )
}

export default Home