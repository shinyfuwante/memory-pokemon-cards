import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PokeCard from "../PokeCard/PokeCard";
import PokemonLib from "../../../modules/PokemonLib/PokemonLib";
import "./CardContainer.css";

const pd = PokemonLib();

const CardContainer = () => {
  const [cards, setCards] = useState([]);
  const [clickedTracker, setClickedTracker] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const gameLoss = () => {
    const newBestScore = Math.max(bestScore, score);
    setBestScore(newBestScore);
    setScore(0);
    setClickedTracker([]);
  };

  const incrementScore = () => {
    setScore((score) => score + 1);
    const newBestScore = Math.max(bestScore, score + 1);
    setBestScore(newBestScore);
  };

  // when a card is clicked, push the card into the array
  // if the card is present in the array, empty the array, reset score to 0, update max score if required
  const clickHandler = (e) => {
    const card = e.currentTarget;
    // use current target to avoid pushing img or text div
    if (clickedTracker.includes(card)) {
      // handle lose here
      gameLoss();
      console.log("Clicked existing card");
    } else {
      const newTracker = [...clickedTracker];
      newTracker.push(card);
      setClickedTracker(newTracker);
      incrementScore();
    }
  };

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
    };
  }, []);

  return (
    <>
      Score: {score} 
      Best Score: {bestScore}
      <div className="game-container">
        {cards.map((card) => {
          return (
            <PokeCard
              clickHandler={clickHandler}
              key={card.name}
              pokeImg={card.img}
              pokemon={card.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
