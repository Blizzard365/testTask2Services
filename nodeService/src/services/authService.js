const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
require("dotenv").config();

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.TOKEN_EXPIRATION }
  );
};

const register = async (email, password) => {
  const hash = await bcrypt.hash(password, 10);
  return await User.create({ email, password: hash });
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  return generateToken(user);
};

const getProfile = async (id) => {
  return await User.findByPk(id, { attributes: ["id", "email", "role"] });
};

module.exports = { register, login, getProfile };
