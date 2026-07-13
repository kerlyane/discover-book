const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Página de doação
router.get('/doar', (req, res) => {
  res.render('doar', {
    usuario: req.session.usuario_nome || null,
    sucesso: req.query.sucesso || null,
    erro: req.query.erro || null,
    pagina: "doar"
  });
});

// Enviar doação
router.post('/doar', (req, res) => {
  const {
    nome,
    email,
    telefone,
    livro,
    categoria,
    quantidade
  } = req.body;

  db.run(
    `INSERT INTO doacoes
    (nome, email, telefone, livro, categoria, quantidade)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [nome, email, telefone, livro, categoria, quantidade],
    (err) => {
      if (err) {
        console.log(err);
        return res.redirect('/doar?erro=1');
      }

      res.redirect('/doar?sucesso=1');
    }
  );
});

module.exports = router;