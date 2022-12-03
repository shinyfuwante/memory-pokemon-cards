const Pokedex = require("pokeapi-js-wrapper");
const dex = new Pokedex.Pokedex();

// Amt of pokemon IDs as of gen 8 + legends of arceus
const MIN = 1;
const GEN1_MAX = 151;
const GEN2_MIN = GEN1_MAX + 1;
const GEN2_MAX = 251;
const GEN3_MIN = GEN2_MAX + 1;
const GEN3_MAX = 386;
const GEN4_MIN = GEN3_MAX + 1;
const GEN4_MAX = 493;
const GEN5_MIN = GEN4_MAX + 1;
const GEN5_MAX = 649;
const GEN6_MIN = GEN5_MAX + 1;
const GEN6_MAX = 721;
const GEN7_MIN = GEN6_MAX + 1;
const GEN7_MAX = 809;
const GEN8_MIN = GEN7_MAX + 1;
const MAX = 905;


// get a random set of pokemon from a certain gen
const PokemonLib = () => {
  // obtain the range for the generation of pokemon (can expand upon to do multiple gens)
  const getPokeRange = (generation) => {
    switch (generation) {
      case 1:
        return [MIN, GEN1_MAX];
      case 2:
        return [GEN2_MIN, GEN2_MAX];
      case 3:
        return [GEN3_MIN, GEN3_MAX];
      case 4:
        return [GEN4_MIN, GEN4_MAX];
      case 5:
        return [GEN5_MIN, GEN5_MAX];
      case 6:
        return [GEN6_MIN, GEN6_MAX];
      case 7:
        return [GEN7_MIN, GEN7_MAX];
      case 8:
        return [GEN8_MIN, MAX];
      default:
        return [MIN, MAX];
    }
  };

  const getIdList = (min, max) => {
    let idList = [];
    for (let i = min; i < max; i++) {
      idList.push(i);
    }

    return idList;
  };

  const fetchPokeInfoFromIDs = async (idList) => {
    const fetchedPokes = await Promise.all(
      await idList.map(async (id) => {
        return await dex.getPokemonByName(id);
      })
    );
    const processedPokes = fetchedPokes.map((pokemon) => {
      return {
        name: pokemon.species.name,
        img: pokemon.sprites.front_default,
      };
    });
    return processedPokes;
  };

  const getRandomSubset = (num, min, max) => {
    let subset = [];
    while (subset.length < num) {
      const id = Math.floor(Math.random() * (max - min) + min);
      if (subset.includes(id)) continue;
      subset.push(id);
    }
    return subset;
  };
  // get an amount of cards (start with 4) and return that amount of pokes (uniquely)
  return {
    getPokeRange,
    getIdList,
    fetchPokeInfoFromIDs,
    getRandomSubset,
  };
};

export default PokemonLib;
