import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import { recordFailedPayment } from '../utils/supabase';

export default function PaymentFailure() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order_id');
  const error = searchParams.get('error_message');
  const quizAttemptId = searchParams.get('quiz_attempt_id');

  useEffect(() => {
    if (!orderId || !quizAttemptId) {
      navigate('/certificate');
      return;
    }

    const recordFailure = async () => {
      try {
        await recordFailedPayment(quizAttemptId, {
          order_id: orderId,
          amount: 1,
          error_message: error || 'Unknown error'
        });
      } catch (error) {
        console.error('Failed to record payment failure:', error);
      }
    };

    recordFailure();
  }, [orderId, error, quizAttemptId, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-4">Payment Failed</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {error || 'Something went wrong with your payment. Please try again.'}
        </p>
        <button 
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-[#ff2424] transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}