class detailcontroller{

    index(req,res){
         res.render('detail',{
          title: 'Project',
          style:'styledetail.css',
          style2:'responsivedetail.css'
      });
    }

    show(req,res){
    }

}

module.exports= new detailcontroller;