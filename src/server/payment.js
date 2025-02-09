import express from 'express';
import axios from 'axios';

const router = express.Router();

const CASHFREE_BASE_URL = process.env.VITE_CASHFREE_MODE === 'production' 
  ? 'https://api.cashfree.com/pg'
  : 'https://sandbox.cashfree.com/pg';

router.post('/create-order', async (req, res) => {
  try {
    const { orderId, amount, customerName, customerEmail, customerPhone, quizAttemptId } = req.body;

    const response = await axios.post(
      `${CASHFREE_BASE_URL}/orders`,
      {
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id: quizAttemptId,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone
        },
        order_meta: {
          return_url: `${process.env.APP_URL}/payment/success?order_id={order_id}&payment_id={payment_id}&quiz_attempt_id=${quizAttemptId}`,
          notify_url: `${process.env.APP_URL}/payment/failure?order_id={order_id}&error_message={error_message}&quiz_attempt_id=${quizAttemptId}`
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-client-id': process.env.VITE_CASHFREE_APP_ID,
          'x-client-secret': process.env.VITE_CASHFREE_SECRET_KEY,
          'x-api-version': '2023-08-01'
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Payment initialization failed:', error.response?.data || error.message);
    res.status(500).json({
      error: error.response?.data?.message || 'Failed to initialize payment'
    });
  }
});

export default router;