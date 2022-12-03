import React from "react";
import "./PokeCard.css"
// import { useState } from "react";


// click the card
// sets a clicked state
// if clicked again, set score to 0..
const PokeCard = ({pokeImg, pokemon}) => {
  return (
    <div className="pokemon-card">
      <img src={pokeImg} alt={`Pokemon ${pokemon}`} />
      <div>{pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</div>
    </div>
  );
};

export default PokeCard;
