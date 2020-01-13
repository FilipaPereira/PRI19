var Pub = require('../models/Pub')

module.exports.listar = () =>{
    return Pub
            .find({},{id:1,title:1,year:1,type:1,_id:0})
            .exec()
}

module.exports.consultar = id =>{
    return Pub
            .find({id: id})
            .exec()
}

module.exports.listaTipos = () =>{
    return Pub
            .distinct('type')
            .exec()
}

module.exports.filtraTipo = t =>{
    return Pub
            .find({type: t})
            .exec()
}

module.exports.filtraTipoAno = (t,ano) =>{
    return Pub
            .find({type: t, year: {$gt: ano}})
            .exec()
}

module.exports.listaAutores = () =>{
    return Pub
            .aggregate([{$unwind: "$authors"},{$group: {_id: "$authors"}},{$sort: {_id: 1}}])
            .exec()
}

module.exports.listaAutoresPub = a =>{
    return Pub
            .aggregate([{$unwind: "$authors"},{$match: {authors: a}}])
            .exec()
}
