const create_prj = require('../models/create_prj');
const project_comment = require('../models/project_comment');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class create_project_controller{
    index(req,res,next){
        create_prj.find({})
            .then(project => {
                project = mutipleMongooseToObject(project);
                //them project_comment

                project_comment.find({}) 
                    .then(prj_cmt => {
                        prj_cmt = mutipleMongooseToObject(prj_cmt);
                        //render
                        res.render('create_project', {
                            prj_cmt : prj_cmt,
                            project : project,
                            title : 'create_project',
                            style : 'create_project.css',
                        });
                    })
            })
            .catch(next)
        }
}

module.exports= new create_project_controller;