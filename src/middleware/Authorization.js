import jwt from "jsonwebtoken";

const decodeToken = (req, res, next) => {
  // Get the token from the request headers
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    // If no token is provided, send a 401 Unauthorized response
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify and decode the token using the JWT library
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);


    // Attach the decoded token to the request object
    req.decodedToken = decodedToken;

    // Call the next middleware or route
    next();
  } catch (err) {
    // If the token is invalid, send a 401 Unauthorized response
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default decodeToken;

