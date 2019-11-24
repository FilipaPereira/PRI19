var express = require('express');
var router = express.Router();
const fs = require('fs')

var Ficheiros = require('../controllers/ficheiros')
var Ficheiro = require('../models/ficheiro')

var multer = require('multer')
var upload = multer({dest: 'uploads/'})

/* GET users listing. */
router.get('/ficheiros', function(req, res, next) {
  Ficheiros.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});


router.post('/ficheiros', upload.array('ficheiro'), function(req, res){
  console.log(JSON.stringify(req.body))
  console.log(JSON.stringify(req.files))

  for(var i = 0; i < req.files.length; i++){
    var oldPath = __dirname + '/../' + req.files[i].path
    var newPath = __dirname + '/../public/data/' + req.files[i].originalname

    if(req.files[i].mimetype.startsWith('image')){
      newPath = __dirname + '/../public/images/' + req.files[i].originalname
    }
  
    fs.rename(oldPath,newPath,function(err) {
      if(err) throw err
    })

    var data = new Date()

    var novoFicheiro = new Ficheiro(
      {
        data: data.toISOString(),
        desc: req.body.desc[i],
        name: req.files[i].originalname,
        path: newPath,
        mimetype: req.files[i].mimetype,
        size: req.files[i].size
      });
  
      novoFicheiro.save(function(err, ficheiro){
        if(err) res.jsonp(err)
        else
          console.log('Ficheiro ' + ficheiro.name + ' gravado com sucesso.')
      })
    }
    res.redirect('/')
})

module.exports = router;
