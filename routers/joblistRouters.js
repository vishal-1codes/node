const express=require('express')
const router=express.Router()
const {createJoblist} = require('../controllers/joblistController.js')

router.post('/joblist',createJoblist);

module.exports=router;