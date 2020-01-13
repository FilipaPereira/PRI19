var express = require('express');
var router = express.Router();
var Pub = require('../controllers/Pubs')



/* GET home page. */
router.get('/pubs', function(req, res, next) {
  if(req.query.type && req.query.year){
    Pub.filtraTipoAno(req.query.type, req.query.year)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }else if(req.query.type){
    Pub.filtraTipo(req.query.type)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }else if(req.query.autor){
    Pub.listaAutoresPub(req.query.autor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  } else {
    Pub.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
});

router.get('/pubs/:id', function(req, res, next) {
    Pub.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/types', function(req, res, next) {
    Pub.listaTipos()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/autores', function(req, res, next) {
    Pub.listaAutores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
