
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AlertCircle, ArrowRight, BarChart3, Brain, Code2, Database, Globe, Lightbulb, MessageSquare, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "AI Consulting",
      description: "Strategic AI consultation to identify opportunities and implement AI solutions for your business.",
      icon: <Brain className="h-10 w-10 text-aipurple-400" />,
    },
    {
      title: "Machine Learning",
      description: "Custom machine learning solutions to automate processes and make data-driven predictions.",
      icon: <Settings className="h-10 w-10 text-aipurple-400" />,
    },
    {
      title: "Chatbot Development",
      description: "Intelligent conversational AI chatbots for customer service and internal processes.",
      icon: <MessageSquare className="h-10 w-10 text-aipurple-400" />,
    },
    {
      title: "Computer Vision",
      description: "Advanced image recognition and video analysis solutions for various industries.",
      icon: <AlertCircle className="h-10 w-10 text-aipurple-400" />,
    },
    {
      title: "Data Analytics",
      description: "Comprehensive data analysis to extract valuable insights from your business data.",
      icon: <BarChart3 className="h-10 w-10 text-aipurple-400" />,
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis and processing to understand and generate human language.",
      icon: <Globe className="h-10 w-10 text-aipurple-400" />,
    },
    {
      title: "AI Integration",
      description: "Seamless integration of AI technologies with your existing business systems.",
      icon: <Code2 className="h-10 w-10 text-aipurple-400" />,
    },
    {
      title: "Big Data Solutions",
      description: "Big data infrastructure and processing solutions for handling large datasets.",
      icon: <Database className="h-10 w-10 text-aipurple-400" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-20"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-aipurple-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-aiblue-900/20 rounded-full filter blur-3xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="shine-text">Services</span></h2>
          <p className="text-gray-400 text-lg">
            We provide comprehensive AI solutions to help businesses innovate and stay ahead in the digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift rounded-xl overflow-hidden border-0 bg-muted/30 backdrop-blur-sm border border-aipurple-800/30 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
              <CardHeader className="pb-2">
                <div className="mb-2">
                  <div className="p-2 bg-aipurple-900/50 rounded-lg w-fit border border-aipurple-700/50">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-aipurple-400 font-medium hover:text-aipurple-300 inline-flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
