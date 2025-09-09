import cleaningProfessional from "@/assets/cleaning-professional.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-5xl font-light mb-8 leading-tight">
              We we are dedicated to providing reliable, high-quality maintenance and cleaning solutions that keep your spaces running smoothly.
            </h2>
            
            <p className="text-lg leading-relaxed text-white/80">
              We believe that a well-maintained and clean environment not only adds value but also creates comfort, safety, and peace of mind. That's why we go beyond simply providing a service — we build long-term relationships with our clients based on trust, transparency, and consistent results.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={cleaningProfessional} 
              alt="Professional cleaner working in modern office"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;