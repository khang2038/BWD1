const user=require('../models/user');

class logincontroller{

    index(req,res,next){

        user.find({})
            .then(users=>{
                users=users.map(user => user.toObject() )
              
                res.send(users);
                })
            .catch(next);

        //  res.render('login',{
        //   title: 'Login',
        //   style:'login.css',
        //   style2:''
        // });
    }

}

module.exports= new logincontroller;