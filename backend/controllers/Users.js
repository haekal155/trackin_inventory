import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { addUser, getUserByEmail } from "../models/UserModel.js";
import db from "../config/database.js";

const Register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await addUser(name, email, hashedPassword);
    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error registering user", error: error.message });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Periksa apakah pengguna ada
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // Bandingkan kata sandi
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // Buat token JWT
    const accessToken = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ msg: "Error logging in", error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const [users] = await db.query("SELECT id, name, email FROM users");
    res.json(users);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching users", error: error.message });
  }
};

export { Register, Login, getUsers };
