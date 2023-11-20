import express from 'express'
import authController from '../controllers/authController.js'
import userController from '../controllers/userController.js'
import { loginValidate, signupValidate } from '../validator/authValidator.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';
import { checkisAdminPermission } from '../middlewares/permission.js';

const router = express.Router();

//User
router.put("/update/:id",userController.updateUser)
router.delete("/delete/:id",userController.deleteUser)
router.get("/getUser/:id",userController.getUser)
router.get("/getAll",userController.getAllUser)
//Auth
router.post("/signup",signupValidate,authController.signup)
router.post("/login",loginValidate,authController.login)
router.post("/logout",checkisAdminPermission,authController.logout)
router.post("/refreshToken",authController.refreshToken)




export default router