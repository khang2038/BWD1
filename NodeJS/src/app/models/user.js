const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  email : {type:String},
  password : {type:String},
  name_author : {type:String},
  img_author : {type:String},
});
module.exports = mongoose.model('user',user);