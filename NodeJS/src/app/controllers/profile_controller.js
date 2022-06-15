// const Project = require('../models/create_prj');
// const Faqs = require('../models/question');
// const Storys = require('../models/story');

class post_project_created_controller{
    
    index(req,res,next){
        res.render('profile/profile', {
            title : 'profile',
            style : 'profile.css',
            
        });
    }

}

module.exports= new post_project_created_controller;