import axios from "axios";

const http = axios.create({
    baseURL: 'https://icanhazdadjoke.com'
});

const header = {
    headers: {
        'Accept': 'text/plain'
    }
};

export default{
    getRandomeJoke(){
        return http.get('', header);
    }
    
}