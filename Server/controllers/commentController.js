import CommentService from "../services/CommentService.js";


const createComment = async (req,res,next)=>{
    try{
        const userID = req.userId
        console.log(userID,req.body);
        const commentService = new CommentService();
        const comment = await commentService.createComment(userID,req.body);
        console.log("asd",comment.dataValues);
        res.status(200).json({data:comment.dataValues})
    }catch(err){
        console.log(err.message);
        res.status(500).json(err.message)
    }
}

const getAllcomment = async ( req,res,next)=>{
    try{
        console.log("userId",req.userId);
        const commentService = new CommentService();
        const comment = await commentService.getAllcomment(req.userId)
        res.status(200).json({data:comment})
    }catch(err){
        res.status(500).json(err.message)
    }
}
const getComment = async(req,res,next)=>{
    try{
        console.log("userId",req.params.id);
        const commentService = new CommentService();
        const comment = await commentService.getComment(req.params.id)
        console.log("comment",comment);
        if(comment.length > 0){
            res.status(200).json({data:comment})
        }else{
            res.json("not found comment")
        }
        
    }catch(err){
        res.status(500).json(err.message)
    }
}
const deleteComment = async (req, res, next) => {
    try {
      const ServiceComment = new CommentService();
      const blog = await ServiceComment.deleteComment(req.params.id);
      console.log("blog",blog);
      if(blog===1){
        res.status(200).json("Delete comment success");
      }else{
        res.json("not found comment")
      }
      
    } catch (err) {
      res.status(500).json(err.message);
    }
  };

export default { createComment,getAllcomment,getComment,deleteComment}
