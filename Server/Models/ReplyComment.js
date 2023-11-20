import {db} from '../config/MysqlDB.js';
import {  DataTypes } from 'sequelize';

const Replycomment = db.define("ReplyComment",{
    content:{
        type:DataTypes.STRING,
    },
    img:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    comtID:{
        type:DataTypes.INTEGER,
        references:{
            model:{tableName:"comment"},
            key:"id"
        }
    },
    userId:{
        type:DataTypes.INTEGER,
        references:{
            model:{tableName:"users"},
            key:"id"
        }
    }
},{tableName:"replyComment",createdAt:  false,  updatedAt: false})

export default Replycomment;