class productcontroller{

    index(req,res){
         res.render('product',{
          title: 'Product',
          style:'styleproduct.css',
          style2:'queriesproduct.css',
          script1:'scriptproduct.js',
          script2:'jquery.waypoints.min.js'
      });
    }

    show1(req,res){
      
    }

}

module.exports= new productcontroller;