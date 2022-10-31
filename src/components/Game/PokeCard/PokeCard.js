import React from "react";
import { useState } from "react";

// need image
// name of pokemon
const PokeCard = () => {
  const Pokedex = require("pokeapi-js-wrapper");
  const P = new Pokedex.Pokedex();

  const getPokemon = async (id = 132) => {
    const pokemonJson = await P.getPokemonByName(id);
    let pokeName = pokemonJson.name;
    setPokemon(pokeName.charAt(0).toUpperCase() + pokeName.slice(1));
    setPokeImg(pokemonJson.sprites.front_default);
  };
  const [pokemon, setPokemon] = useState("");
  const [pokeImg, setPokeImg] = useState("");

  return (
    <>
      <img src={pokeImg} alt={`Pokemon ${pokemon}`} />
      <div>{pokemon}</div>
      <button onClick={() => getPokemon()}>Click</button>
    </>
  );
};

export default PokeCard;
