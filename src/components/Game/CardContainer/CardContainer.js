import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PokeCard from "../PokeCard/PokeCard";
import PokemonLib from "../../../modules/PokemonLib/PokemonLib";
import "./CardContainer.css";

const pd = PokemonLib();

const CardContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let isCanceled = false;
    const genCards = async () => {
      const [min, max] = pd.getPokeRange(6);
      const subset = pd.getRandomSubset(16, min, max);
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
    <div className="game-container">
      {cards.map((card) => {
        return (
          <PokeCard key={card.img} pokeImg={card.img} pokemon={card.name} />
        );
      })}
    </div>
  );
};

export default CardContainer;
