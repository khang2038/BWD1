const user=require('../models/user')
class datausercontroller{

   async index(req,res,next){
         try{
            const email=req.body.email;
            const password=req.body.password;

            const useremail= await user.findOne({ email: email});
            if(useremail.password==password){
              res.redirect('homepage');
            }
         }catch(error){
           res.status(400).send("invalid")
         }
    }


}

module.exports= new datausercontroller;