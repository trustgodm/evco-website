import { useEffect } from 'react';
import outdoorCleaning from '@/assets/outdoor-cleaning.jpg';
import maintenanceWork from '@/assets/maintenance-work.jpg';
import specializedServices from '@/assets/specialized-services.jpg';
import cleaningProfessional from '@/assets/cleaning-professional.jpg';
import AnimatedText from '@/components/AnimatedText';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Cleaning Solutions",
      image: outdoorCleaning,
      description: "Professional cleaning services for residential and commercial spaces.",
      services: [
        "Carpet & upholstery cleaning",
        "Residential cleaning",
        "Post-construction cleaning",
        "Office cleaning",
        "Deep cleaning & sanitization",
        "Event cleanup services"
      ],
      bgColor: "bg-navy"
    },
    {
      id: 2,
      title: "Property Maintenance",
      image: maintenanceWork,
      description: "Comprehensive maintenance solutions to keep your property in top condition.",
      services: [
        "Landscaping & groundskeeping",
        "Painting & renovations",
        "General property maintenance",
        "Plumbing maintenance",
        "Electrical repairs",
        "HVAC maintenance"
      ],
      bgColor: "bg-sage-dark"
    },
    {
      id: 3,
      title: "Specialized Services",
      image: specializedServices,
      description: "Custom solutions for unique cleaning and maintenance challenges.",
      services: [
        "Deep cleaning & sanitization services",
        "Event cleanup services",
        "Waste removal & disposal support",
        "Emergency cleaning services",
        "Green cleaning solutions",
        "Restoration services"
      ],
      bgColor: "bg-dark-gray"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-8 lg:px-16">
          <AnimatedText animation="fadeIn" delay={0.2}>
            <div className="text-center mb-16">
              <Logo variant="primary" size="lg" className="mx-auto mb-8" />
              <h1 className="text-6xl font-light text-white mb-8">
                Our Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Comprehensive cleaning and maintenance solutions designed to meet your specific needs 
                and exceed your expectations.
              </p>
              <Button 
                className="bg-sage hover:bg-sage-dark text-white rounded-none px-8 py-4 text-lg"
                onClick={() => {
                  const el = document.getElementById('contact-form');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Free Quote
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedText 
              key={service.id} 
              animation="slideInUp" 
              delay={0.2 + (index * 0.2)}
            >
              <div className={`${service.bgColor} text-white relative min-h-[700px] flex flex-col`}>
                <div className="flex-1 relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-none"
                  />
                </div>
                
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-light mb-6 pb-4 border-b border-white/20">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.services.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-white/90 leading-relaxed flex items-start">
                          <span className="text-sage mr-3 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="bg-white/10 hover:bg-white hover:text-dark-gray text-white border border-white/30 rounded-none transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <AnimatedText animation="slideInUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-dark-gray mb-8">
                Our Process
              </h2>
              <p className="text-xl text-dark-gray max-w-3xl mx-auto">
                Simple, transparent, and efficient - here's how we deliver exceptional results.
              </p>
            </div>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your needs and assess your space to create a customized plan."
              },
              {
                step: "02", 
                title: "Quote",
                description: "Receive a detailed, transparent quote with no hidden fees or surprises."
              },
              {
                step: "03",
                title: "Service",
                description: "Our professional team delivers exceptional results on time, every time."
              },
              {
                step: "04",
                title: "Follow-up",
                description: "We ensure your complete satisfaction and schedule ongoing maintenance."
              }
            ].map((step, index) => (
              <AnimatedText key={index} animation="slideInUp" delay={0.3 + (index * 0.1)}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-sage text-white rounded-none mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-light text-dark-gray mb-4">{step.title}</h3>
                  <p className="text-dark-gray leading-relaxed">{step.description}</p>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedText animation="slideInLeft" delay={0.2}>
              <div>
                <h2 className="text-5xl font-light text-dark-gray mb-8">
                  Why Choose EVCO?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Experienced Professionals",
                      description: "Our team brings years of expertise and training to every project."
                    },
                    {
                      title: "Quality Guarantee",
                      description: "We stand behind our work with a satisfaction guarantee."
                    },
                    {
                      title: "Flexible Scheduling",
                      description: "We work around your schedule to minimize disruption."
                    },
                    {
                      title: "Eco-Friendly Products",
                      description: "Safe, effective cleaning solutions that protect your family and environment."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-sage rounded-none mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-medium text-dark-gray mb-2">{item.title}</h3>
                        <p className="text-dark-gray leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>
            
            <AnimatedText animation="slideInRight" delay={0.4}>
              <div className="relative">
                <img 
                  src={cleaningProfessional} 
                  alt="Professional cleaning service"
                  className="w-full h-auto rounded-none shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="py-24 bg-navy">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <AnimatedText animation="fadeIn" delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-5xl font-light text-white mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Contact us today for a free consultation and quote. Let us help you maintain 
                a clean, well-functioning space that you can be proud of.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-sage hover:bg-sage-dark text-white rounded-none px-8 py-4 text-lg"
                  onClick={() => window.location.href = 'tel:+27687851530'}
                >
                  Call (068) 785 1530
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-dark-gray rounded-none px-8 py-4 text-lg"
                  onClick={() => window.location.href = 'mailto:melusimanana62@gmail.com'}
                >
                  Send Email
                </Button>
              </div>
            </div>
          </AnimatedText>
        </div>
      </section>
    </main>
  );
};

export default Services;
