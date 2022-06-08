const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const faq = new Schema({
    question : {type:String},
    slug : {type:String , slug : 'question'},
})

module.exports = mongoose.model('faqs',faq);






















