# React Project with Context API and Duck Pattern

This is a TypeScript project using `Vite` as a bundler, `Node.js v20.11.0`, and graphql-request to make calls to the API https://beta.pokeapi.co/graphql/v1beta. The application uses the Duck Pattern to manage the application state with `Context API`.

# Installation

To run the project locally, follow the steps below:

1. Clone the repository:

```bash
git clone https://github.com/DiegoTeles/react-context-api-duck-pattern.git
```

2. Install the dependencies:

```bash
cd react-context-api-duck-pattern
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Context API and Duck Pattern

The Context API is used to provide the application state globally, making it easier to access and update the state in different parts of the application. The Duck Pattern is a code organization pattern that groups actions, types, and the reducer related to a specific part of the state in a single file, making the code easier to maintain and understand.

## Middleware

The middleware is used to intercept and process actions before they reach the reducer, allowing additional logic to be added, such as asynchronous calls or error handling.

## Hooks

- _useCombineReducers_  
  The `useCombineReducers` hook combines the reducers from different parts of the application state, such as the reducers related to pokemons and the counter, making it easier to create the global state of the application.

- _useStore_  
  The `useStore` hook provides access to the global state of the application and the dispatch function, allowing consuming components to access and update the application state.

### Conclusion

The use of the Context API with the Duck Pattern makes it easier to organize and maintain the application state in React projects, making it more scalable and easier to understand.
