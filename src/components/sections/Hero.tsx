import { Crown } from 'lucide-react';
import { Button } from '../ui/Button';
import { AltBorder } from '../ui/AltBorder';
import { BRIEF_DESCRIPTION, STYLED_BRAND_NAME, UNICODE_CHAR, UNICODE_CHAR_2 } from '../../globals';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-black to-black"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-primary/20 text-6xl">{UNICODE_CHAR_2}</div>
      <div className="absolute top-32 right-16 text-accent/20 text-4xl">{UNICODE_CHAR}</div>
      <div className="absolute bottom-32 left-20 text-primary/20 text-5xl">{UNICODE_CHAR_2}</div>
      <div className="absolute bottom-20 right-12 text-accent/20 text-6xl">{UNICODE_CHAR_2}</div>

      <div className="relative z-10 text-center px-4">
        {/* Crown Icon */}
        <div className="mb-8">
          <Crown className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" strokeWidth={2.5} />
        </div>

        {/* Brand Name with Alt Border */}
        <div className="w-full px-4">
          <AltBorder className="inline-block p-4 sm:p-6 md:p-8 mb-8 w-full max-w-6xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-primary via-accent to-primary-dark tracking-tight whitespace-normal overflow-visible scale-100 hover:scale-100 transition-transform duration-300">
              <span
                className="inline-block w-full text-center leading-tight"
                style={{ fontFamily: 'AnandaBlack' }}
              >
                {STYLED_BRAND_NAME}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-2 pt-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <span className="bg-gradient-to-r from-primary via-accent to-primary text-transparent bg-clip-text">
                {BRIEF_DESCRIPTION}
              </span>
            </p> 
          </AltBorder>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <AltBorder className="group">
            <Button
              variant="ghost"
              className="relative overflow-hidden border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 px-8 py-3 text-lg tracking-wide"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10">Gallery</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </AltBorder>
          <AltBorder className="group">
            <Button
              variant="ghost"
              className="relative overflow-hidden text-accent hover:text-accent-foreground transition-colors duration-300 px-8 py-3 text-lg tracking-wide"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </AltBorder>
        </div>
      </div>

    </section>
  );
}
