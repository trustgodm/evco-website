import { useEffect } from 'react';
import ServiceRequestForm from '@/components/ServiceRequestForm';
import contactTeam from '@/assets/contact-team.jpg';
import AnimatedText from '@/components/AnimatedText';
import Logo from '@/components/Logo';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-8 lg:px-16">
          <AnimatedText animation="fadeIn" delay={0.2}>
            <div className="text-center mb-16">
              <Logo variant="primary" size="lg" className="mx-auto mb-8" />
              <h1 className="text-6xl font-light text-white mb-8">
                Contact Us
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Ready to transform your space? Get in touch with our team today for a free consultation 
                and quote tailored to your specific needs.
              </p>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedText animation="slideInLeft" delay={0.2}>
              <div>
                <h2 className="text-5xl font-light text-dark-gray mb-12">
                  Get in touch
                </h2>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-light text-dark-gray mb-4">Our Location</h3>
                    <p className="text-dark-gray leading-relaxed">
                      Braamfontein<br />
                      125 Jorissen St.<br />
                      Johannesburg, South Africa
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-light text-dark-gray mb-4">Contact Information</h3>
                      <p className="text-dark-gray">
                        <span className="font-medium">Tel.</span> <a href="tel:+27687851530" className="hover:text-sage transition-colors">(068) 785 1530</a>
                      </p>
                      <p className="text-dark-gray">
                        <span className="font-medium">Email:</span> <a href="mailto:melusimanana62@gmail.com" className="hover:text-sage transition-colors">melusimanana62@gmail.com</a>
                      </p>
                      <p className="text-dark-gray">
                        <span className="font-medium">Social:</span> @evco
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-light text-dark-gray mb-4">Business Hours</h3>
                    <div className="space-y-2 text-dark-gray">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <p className="text-sage font-medium mb-6 text-lg">
                      Ready to get started? Fill out our service request form below.
                    </p>
                    
                    <ServiceRequestForm />
                  </div>
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText animation="slideInRight" delay={0.4}>
              <div className="relative">
                <img 
                  src={contactTeam} 
                  alt="Professional team working together"
                  className="w-full h-auto rounded-none shadow-lg hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-sage/10 hover:bg-sage/20 transition-colors duration-300 rounded-none"></div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8 lg:px-16">
          <AnimatedText animation="slideInUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-dark-gray mb-8">
                Service Areas
              </h2>
              <p className="text-xl text-dark-gray max-w-3xl mx-auto">
                We proudly serve the greater Johannesburg area with reliable cleaning and maintenance services.
              </p>
            </div>
          </AnimatedText>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Braamfontein",
              "Sandton",
              "Rosebank",
              "Melville",
              "Parktown",
              "Newtown",
              "Houghton",
              "Morningside"
            ].map((area, index) => (
              <AnimatedText key={index} animation="slideInUp" delay={0.3 + (index * 0.1)}>
                <div className="bg-white p-6 text-center shadow-lg rounded-none hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-sage rounded-none mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-medium text-dark-gray">{area}</h3>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <AnimatedText animation="slideInUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-dark-gray mb-8">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-dark-gray max-w-3xl mx-auto">
                Common questions about our cleaning and maintenance services.
              </p>
            </div>
          </AnimatedText>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How do I get a quote for your services?",
                answer: "Simply fill out our service request form above, call us at (068) 785 1530, or email us at melusimanana62@gmail.com. We'll provide a detailed quote within 24 hours."
              },
              {
                question: "Are your services insured?",
                answer: "Yes, we are fully insured and bonded. All our cleaning and maintenance services are covered to ensure your peace of mind and protection."
              },
              {
                question: "Do you provide one-time or recurring services?",
                answer: "We offer both one-time services for special occasions or deep cleaning, as well as recurring services for regular maintenance. We can customize a schedule that works for your needs."
              },
              {
                question: "What areas do you serve?",
                answer: "We serve the greater Johannesburg area, including Braamfontein, Sandton, Rosebank, Melville, and surrounding neighborhoods. Contact us to confirm service availability in your area."
              }
            ].map((faq, index) => (
              <AnimatedText key={index} animation="slideInUp" delay={0.3 + (index * 0.1)}>
                <div className="bg-white p-8 shadow-lg rounded-none">
                  <h3 className="text-xl font-medium text-dark-gray mb-4">{faq.question}</h3>
                  <p className="text-dark-gray leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
