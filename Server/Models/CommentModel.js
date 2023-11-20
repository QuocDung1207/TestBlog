import {db} from '../config/MysqlDB.js';
import {  DataTypes } from 'sequelize';
import Reply from '../Models/ReplyComment.js'

const comment = db.define("Comment",{
    content:{
        type:DataTypes.STRING,
    },
    img:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    userId:{
        type:DataTypes.INTEGER,
        references:{
            model:{tableName:"users"},
            key:"id"
        }
    },
    blogId:{
        type:DataTypes.INTEGER,
        references:{
            model:{tableName:"posts"},
            key:"id"
        }
    }
},{tableName:"comment",createdAt:  false,  updatedAt: false})
comment.hasMany(Reply,{as:"replyCMT",foreignKey:"comtID"})
Reply.belongsTo(comment,{as:"comments",foreignKey:"comtID"})

export default comment;
