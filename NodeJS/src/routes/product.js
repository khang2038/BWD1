const express=require('express');
const router=express.Router();

const productcontroller=require('../app/controllers/productcontroller');

// productcontroller.index

router.use('/',productcontroller.index);



module.exports = router;