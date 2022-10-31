const Pokedex = require("pokeapi-js-wrapper");
const dex = new Pokedex.Pokedex();

// Amt of pokemon IDs as of gen 8 + legends of arceus
const MIN = 1;
const MAX = 905;