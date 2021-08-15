const mongoose = require('mongoose');
require("dotenv").config();

class Database {
    constructor() {
        this.mongo();
    }
    mongo() {
        try {
            this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            });
            console.log('Banco de dados Mongo conectado;');
        } catch (error) {
            console.log({err: error.stack || err, message: "Erro ao conectar no Banco de Dados."})
        }
        
    }
}

module.exports = new Database();