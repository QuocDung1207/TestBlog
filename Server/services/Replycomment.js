import Replycomment from "../Models/ReplyComment.js";
import Comment from '../Models/CommentModel.js'


class ReplyService{
    async replycomment(userId,body){
        const id = body.commentId
        // console.log("dd",body.commentId);
        const getOne = await Comment.findOne({where:{id:id}})
        console.log("tt",getOne);
        const idCmt = getOne.dataValues.id
        const comment = await Replycomment.create({content:body.content,userId:userId,comtID:idCmt})
        comment.save();
        return comment;
    }
    async getReply(idcmt){
        const getOneCmt = Replycomment.findAll({where:{comtID:idcmt}})
        return getOneCmt
    }
    async getAllReply(id){
        const getall = Replycomment.findAll({where:{userId:id}})
        return getall
    }
    async deletereply(id){
        const del = Replycomment.destroy({where:{id:id}})
        return del
    }
}
export default ReplyService;