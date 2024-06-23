// routes/index.js

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { addUser, getUserByEmail } from "../models/UserModel.js";
import db from "../config/database.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add the new user to the database
    const userId = await addUser(name, email, hashedPassword);

    res.status(201).json({ msg: "User registered successfully", userId });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res
      .status(500)
      .json({ msg: "Error registering user", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // Create and return JWT token
    const accessToken = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ accessToken });
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).json({ msg: "Error logging in", error: error.message });
  }
});

router.get("/users", async (req, res) => {
  try {
    const [users] = await db.query("SELECT id, name, email FROM users");
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ msg: "Error fetching users", error: error.message });
  }
});

export default router;
