import React, {useState} from 'react'
import App from "./App"
import Navbar from './Navbar'





function NewPace(){
    const [response, setResponse] = useState("")
    const [pace, setPace] = useState("")
    const [gender, setGender] = useState("")
    const [weight, setWeight] = useState("")
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        
        const url = `https://alb.runappproject.xyz/newpace?pace=${pace}&gender=${gender}&weight=${weight}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('API response data:', data);
            
            
            if(data?.length === 0){
                setResponse('Please try again.')
            }
            else{
                setResponse(data.newpace)
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setResponse('Failed to fetch training plan.');
        });
    };


    return(
        <div className = "body">
        <div className="newpace">
        <Navbar></Navbar>
        <div className = "title">
        <h1>The pace provided by the machine learning model does not account for weight, type in your weight and 
            the pace recommended by the model to receive a more accurate pace.
            
        </h1>
        </div>
        <form>
            <label>Weight: </label>
            <input 
            type = "text"
            value = {weight}
            onChange = {(e) => setWeight(e.target.value)}
            />
            
            <label>Pace:</label>
            <input
            type= "text"
            value = {pace}
            onChange= {(e) => setPace(e.target.value)}
            />
            
                <br></br>
                <button type="button" onClick = {() => setGender("Male")}>
                    Male  
                </button>
                <button type="button" onClick = {() => setGender("Female")}>
                    Female  
                </button>
                <br></br>
            
            <button onClick = {handleSubmit}>
            Submit Information
            </button>
        </form>
        <div className = "response">
        <p className = "response-content">{response}</p>
        </div>
        
    </div>  
    </div>
    )
}

export default NewPace