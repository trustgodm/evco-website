import TestimonialCarousel from "@/components/TestimonialCarousel";
import AnimatedText from "@/components/AnimatedText";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-8 lg:px-16">
        <AnimatedText animation="slideInUp" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-white mb-4">
              Testimonials and Reviews
            </h2>
            <p className="text-white/60 text-lg tracking-wider">
              FROM THOUSANDS OF CLIENTS
            </p>
          </div>
        </AnimatedText>
        
        <AnimatedText animation="fadeIn" delay={0.5}>
          <TestimonialCarousel />
        </AnimatedText>
      </div>
    </section>
  );
};

export default TestimonialsSection;