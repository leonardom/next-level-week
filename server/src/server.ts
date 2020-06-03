import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json(["Leo", "Vane", "Manu", "Vava", "Sammy", "Milka", "Barril"]);
});

app.listen(3333);
