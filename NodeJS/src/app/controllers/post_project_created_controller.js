const Project = require('../models/create_prj');


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
        const project = new Project(temp);
        project.save()
            .then(
                res.redirect(`/create_project/${req.body.main_title}`)
            ) 
            .catch(next)
    }
}

module.exports= new post_project_created_controller;