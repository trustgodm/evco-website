import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
const HeroSection = () => {
  const mobile = useIsMobile();
  return (
    <section className="relative h-[70vh] flex items-center justify-start px-8 lg:px-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-sage/40"></div>
      </div>
      
      <div className="relative z-10 max-w-2xl">
        <div className="mb-12">
          <h1 className="text-7xl font-light text-white mb-2 tracking-tight">evco</h1>
        </div>
        
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
        
        <Button 
          variant="outline" 
          className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-sage-dark px-8 py-6 text-lg font-medium tracking-wide"
          onClick={() => {
            const el = document.getElementById('contact');
            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          GET IN TOUCH
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;