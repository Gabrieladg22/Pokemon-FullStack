import PokemonService from "../../services/PokemonService"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import styles from './PokemonPage.module.css';

export default function PokemonPage() {

    //State variables
    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState('');
    const [count, setCount] = useState(0);

    function getPokemon(offset = 0) {
        PokemonService.getPokemon(offset)
            .then((response) => {
                setPokemon(response.data.results);
            })
            .catch((err) => {
                if (err.response) {
                    setError(`Error from the server`)
                } else if (err.request) {
                    setError('No response from the server')
                }
                else {
                    setError('An error ocurred')
                }
            })

    }

    function getPrevious() {
        setCount(count - 20);
        getPokemon(count - 20);

    }

    function getNext() {
        setCount(count + 20);
        getPokemon(count + 20);
    }


    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <>
            <h1>This is the Pokemon Page!</h1>
            <div>{error}</div>
            {count > 0 &&
                <button onClick={getPrevious}>Previous</button>
            }
            {count < 1300 &&
                <button onClick={getNext}>Next</button>
            }
            <ul className={styles.list}>
                {pokemon.map((item, index) => (
                    <li key={index}>
                        <Link to={`/detail/${item.name}`} >
                            {item.name}
                        </Link>

                    </li>
                ))}
            </ul>
        </>

    )
}