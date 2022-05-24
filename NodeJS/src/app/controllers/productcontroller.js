class productcontroller{

    index(req,res){
         res.render('product',{
          title: 'Product',
          style:'styleproduct.css',
          style2:'queriesproduct.css'
      });
    }

    show(req,res){
    }

}

module.exports= new productcontroller;