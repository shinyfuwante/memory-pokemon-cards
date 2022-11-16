import PokemonLib from "./PokemonLib";

const lib = PokemonLib();
test('returns the correct range for gen 6', () => {
    expect(lib.getPokeRange(6)).toStrictEqual([650, 721]);
});

test('get 5 pokemon within the given range', async () => {
    const [min, max] = lib.getPokeRange(6);
    const subset = lib.getRandomSubset(5, min, max);
    subset.filter(pokeID => pokeID > min && pokeID < max );
    expect(subset.length).toStrictEqual(5);
    console.log(subset);
    const fetchedPokes = await lib.fetchPokeInfoFromIDs(subset);
    console.log(fetchedPokes);
    
});
