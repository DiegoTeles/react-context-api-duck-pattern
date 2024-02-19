import { gql } from 'graphql-request';

export const GET_POKEMONS_QUERIE = gql`
  query samplePokeAPIquery {
    # Gets all the pokemon belonging to generation 3
    gen3_species: pokemon_v2_pokemonspecies(
      where: { pokemon_v2_generation: { name: { _eq: "generation-iii" } } }
      order_by: { id: asc }
    ) {
      name
      id
    }

    # You can run multiple queries at the same time
    # Counts how many pokemon were released for each generation
    generations: pokemon_v2_generation {
      name
      pokemon_species: pokemon_v2_pokemonspecies_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
