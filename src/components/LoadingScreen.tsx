import { useState, useEffect } from 'react';
import { Trophy, Briefcase, Users } from 'lucide-react';

const ctas = [
  {
    icon: Trophy,
    text: "Our Users See an 88% Chance of Getting Hired by Indian Unicorn Companies"
  },
  {
    icon: Briefcase,
    text: "95% of Our Certified Users Land Their Dream Job Within 3 Months"
  },
  {
    icon: Users,
    text: "Join 15,000+ Certified Professionals in Our Network"
  }
];

export default function LoadingScreen() {
  const [currentCta, setCurrentCta] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCta(prev => (prev + 1) % ctas.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const Cta = ctas[currentCta];
  const Icon = Cta.icon;

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 animate-pulse">
        <Icon className="w-16 h-16 text-primary mx-auto" />
        <p className="text-xl font-medium max-w-md">
          {Cta.text}
        </p>
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary opacity-75" />
          <div className="w-2 h-2 rounded-full bg-primary opacity-50" />
          <div className="w-2 h-2 rounded-full bg-primary opacity-25" />
        </div>
      </div>
    </div>
  );
}