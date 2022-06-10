const create_prj = require('../models/create_prj');
const project_comment = require('../models/project_comment');
const faqs = require('../models/question');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

var prj_cmt_db, project_db, faq_db;

// const checkSlugExist = async (req, res) => {
//     const { slug } = req.body;
//     const result = await userService.checkEmailExist(email);
//     return response(res, result);
// }

// async updateUser(req, res, next) {
//     try {
//         const userId = req.userId;
//         const { userName, email } = req.body;
//         const result = await userService.updateUser(userId,_.pickBy({ userName, email }, _.identity));
//         res.json(result);
//     } catch (error) {next(error)}
// }

class create_project_controller{
    show_detail(req, res, next) {
        project_comment.find({}) 
            .then(prj_cmt => {
                prj_cmt = mutipleMongooseToObject(prj_cmt);
                prj_cmt_db = prj_cmt;
            })
            .catch(next);

        faqs.find({slug : req.params.slug})
            .then(faq => {
                faq = mutipleMongooseToObject(faq);
                faq_db = faq;
            })
            .catch(next);
    
        create_prj.findOne({slug : req.params.slug})
            .then(project => {
                
                res.render('create_project/create_project', {
                    project : mongooseToObject(project),
                    prj_cmt : prj_cmt_db,
                    question : faq_db,
                    title : 'create_project',
                    style : '../../css/create_project.css',
                    script1 : '../../js/create_project.js',
                    script3 : '../../js/post_project_created.js',
                });
            })
            .catch(next)
    }

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
        
        res.render('create_project/create_project', {
            prj_cmt : prj_cmt_db,
            project : project_db,
            question : faq_db,
            title : 'create_project',
            style : 'create_project.css',
            script3 : '../../js/post_project_created.js',
        });
    }

    
}

module.exports= new create_project_controller;