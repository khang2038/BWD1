class donatecontroller{

    index(req,res){
         res.render('donate',{
          title: 'Donate',
          style:'styledonate.css',
          style2:''
      });
    }

    show(req,res){
    }

}

module.exports= new donatecontroller;