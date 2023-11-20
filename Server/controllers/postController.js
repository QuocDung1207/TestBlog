import { populate } from "dotenv";
import PostService from "../services/PostService.js";

const createBlog = async (req, res, next) => {
  try {
    const blogService = new PostService();
    const blog = await blogService.createBlog(req.userId, req.body);
    res.status(200).json({ data: blog });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const  Blog  = req.blog;
    const blogService = new PostService();
    const blog = await blogService.deleteBlog(Blog.id);
    if(blog === 1){
      res.status(200).json({ data: "Delete Blog Success"});
    }else{
      res.json("Blog nots found")
    }
    
  } catch (err) {
    res.status(500).json(err.message);
  }
};
const getAllBlog = async (req, res, next) => {
  try {
    const blogService = new PostService();
    const blog = await blogService.getAllBlog(req.userId);
    console.log(req.userId);
    res.status(200).json({ data: blog });
  } catch (err) {
    res.status(500).json(err);
  }
};
const updateBlog = async (req, res, next) => {
  try {
    const body = req.body;
    const  blog  = req.params.id;
    const blogService = new PostService();
    const blogs = await blogService.updateBlog(blog.id,body );
    res.status(200).json({ data: blogs });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getBlog = async (req, res, next) => {
  try {
    const  Blog  = req.params.id;
    console.log("getblog",Blog.id);
    const blogService = new PostService();
    const blog = await blogService.getBlog(Blog);
    if(blog){
      res.status(200).json({ data: blog });
    }else{
      res.json("blog not found")
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

export default { createBlog, deleteBlog, getAllBlog, getBlog, updateBlog };
