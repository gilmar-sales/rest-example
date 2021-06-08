const express = require("express");

const app = express();

app.use(express.json());

const userController = require("./controllers/userController");

const primeiroMiddleware = (request, response, next) => {
  console.log(request.headers);
  console.log(request.body);

  response.status(401).send("não autorizado");

  return next();
};

const segundaMiddleware = (request, response, next) => {
  return console.log("segundo");
};

app.get("/users", userController.index);
app.post("/users", userController.create);
app.get("/users/:id", userController.view2);
app.get("/user", userController.view);
app.put("/user", userController.update);

app.listen(3000, () => console.log("rodando em http://localhost:3000/"));
