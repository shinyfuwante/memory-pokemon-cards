import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PokeCard from "../PokeCard/PokeCard";
import PokemonLib from "../../../modules/PokemonLib/PokemonLib";

const pd = PokemonLib();

const CardContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let isCanceled = false;
    const genCards = async () => {
      const [min, max] = pd.getPokeRange(6);
      const subset = pd.getRandomSubset(5, min, max);
      const newCards = await pd.fetchPokeInfoFromIDs(subset);
      if (!isCanceled) {
        setCards(newCards);
      }
    };
    genCards();
    return () => { 
     isCanceled = true;
    }
  }, []);

  return (
    <>
      {cards.map((card) => {
        return (
          <PokeCard key={card.img} pokeImg={card.img} pokemon={card.name} />
        );
      })}
    </>
  );
};

export default CardContainer;
