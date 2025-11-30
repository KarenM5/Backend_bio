import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "../routes/auth.js";
import patientsRoutes from "../routes/patients.js";
import symptomsRoutes from "../routes/symptoms.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/patients", patientsRoutes);
app.use("/symptoms", symptomsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
