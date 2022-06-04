const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const project_comment = new Schema({
    avatar : {type:String},
    name : {type:String},
    comment : {type:String},
})

module.exports = mongoose.model('project_comment',project_comment);
