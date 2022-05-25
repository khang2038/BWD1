class signupcontroller{

    index(req,res){
         res.render('signup',{
          title: 'Signup',
          style:'signup.css',
          style2:''
      });
    }

    show(req,res){
    }

}

module.exports= new signupcontroller;