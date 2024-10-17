const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    quantidade: {
        type: Number,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
    data_validade: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Product', productSchema);



