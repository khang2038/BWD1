const express=require('express');
const router=express.Router();

const datausercontroller=require('../../../datausercontroller');

// productcontroller.index

router.post('/',datausercontroller.index);



module.exports = router;