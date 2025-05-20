
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Intelligent Customer Service",
      category: "Chatbot AI",
      description: "An advanced AI chatbot solution for e-commerce customer service with multi-language support.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Predictive Maintenance System",
      category: "Machine Learning",
      description: "AI-powered system that predicts equipment failures before they happen, reducing downtime.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Smart Content Recommendation",
      category: "Personalization AI",
      description: "Content recommendation engine that learns user preferences to deliver personalized experiences.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-20"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-aipurple-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-aiblue-900/20 rounded-full filter blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="shine-text">Projects</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Explore our portfolio of successful AI implementations that have transformed businesses.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 border-aipurple-700/50 text-aipurple-400 bg-background/50 hover:bg-aipurple-900/30 hover:text-aipurple-300"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group rounded-xl overflow-hidden shadow-lg hover-lift cyber-border">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-white/90 text-sm font-medium bg-aipurple-600/90 py-1 px-3 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-semibold mt-2">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-muted/30 backdrop-blur-sm">
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-aipurple-400 font-medium hover:text-aipurple-300 group"
                >
                  View Case Study <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
