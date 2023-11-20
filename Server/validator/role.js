export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin === true) {
      return next(); // User has admin role, continue to the next middleware/route
    } else {
      return res.status(403).json({ message: 'Permission denied. Admin access required.' });
    }
  };