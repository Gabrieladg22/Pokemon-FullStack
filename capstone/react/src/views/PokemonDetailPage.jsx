import { useState, useEffect } from 'react';

import PokemonService from '../services/PokemonService';
import { useParams } from 'react-router-dom';

export default function PokemonDetailPage(){
    const[pokemonDetail, setPokemonDetail] = useState({});
    const[sprite, setSprite] = useState({});
    const { pokemonName } = useParams();

    useEffect(() => {
        PokemonService.getPokemonDetail(pokemonName)
        .then((response) =>{
            console.log(response.data);
            setPokemonDetail(response.data);
            setSprite(response.data.sprites);
        })
    })

    return (
        <>
        <h1>{pokemonDetail.name}</h1>
        <img src ={sprite.front_default} alt=""/>
        <p>{pokemonDetail.base_experience}</p>
        </>
    )
}

