import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "@/components/Logo";
import AnimatedText from "@/components/AnimatedText";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  const mobile = useIsMobile();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[70vh] flex items-center justify-start px-8 lg:px-16 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-sage/40"></div>
      </div>
      
      <div className="relative z-10 max-w-2xl">
         
        
        <AnimatedText animation="slideInUp" delay={0.5}>
          {mobile ? <div className="mb-12">
            <h2 className="text-6xl font-light text-white leading-tight">
              Where Clean,<br />
              Meets Care.
            </h2>
          </div> : <div className="mb-12">
            <h2 className="text-8xl font-light text-white leading-tight">
              Where Clean,<br />
              Meets Care.
            </h2>
          </div>}
        </AnimatedText>
        
        <AnimatedText animation="fadeIn" delay={0.8}>
          <Link to="/contact">
            <Button 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-sage-dark px-8 py-6 text-lg font-medium tracking-wide rounded-none transition-all duration-300 hover:scale-105"
            >
              GET IN TOUCH
            </Button>
          </Link>
        </AnimatedText>
      </div>
    </section>
  );
};

export default HeroSection;