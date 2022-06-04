const create_prj = require('../models/create_prj');
const project_comment = require('../models/project_comment');
const faqs = require('../models/question');
const { mutipleMongooseToObject } = require('../../util/mongoose');
var prj_cmt_db, project_db, faq_db;
class create_project_controller{

    index(req,res,next){
        project_comment.find({}) 
            .then(prj_cmt => {
                prj_cmt = mutipleMongooseToObject(prj_cmt);
                prj_cmt_db = prj_cmt;
            })
            .catch(next);

        create_prj.find({})
            .then(project => {
                project = mutipleMongooseToObject(project);
                project_db = project;
            })
            .catch(next);
        
        faqs.find({})
            .then(faq => {
                faq = mutipleMongooseToObject(faq);
                faq_db = faq;
            })
            .catch(next);
        
        res.render('create_project', {
            prj_cmt : prj_cmt_db,
            project : project_db,
            question : faq_db,
            title : 'create_project',
            style : 'create_project.css',
        });
        
        
        }
}

module.exports= new create_project_controller;