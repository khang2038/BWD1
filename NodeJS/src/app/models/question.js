const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const faq = new Schema({
    //lấy slug của create_prj , gán trước truyền sau
    slug_temp : {type:String},
    // 
    question : {type:String},
    slug : {type:String},
})

module.exports = mongoose.model('faqs', faq);






















