var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {

  axios.get('http://clav-api.dglab.gov.pt/api/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados => {
      res.render('index', { lista: dados.data })
    })
    .catch(erro => {
      res.render('error',{error: erro})
    })
  
});


router.get('/tipologia/:id', function(req, res, next) {

  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+ req.params.id +'?info=completa&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados => {
      axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+ req.params.id +'/elementos?info=completa&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
        .then(entidades => {
          res.render('info-tipologia', { lista: dados.data, ents: entidades.data })
        })
        .catch(erro => {
          res.render('error',{error: erro})
        })
    })
    .catch(erro => {
      res.render('error',{error: erro})
    })
  
});

router.get('/entidades/:id', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/entidade/'+ req.params.id +'?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados => {
      res.render('info-entidade', { lista: dados.data})
    })
    .catch(erro => {
      res.render('error',{error: erro})
    })
  
});

module.exports = router;
