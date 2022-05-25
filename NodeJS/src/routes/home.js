const express=require('express');
const router=express.Router();

const homecontroller=require('../app/controllers/homecontroller');

router.use('/',homecontroller.index);

module.exports = router;












