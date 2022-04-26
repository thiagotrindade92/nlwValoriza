import express, { request, response } from "express";

const app = express();

app.get("/home", (request, response) => {
  return response.send("Olá");
});

app.listen(3000, () => console.log("Serve is Running NLW"));