const product=require('../models/product')
class productcontroller{
    index(req,res,next){
        product.find({})
            .then(products=>{
                products=products.map(product => product.toObject() )
                products.reverse();
                res.render('product',{
                                        title: 'Product',
                                        style:'styleproduct.css',
                                        style2:'queriesproduct.css',
                                        script1:'scriptproduct.js',
                                        script2:'jquery.waypoints.min.js',
                                        products: products
                                        })}
                    )
            .catch(next);
    }
    edit(req,res,next){
           res.render('edit',{
          title: 'edit',
          style:'styleproduct.css',
          style2:'queriesproduct.css',
          script1:'scriptproduct.js',
          script2:'jquery.waypoints.min.js'
      })    
    }
}

module.exports= new productcontroller;