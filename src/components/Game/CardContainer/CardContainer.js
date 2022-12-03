import React from "react";
// import { useState } from "react";
import PokeCard from "../PokeCard/PokeCard";


const CardContainer = ({input}) => {
  // const [cardContainer, setCardContainer] = useState([]);
  return (<>
  {input.map(card => {
   return (
   <PokeCard
   key = {card.img}
   pokeImg = {card.img}
   pokemon = {card.name}
   />
   )
  })}
  </>
  )
};

export default CardContainer;