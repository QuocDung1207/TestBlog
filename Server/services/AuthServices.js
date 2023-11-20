import User from '../Models/UserModel.js'
class AuthService {
  async signup(result) {
    const checkuser = await User.findOne(
        {where : {username: result.username, email: result.email}}
    );
    if (checkuser instanceof User === true) 
        return false;
    const register = await User.create(result);
    register.save();
    return register;
  }
  async login(user) {
    const login = await User.findOne({where: {username : user.username}});
    if(login instanceof User === true)
      return login
  }
  async logout(id) {
    const logout = await User.findOne({where:{ _id: id }});
    return logout;
  }
}

export default AuthService;
