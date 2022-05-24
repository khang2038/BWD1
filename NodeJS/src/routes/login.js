const express=require('express');
const router=express.Router();

const logincontroller=require('../app/controllers/logincontroller');

// productcontroller.index

router.use('/detailprod',logincontroller.show);
router.use('/',logincontroller.index);



module.exports = router;