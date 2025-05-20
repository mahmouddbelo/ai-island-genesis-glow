
import { Brain, Zap, CircuitBoard } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = 'md', showText = true, className }: LogoProps) => {
  const sizes = {
    sm: {
      container: "h-8 w-8",
      logo: "h-4 w-4"
    },
    md: {
      container: "h-10 w-10",
      logo: "h-5 w-5"
    },
    lg: {
      container: "h-14 w-14",
      logo: "h-7 w-7"
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        sizes[size].container,
        "relative rounded-md bg-gradient-to-br from-aipurple-500 to-aiblue-500 flex items-center justify-center"
      )}>
        <div className="absolute inset-0 bg-black/20 rounded-md"></div>
        
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-aipurple-500/50 via-aiblue-500/50 to-aipurple-500/50 bg-[length:200%_auto] rounded-md animate-shine"></div>
        
        {/* Logo icon with animation */}
        <div className="relative z-10 flex items-center justify-center">
          <Brain className={cn(sizes[size].logo, "text-white absolute animate-pulse-glow")} />
          <CircuitBoard className={cn(sizes[size].logo, "text-white/70 absolute animate-pulse opacity-60")} style={{ animationDelay: "0.5s" }} />
          <Zap className={cn(sizes[size].logo, "text-white/90 absolute animate-pulse opacity-80")} style={{ animationDelay: "1s" }} />
        </div>
      </div>

      {showText && (
        <>
          <span className={cn(
            size === 'sm' ? "text-xl" : size === 'md' ? "text-2xl" : "text-3xl", 
            "font-bold shine-text"
          )}>
            AI Island
          </span>
        </>
      )}
    </div>
  );
};

export default Logo;
