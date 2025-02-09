import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { recordSuccessfulPayment } from '../utils/supabase';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order_id');
  const paymentId = searchParams.get('payment_id');
  const quizAttemptId = searchParams.get('quiz_attempt_id');

  useEffect(() => {
    if (!orderId || !paymentId || !quizAttemptId) {
      navigate('/certificate');
      return;
    }

    const recordPayment = async () => {
      try {
        await recordSuccessfulPayment(quizAttemptId, {
          order_id: orderId,
          amount: 1,
          payment_id: paymentId
        });
      } catch (error) {
        console.error('Failed to record successful payment:', error);
      }
    };

    recordPayment();
  }, [orderId, paymentId, quizAttemptId, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your certificate is ready for download
        </p>
        <button 
          onClick={() => window.print()}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-[#ff2424] transition-colors"
        >
          Download Certificate
        </button>
      </div>
    </div>
  );
}