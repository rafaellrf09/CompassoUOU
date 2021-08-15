const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ClienteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    data_nasc: {
        type: Date,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    cidade: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('clientes', ClienteSchema);