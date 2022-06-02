const create_prj = require('../models/create_prj')
const { mutipleMongooseToObject } = require('../../util/mongoose');

class create_project_controller{
    index(req,res,next){
        create_prj.find({})
            .then(project => {
                project = mutipleMongooseToObject(project);
                res.render('create_project', {
                    project : project,
                    title : 'create_project',
                    style : 'create_project.css',
                });
            })
            .catch(next)
        }
}

module.exports= new create_project_controller;