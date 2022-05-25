const express=require('express');
const router=express.Router();

const Gamecontroller=require('../app/controllers/Gamecontroller');

// productcontroller.index
router.use('/',Gamecontroller.index);



module.exports = router;