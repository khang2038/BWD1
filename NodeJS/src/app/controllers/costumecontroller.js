class costumecontroller{

    index(req,res){
         res.render('costume',{
          title: 'Costume',
          style:'styleproduct.css',
          style2:'queriesproduct.css',
          script1:'scriptproduct.js',
          script2:'jquery.waypoints.min.js'
      });
    }

}

module.exports= new costumecontroller;