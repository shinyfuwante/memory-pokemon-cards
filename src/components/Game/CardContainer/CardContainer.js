import React from "react";
import { useState } from "react";

const CardContainer = () => {

  const getPokemon = async (id = 132) => {
    const pokemonJson = await P.getPokemonByName(id);
    let pokeName = pokemonJson.name;
    setPokemon(pokeName.charAt(0).toUpperCase() + pokeName.slice(1));
    setPokeImg(pokemonJson.sprites.front_default);
  };

  const [pokemon, setPokemon] = useState("");
  const [pokeImg, setPokeImg] = useState("");
  const [cardContainer, setCardContainer] = useState([]);
  return (<>
  <button onClick={() => getPokemon()}>Click</button>
  </>
  )
};

export default CardContainer;