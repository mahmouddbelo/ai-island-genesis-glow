
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AlertCircle, ArrowRight, BarChart3, Brain, Code2, Database, Globe, Lightbulb, MessageSquare, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "AI Consulting",
      description: "Strategic AI consultation to identify opportunities and implement AI solutions for your business.",
      icon: <Brain className="h-10 w-10 text-aipurple-500" />,
    },
    {
      title: "Machine Learning",
      description: "Custom machine learning solutions to automate processes and make data-driven predictions.",
      icon: <Settings className="h-10 w-10 text-aipurple-500" />,
    },
    {
      title: "Chatbot Development",
      description: "Intelligent conversational AI chatbots for customer service and internal processes.",
      icon: <MessageSquare className="h-10 w-10 text-aipurple-500" />,
    },
    {
      title: "Computer Vision",
      description: "Advanced image recognition and video analysis solutions for various industries.",
      icon: <AlertCircle className="h-10 w-10 text-aipurple-500" />,
    },
    {
      title: "Data Analytics",
      description: "Comprehensive data analysis to extract valuable insights from your business data.",
      icon: <BarChart3 className="h-10 w-10 text-aipurple-500" />,
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis and processing to understand and generate human language.",
      icon: <Globe className="h-10 w-10 text-aipurple-500" />,
    },
    {
      title: "AI Integration",
      description: "Seamless integration of AI technologies with your existing business systems.",
      icon: <Code2 className="h-10 w-10 text-aipurple-500" />,
    },
    {
      title: "Big Data Solutions",
      description: "Big data infrastructure and processing solutions for handling large datasets.",
      icon: <Database className="h-10 w-10 text-aipurple-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Services</span></h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive AI solutions to help businesses innovate and stay ahead in the digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift rounded-xl overflow-hidden border-0 shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-aipurple-600 font-medium hover:text-aipurple-700 inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
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
