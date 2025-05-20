
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden relative cyber-grid">
      <div className="absolute inset-0 bg-gradient-radial from-aipurple-900/30 via-background to-background"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-aipurple-700/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-aiblue-700/10 rounded-full filter blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block py-1.5 px-3 rounded-full bg-aipurple-900/50 text-aipurple-400 border border-aipurple-700/50 font-medium text-sm">
              Innovating the Future of AI
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Ideas with <span className="shine-text animate-neon-pulse">Artificial Intelligence</span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg">
              AI Island is your partner in harnessing the power of artificial intelligence 
              to drive innovation and transform your business for the digital era.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <Button 
                className="bg-gradient-to-r from-aipurple-600 to-aiblue-600 hover:from-aipurple-500 hover:to-aiblue-500 text-white px-6 py-6 rounded-lg font-medium text-lg flex items-center gap-2 border border-aipurple-400/20 shadow-[0_0_15px_rgba(124,85,246,0.3)]"
              >
                Explore Our Services
                <ArrowRight size={20} />
              </Button>
              <Button 
                variant="outline" 
                className="bg-background/50 backdrop-blur-sm border-aipurple-700/50 text-gray-300 hover:bg-aipurple-900/30 hover:text-white px-6 py-6 rounded-lg font-medium text-lg"
              >
                View Our Projects
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-aiblue-600/20 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-aipurple-600/20 rounded-full filter blur-xl"></div>
              
              <svg viewBox="0 0 200 200" className="w-full max-w-md mx-auto drop-shadow-lg">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c55f6" />
                    <stop offset="100%" stopColor="#3370fc" />
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                <path 
                  filter="url(#glow)"
                  fill="url(#gradient)" 
                  d="M47.5,-59.1C62.6,-49.5,76.9,-35.4,81.2,-18.6C85.5,-1.8,79.8,17.8,69.5,32.8C59.1,47.9,44.1,58.5,28.2,65.8C12.2,73.1,-4.8,77.1,-22.5,74.1C-40.3,71,-58.9,60.8,-71.8,44.6C-84.7,28.4,-91.9,6.1,-87.3,-13.3C-82.8,-32.8,-66.3,-49.5,-49,-60.5C-31.7,-71.6,-13.4,-77.1,2,-79.4C17.4,-81.8,32.4,-68.8,47.5,-59.1Z" 
                  transform="translate(100 100)" 
                />
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-6xl font-bold neon-text">AI</div>
              </div>
            </div>
            
            <div className="hidden md:block absolute -right-12 bottom-12 p-4 bg-background/80 backdrop-blur-md rounded-lg shadow-xl cyber-border">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-aipurple-500 to-aiblue-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">AI Solutions</p>
                  <p className="text-xs text-gray-400">Custom AI for your needs</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block absolute -left-12 top-12 p-4 bg-background/80 backdrop-blur-md rounded-lg shadow-xl cyber-border">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-aipurple-500 to-aiblue-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Data Analytics</p>
                  <p className="text-xs text-gray-400">Insight-driven decisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
