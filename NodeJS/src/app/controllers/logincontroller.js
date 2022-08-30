const user=require('../models/user');

class logincontroller{

    index(req,res,next){
        res.setHeader('Access-Control-Allow-Origin', 'http://103.170.120.155:3000');

        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        res.setHeader('Access-Control-Allow-Credentials', true);

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