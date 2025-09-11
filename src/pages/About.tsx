import { useEffect } from 'react';
import cleaningProfessional from '@/assets/cleaning-professional.jpg';
import contactTeam from '@/assets/contact-team.jpg';
import outdoorCleaning from '@/assets/outdoor-cleaning.jpg';
import maintenanceWork from '@/assets/maintenance-work.jpg';
import AnimatedText from '@/components/AnimatedText';
import Logo from '@/components/Logo';

const About = () => {
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
                About EVCO
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Dedicated to providing reliable, high-quality maintenance and cleaning solutions 
                that keep your spaces running smoothly.
              </p>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedText animation="slideInLeft" delay={0.2}>
              <div>
                <h2 className="text-5xl font-light text-dark-gray mb-8">
                  Our Mission
                </h2>
                <p className="text-lg text-dark-gray leading-relaxed mb-6">
                  We believe that a well-maintained and clean environment not only adds value 
                  but also creates comfort, safety, and peace of mind. That's why we go beyond 
                  simply providing a service — we build long-term relationships with our clients 
                  based on trust, transparency, and consistent results.
                </p>
                <p className="text-lg text-dark-gray leading-relaxed">
                  Our commitment to excellence drives everything we do, from the smallest cleaning 
                  detail to the most complex maintenance projects.
                </p>
              </div>
            </AnimatedText>
            
            <AnimatedText animation="slideInRight" delay={0.4}>
              <div className="relative">
                <img 
                  src={cleaningProfessional} 
                  alt="Professional cleaner working in modern office"
                  className="w-full h-auto rounded-none shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8 lg:px-16">
          <AnimatedText animation="slideInUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-dark-gray mb-8">
                Our Values
              </h2>
              <p className="text-xl text-dark-gray max-w-3xl mx-auto">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </div>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedText animation="slideInUp" delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 bg-sage rounded-none mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Q</span>
                </div>
                <h3 className="text-2xl font-light text-dark-gray mb-4">Quality</h3>
                <p className="text-dark-gray leading-relaxed">
                  We maintain the highest standards in every service we provide, 
                  ensuring exceptional results that exceed expectations.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText animation="slideInUp" delay={0.4}>
              <div className="text-center">
                <div className="w-20 h-20 bg-sage rounded-none mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">R</span>
                </div>
                <h3 className="text-2xl font-light text-dark-gray mb-4">Reliability</h3>
                <p className="text-dark-gray leading-relaxed">
                  You can count on us to be there when you need us, delivering 
                  consistent service with punctuality and professionalism.
                </p>
              </div>
            </AnimatedText>

            <AnimatedText animation="slideInUp" delay={0.5}>
              <div className="text-center">
                <div className="w-20 h-20 bg-sage rounded-none mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">T</span>
                </div>
                <h3 className="text-2xl font-light text-dark-gray mb-4">Trust</h3>
                <p className="text-dark-gray leading-relaxed">
                  We build lasting relationships through transparency, integrity, 
                  and a genuine commitment to your satisfaction.
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedText animation="slideInRight" delay={0.2}>
              <div className="relative">
                <img 
                  src={contactTeam} 
                  alt="Professional team working together"
                  className="w-full h-auto rounded-none shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimatedText>
            
            <AnimatedText animation="slideInLeft" delay={0.4}>
              <div className="text-white">
                <h2 className="text-5xl font-light mb-8">
                  Our Team
                </h2>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Our experienced team of professionals brings years of expertise in cleaning 
                  and maintenance services. We're trained, insured, and committed to delivering 
                  outstanding results for every client.
                </p>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  From our skilled maintenance technicians to our dedicated cleaning specialists, 
                  every team member shares our commitment to quality and customer satisfaction.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-sage rounded-none"></div>
                    <span className="text-white">Fully insured and bonded</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-sage rounded-none"></div>
                    <span className="text-white">Background checked professionals</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-sage rounded-none"></div>
                    <span className="text-white">Ongoing training and development</span>
                  </div>
                </div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-8 lg:px-16">
          <AnimatedText animation="slideInUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-dark-gray mb-8">
                What We Do
              </h2>
              <p className="text-xl text-dark-gray max-w-3xl mx-auto">
                Comprehensive cleaning and maintenance solutions tailored to your needs.
              </p>
            </div>
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedText animation="slideInLeft" delay={0.3}>
              <div className="bg-white p-8 shadow-lg rounded-none">
                <img 
                  src={outdoorCleaning} 
                  alt="Outdoor cleaning services"
                  className="w-full h-64 object-cover rounded-none mb-6"
                />
                <h3 className="text-2xl font-light text-dark-gray mb-4">Cleaning Services</h3>
                <ul className="space-y-2 text-dark-gray">
                  <li>• Residential cleaning</li>
                  <li>• Office cleaning</li>
                  <li>• Carpet & upholstery cleaning</li>
                  <li>• Post-construction cleaning</li>
                  <li>• Deep cleaning & sanitization</li>
                </ul>
              </div>
            </AnimatedText>

            <AnimatedText animation="slideInRight" delay={0.4}>
              <div className="bg-white p-8 shadow-lg rounded-none">
                <img 
                  src={maintenanceWork} 
                  alt="Property maintenance services"
                  className="w-full h-64 object-cover rounded-none mb-6"
                />
                <h3 className="text-2xl font-light text-dark-gray mb-4">Property Maintenance</h3>
                <ul className="space-y-2 text-dark-gray">
                  <li>• Landscaping & groundskeeping</li>
                  <li>• Painting & renovations</li>
                  <li>• General property maintenance</li>
                  <li>• Plumbing maintenance</li>
                  <li>• Electrical repairs</li>
                </ul>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
