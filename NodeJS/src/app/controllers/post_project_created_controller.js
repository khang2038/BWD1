const Project = require('../models/create_prj');
const Faqs = require('../models/question');
const Storys = require('../models/story');

let slug_present;

function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
}

class post_project_created_controller{

    index(req,res,next){
        res.render('create_project/post_project_created', {
            title : 'create_project',
            style : 'post_project_created.css',
            users: req.user
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
        temp1 = removeVietnameseTones(temp1);
        temp1 = temp1.replace(/ /g,'-');
        res.redirect(`/create_project/${temp1}`);
    }
}

module.exports= new post_project_created_controller;