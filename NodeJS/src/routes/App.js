const express=require('express');
const router=express.Router();

const Appcontroller=require('../app/controllers/Appcontroller');

// productcontroller.index
router.use('/',Appcontroller.index);



module.exports = router;