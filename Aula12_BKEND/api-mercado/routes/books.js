const express = require('express');
const Product = require('../models/Product'); // Importa o modelo Product
const router = express.Router();

// Rota POST para cadastrar produtos
router.post('/', async (req, res) => {
    const { nome, quantidade, valor, data_validade } = req.body;

    try {
        const newProduct = new Product({ nome, quantidade, valor, data_validade });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar produto', error });
    }
});

// Rota GET para listar todos os produtos
router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // busca todos os produtos
        res.status(200).json(products); // retorna a lista de produtos
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os produtos', error });
    }
});

// Exporte o roteador
module.exports = router;

