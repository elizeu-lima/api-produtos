const express = require("express");
const app = express();

const produtos = [
    { id: 1, nome: 'Produto A', quantidade: 10, preco: 19.99 },
    { id: 2, nome: 'Produto B', quantidade: 5, preco: 29.99 },
    { id: 3, nome: 'Produto C', quantidade: 20, preco: 9.99 }
];

app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

app.listen(3000, ()=> {
    console.log('Api rodando na porta 3000');
});

module.exports = app;