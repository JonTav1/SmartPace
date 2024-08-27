import React, {useState} from 'react'
import App from "./App"
import Navbar from "./Navbar"






function Plan(){
    const [response, setResponse] = useState("")
    const [distance, setDistance] = useState("")
    const [duration, setDuration] = useState("")
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        const url = `https://alb.runappproject.xyz/ai?distance=${distance}&duration=${duration}`;
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
                setResponse(data.runplan)
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setResponse('Failed to fetch training plan.');
        });
    };


    return(
        
        <div className = "body">
        <div className = "plan">
        <Navbar></Navbar>
        <div className = "title">
        <h1>Input the the race distance, and your desired race time (in hours). You will receive an ai-generated run plan.</h1>
        </div>
        <form>
            
            <label>Distance: </label>
            <input 
            type = "text"
            value = {distance}
            onChange = {(e) => setDistance(e.target.value)}
            />
          
            <label>Duration: </label>
            <input
            type= "text"
            value = {duration}
            onChange= {(e) => setDuration(e.target.value)}
            />
            <br></br>
            <button onClick = {handleSubmit}>
            Submit Information
            </button>
        </form>
        <div className="response-list">
        <pre className="response-list-contents">{response}</pre>
        </div>
        </div>
        </div>
        
        
    )
}

export default Plan