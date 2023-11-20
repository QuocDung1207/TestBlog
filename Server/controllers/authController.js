// import User from "../Models/UserModel.js"
import bcrypt from 'bcryptjs'
import AuthServies from "../services/AuthServices.js"
import  {createJWT, verifyToken} from '../middlewares/JWTAction.js'
import { convertObjectId } from "../utils/ConvertObjectId.js"
import destroy from "destroy"
import AuthService from "../services/AuthServices.js"
const signup = async(req,res,next)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt)
        const result = {
            username: req.body.username,
            password:hashedPass,
            email:req.body.email
        }
        const registerService = new AuthServies();
        const register = await registerService.signup(result)
        if(!register){
            return res.status(400).json({msg:"Account or email already exists"})
        }else{
            const {password,...others} = register.dataValues
            res.status(200).json({data:others,msg:"Registered successfully"})
        }
    }catch(error){
        res.status(500).json(error.message)
    }
    
}
const refreshToken = async(req,res,next)=>{
    const refres = req.headers.authorization
    if(!refres) return res.status(401).json("You are not authenticated")
}

const login = async(req,res,next)=>{
    try{
        const user ={username:req.body.username}
        const loginService = new AuthServies();
        const signin = await loginService.login(user)
        if(!signin){
            return res.status(400).json("tên đăng nhập hoặc mật khẩu không đúng")
        }
        const validated = await bcrypt.compare(req.body.password,signin.password)
        if(!validated){
            return res.status(400).json("Tên đăng nhập hoặc mật khẩu không đúng")
        }
        let payload = { 
            id : signin.dataValues.id,
        }
        let token = createJWT(payload) 
        const {password , ...others} = signin.dataValues
        return res.status(200).json({
            data:{others:others,
                access_token: token
            },
            msg:"Success"
        })
    }catch(error){
        return res.status(500).json(error)
    }
}
const logout = async (req, res) => {
    try{
        const TokenService = new AuthService()
        const token = await TokenService.logout(req.userId)
        if(token){
            return res.status(200).json({
                data:{
                    token,
                    access_token: null
                },
                msg:"Logout success"
            })
        }
        
    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
  };
  
  // Function to get a protected resource

  

export default{signup,login,logout,refreshToken}