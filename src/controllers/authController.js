import prisma from "../config/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (user) return res.status(400).json({ message: "El usuario ya existe" });

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: { email, password: hashed, name },
    });

    res.json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ message: "Credenciales incorrectas" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Credenciales incorrectas" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ message: "Login correcto", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
