var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET: listagem de filmes */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:3711/api/filmes')
    .then(dados => {
      res.render('lista-filmes', {lista: dados.data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

/* GET: form para inserir filme */
router.get('/inserir', function(req, res){
  res.render('form-filme')
})

/* GET: informação de dado filme */
router.get('/:id', function(req, res){
  axios.get('http://localhost:3711/api/filmes/' + req.params.id)
    .then(dados => {
      console.log(dados.data)
      res.render('info-filme', {filme: dados.data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

/* POST: inserir filme */
router.post('/', function(req, res) {
  axios.post('http://localhost:3711/api/filmes', req.body)
    .then(dados => {
      res.redirect('/')
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

/*DELETE: apagar filme */
router.delete('/:id', function(req,res) {
  axios.delete('http://localhost:3711/api/filmes/' + req.params.id)
    .then(dados => {
      res.send('/filmes')
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

module.exports = router;
