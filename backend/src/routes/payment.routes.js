import express from 'express';
import { createQuizPayment, verifyPayment } from '../controllers/payment.controller.js';

const router = express.Router();

router.post('/create-quiz-payment', createQuizPayment);
router.post('/verify-payment', verifyPayment);

export { router as paymentRoutes }; 