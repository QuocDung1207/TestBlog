import validator from 'validator';
export const AddBlogValidate = (req,res,next)=> {
    const {title,desc,date,img,} = req.body
    console.log(req.body);
    // if(!date){
    //     return res.status(400).json({msg:"Date cannot be blank"})
    // }
    // if(!title){
    //     return res.status(400).json({msg:"Content cannot be blank"})
    // }
    // if(!desc){
    //     return res.status(400).json({msg:"Description cannot be blank"})
    // }
    next()
}