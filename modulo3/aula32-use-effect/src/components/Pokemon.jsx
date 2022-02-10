import { useState, useEffect } from "react"
import axios from "axios";

export function Pokemon(props) {

    const [pokemon, setpokemon] = useState({})



    const pegaPokemon = pokeName => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                setpokemon(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {

        pegaPokemon(props.pokemon)
  
     }, [pokemon])


    return (
        <>
            <div>
                <p>{pokemon.name}</p>
                <p>{pokemon.weight} Kg</p>
                {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
                {pokemon.sprites && (
                    <img width="250px" src={pokemon.sprites.front_default} alt={pokemon.name} />
                )}
            </div>
        </>

    )
}