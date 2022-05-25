const express=require('express');
const router=express.Router();

const costumecontroller=require('../app/controllers/costumecontroller');

// productcontroller.index
router.use('/',costumecontroller.index);



module.exports = router;