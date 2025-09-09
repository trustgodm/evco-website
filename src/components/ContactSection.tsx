import ServiceRequestForm from "@/components/ServiceRequestForm";
import contactTeam from "@/assets/contact-team.jpg";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-light text-dark-gray mb-12">
              Get in touch
            </h2>
            
            <div className="space-y-8 mb-12">
              <div>
                <p className="text-dark-gray leading-relaxed">
                  Braamfontein<br />
                  125 Jorissen St.<br />
                  Johannesburg
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-dark-gray">
                  <span className="font-medium">Tel.</span> (068) 785 1530
                </p>
                <p className="text-dark-gray">
                  <span className="font-medium">Email:</span> melusimanana62@gmail.com
                </p>
                <p className="text-dark-gray">
                  <span className="font-medium">Social:</span> @evco
                </p>
              </div>
              
              <div className="pt-8">
                <p className="text-sage font-medium mb-6">
                  Kindly fill in the service request form
                </p>
                
                <ServiceRequestForm />
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={contactTeam} 
              alt="Professional team working together"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;