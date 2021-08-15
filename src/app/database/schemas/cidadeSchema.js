const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CidadeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
}

);

module.exports = mongoose.model('cidades', CidadeSchema);