import prisma from '../config/prismaClient.js';

export const getPatients = async (req, res) => {
  const patients = await prisma.patient.findMany({
    include: { symptoms: true },
  });
  res.json(patients);
};

export const createPatient = async (req, res) => {
  try {
    const data = req.body;
    const patient = await prisma.patient.create({ data });
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
