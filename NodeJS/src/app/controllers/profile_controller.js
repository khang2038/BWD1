// const Project = require('../models/create_prj');
// const Faqs = require('../models/question');
// const Storys = require('../models/story');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

const create_prj = require('../models/create_prj');
let create_prj_db;
class post_project_created_controller{
    
    async index(req,res,next){
        await create_prj.find()
        .then(prj => {
            prj = mutipleMongooseToObject(prj);
            create_prj_db = prj.reverse();
        })
        .catch(next);

        res.render('profile/profile', {
            title : 'profile',
            style : 'swiper-bundle.min.css',
            style2 : 'profile.css',
            script1 : 'swiper-bundle.min.js',
            script3 : 'profile.js',
            create_prj : create_prj_db,
            users:req.user
        });
    }

}

module.exports= new post_project_created_controller;