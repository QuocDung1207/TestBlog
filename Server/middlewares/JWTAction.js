import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();
export const createJWT = (payload) =>{
    let key = process.env.JWT_SECRET
    let token = null;
    try{
        token = jwt.sign(payload, key,{expiresIn:process.env.JWT_EXPIRES_IN});
    }catch(err){
        console.log(err);
    }
    return token
}

export const verifyToken = (token) =>{
    let key = process.env.JWT_SECRET;
    try{
        let decoded =  jwt.verify(token,key)
        return decoded;
    }catch(err){
        console.log(err); 
    }
    return null;
}
