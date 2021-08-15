class CidadeService {
    constructor() {
        this.cidade = require("../database/schemas/cidadeSchema");
    }

    async findAll() {
        try {
            return await this.cidade.find();
        } catch (error) {
            throw { err: error.stack || error, message: "Erro ao buscar cidades." };
        }
    }

    async findByNameOrState({ name, state }) {
        try {
            if (name) return await this.cidade.find({ name });
            if (state) return await this.cidade.find({ state });

        } catch (error) {
            throw { err: error.stack || error, message: "Erro ao buscar cidade peno nome ou estado." };
        }
    }

    async create(dataCidade) {
        try {
            return await this.cidade.create(dataCidade);
        } catch (error) {
            console.log(error)
            throw { err: error.stack || error, message: "Erro ao criar cidade." };
        }
    }

    async findOne(idCidade) {
        try {
            return await this.cidade.findById(idCidade);
        } catch (error) {
            console.log(error)
            throw { err: error.stack || error, message: "Erro ao buscar cidade." };
        }
    }

    async delete(idCidade) {
        try {
            return await this.cidade.findOneAndDelete({ _id: idCidade });
        } catch (error) {
            console.log(error)
            throw { err: error.stack || error, message: "Erro ao deletar cidade." };
        }
    }

    async update(idCidade, dataUpdate) {
        try {
            return await this.cidade.findByIdAndUpdate(idCidade, dataUpdate, { new: true });
        } catch (error) {
            console.log(error)
            throw { err: error.stack || error, message: "Erro ao editar cidade." };
        }
    }

}

module.exports = new CidadeService();

