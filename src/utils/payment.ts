interface PaymentData {
  orderId: string;
  amount: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  quizAttemptId: string;
}

declare global {
  interface Window {
    Cashfree: any;
  }
}

export const initCashfreePayment = async (paymentData: PaymentData) => {
  try {
    // First check if backend is reachable
    const response = await fetch('http://localhost:5000/api/payment/create-quiz-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(paymentData),
      mode: 'cors',
      credentials: 'include'
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Payment initialization failed');
    }

    const data = await response.json();
    console.log('Payment session data:', data);

    // Wait for SDK to load
    if (typeof window.Cashfree === 'undefined') {
      await new Promise((resolve) => {
        const checkSDK = setInterval(() => {
          if (typeof window.Cashfree !== 'undefined') {
            clearInterval(checkSDK);
            resolve(true);
          }
        }, 500);
      });
    }

    return new Promise((resolve, reject) => {
      try {
        const cashfree = new window.Cashfree({
          mode: 'sandbox'
        });

        cashfree.checkout({
          paymentSessionId: data.order.payment_session_id,
          returnUrl: window.location.origin + '/payment/success',
          onSuccess: async (successData: any) => {
            console.log('Payment success:', successData);
            try {
              const verifyResponse = await fetch('http://localhost:5000/api/payment/verify-payment', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  orderId: successData.order.orderId,
                }),
              });

              const verifyData = await verifyResponse.json();
              if (verifyData.success) {
                resolve(verifyData);
              } else {
                reject(new Error('Payment verification failed'));
              }
            } catch (error) {
              reject(new Error('Payment verification failed'));
            }
          },
          onFailure: (failureData: any) => {
            console.log('Payment failed:', failureData);
            reject(new Error(failureData.message || 'Payment failed'));
          },
          onError: (error: any) => {
            console.error('Payment error:', error);
            reject(new Error(error.message || 'Payment initialization failed'));
          }
        });
      } catch (error) {
        console.error('Cashfree initialization error:', error);
        reject(error);
      }
    });
  } catch (error) {
    console.error('Payment initialization error:', error);
    throw error;
  }
}; 