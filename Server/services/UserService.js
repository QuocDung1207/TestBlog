import User from "../Models/UserModel.js"

class UserService{
    async getAllUser(){
        try{
            // User.findByPk(Iduser,{include:["blogs"]})
            let users =await User.findAll({include:["blogs"]});
             return users;
        }catch(err){
            console.log(err);
        }
    };

    async getUser(userId){
        const user = await User.findOne({include:['blogs'],where:{id:userId}})
        return user;
    }

    async deleteUser(userId){
        const user = await User.destroy({where:{id:userId}})
        return user;
    }

    async updateUser(userId,body){
        const updateUser = await User.findOne({where:{id:userId}})
        console.log(updateUser);
        if(!updateUser){
            return res.status(404).json({ error: 'User post not found' });
        }
        await updateUser.update({username:body.username,password:body.password})
        await updateUser.save()
        return updateUser
    }



}
export default UserService;