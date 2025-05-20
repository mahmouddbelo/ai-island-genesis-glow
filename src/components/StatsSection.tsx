
import { ArrowUpRight } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { value: "50+", label: "AI Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "30+", label: "Industry Experts" },
    { value: "40%", label: "Average Efficiency Gains" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-aipurple-600 to-aiblue-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center mb-4 bg-white/10 rounded-full p-1.5">
                <ArrowUpRight className="h-6 w-6" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
