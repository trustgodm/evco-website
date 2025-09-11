import { useState } from "react";
eaimport { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const faqs = [
    {
      question: "What cleaning services do you offer?",
      answer: "We provide comprehensive cleaning solutions including residential cleaning, office cleaning, carpet & upholstery cleaning, post-construction cleaning, and specialized deep cleaning services."
    },
    {
      question: "Do you provide maintenance services?",
      answer: "Yes, we offer property maintenance services including landscaping & groundskeeping, painting & renovations, general property maintenance, and plumbing maintenance."
    },
    {
      question: "What areas in Johannesburg do you service?",
      answer: "We provide services throughout Johannesburg, with our main office located in Braamfontein. We cover residential and commercial properties across the greater Johannesburg area."
    },
    {
      question: "How do I request a service?",
      answer: "You can contact us via phone at (068) 785 1530, email at melusimanana62@gmail.com, or use our online service request form. We'll respond promptly to discuss your specific needs."
    },
    {
      question: "Are your services insured?",
      answer: "Yes, we are fully insured and bonded. All our cleaning and maintenance services are covered to ensure your peace of mind and protection."
    },
    {
      question: "Do you provide one-time or recurring services?",
      answer: "We offer both one-time services for special occasions or deep cleaning, as well as recurring services for regular maintenance. We can customize a schedule that works for your needs."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-dark-gray mb-8">
              Frequently Asked Questions
            </h2>
            <button
              onClick={() => setIsSectionOpen(!isSectionOpen)}
              className="flex items-center justify-center mx-auto bg-sage hover:bg-sage-dark text-white px-8 py-4 text-lg font-medium tracking-wide rounded-none transition-colors"
            >
              {isSectionOpen ? 'Hide Questions' : 'Show Questions'}
              <ChevronDown 
                className={`ml-2 h-5 w-5 transition-transform ${isSectionOpen ? 'rotate-180' : ''}`} 
              />
            </button>
          </div>
          
          {isSectionOpen && (
            <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-none bg-white"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-medium text-dark-gray">
                    {faq.question}
                  </h3>
                  <span className="text-2xl text-sage font-light">
                    {openItems.includes(index) ? '−' : '+'}
                  </span>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <p className="text-dark-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
