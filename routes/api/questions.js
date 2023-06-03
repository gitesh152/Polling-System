//API QUESTION ROUTER
const express=require('express');
const router=express.Router();
const apiQuestionController=require('../../controllers/api/question');

router.get('/',apiQuestionController.getAll);

router.post('/create',apiQuestionController.create);  
router.post('/:id/options/create',apiQuestionController.createOption); 
router.get('/:id/delete',apiQuestionController.delete); 
router.get('/:id',apiQuestionController.getByID);

module.exports=router;