import { ApolloServer } from "apollo-server-fastify";
import { app, port } from "./fastify/fastify";

import { schema } from "./api/schema";

const server = new ApolloServer({
  schema,

  tracing: process.env.NODE_ENV === "development",
  debug: process.env.NODE_ENV === "development",

  formatError: (err) => {
    if (
      process.env.NODE_ENV !== "development" &&
      err.message.startsWith("Database Error: ")
    ) {
      return new Error("Internal server error");
    }
    return err;
  },
});

(async function () {
  app.register(server.createHandler());
  await app.listen(port);
  console.log(
    "Your app is running at local http://localhost:" + port + "/graphql"
  );
})();
