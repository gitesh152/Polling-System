//API Option Controller
const Question = require("../../models/question");
const Option = require("../../models/options");

//controller to delete option
module.exports.delete=async (req,res)=>{
    try{
        if(!req.params.id){
            console.log(`Could not find option ID!`);
            return res.json(401,{message:'Could not find option ID!'});
        }
        let deletedOption= await Option.findByIdAndDelete(req.params.id);
        console.log(deletedOption);
        // let deletedOptionInQuestion=await Question.deleteMany({question:req.params.id});
        await Question.findByIdAndUpdate(deletedOption.question,{$pull:{"options":deletedOption.id}});
        if(deletedOption){
            console.log(`Deleted Option : ${deletedOption.text}`);
            return res.json(200,{message:`Deleted Option : ${deletedOption.text}`});
        }
        console.log(`Could not delete option!`);
        return res.json(401,{message:'Could not delete option!'});
    }
    catch(error){ 
        console.log(error)
        return res.json(500,{message:'Internal server error'});
    }
}

//controller to add vote to option
module.exports.add_vote=async (req,res)=>{
    try{    
        if(!req.params.id){
            console.log(`Could not find option ID!`);
            return res.json(401,{message:'Could not find option ID!'});
        }
        let addVoteToOption= await Option.findByIdAndUpdate(req.params.id,{$inc:{'votes' : 1}});
        if(addVoteToOption){
            console.log(`Voted Option : ${addVoteToOption.text} with ${addVoteToOption.votes + 1} votes`);
            return res.json(200,{message:`Voted Option : ${addVoteToOption.text} with ${addVoteToOption.votes + 1} votes`});
        }
        console.log(`Could not vote option!`);
        return res.json(401,{message:'Could not vote option!'});
    }
    catch(error){ 
        console.log(error)
        return res.json(500,{message:'Internal server error'});
    }
}