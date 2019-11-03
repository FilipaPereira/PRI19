var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid') 


var myBD = __dirname + "/../data/alunos.json"

/* GET listagem de alunos. */
router.get('/alunos', function(req, res) {
  jsonfile.readFile(myBD, (erro, alunos) => {
    if (!erro) {
      res.render('index', { lista: alunos });
    }
    else {
      res.render('error', { error: erro })
    }
  })
});


/* GET informação de dado aluno. */
router.get('/alunos/:idAluno', function(req,res,next) {
  var id = req.params.idAluno
    jsonfile.readFile(myBD, (erro, alunos) => {
      if (!erro) {
        var index = alunos.findIndex(a => a.ident == id)
        if(index > -1){
          var al = alunos[index]
          res.render('dados-aluno', { aluno: al , notas: al.notas})
        }
      }
      else {
        res.render('error', { error: erro })
      }
    })
})

/* POST insere aluno. */
router.post('/alunos', function(req,res) {
  var registo = req.body

  jsonfile.readFile(myBD, (erro, alunos) => {
    if (!erro){
      registo['notas'] = []
      //console.log(JSON.stringify(registo))
      alunos.push(registo)
      jsonfile.writeFile(myBD, alunos, erro => {
        if (erro) console.log(erro)
        else console.log('Aluno registado com sucesso')
      })
    }
    res.render('index.pug', { lista: alunos })
  })  
}) 

/* POST insere nota de dado aluno. */
router.post('/alunos/:idAluno/notas', function(req,res) {
  var id = req.params.idAluno

  jsonfile.readFile(myBD, (erro, alunos) => {
    if (!erro) {
      var index = alunos.findIndex(a => a.ident == id)
      if (index > -1){
        var al = alunos[index]
        var nota = req.body
        //console.log(JSON.stringify(nota))
        //console.log(JSON.stringify(al.notas))
        al.notas.push(nota)
        jsonfile.writeFile(myBD, alunos, erro => {
          if (erro) console.log(erro)
          else console.log('Nota registada com sucesso')
        })
      }
    }
    else {
      res.render('error', { error: erro })
    }
  }) 
  res.redirect('/alunos/' + id)
})


/* DELETE apaga dado aluno. */
router.delete('/alunos/:idAluno', function(req,res){
  var id = req.params.idAluno

  jsonfile.readFile(myBD, (erro, alunos) =>{
    var index = alunos.findIndex(a => a.ident == id)
    if (!erro) {
      if (index > -1) {
        alunos.splice(index, 1)
        jsonfile.writeFile(myBD, alunos, erro => {
          if (erro) console.log(erro)
          else console.log('Aluno removido com sucesso.')
        })
      }
      else {
        console.log('Não encontrou aluno...')
      }
    }
    else {
      res.render('error', { error: erro })
    }
    res.render('index.pug', { lista: alunos })
  })
})


/* DELETE apaga determinada nota de dado aluno. */
router.delete('/alunos/:idAluno/notas/:indicador', function(req,res){
  var id = req.params.idAluno
  var idNota = req.params.indicador
  //console.log('ID do aluno: ' + id)
  //console.log('ID da nota: ' + idNota)
  jsonfile.readFile(myBD, (erro, alunos) =>{
    var index = alunos.findIndex(a => a.ident == id)
    if (!erro) {
      if (index > -1) {
        var al = alunos[index]
        var indexNota = al.notas.findIndex(n => n.indicador == idNota)
        if(indexNota > -1){
          al.notas.splice(indexNota, 1)
          jsonfile.writeFile(myBD, alunos, erro => {
            if (erro) console.log(erro)
          else console.log('Nota removida com sucesso.')
          })
        }
        else {
          console.log('Não encontrou nota...')
        }
      }
      else {
        console.log('Não encontrou aluno...')
      }
    }
    else {
      res.render('error', { error: erro })
    }
    res.render('index.pug', { lista: alunos })
  })
})



module.exports = router;
