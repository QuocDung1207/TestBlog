import UserModel from '../Models/UserModel.js'
import PostModel from '../Models/PostModel.js'

const User = new UserModel();
const Post = new PostModel()

User.hasMany(Post,{foreignKey:'userId'})
Post.belongsTo(User,{foreignKey:'userId'})

export {User,Post}