import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
// NOTE: Dataset
import db from './_db.js';

// NOTE: RESOLVERS
// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    // SECTION Games QRY
    games_QRY_ALL: () => db.games,
    game_QRY_BY_ID: (_, args) => {
      return db.games.find((game) => game.id == args.id);
    },

    // SECTION Reviews QRY
    reviews_QRY_ALL: () => db.reviews,
    review_QRY_BY_ID: (_, args) => {
      return db.reviews.find((review) => review.id == args.id);
    },

    // SECTION Author QRY
    authors_QRY_ALL: () => db.authors,
    author_QRY_BY_ID: (_, args) => {
      return db.authors.find((author) => author.id == args.id);
    },
  },

  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id);
    },
  },

  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id);
    },
  },

  //   MUTATION
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id != args.id);
      return db.games;
    },

    addGame(_, args) {
      let newGame = { ...args.vGame, id: Math.floor(Math.random() * 1000) };
      db.games.push(newGame);

      return newGame;
    },

    updateGame(_, args) {
      db.games = db.games.map((g) => {
        if (g.id == args.id) return { ...g, ...args.edit };
        return g;
      });

      return db.games.find((g) => g.id == args.id);
    },
  },
};

//NOTE: SERVER SETUP
// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
