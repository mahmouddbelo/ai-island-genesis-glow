
import { ArrowUpRight } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { value: "50+", label: "AI Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "30+", label: "Industry Experts" },
    { value: "40%", label: "Average Efficiency Gains" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-aipurple-900 to-aiblue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTJmM2YiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-aipurple-500/50 to-transparent"></div>
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-aipurple-500/50 to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center mb-4 bg-white/10 rounded-full p-1.5 border border-white/20">
                <ArrowUpRight className="h-6 w-6 text-aipurple-300" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 neon-text">{stat.value}</h3>
              <p className="text-aipurple-200/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
