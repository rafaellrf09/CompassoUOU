const clienteService = require("../services/ClienteService");

class ClienteController {
    async index(_, res) {
        try {
            const clientes = await clienteService.findAll();

            return res.status(200).json({ body: clientes });
        } catch (error) {
            return res.status(400).json(error.stack || error);
        }
    }
    async create(req, res) {
        try {
            const { name, sexo, data_nasc, idade, idCidade } = req.body;

            if (!name || !sexo || !data_nasc || !idade || !idCidade) return res.status(400).json({ body: { message: "Missing required params: {name}, {sexo}, {data_nasc}, {idade}, {idCidade} " } });

            const createCliente = await clienteService.create({ name, sexo, data_nasc, idade, cidade: idCidade });

            return res.status(200).json({ body: createCliente });
        } catch (error) {
            return res.status(400).json(error.stack || error);
        }
    }
    async edit(req, res) {
        try {
            const idCliente = req.params.id;
            const dataUpdate = req.body;

            if (!idCliente) return res.status(400).json({ body: { message: "Missing required params: {id}" } });
            if (!dataUpdate) return res.status(400).json({ body: { message: "Missing required params: {name}, {sexo}, {data_nasc}, {idade}, {idCidade}" } });

            const updateCliente = await clienteService.update(idCliente, dataUpdate);

            return res.status(200).json({ body: updateCliente });
        } catch (error) {
            return res.status(400).json(error.stack || error);
        }
    }
    async remove(req, res) {
        try {
            const idCliente = req.params.id;
            const removeCliente = await clienteService.delete(idCliente);

            if (removeCliente === null) return res.status(400).json({ body: { message: "Cliente não encontrado." } });

            return res.status(200).json({ body: removeCliente });

        } catch (error) {
            return res.status(400).json(error.stack || error);
        }
    }

    async getById(req, res) {
        try {
            const {id} = req.params;
            if (!id) return res.status(400).json({ body: { message: "Missing required params: {id}" } });

            const getCliente = await clienteService.findOne(id);

            return res.status(200).json({ body: getCliente });
        } catch (error) {
            return res.status(400).json(error.stack || error);
        }
    }

    async getByName(req, res) {
        try {
            const { name } = req.query;
            if (!name) return res.status(400).json({ body: { message: "Missing required params: {name}" } });

            const getCliente = await clienteService.findByName(name);

            return res.status(200).json({ body: getCliente });
        } catch (error) {
            return res.status(400).json(error.stack || error);
        }
    }

}

module.exports = new ClienteController();