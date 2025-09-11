import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  image: string;
}

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "EVCO has been cleaning our office for over two years. Their attention to detail and reliability is unmatched. Highly recommended!",
      author: "Sarah Johnson",
      image: "/client-1.jpg"
    },
    {
      id: 2,
      text: "The team at EVCO transformed our workspace. Professional, punctual, and thorough. They've become an essential part of our business.",
      author: "Michael Chen",
      image: "/client-2.jpg"
    },
    {
      id: 3,
      text: "Outstanding service! EVCO not only cleans but maintains our property beautifully. Their maintenance team is top-notch.",
      author: "Lisa Williams",
      image: "/client-1.jpg"
    }
  ];

  const nextTestimonial = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white p-12 rounded-none shadow-lg border border-gray-200">
        <div className="flex flex-col items-center text-center">
          {/* Quote Icon */}
          <Quote className="h-12 w-12 text-sage mb-6" />
          
          {/* Testimonial Text */}
          <blockquote className="text-xl text-dark-gray leading-relaxed mb-8 italic">
            "{currentTestimonial.text}"
          </blockquote>
          
          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-none overflow-hidden">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-dark-gray text-lg">
                {currentTestimonial.author}
              </p>
              <p className="text-gray-600">
                Satisfied Customer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        onClick={prevTestimonial}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sage hover:bg-sage-dark text-white rounded-none shadow-lg"
        size="icon"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        onClick={nextTestimonial}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-sage hover:bg-sage-dark text-white rounded-none shadow-lg"
        size="icon"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }
            }}
            className={`w-3 h-3 rounded-none transition-colors ${
              index === currentIndex ? 'bg-sage' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
