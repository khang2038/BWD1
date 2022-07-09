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
                                        products: products,
                                        users:req.user
                                        })}
                    )
            .catch(next);
    }
    edit(req,res, next){
        product.findById(req.params.id)
            .then(Product=>res.render('edit',{
                                        title: 'Edit',
                                        style:'../../../css/styleproduct.css',
                                        style2:'../../../css/edit.css',
                                        script1:'../../../css/scriptproduct.js',
                                        script2:'jquery.waypoints.min.js',
                                        Product:mongooseToObject(Product),
                                        users:req.user
                                        }))   
    }
    }

module.exports= new productcontroller;