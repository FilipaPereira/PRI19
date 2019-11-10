var express = require('express');
var router = express.Router();

var Filmes = require('../controllers/filmes')

/* GET: listagem de filmes */
router.get('/filmes', function(req, res) {
    Filmes.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* GET: informação de dado filme */
router.get('/filmes/:id', function(req,res){
    Filmes.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* POST: inserir filme */
router.post('/filmes', function(req,res){
    Filmes.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* DELETE: apagar filme */
router.delete('/filmes/:id', function(req,res){
    Filmes.apagar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;
