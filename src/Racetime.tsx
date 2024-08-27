import { Agent } from 'http';
import react from 'react'
import {useState} from 'react'
import App from "./App"
import Navbar from './Navbar'
function Finaltime(){
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [distance, setDistance] = useState("")
    const [response, setResponse] = useState("")
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
       e.preventDefault()
       
        const url = `https://alb.runappproject.xyz/mlresp?age=${age}&gender=${gender}&distance=${distance}`;
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
                setResponse(data.mlpace)
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setResponse('Failed to fetch racetime.');
        });
    };


    return(
        <div className = "body">
        <div className = "racetime">
        <Navbar></Navbar>
        <div className = "title">
        <h1>Receive a race time suggestion from a machine learning model!</h1>
        </div>
        <form>
            How old are you?
            <input
            type = "text"
            value = {age}
            onChange = {(e) => setAge(e.target.value)}
            />
            
            How many miles are you running?
            <input
            type = "text"
            value = {distance}
            onChange = {(e) => setDistance(e.target.value)}
            />
            <br></br>
            Are you a Male or Female?
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
        <p className="response-content">{response}</p>
        </div>
        </div>
        </div>
    )
} 
export default Finaltime;