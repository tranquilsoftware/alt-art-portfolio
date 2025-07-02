import { Crown, Heart } from 'lucide-react';
import { OWNER_PIC, OWNER_NAME } from '../../globals';

export function About() {
  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-black via-accent/10 to-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Crown className="w-8 h-8 text-primary mx-4" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            ABOUT
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <img
                src={OWNER_PIC}
                alt={OWNER_NAME}
                className="w-full h-full object-cover rounded-full border-4 border-primary/30"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/placeholder.svg';
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          <div className="space-y-6 text-left">
            <p className="text-gray-300 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus at hic enim culpa cumque amet in illum soluta adipisci. Reiciendis voluptatibus assumenda saepe? Repellat blanditiis quis temporibus odit expedita.
            </p>
            <div className="flex justify-center space-x-6 pt-4">
              <Heart className="w-8 h-8 text-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
