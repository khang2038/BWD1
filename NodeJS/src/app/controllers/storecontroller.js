const Product=require('../models/product')
class storecontroller{

    index(req,res,next){
        const formdata=req.body;
        const product= new Product(formdata);
        product.save();
        res.send('save')
            
    }


}

module.exports= new storecontroller;