import { AddBlogValidate } from '../validator/addBlogValidator.js';
import postController from '../controllers/postController.js';
import express from 'express'
import { checkisAdminPermission } from '../middlewares/permission.js';
import { checkBlogId } from '../middlewares/checkblogId.js';

const router = express.Router();
router.use(checkisAdminPermission);
router.get("/getAll",postController.getAllBlog)
router.post("/create",AddBlogValidate,postController.createBlog)
router.post("/updateBlog",AddBlogValidate,checkBlogId,postController.updateBlog)
router.delete("/delete",checkBlogId,postController.deleteBlog)
router.get("/getBlog/:id",postController.getBlog)
router.get("/search", (req, res) => {
    const query = req.query.search;
  console.log(query);
    
  
    res.json({ results });
  })
// router.get("/blog",function(req,res,next){
//     // Access query parameters using req.query
//   const queryParameters = req.query;

//   // Handle the query parameters as needed
//   res.json({ queryParameters });
// })


export default router