import ReplyService from "../services/Replycomment.js";


const replyComment = async (req,res,next) =>{
    try{
        const userId = req.userId;
        const commentService = new ReplyService()
        const comment = await commentService.replycomment(userId,req.body);
        res.status(200).json({data:comment})
    }catch(err){
        console.log(err.message);
    }
}

const getCmtById = async(req,res) => {
    try{
        const commentService = new ReplyService()
        const comment = await commentService.getReply(req.params.id);
        res.status(200).json({data:comment})
    }catch(err){
        console.log(err.message);
    }
}
const getAllreply = async(req,res)=>{
    try{
        const commentService = new ReplyService()
        const comment = await commentService.getAllReply(req.userId)
        res.status(200).json({data:comment})
    }
    catch(err){
        console.log(err);
    }
}
const delReplycmt = async(req,res)=>{
    try{
        const commentService = new ReplyService()
        const delreply = await commentService.deletereply(req.params.id)
        res.status(200).json({data:delreply})
    }catch(err){
        console.log(err);
    }
}

export default { replyComment,getCmtById,getAllreply,delReplycmt}