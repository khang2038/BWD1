class ecommercecontroller{

    index(req,res){
         res.render('ecommerce',{
          title: 'Ecommerce',
          style:'styleproduct.css',
          style2:'queriesproduct.css',
          script1:'scriptproduct.js',
          script2:'jquery.waypoints.min.js'
      });
    }

}

module.exports= new ecommercecontroller;