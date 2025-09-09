import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const WhyChooseUsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Meeting deadlines",
      description: "We prioritize punctuality",
      fullDescription: "We understand that time is valuable. Our team is committed to completing every project on schedule, ensuring minimal disruption to your daily operations. We provide clear timelines and stick to them, with regular updates on progress."
    },
    {
      title: "Plan for success",
      description: "Uncompromised quality",
      fullDescription: "Every cleaning project begins with a comprehensive assessment and customized plan. We use proven methodologies, high-quality equipment, and eco-friendly products to ensure exceptional results every time."
    },
    {
      title: "24/7 availability",
      description: "we are always available",
      fullDescription: "Our customer support team is available around the clock to address your concerns, schedule emergency cleanings, or provide assistance. We offer flexible scheduling including evenings, weekends, and holidays to fit your needs."
    },
    {
      title: "Skilled Professionals",
      description: "Our trained team brings expertise",
      fullDescription: "All our cleaning professionals undergo rigorous training in the latest cleaning techniques, safety protocols, and customer service. They are fully insured, background-checked, and regularly updated on industry best practices."
    },
    {
      title: "Attention to detail",
      description: "Every task is executed with care",
      fullDescription: "We believe that excellence lies in the details. Our systematic approach ensures no corner is missed, from high-touch surfaces to hard-to-reach areas. Quality control inspections guarantee consistent, thorough results."
    },
    {
      title: "Affordable Quality",
      description: "Premium service at competitive prices",
      fullDescription: "We believe quality cleaning services should be accessible to everyone. Our transparent pricing structure offers excellent value without hidden fees. We work with your budget to provide customized solutions that meet your needs."
    }
  ];

  const toggleExpansion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => toggleExpansion(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-dark-gray mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                
                {expandedIndex === index ? (
                  <ChevronDown className="w-6 h-6 text-sage ml-4 transition-colors duration-200" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-sage ml-4 transition-colors duration-200" />
                )}
              </div>
              
              {expandedIndex === index && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-dark-gray leading-relaxed">
                    {feature.fullDescription}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;