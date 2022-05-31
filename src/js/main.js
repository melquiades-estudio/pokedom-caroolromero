//import pokemons from "./data.js";

let pokemons = document.querySelector (".list-pokemons");
let nombrepokemon = [ "ivysaur","venusaur", "Charmander"]
let tipopokemon = [ "water","fire", "gras"]
let imagenpokemon = [ "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" , "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"]

pokemons.innerHTML = ` 

<article class="list-pokemons-item">
          <div class="list-pokemons-item-content">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="pokemon-1"
            />
            <h3>
              Bulbasaur
              <span>gras</span>
            </h3>
          </div>
        </article>

        <article class="list-pokemons-item">
          <div class="list-pokemons-item-content">
            <img
              src= ${imagenpokemon[1]}
              alt="pokemon-1"
            />
            <h3>
            ${nombrepokemon[0]}
              <span> ${tipopokemon[0]}</span>
            </h3>
          </div>
        </article>

        <article class="list-pokemons-item">
          <div class="list-pokemons-item-content">
            <img
            src= ${imagenpokemon[0]}
              alt="pokemon-1"
            />
            <h3>
            ${nombrepokemon[1]}
              <span> ${tipopokemon[0]}</span>
            </h3>
          </div>
        </article>

        <article class="list-pokemons-item">
          <div class="list-pokemons-item-content">
             <img
              src= ${imagenpokemon[3]}
              alt="pokemon-1"
            />
            <h3>
            ${nombrepokemon[2]}
              <span> ${tipopokemon[1]}</span>
            </h3>
          </div>
        </article>

        `