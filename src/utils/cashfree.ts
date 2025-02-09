import { load } from "@cashfreepayments/cashfree-js";
import { supabase } from './supabase';

interface PaymentData {
  orderId: string;
  orderAmount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  quizAttemptId: string;
}

export const initCashfreePayment = async (data: PaymentData) => {
  try {
    // First create quiz attempt record
    const { data: quizAttempt, error: quizError } = await supabase
      .from('quiz_attempts')
      .insert([{
        user_name: data.customerName,
        user_email: data.customerEmail,
        user_phone: data.customerPhone,
        certificate_name: 'Quiz Certificate'
      }])
      .select()
      .single();

    if (quizError) {
      throw new Error('Failed to create quiz attempt: ' + quizError.message);
    }

    // Create order with Cashfree
    const orderResponse = await fetch("https://sandbox.cashfree.com/pg/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": import.meta.env.VITE_CASHFREE_APP_ID,
        "x-client-secret": import.meta.env.VITE_CASHFREE_SECRET_KEY,
        "x-api-version": "2023-08-01"
      },
      body: JSON.stringify({
        order_id: data.orderId,
        order_amount: data.orderAmount,
        order_currency: "INR",
        customer_details: {
          customer_id: quizAttempt.id,
          customer_name: data.customerName,
          customer_email: data.customerEmail,
          customer_phone: data.customerPhone
        },
        order_meta: {
          return_url: `${window.location.origin}/payment/success?order_id={order_id}&payment_id={payment_id}&quiz_attempt_id=${quizAttempt.id}`,
          notify_url: `${window.location.origin}/payment/failure?order_id={order_id}&error_message={error_message}&quiz_attempt_id=${quizAttempt.id}`
        }
      })
    });

    if (!orderResponse.ok) {
      const errorData = await orderResponse.json();
      throw new Error(errorData.message || "Failed to create order");
    }

    const orderData = await orderResponse.json();

    if (!orderData.payment_session_id) {
      throw new Error("No payment session ID received");
    }

    // Initialize Cashfree SDK
    const cashfree = await load({
      mode: import.meta.env.VITE_CASHFREE_MODE as "sandbox" | "production"
    });

    // Use checkout instead of individual components
    const checkoutOptions = {
      paymentSessionId: orderData.payment_session_id,
      returnUrl: `${window.location.origin}/payment/success?quiz_attempt_id=${quizAttempt.id}`,
      redirectTarget: "_self"
    };

    const result = await cashfree.checkout(checkoutOptions);

    if (result.error) {
      throw new Error(result.error.message || "Payment failed");
    }

    return { quizAttemptId: quizAttempt.id };

  } catch (error) {
    if (error instanceof Error) {
      console.error('Payment initialization failed:', error.message);
      throw new Error(error.message);
    } else {
      console.error('Payment initialization failed:', error);
      throw new Error('An unexpected error occurred');
    }
  }
};