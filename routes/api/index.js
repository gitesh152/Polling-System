//API HOME ROUTER
const express=require('express');
const router=express.Router();          
const apiHomeController=require('../../controllers/api/index');

router.get('/',apiHomeController.index);
router.use('/questions',require('../api/questions'));
router.use('/options',require('../api/options'));

module.exports=router;