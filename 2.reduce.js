const calculateTotalPokemonWeight = (pokemons) => {
  return pokemons.reduce((totalWeight, currentPokemon) => {
    return totalWeight + parseFloat(currentPokemon.weight);
  }, 0);
};

const calculateAverageSpawnChance = (pokemons) => {
  const summedSpawnChance = pokemons.reduce(
    (totalSpawnChance, currentPokemon) => {
      return totalSpawnChance + currentPokemon.spawn_chance;
    },
    0
  );
  return summedSpawnChance / pokemons.length;
};

const calculateTotalEggDistance = (pokemons) => {
  return pokemons
    .filter((pokemon) => {
      return pokemon.egg !== "Not in Eggs";
    })
    .map((pokemon) => parseFloat(pokemon.egg))
    .reduce((totalDistance, currentNum) => {
      return totalDistance + currentNum;
    }, 0);
};

// const calculateTotalEggDistance = (pokemons) => {};

// {
//     id: 99,
//     num: '099',
//     name: 'Kingler',
//     img: 'http://www.serebii.net/pokemongo/pokemon/099.png',
//     type: [ 'Water' ],
//     height: '1.30 m',
//     weight: '60.0 kg',
//     candy: 'Krabby Candy',
//     egg: 'Not in Eggs',
//     spawn_chance: 0.062,
//     avg_spawns: 6.2,
//     spawn_time: '03:44',
//     multipliers: null,
//     weaknesses: [ 'Electric', 'Grass' ],
//     prev_evolution: [ [Object] ]
//   },

module.exports = {
  calculateTotalPokemonWeight,
  calculateAverageSpawnChance,
  calculateTotalEggDistance,
};
