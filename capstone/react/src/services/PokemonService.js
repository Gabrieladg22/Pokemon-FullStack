import axios from "axios";

const http = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'

});

export default {
    getPokemon(offset){
        return http.get(`/?offset=${offset}&limit=20`);
    },
    getPokemonDetail(id){
        return http.get(`/${id}`);
    }
}