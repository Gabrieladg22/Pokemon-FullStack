import { useState, useEffect } from "react"
import JokeService from "../services/JokeService";
import AuthService from "../services/AuthService";


export default function JokePage(){

    const [joke, setJoke] = useState(null);

    function getJoke(){
        JokeService.getRandomeJoke()
        .then((response) => {
            // console.log(response);
            setJoke(response.data);
        })
    }

    function saveJoke(){
        AuthService.saveJoke({joke})
        .then((response) => {
            alert('Joke saved to favorites!');

        })
    }

    useEffect(() => {
        getJoke();
    }, []); //empty [] says call on initialization

    return (
        <>
        <h1>This is the Joke Page!</h1>
        <p>{ joke }</p>
        <button onClick={saveJoke}>Save to favorites?</button>
        </>
        
    )
}