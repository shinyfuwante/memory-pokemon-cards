import React from "react";
import { useState } from "react";

// need image
// name of pokemon
const PokeCard = ({pokeImg, pokemon}) => {

  return (
    <>
      <img src={pokeImg} alt={`Pokemon ${pokemon}`} />
      <div>{pokemon}</div>
    </>
  );
};

export default PokeCard;
