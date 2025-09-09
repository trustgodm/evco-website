import { ChevronRight } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Meeting deadlines",
      description: "We prioritize punctuality"
    },
    {
      title: "Plan for success",
      description: "Uncompromised quality"
    },
    {
      title: "24/7 availability",
      description: "we are always available"
    },
    {
      title: "Skilled Professionals",
      description: "Our trained team brings expertise"
    },
    {
      title: "Attention to detail",
      description: "Every task is executed with care"
    },
    {
      title: "Affordable Quality",
      description: "Premium service at competitive prices"
    }
  ];

  return (
    <section className="py-24 bg-warm-gray">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-dark-gray mb-4">
            Why choose us?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group"
            >
              <div>
                <h3 className="text-xl font-medium text-dark-gray mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              
              <ChevronRight className="w-6 h-6 text-sage group-hover:text-sage-dark transition-colors duration-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;