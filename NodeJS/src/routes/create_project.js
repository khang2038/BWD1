const express=require('express');
const router=express.Router();

const create_project_controller=require('../app/controllers/create_project_controller');

router.get('/',create_project_controller.index);

module.exports = router;