class ClienteService {
    constructor() {
        this.cliente = require("../database/schemas/clienteSchema");
    }

    async findAll() {
        try {
            return await this.cliente.find();
        } catch (error) {
            throw { err: error.stack || error, message: "Erro ao buscar clientes." };
        }
    }

    async create(datacliente) {
        try {
            return await this.cliente.create(datacliente);
        } catch (error) {
            console.log(error)
            throw { err: error.stack || error, message: "Erro ao criar cliente." };
        }
    }

    async findOne(idcliente) {
        try {
            return await this.cliente.findById(idcliente);
        } catch (error) {
            console.log(error)
            throw { err: error.stack || error, message: "Erro ao buscar cliente." };
        }
    }

    async findByName(name) {
        try {
            return await this.cliente.find({ name });
        } catch (error) {
            console.log(error)
            throw { err: error.stack || error, message: "Erro ao buscar cliente pelo nome." };
        }
    }

    async delete(idcliente) {
        try {
            return await this.cliente.findOneAndDelete({ _id: idcliente });
        } catch (error) {
            console.log(error)
            throw { err: error.stack || error, message: "Erro ao deletar cliente." };
        }
    }

    async update(idcliente, dataUpdate) {
        try {
            return await this.cliente.findByIdAndUpdate(idcliente, dataUpdate, { new: true });
        } catch (error) {
            console.log(error)
            throw { err: error.stack || error, message: "Erro ao editar cliente." };
        }
    }
}

module.exports = new ClienteService;