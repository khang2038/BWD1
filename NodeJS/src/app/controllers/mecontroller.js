const product=require('../models/product')
class mecontroller{
    index(req,res,next){
        product.find({})
            .then(products=>{
                products=products.map(product => product.toObject() )
                products.reverse();
                res.render('me',{
                                        title: 'Me',
                                        style:'styleproduct.css',
                                        style2:'queriesproduct.css',
                                        script1:'scriptproduct.js',
                                        script2:'jquery.waypoints.min.js',
                                        style3:'https://cdn.rawgit.com/t4t5/sweetalert/v0.2.0/lib/sweet-alert.css',
                                        script3:'https://cdn.rawgit.com/t4t5/sweetalert/v0.2.0/lib/sweet-alert.min.js',
                                        products: products,
                                        users:req.user,
                                        })}
                    )
            .catch(next);
    }

}

module.exports= new mecontroller;