const product=require('../models/product')
class productcontroller{

    

    index(req,res,next){
        product.find({})
            .then(products=>{
                products=products.map(product => product.toObject() )
                res.render('product',{
                                        title: 'Product',
                                        style:'styleproduct.css',
                                        style2:'queriesproduct.css',
                                        script1:'scriptproduct.js',
                                        script2:'jquery.waypoints.min.js',
                                        products:products
                                        })}
                    )
            .catch(next);
    }

    show(req,res){
      
    }

}

module.exports= new productcontroller;