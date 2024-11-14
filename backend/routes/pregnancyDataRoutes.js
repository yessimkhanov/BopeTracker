import express from 'express';
import { createPregnancyData, getPregnancyDataByUserId, updatePregnancyData, deletePregnancyData } from '../controllers/pregnancyDataController.js';

const router = express.Router();

router.post('/pregnancyData/', createPregnancyData);
router.get('/pregnancyData/:userID', getPregnancyDataByUserId);
router.put('/pregnancyData/:id', updatePregnancyData);
router.delete('/pregnancyData/:id', deletePregnancyData);

export default router;