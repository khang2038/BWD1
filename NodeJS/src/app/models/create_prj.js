const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const project = new Schema({
    img_big: {type:String},
    img1 : {type:String},
    img2 : {type:String},
    img3 : {type:String},
    img4 : {type:String},
    img5 : {type:String},
    img6 : {type:String},
    main_title : {type:String},
    main_content : {type:String},
    money_pledged : {type:String},
    title_money_pledged: {type:String},
    amount_backers: {type:String},
    title_amount_backers: {type:String},

    createdAt:{type:Date,default:Date.now},
    updateAt: {type:Date,default:Date.now},
})

module.exports = mongoose.model('project',project);






















