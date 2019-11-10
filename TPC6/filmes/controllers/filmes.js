var Filme = require('../models/filmes')
var mongoose = require('mongoose')

module.exports.listar = () => {
    return Filme
            .find()
            .exec()
}

module.exports.consultar = ident => {
    return Filme
            .findOne({_id:ident})
            .exec()
}

module.exports.inserir = f => {
    f._id = mongoose.Types.ObjectId()

    var newCast = f.cast.filter(function(c){return c!=''});
    f.cast = newCast

    var newGenres = f.cast.filter(function(g){return g!=''});
    f.genres = newGenres

    var novo = new Filme (f)
    return novo.save()
}

module.exports.apagar = ident => {
    return Filme
            .deleteOne({_id: ident})
            .exec()
}