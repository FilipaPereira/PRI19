var mongoose = require('mongoose')

pubSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: String,
    id: String,
    authors: [String],
    title: String,
    booktitle:String,
    address: String,
    year: String,
    month: String,
    doi: String
})


module.exports = mongoose.model('pub', pubSchema);