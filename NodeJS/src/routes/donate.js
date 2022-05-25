const express=require('express');
const router=express.Router();

const donatecontroller=require('../app/controllers/donatecontroller');

// productcontroller.index

router.use('/detailprod',donatecontroller.show);
router.use('/',donatecontroller.index);



module.exports = router;