const Project = require('../models/create_prj');
const Faqs = require('../models/question');
const Storys = require('../models/story');

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

        //handle đường truyền dấu ' ' -> '-'
        // let temp = total_qs[0].slug_temp;
        // temp = temp.replace(/ /g,'-');
    }
    
    //[POST] /story
    story(req, res, next) {
        //do chua nhap main_title ben phan 1 
        const temp = req.body;
        temp.slug_temp = slug_present;
        const story = new Storys(temp);
        story.save();
        let temp1 = temp.slug_temp;
        console.log(temp1);
        temp1 = temp1.replace(/ /g,'-');
        console.log(temp1);
        res.redirect(`/create_project/${temp1}`);
    }
}

module.exports= new post_project_created_controller;