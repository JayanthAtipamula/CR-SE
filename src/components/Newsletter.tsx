import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-4xl mx-auto bg-primary rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-xl font-bold">Get In Touch With Us</h3>
            <p className="mt-2">Updates & Offers</p>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg pr-12 bg-white/10 backdrop-blur-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-white/80">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}