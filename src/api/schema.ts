import { makeExecutableSchema } from "apollo-server-fastify";
import { typeDefs } from "./gqlSchema/typeDefs";
import { resolvers } from "./resolvers/resolvers";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
