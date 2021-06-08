const users = require("../models/users");

const userController = {
  index: (request, response) => {
    response.send(users);
  },
  create: (request, response) => {
    const { name, email, age } = request.body;

    if (users.find((user) => user.email === email)) {
      response.send("E-mail já cadastrado");
    }

    users.push({ name, email, age });

    response.send("Usuário cadastrado com sucesso");
  },
  view: (request, response) => {
    const { email } = request.body;

    const user = users.find((user) => user.email === email);
    if (user) {
      response.send(user);
    } else response.send("usuario nao cadastrado");
  },
  view2: (request, response) => {
    const { id } = request.params;

    const user = users[id];
    if (user) {
      response.send(user);
    } else response.send("usuario nao cadastrado");
  },
  update: (request, response) => {
    const { email, name, age } = request.body;

    const user = users.find((user) => {
      user.email === email;
    });

    if (user) {
    } else response.send("usuario nao cadastrado");
  },
};

module.exports = userController;
