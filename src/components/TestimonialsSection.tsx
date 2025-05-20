
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "AI Island helped us implement a machine learning solution that improved our customer retention by 35%. Their expertise in AI is unmatched.",
      author: "Sarah Johnson",
      title: "CTO, TechCorp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      quote: "The chatbot developed by AI Island transformed our customer service operations, reducing response times by 80% while maintaining high satisfaction rates.",
      author: "Michael Chen",
      title: "Head of Operations, Retail Plus",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      quote: "Working with the team at AI Island was a game-changer for our data analytics capabilities. They delivered insights we never thought possible.",
      author: "Elena Rodriguez",
      title: "Data Director, FinanceGrow",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];

  return (
    <section className="py-20 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-20"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-aipurple-500/50 to-transparent"></div>
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-aipurple-500/50 to-transparent"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="shine-text">Clients Say</span></h2>
          <p className="text-gray-400 text-lg">
            Discover how our AI solutions have transformed businesses and delivered real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift rounded-xl overflow-hidden border-0 bg-muted/30 backdrop-blur-sm border border-aipurple-800/30 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-aipurple-500 to-aiblue-500 animate-pulse-glow"></div>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-16 h-16 rounded-full object-cover relative z-10 border-2 border-aipurple-500"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg text-white">{testimonial.author}</h4>
                    <p className="text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <div className="relative">
                  <svg 
                    className="absolute -top-4 -left-4 h-8 w-8 text-aipurple-700" 
                    fill="currentColor" 
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-300 mt-4 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
