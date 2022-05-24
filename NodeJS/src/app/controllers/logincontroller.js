class logincontroller{

    index(req,res){
         res.render('login',{
          title: 'Login',
          style:'login.css',
          style2:''
      });
    }

    show(req,res){
    }

}

module.exports= new logincontroller;