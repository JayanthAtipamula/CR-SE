import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface QuizAttempt {
  user_name: string;
  user_email: string;
  user_phone: string;
  certificate_name: string;
}

interface PaymentResult {
  order_id: string;
  amount: number;
  payment_id?: string;
  error_message?: string;
}

export const createQuizAttempt = async (data: QuizAttempt) => {
  try {
    const { data: result, error } = await supabase
      .from('quiz_attempts')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Supabase request failed', error);
      throw error;
    }

    return result;
  } catch (error) {
    console.error('Failed to create quiz attempt:', error);
    throw error;
  }
};

export const recordSuccessfulPayment = async (quizAttemptId: string, paymentData: PaymentResult) => {
  const { error } = await supabase
    .from('successful_payments')
    .insert([{
      quiz_attempt_id: quizAttemptId,
      order_id: paymentData.order_id,
      amount: paymentData.amount,
      payment_id: paymentData.payment_id
    }]);

  if (error) throw error;
};

export const recordFailedPayment = async (quizAttemptId: string, paymentData: PaymentResult) => {
  const { error } = await supabase
    .from('failed_payments')
    .insert([{
      quiz_attempt_id: quizAttemptId,
      order_id: paymentData.order_id,
      amount: paymentData.amount,
      error_message: paymentData.error_message
    }]);

  if (error) throw error;
};