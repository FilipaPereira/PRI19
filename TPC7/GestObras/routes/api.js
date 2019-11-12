var express = require('express')
var router = express.Router()

var Obras = require('../controllers/obras')

router.get('/obras', function(req, res) {
    if(req.query.periodo){
      Obras.filtraPeriodo(req.query.periodo)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else if (req.query.anoCriacao){
      Obras.filtraAno(req.query.anoCriacao)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else if (req.query.compositor){
      Obras.filtraCompositor(req.query.compositor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
    else {
      Obras.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
})

router.get('/compositores', function(req,res) {
    Obras.listaCompositores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/compositores/:nome', function(req,res) {
    Obras.obrasCompositor(req.params.nome)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;