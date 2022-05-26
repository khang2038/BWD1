class createcontroller{

    index(req,res){
          res.render('create',{
                                        title: 'Create',
                                        style:'styleproduct.css',
                                        style2:'queriesproduct.css',
                                        script1:'scriptproduct.js',
                                        script2:'jquery.waypoints.min.js',
                                        style3:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
                                        script3:'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
                                        })
    }


}

module.exports= new createcontroller;