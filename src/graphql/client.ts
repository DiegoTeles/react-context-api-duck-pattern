import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://beta.pokeapi.co/graphql/v1beta'; // Change to your environment endpoint 🤘

const client = new GraphQLClient(endpoint, { headers: {} });

export default client;
