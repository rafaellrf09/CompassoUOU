const { Router } = require('express');

const clienteController = require("./controllers/ClienteController");
const cidadeController = require("./controllers/CidadeController");
const indexController = require("./controllers/IndexController");

const routes = Router();

//Rota com as rotas

routes.route("/").get(indexController.index);

//Rotas de Cliente
routes.route("/cliente")
    .get(clienteController.index)
    .post(clienteController.create)
routes.route("/cliente/name").get(clienteController.getByName)
routes.route("/cliente/:id")
    .get(clienteController.getById)
    .patch(clienteController.edit)
    .delete(clienteController.remove)


//Rotas de Cidade
routes.route("/cidade")
    .get(cidadeController.index)
    .post(cidadeController.create)
routes.route("/cidade/name").get(cidadeController.findByNameOrState)
routes.route("/cidade/state").get(cidadeController.findByNameOrState)
routes.route("/cidade/:id")
    .patch(cidadeController.edit)
    .delete(cidadeController.remove)



module.exports = routes;