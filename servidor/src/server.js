const express = require('express');
const cors = require('cors');
const tarefasRoutes = require('./routes/tarefas'); // Importa as rotas

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear JSON

// Usar as rotas de tarefas
app.use('/tarefas', tarefasRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});