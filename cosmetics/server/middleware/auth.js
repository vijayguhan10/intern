import jwt from "jsonwebtoken";

const auth = (request, response, next) => {
  try {
    const token =
      request.cookies.accessToken ||
      request?.headers?.authorization?.split(" ")[1];
    console.log("Secret Key:", process.env.SECRET_KEY_ACCESS_TOKEN);
    if (!token) {
      return response.status(401).json({
        message: "Token not provided",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

    if (!decoded) {
      return response.status(401).json({
        message: "Unauthorized access",
        error: true,
        success: false,
      });
    }

    request.userId = decoded.id;
    next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid or expired token",
      error: error.message,
      success: false,
    });
  }
};

export default auth;
