
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
         
         attack: "",
         defense: "",
         type: "",

  });
  const searchPokemonName = () =>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response) => {
         setPokemon({name:pokemonName, species: response.data.species.name, 
          img: response.data.sprites.front_default, 
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
       <div className='title-container'>
       <h1>Pokedex</h1>
       <input className='input-edit' type = "text" placeholder = "enter pokemon" onChange ={(event) => {
         setPOkemonName(event.target.value);
         }} />
       <button onClick={searchPokemonName}>Search</button>
       </div>
     </div>
     
     <div className="DisplaySection">  
      <div className='display-results'>
        {!pokemonChosen ? (
        <h1></h1>
        ) : (
        <>
         
         <img src={pokemon.img} />
         <p>Name: {pokemon.name}</p>
         <p>Type: {pokemon.type}</p>
         <p>Atttack: {pokemon.attack}</p>
         <p>Defense: {pokemon.defense}</p>
        </>
        )}
        </div>
        <div className='footer'>
          <p>made by <a className='name-link' href='https://twitter.com/cartieraxis'>Axis</a></p>

        </div>
      </div>
    </div>
  );
}

export default App;
