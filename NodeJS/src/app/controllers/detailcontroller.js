class detailcontroller{

    index(req,res){
         res.render('detail');
    }

    show(req,res){
        res.send('newdetail')
    }

}

module.exports= new detailcontroller;