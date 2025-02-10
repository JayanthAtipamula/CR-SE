import axios from 'axios';

const CASHFREE_BASE_URL = 'https://sandbox.cashfree.com/pg';

// Helper function to create valid customer ID
const createValidCustomerId = (email) => {
  // Remove all special characters and replace @ and . with underscore
  return `cust_${email.replace(/[^a-zA-Z0-9]/g, '_')}`;
};

export const createQuizPayment = async (req, res) => {
  try {
    const { orderId, amount, customerName, customerEmail, customerPhone, quizAttemptId } = req.body;

    // Ensure FRONTEND_URL is available
    if (!process.env.FRONTEND_URL) {
      throw new Error('FRONTEND_URL environment variable is not set');
    }

    console.log('Received payment request:', { orderId, amount, customerName, customerEmail });

    const orderData = {
      order_id: orderId,
      order_amount: amount,
      order_currency: "INR",
      customer_details: {
        customer_id: createValidCustomerId(customerEmail),
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone
      },
      order_meta: {
        return_url: `${process.env.FRONTEND_URL}/payment/success?order_id={order_id}`,
        notify_url: "https://d861-122-171-170-21.ngrok-free.app/", // Use a webhook URL for notifications
        payment_methods: "cc,dc,nb,upi"
      },
      order_tags: {
        quiz_attempt_id: quizAttemptId
      }
    };

    console.log('Sending order data:', orderData);

    const response = await axios.post(
      `${CASHFREE_BASE_URL}/orders`,
      orderData,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-client-id': process.env.CASHFREE_APP_ID,
          'x-client-secret': process.env.CASHFREE_SECRET_KEY,
          'x-api-version': '2022-09-01'
        }
      }
    );

    console.log('Cashfree response:', response.data);

    res.json({
      success: true,
      order: {
        payment_session_id: response.data.payment_session_id,
        order_token: response.data.order_token,
        order_id: response.data.order_id
      }
    });
  } catch (error) {
    console.error('Payment creation error:', error.response?.data || error);
    res.status(500).json({
      success: false,
      error: error.response?.data?.message || error.message
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const { orderId } = req.body;

    const response = await axios.get(
      `${CASHFREE_BASE_URL}/orders/${orderId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-client-id': process.env.CASHFREE_APP_ID,
          'x-client-secret': process.env.CASHFREE_SECRET_KEY,
          'x-api-version': '2022-09-01'
        }
      }
    );

    res.json({
      success: true,
      status: response.data,
    });
  } catch (error) {
    console.error('Error verifying payment:', error.response?.data || error);
    res.status(500).json({
      success: false,
      error: error.response?.data?.message || error.message,
    });
  }
}; 