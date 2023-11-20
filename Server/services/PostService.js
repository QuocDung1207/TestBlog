import PostModel from "../Models/PostModel.js"

class PostService{
    async createBlog(userId,blog){
        const addBlog = await PostModel.create({title:blog.title,desc:blog.desc,date:blog.date,Iduser:userId})
        addBlog.save();
        return addBlog;
    }
    async updateBlog(blogId,values){
        try{
            const Blog = await PostModel.findOne({where:{id:blogId}})
            if (!Blog) {
                return res.status(404).json({ error: 'Blog post not found' });
              }
            await Blog.update({title:values.title,desc:values.desc,date:values.date,img:values.img})
            await Blog.save()
            return Blog;
        }catch(err){
            console.log("Error:",err.message);
        }
        
    }
    async deleteBlog(blogId){
        const Blog = await PostModel.destroy({where:{id:blogId}})
        console.log("delete",Blog);
        return Blog
    }
    async getAllBlog(userId){
        try{
            const Blog = await PostModel.findAll({include:["comments"],where:{Iduser:userId}})
            console.log("blog",Blog);
            return Blog
        }catch(err){
            console.log("Error:",err.message);
        }
        
    }
    async getBlog(blogId){
        console.log(blogId);
        const Blog = await PostModel.findOne({include:["comments"],where:{id:blogId}})
        return Blog
    }
    
}


    
export default PostService