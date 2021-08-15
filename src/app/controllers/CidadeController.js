const cidadeService = require("../services/CidadeService");

class CidadeController {

    async index(_, res) {
        try {
            const cidades = await cidadeService.findAll();

            return res.status(200).json({ body: cidades });
        } catch (error) {
            return res.status(400).json(error.stack || error);
        }
    }

    async findByNameOrState(req, res) {
        try {
            const getCidade = await cidadeService.findByNameOrState(req.query);
    
            return res.status(200).json({ body: getCidade });
            
        } catch (error) {
            return res.status(400).json(error.stack || error);
        }
    }

    async create(req, res) {
        try {
            const { name, state } = req.body;
            if (!name || !state) return res.status(400).json({ body: { message: "Missing required params: {name}, {state}" } });

            const createCidade = await cidadeService.create({ name, state });

            return res.status(200).json({ body: createCidade });

        } catch (error) {
            return res.status(400).json(error.stack || error);
        }
    }
    async edit(req, res) {
        try {
            const idCidade = req.params.id;
            const dataUpdate = req.body;

            if (!idCidade) return res.status(400).json({ body: { message: "Missing required params: {id}" } });
            if (!dataUpdate) return res.status(400).json({ body: { message: "Missing required params: {name} & {state}" } });

            const updateCidade = await cidadeService.update(idCidade, dataUpdate);

            return res.status(200).json({ body: updateCidade });
        } catch (error) {
            return res.status(400).json(error.stack || error);
        }
    }
    async remove(req, res) {
        try {
            const idCidade = req.params.id;
            const removeCidade = await cidadeService.delete(idCidade);

            if (removeCidade === null) return res.status(400).json({ body: { message: "Cidade não encontrada." } });

            return res.status(200).json({ body: removeCidade });

        } catch (error) {
            return res.status(400).json(error.stack || error);
        }
    }

}

module.exports = new CidadeController();