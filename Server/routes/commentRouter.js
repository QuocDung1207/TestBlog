import commentController from "../controllers/commentController.js";
import replyController from "../controllers/replyController.js";
import express from 'express'
import { checkisAdminPermission } from "../middlewares/permission.js";
import { checkBlogId } from '../middlewares/checkblogId.js';


const router = express.Router();

router.post("/create",checkisAdminPermission,commentController.createComment)
router.get("/getAll",checkisAdminPermission,commentController.getAllcomment)
router.get("/getOne/:id",checkisAdminPermission,commentController.getComment)
router.delete("/delete/:id",checkisAdminPermission,commentController.deleteComment)


router.post("/reply",checkisAdminPermission,replyController.replyComment)
router.get("/getCmt/:id",checkisAdminPermission,replyController.getCmtById)
router.get("/getAllReply",checkisAdminPermission,replyController.getAllreply)
router.delete("/deleReply/:id",checkisAdminPermission,replyController.delReplycmt)
export default router;