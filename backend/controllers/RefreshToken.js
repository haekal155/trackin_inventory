import { updateRefreshToken } from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const userId = decoded.userId;

    const updated = await updateRefreshToken(userId, refreshToken);

    if (!updated) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const accessToken = jwt.sign(
      { userId: userId },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "20s" }
    );

    res.json({ accessToken });
  } catch (error) {
    console.error("Error:", error);
    res.status(401).json({ msg: "Unauthorized" });
  }
};
