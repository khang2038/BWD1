const express=require('express');
const router=express.Router();

const detailcontroller=require('../app/controllers/detailcontroller');

// productcontroller.index
router.use('/',detailcontroller.index);

module.exports = router;