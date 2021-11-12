
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [pokemonName, setPOkemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
         name: "",
         species: "",
         img: "",
         hp: "",
         attack: "",
         defense: "",
         type: "",

  });
  const searchPokemonName = () =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
         setPokemon({name:pokemonName, species: response.data.species.name, 
          img: response.data.sprites.front_default, 
          hp: response.data.stats[0].base_stat, 
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[0].base_stat,
          type: response.data.types[0].type.name,
          
         })
         setPokemonChosen(true);
      }
   );
  };
  return (
    <div className= "App">
     <div className="TitleSection">
       <h1>Pokemon Database</h1>
       <input type = "text" placeholder = "enter pokemon" onChange ={(event) => {
         setPOkemonName(event.target.value);
         }} />
       <button onClick={searchPokemonName}>Search Pokemon</button>
     </div>
     <div className="DisplaySection">  
        {!pokemonChosen ? (
        <h1>Pick a pokemon</h1>
        ) : (
        <>
         <h1>{pokemon.name}</h1>
         <img src={pokemon.img}/>
         <h3>Species: {pokemon.species}</h3>
         <h3>Type: {pokemon.type}</h3>
         <h3>Hp: {pokemon.type}</h3>
         <h3>Atttack: {pokemon.attack}</h3>
         <h3>Defense: {pokemon.defense}</h3>
        </>
        )}
     </div>
    </div>
  );
}

export default App;
