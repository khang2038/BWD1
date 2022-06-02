

class create_project_controller{
    index(req,res,next){
        res.render('create_project', {
            title : 'create_project',
            style : 'create_project.css',
        });
    }
}

module.exports= new create_project_controller;