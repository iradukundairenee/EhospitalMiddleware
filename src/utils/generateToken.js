import jwt from "jsonwebtoken";



const generateToken = (user) => {
  const expiryDate = new Date();
  expiryDate.setHours(expiryDate.getHours() + 1);

  return jwt.sign({
    user,
    expiryDate,
  }, process.env.JWT_SECRET);
};

export default  generateToken;



