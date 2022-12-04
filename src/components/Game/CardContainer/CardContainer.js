import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PokeCard from "../PokeCard/PokeCard";
import PokemonLib from "../../../modules/PokemonLib/PokemonLib";
import "./CardContainer.css";
import Scoreboard from "../Scoreboard";

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

  const shuffleCards = () => {
    const shuffledArray = [...cards];
    let swapIndex = shuffledArray.length;
    let randomIndex = 0;

    while (swapIndex !== 0) {
      randomIndex = Math.floor(Math.random() * swapIndex);
      swapIndex--;
      [shuffledArray[swapIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[swapIndex]];
    }
    setCards(shuffledArray);
  }

  // on click, shuffle
  const clickHandler = (e) => {
    shuffleCards();
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

  const genCards = async () => {
    const randomGen = Math.floor(Math.random() * 8);
    const [min, max] = pd.getPokeRange(randomGen);
    const subset = pd.getRandomSubset(16, min, max);
    const newCards = await pd.fetchPokeInfoFromIDs(subset);
    setCards(newCards);
  };
  useEffect(() => {
    genCards();
  }, []);

  return (
    <>
      <Scoreboard className="scoreboard" score= {score} bestScore = {bestScore}/>
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
