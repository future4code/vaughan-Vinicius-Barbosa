import { Pokemon } from './components/Pokemon'
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import { useEffect, useState } from 'react';

function App() {

   const [pokeList, setPokeList] = useState([])
   const [pokeName, setPokeName] = useState('')



   const requisiçao = () => {

      axios
         .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
         .then(response => {
            console.log(response)
            setPokeList(response.data.results);
         })
         .catch(err => {
            console.log(err);
         });
   };

   useEffect(() => {

      requisiçao()

   }, [])

   const changePokeName = (event) => {
      setPokeName(event.target.value);
   };

   return (

      <div className="App">
         <header className="App-header">
            <div>Selecione um poquemon</div>

            <div className="App">

               <select onChange={changePokeName}>
                  <option value={""}>Nenhum</option>
                  {pokeList.map(pokemon => {
                     return (
                        <option key={pokemon.name} value={pokemon.name}>
                           {pokemon.name}
                        </option>
                     );
                  })}
               </select>
               {pokeName && <Pokemon pokemon={pokeName} />}
            </div>


         </header>
      </div>
   );

}

export default App;
