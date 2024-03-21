const express=require('express')
const router=express.Router()
const {createUser,deleteUser,putUser} = require('../controllers/userController.js')

router.post('/user',createUser);
router.delete('/user/delete/:id',deleteUser);
router.put('/user/update/:id',putUser);
module.exports=router;