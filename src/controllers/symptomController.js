import prisma from '../config/prismaClient.js';

export const getSymptoms = async (req, res) => {
  const symptoms = await prisma.symptom.findMany({
    include: { patient: true },
    orderBy: { date: 'desc' },
  });
  res.json(symptoms);
};

export const createSymptom = async (req, res) => {
  try {
    const data = req.body;
    const symptom = await prisma.symptom.create({ data });
    res.status(201).json(symptom);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
