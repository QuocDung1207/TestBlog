import { db } from "../config/MysqlDB.js";
import Blog from "../Models/PostModel.js";

export const checkBlogId = async (req, res, next) => {
  const blogId = req.query.blogId ?? req.body.blogId;
  try{
      const post = await Blog.findOne({ where: { id: blogId },raw:true});
    if (!post) {
        return res.status(404).json({ error: "Blog not found" });
      }
    
      // If the blog ID is valid, you can attach it to the request object for later use
      req.blog = post;
      next();
  }catch(error){
    console.error('Error checking blog ID:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
  

};
