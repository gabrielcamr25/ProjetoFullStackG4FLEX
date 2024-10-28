const express = require('express')
const router = express.Router()
const db = require('../dataBase/db')

router.get('/', (req, res) => {
  db.query('SELECT * FROM Tarefa', (err, results) => {
      if (err) {
          return res.status(500).json(err);
      }
      res.json(results);
  });
});

// Rota para adicionar uma nova tarefa
router.post('/', (req, res) => {
  const { nome } = req.body;
  db.query('INSERT INTO Tarefa (nome) VALUES (?)', [nome], (err, results) => {
      if (err) {
          return res.status(500).json(err);
      }
      res.status(201).json({ id: results.insertId, nome });
  });
});

module.exports = router;