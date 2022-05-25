const express=require('express');
const router=express.Router();

const Aicontroller=require('../app/controllers/Aicontroller');

// productcontroller.index
router.use('/',Aicontroller.index);



module.exports = router;