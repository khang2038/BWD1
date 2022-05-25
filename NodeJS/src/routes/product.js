const express=require('express');
const router=express.Router();

const productcontroller=require('../app/controllers/productcontroller');

// productcontroller.index
router.get('/',productcontroller.index);

router.get('/detailprod',productcontroller.show);
router.get('/',productcontroller.index);

module.exports = router;