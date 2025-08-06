// Importar o Express
const express = require('express');
const app = express();

// Middleware para aceitar JSON no corpo
app.use(express.json());

// Rota GET só para teste
app.get('/', (req, res) => {
    res.send('API para inverter texto');
});

// Rota POST para inverter texto
app.post('/inverter', (req, res) => {
    const { texto } = req.body; // Aqui usamos o nome correto: "texto"

    // Verifica se o campo existe e não está vazio
    if (texto === undefined || texto.trim() === '') {
        return res.status(400).json({ error: 'Texto é obrigatório.' });
    }

    // Verifica se é uma string
    if (typeof texto !== 'string') {
        return res.status(400).json({ error: 'Texto deve ser uma string.' });
    }

    // Inverte o texto
    const textoInvertido = texto.split('').reverse().join('');

    // Retorna o resultado
    return res.status(200).json({
        original: texto,
        invertido: textoInvertido
    });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});
