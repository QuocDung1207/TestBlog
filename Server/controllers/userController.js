import UserService from "../services/UserService.js";
import bcrypt from 'bcrypt'


const updateUser = async (req,res) => {
        const userService = new UserService();
        const users = await userService.updateUser(req.params.id,req.body);
        console.log("12dd",users);
        const {password,...others} = users.dataValues
        // const salt = await bcrypt.genSalt(10);
        // const hashedPass = await bcrypt.hash(req.body.password,salt)
        res.status(200).json({data:others})
}
const deleteUser = async (req,res) =>{
        try{
            const userService = new UserService();
            const users = await userService.deleteUser(req.params.id);
            res.status(200).json({data:users})
        }catch(err){
            res.status(500).json(err)
        }
}

const getUser = async(req,res,next) =>{
    try{
        console.log(req.params.id);
        const userService = new UserService();
        const users = await userService.getUser(req.params.id);
        res.status(200).json({data:users})
    }catch(err){
        res.status(500).json(err)
    }
}
const getAllUser = async(req,res,next) =>{
    try{
    const userService = new UserService();
    const users = await userService.getAllUser();
    res.status(200).json({data:users})
}catch(err){
    res.status(500).json(err)
}
}
export default{updateUser,deleteUser,getUser,getAllUser}