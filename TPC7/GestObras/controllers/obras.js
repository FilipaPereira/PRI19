var Obra = require('../models/obras')

module.exports.listar = () => {
    return Obra
            .find()
            .exec()
}

module.exports.filtraPeriodo = per => {
    return Obra
            .find({periodo: per})
            .exec()
}

module.exports.filtraAno = ano => {
    return Obra
            .find({anoCriacao: ano})
            .exec()
}

module.exports.filtraCompositor = comp => {
    return Obra
            .find({compositor:{$regex: comp}})
            .exec()
}

module.exports.listaCompositores = () => {
    return Obra
            .distinct('compositor')
            .exec()
}

module.exports.obrasCompositor = comp => {
    return Obra
            .aggregate([{$match:{compositor: {$regex: comp}}},{$sort:{nome:1}},{$project:{_id:0}}])
            .exec()
}
