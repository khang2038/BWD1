const product=require('../models/product')
const {mongooseToObject}= require('../../util/mongoose')
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
    edit(req,res, next){
        product.findById(req.params.id)
            .then(Product=>res.render('edit',{
                                        title: 'Edit',
                                        style:'../../../css/styleproduct.css',
                                        style2:'../../../css/create.css',
                                        script1:'../../../css/scriptproduct.js',
                                        script2:'jquery.waypoints.min.js',
                                        style3:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
                                        script3:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
                                        Product:mongooseToObject(Product),
                                        }))   
    }
    }

module.exports= new productcontroller;