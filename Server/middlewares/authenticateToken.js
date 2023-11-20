import User from "../Models/UserModel.js";
import { verifyToken } from "./JWTAction.js";

// Middleware for checking authentication
export const authenticateToken =  async(req, res, next) => {
    const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const verifyUser = verifyToken(token.split(" ")[1]);
  const user = await User.findOne({_id:verifyUser.id})
  if (!user) {
    return res.status(403).json({ message: 'Invalid token' });
  }

  req.user = user;
  next();
}