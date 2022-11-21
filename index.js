const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require('./Schema/TypeDefs');
const { resolvers } = require('./Schema/Resolvers');

const express = require("express");
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(res => {
    server.applyMiddleware({ app });
    app.listen({ port: 3001}, () => 
      console.log("Server running on port 3001")
    );  
  });