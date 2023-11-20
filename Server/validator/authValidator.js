import validator from 'validator';
export const loginValidate =(req,res,next)=>{
    const {username, password} = req.body;
    if(!username){
      return  res.status(400).json({error: true, msg:"Wrong account or password"})
    }
    if(!password){
        return  res.status(400).json({error: true, msg:"Wrong account or password "});
    }
    next();
}

export const signupValidate = (req,res,next)=>{
    const { password,email} = req.body;
    const isValidPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>/?])/.test(password);
    const isValidEmail = validator.isEmail(email)
    if(!isValidPassword){
        return  res.status(400).json({error: true, msg:"Password must have special characters and capital letters. "});
    }
    if(!isValidEmail){
        return  res.status(400).json({error: true, msg:"Email invalidate"});
    }
    next();
}