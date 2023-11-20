// import mongoose, { Schema } from "mongoose";
import {db}  from '../config/MysqlDB.js';
import { Sequelize, DataTypes, INTEGER } from 'sequelize';
import Comment from '../Models/CommentModel.js'



const Blog =  db.define("Post",{
    title:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    date:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    desc:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Iduser:{
        type: DataTypes.INTEGER,
        references: {
            model:{tableName:'users'},
            key:"id"
        }
    },
    // reviews:[reviewsSchema],
    img:{
        type:DataTypes.STRING,
        allowNull:true,
    }
},{tableName: 'posts',createdAt:  false,  updatedAt: false},
{
    timestamps:true
}
)
Blog.hasMany(Comment,{as:"comments",foreignKey:"blogId"})
Comment.belongsTo(Blog,{as:"blog",foreignKey:"blogId"})

export default Blog
