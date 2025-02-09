import { Trophy } from 'lucide-react';

export default function QuizProgress({ 
  currentQuestion, 
  totalQuestions 
}: { 
  currentQuestion: number;
  totalQuestions: number;
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-1 bg-gray-200 dark:bg-gray-700">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="relative flex justify-between">
        {Array.from({ length: totalQuestions }).map((_, i) => {
          const isCurrent = i === currentQuestion;
          const isCompleted = i < currentQuestion;

          return (
            <div
              key={i}
              className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm
                ${isCompleted ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800'}
                ${isCurrent ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-gray-900' : ''}
                ${!isCompleted && !isCurrent ? 'border-2 border-gray-200 dark:border-gray-700' : ''}
              `}
            >
              {i === totalQuestions - 1 ? (
                <Trophy className="w-4 h-4" />
              ) : (
                i + 1
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}