const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faq = new Schema({
    question : {type:String},
})

module.exports = mongoose.model('faqs',faq);






















