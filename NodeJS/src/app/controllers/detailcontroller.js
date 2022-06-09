class detailcontroller{

    index(req,res){
          res.render('detail',{
          title: 'Project',
<<<<<<< HEAD
          style:'styledetail.css',
          style2:'responsivedetail.css',
          users:req.user
=======
          style: 'styledetail.css',
          style2: 'responsivedetail.css'
>>>>>>> 0c269c525e3a36c2af467ffe7ca3bd9985c486cd
      });
    }

    show(req,res){
    }

}

module.exports= new detailcontroller;