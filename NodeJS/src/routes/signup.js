const express=require('express');
const router=express.Router();

const signupcontroller=require('../app/controllers/signupcontroller');

// productcontroller.index

router.get('/detailprod',signupcontroller.show);
router.get('/',signupcontroller.index);



module.exports = router;