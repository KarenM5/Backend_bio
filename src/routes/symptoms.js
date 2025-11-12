import express from 'express';
import { getSymptoms, createSymptom } from '../controllers/symptomController.js';

const router = express.Router();

router.get('/', getSymptoms);
router.post('/', createSymptom);

export default router;
