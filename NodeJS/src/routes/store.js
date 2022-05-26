const express=require('express');
const router=express.Router();

const storecontroller=require('../app/controllers/storecontroller');

// productcontroller.index

router.post('/',storecontroller.index);



module.exports = router;