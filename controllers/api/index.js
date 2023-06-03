//API Home Controller
module.exports.index=async (req,res)=>{
    try{
        return res.send('This is API Home');
    }
    catch(error){
        console.log(error)
        return res.json(500,{message:'Internal server error'});
    }
}
