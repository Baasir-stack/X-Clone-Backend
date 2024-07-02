import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true, // Requires HTTPS
    sameSite: "None", // Allows cross-site requests
    maxAge: 3600000, // 1 hour
  });
};
