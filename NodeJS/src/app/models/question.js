const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faq = new Schema({
    question : {type:String},
    slug : {type:String , name : 'Bed Pillow | Adaptive ergonomics to improve your sleep'},
})

module.exports = mongoose.model('faqs',faq);






















