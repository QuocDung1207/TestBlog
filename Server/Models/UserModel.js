// import mongoose, { Schema } from "mongoose";
import {  DataTypes } from 'sequelize';
import { db } from '../config/MysqlDB.js';
import Blog from '../Models/PostModel.js'
import Comment from '../Models/CommentModel.js'

const User = db.define("User",{
        username: {
            type: DataTypes.STRING,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false
        }
    },{tableName: 'users',createdAt:  false,  updatedAt: false}
    )
    export default User
    User.hasMany(Blog,{as:"blogs",foreignKey:"Iduser"})
    Blog.belongsTo(User,{as:"user",foreignKey:"Iduser"})
    
    User.hasMany(Comment,{as:"comments",foreignKey:"userId"})
    Comment.belongsTo(User,{as:"user",foreignKey:"userId"})


// const userSchema = new mongoose.Schema({
//     username:{
//         type:String,
//         require:true,
//         unique:true
//     },
//     email:{
//         type:String,
//         require:true,
//         unique:true,
//     },
//     password:{
//         type:String,
//         require:true,
//     },
//     isAdmin:{
//         type:Boolean,
//         require:true,
//         default:false
//     },
//     blogs:[{
//         type: mongoose.Schema.Types.ObjectId,
//         ref:"blog"
//     }]
// },
// {
//     timestamps:true
// }
// )
// const User = mongoose.model("user",userSchema)

// export default User