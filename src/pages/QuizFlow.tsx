import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Trophy, Send, Loader } from 'lucide-react';
import { skills } from '../data/skills';
import { quizData } from '../data/quizData';
import QuizProgress from '../components/QuizProgress';
import LoadingScreen from '../components/LoadingScreen';
import { initCashfreePayment } from '../utils/payment';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../config/firebase";

export default function QuizFlow() {
  const { skillId } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState<'form' | 'loading' | 'quiz' | 'complete'>('form');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const skill = skills.find(s => s.id === skillId);
  const quiz = quizData[skillId || ''];

  useEffect(() => {
    if (!skill || !quiz) {
      navigate('/certificate');
    }
  }, [skill, quiz, navigate]);

  if (!skill || !quiz) return null;

  const handleStartQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    setTimeout(() => setStep('quiz'), 3000);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion === quiz.questions.length - 1) {
      setStep('complete');
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    answers.forEach((answer, index) => {
      if (answer === quiz.questions[index].correct) {
        correctAnswers++;
      }
    });
    return Math.round((correctAnswers / quiz.questions.length) * 100);
  };

  const handlePayment = async () => {
    if (isProcessing) return;

    setIsProcessing(true);

    try {
      const paymentData = {
        orderId: `QUIZ_${Date.now()}_${Math.random().toString(36).slice(2)}`,
        amount: 499,
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.mobile,
        quizAttemptId: `${skillId}_${Date.now()}`
      };

      console.log('Initiating payment with data:', paymentData); // Debug log

      const result = await initCashfreePayment(paymentData);
      
      console.log('Payment result:', result); // Debug log

      // Handle successful payment
      if (result.success) {
        try {
          // Save certificate details to Firebase
          const certificateRef = doc(db, 'certificates', paymentData.orderId);
          await setDoc(certificateRef, {
            userId: auth.currentUser?.uid,
            skillId,
            score: calculateScore(),
            customerName: formData.name,
            customerEmail: formData.email,
            customerPhone: formData.mobile,
            createdAt: serverTimestamp(),
            paymentId: result.status.cfPaymentId,
            amount: 499
          });

          // Navigate to success page
          navigate(`/certificate/${paymentData.orderId}`);
        } catch (firebaseError) {
          console.error('Firebase error:', firebaseError);
          alert('Payment successful but failed to save certificate. Please contact support.');
        }
      }
    } catch (error) {
      console.error('Payment error:', error); // Debug log
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Payment failed. Please try again later.');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {step === 'form' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">
                Get Your {skill.name} Certificate
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Complete this form to start your certification journey
              </p>
            </div>

            <form onSubmit={handleStartQuiz} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mobile Number</label>
                <input
                  type="tel"
                  required
                  value={formData.mobile}
                  onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your mobile number"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-lg hover:bg-[#ff2424] transition-colors flex items-center justify-center gap-2"
              >
                Start Quiz
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {step === 'loading' && <LoadingScreen />}

        {step === 'quiz' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <QuizProgress 
              currentQuestion={currentQuestion} 
              totalQuestions={quiz.questions.length} 
            />

            <div className="my-8">
              <h2 className="text-xl font-semibold mb-6">
                {quiz.questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {quiz.questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </div>
          </div>
        )}

        {step === 'complete' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-8">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                You've completed the {skill.name} certification quiz
              </p>
              <p className="text-2xl font-bold text-primary">
                Score: {calculateScore()}%
              </p>
            </div>

            <button 
              onClick={handlePayment}
              disabled={isProcessing}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-[#ff2424] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 w-full"
            >
              {isProcessing ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Processing Payment...
                </>
              ) : (
                <>
                  Pay ₹499 to Get Certificate
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}