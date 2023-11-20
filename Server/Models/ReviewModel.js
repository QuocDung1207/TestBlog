import mongoose from "mongoose"


const reviewSchema = mongoose.SchemaType({
    name:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:true,
        default:0
    },
    comment:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        requaire:true
    }
})

const Review = mongoose.model("Review",reviewSchema)

export default Review