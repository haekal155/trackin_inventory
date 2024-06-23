// UserModel.js

import db from "../config/database.js";

const addUser = async (name, email, password) => {
  try {
    const query = `
      INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)
    `;
    const [result] = await db.query(query, [name, email, password]);
    return result.insertId;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const query = `
      SELECT * FROM users
      WHERE email = ?
    `;
    const [rows] = await db.query(query, [email]);
    return rows[0];
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
};

export { addUser, getUserByEmail };
