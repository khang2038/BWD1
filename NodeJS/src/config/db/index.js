const mongoose = require('mongoose');

async function connect(){

    try{
        await mongoose.connect('mongodb://localhost:27017/BWD1',{
                useNewUrlParser:true,
                useUnifiedTopology:true
        });
        console.log('Connected');
    }catch(error){
        console.log('fail');
    }

}

module.exports={connect}