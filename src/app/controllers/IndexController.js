class IndexController {
    async index(_, res) {
        const routes = {
            get: {
                cidade_by_name: ["http://localhost:3333/cidade/name", "queryParams: name"],
                cidade_by_state: ["http://localhost:3333/cidade/state", "queryParams: state"],
                cidades: ["http://localhost:3333/cidade"],
                clientes: ["http://localhost:3333/cliente"],
                cliente: ["http://localhost:3333/cliente/:id", "urlParams: id"],
                cliente_by_name: ["http://localhost:3333/cliente/name", "queryParams: name"],
            },
            post: {
                cliente: ["http://localhost:3333/cliente", "json: name, sexo, data_nasc, idade, idCidade"],
                cidade: ["http://localhost:3333/cidade", "json: name, state"]
            },
            patch: {
                cliente: ["http://localhost:3333/cliente/:id", "urlParams: id, json: name, sexo, data_nasc, idade, idCidade"],
                cidade: ["http://localhost:3333/cidade/:id", "urlParams: id, json: name, state"]
            },
            delete: {
                cliente: ["http://localhost:3333/cliente/:id", "urlParams: id"],
                cidade: ["http://localhost:3333/cidade/:id", "urlParams: id"]
            }
        }

        return res.status(200).json(routes);
    }
}

module.exports = new IndexController();