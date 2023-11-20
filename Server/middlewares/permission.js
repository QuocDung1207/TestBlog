import { verifyToken } from "./JWTAction.js";

export const checkisAdminPermission = (req,res,next) => {
    const {authorization} = req.headers;
    try{
        if(!authorization){
            return res.status(401).json({error: true,msg: "UnAuthorization"})
        }else{
            let {id} = verifyToken(authorization.split(" ")[1]);
            if(!id)
                return res.status(401).json({error: true,msg: "unAuthorization"});  
            req.userId = id;
        }
    }catch(err)
    {
        console.log(err);
        return res.status(401).json({error: true,msg: "UnAuthorization"})
    }
    next()
}
