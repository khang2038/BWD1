const express=require('express');
const router=express.Router();

const ecommercecontroller=require('../app/controllers/ecommercecontroller');

// productcontroller.index
router.use('/',ecommercecontroller.index);



module.exports = router;