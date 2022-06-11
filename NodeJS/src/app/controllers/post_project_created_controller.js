const Project = require('../models/create_prj');
const Faqs = require('../models/question');
let slug_present;
class post_project_created_controller{

    index(req,res,next){
        res.render('create_project/post_project_created', {
            title : 'create_project',
            style : 'post_project_created.css',
            
        });
    }

    //[GET] /project/create
    create(req,res,next) {
        res.send('hi');
    }

    //[POST] /project/store
    store(req,res,next) {
        const temp = req.body;
        slug_present = req.body.main_title;
        const project = new Project(temp);
        project.save();
            // .then(
            //     res.redirect(`/create_project/${req.body.main_title}`)
            // ) 
            // .catch(next)
    }

    //[POST] /faq
    faq(req,res,next) {
        var total_qs = [];
        for (var question of req.body.question) {
            total_qs.push({question,slug_temp: slug_present});
        }
        for (var question of total_qs) {
            var faq = new Faqs(question);
            faq.save();
        }
        res.redirect(`/create_project/${total_qs[0].slug}`);
    }
}

module.exports= new post_project_created_controller;