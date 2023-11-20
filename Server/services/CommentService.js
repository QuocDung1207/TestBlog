import { get } from 'mongoose';
import Comment from '../Models/CommentModel.js'

class CommentService{
    async createComment(userId,data){
        console.log("123123",userId,data);
        const addComment = await Comment.create({content:data.content,userId:userId,blogId:data.blogId})
         console.log("text",addComment);
         addComment.save()
         return addComment
    }
    async getAllcomment(userId){
        console.log(userId);
        console.log(userId);
        const getAll = await Comment.findAll({include:["replyCMT"],where: {userId:userId}})
        return getAll
    }
    async getComment(blogId){
        console.log(blogId);
        const getOne = await Comment.findAll({include:["replyCMT"],where: {blogId:blogId}})
        return getOne;
    }
    async deleteComment(Id){
        const Blog = await Comment.destroy({where:{id:Id}})
        console.log("delete",Blog);
        return Blog
    }
    async replyComment(userId,body){
        const getOne = await Comment.findOne({where:{id:body.commentId}})
        const id = getOne.dataValues.id
        const comment = await Comment.create({content:body.content,userId:userId,commentId:id})
        comment.save();
        console.log("comment",comment);
        return comment;
    }
}

export default CommentService