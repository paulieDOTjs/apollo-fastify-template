import fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

export const app = fastify();

app.get("/", async (_req, res) => {
  res.redirect(301, "/graphql");
});

app.post("/", (_req, res) => {
  res.redirect(308, "/graphql");
});

app.get("/health", (_req, res) => {
  res.send("Ok");
});

export const port = parseInt(process.env.PORT as string) || 4000;
