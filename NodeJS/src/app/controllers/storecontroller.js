const Product=require('../models/product')
class storecontroller{

    index(req,res,next){
        const formdata=req.body;
        const product= new Product(formdata);
        product.save()
            .then(()=> res.redirect('product'))
            .catch(error => {

            })
        }

}

module.exports= new storecontroller;