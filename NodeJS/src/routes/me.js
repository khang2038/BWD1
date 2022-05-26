const express=require('express');
const router=express.Router();

const mecontroller=require('../app/controllers/mecontroller');

// productcontroller.index
router.get('/me',mecontroller.store);


module.exports = router;