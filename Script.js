const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Variáveis para armazenar dados
let orders = []; // Pedidos do dia
let menuItems = [
    { name: "Pizza Simples", price: 24.90 },
    { name: "Calzone Frango", price: 11.90 },
    { name: "Calzone Chocolate", price: 14.90 },
];

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas para gerenciar pedidos
app.post('/panel', (req, res) => {
    const newOrder = req.body;
    orders.push(newOrder);
    res.status(201).json({ message: 'Pedido recebido com sucesso!' });
});

app.get('/panel', (req, res) => {
    res.json(orders);
});

// Rotas para gerenciar o cardápio
app.get('/menu', (req, res) => {
    res.json(menuItems);
});

app.post('/menu', (req, res) => {
    menuItems = req.body;
    res.json({ message: 'Cardápio atualizado com sucesso!' });
});

// Rota para relatório
app.get('/report', (req, res) => {
    const totalSales = orders.reduce((total, order) => total + order.total, 0);
    res.json({
        totalOrders: orders.length,
        totalSales,
        orders,
    });
});

// Limpar pedidos à meia-noite
setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        orders = [];
        console.log("Pedidos do dia foram resetados.");
    }
}, 60000); // Verifica a cada minuto

// Servindo arquivos do painel e cardápio
app.get('/panel', (req, res) => {
    res.sendFile(path.join(__dirname, 'panel.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'menu.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
