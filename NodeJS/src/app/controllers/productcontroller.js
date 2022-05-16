class productcontroller{

    index(req,res){
         res.render('product');
    }

    show(req,res){
        res.send('newdetail')
    }

}

module.exports= new productcontroller;