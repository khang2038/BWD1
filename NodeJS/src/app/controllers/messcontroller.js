class messcontroller{

    index(req,res){
         res.render('mess',{
          title: 'Messages',
          style:'mess.css',
          style2:'styleproduct.css',
          users:req.user
      });
    }

}

module.exports= new messcontroller;