//API OPTION ROUTER
const express=require('express');
const router=express.Router();
const apiOptionController=require('../../controllers/api/option');

router.get('/:id/delete',apiOptionController.delete);
router.post('/:id/add_vote',apiOptionController.add_vote);

module.exports=router;