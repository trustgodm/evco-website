import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface AnimatedTextProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown' | 'typewriter';
  delay?: number;
  duration?: number;
  className?: string;
}

const AnimatedText = ({ 
  children, 
  animation = 'fadeIn', 
  delay = 0, 
  duration = 0.6,
  className = '' 
}: AnimatedTextProps) => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [showText, setShowText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isVisible || isMobile) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay, isMobile]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all ease-out';
    const durationClass = `duration-${Math.round(duration * 1000)}`;
    
    // Always show content on mobile to prevent invisible text
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const shouldShow = showText || isMobile;
    
    if (!shouldShow) {
      switch (animation) {
        case 'slideInLeft':
          return `${baseClass} ${durationClass} transform -translate-x-full opacity-0`;
        case 'slideInRight':
          return `${baseClass} ${durationClass} transform translate-x-full opacity-0`;
        case 'slideInUp':
          return `${baseClass} ${durationClass} transform translate-y-full opacity-0`;
        case 'slideInDown':
          return `${baseClass} ${durationClass} transform -translate-y-full opacity-0`;
        case 'typewriter':
          return `${baseClass} ${durationClass} opacity-0`;
        default: // fadeIn
          return `${baseClass} ${durationClass} opacity-0`;
      }
    } else {
      switch (animation) {
        case 'slideInLeft':
        case 'slideInRight':
        case 'slideInUp':
        case 'slideInDown':
          return `${baseClass} ${durationClass} transform translate-x-0 translate-y-0 opacity-100`;
        default:
          return `${baseClass} ${durationClass} opacity-100`;
      }
    }
  };

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedText;
