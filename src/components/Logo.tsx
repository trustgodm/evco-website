import { useIsMobile } from "@/hooks/use-mobile";

interface LogoProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Logo = ({ variant = "primary", size = "md", className = "" }: LogoProps) => {
  const mobile = useIsMobile();
  
  // Use the first WhatsApp image as primary logo, second as secondary
  const logoSrc = variant === "primary" 
    ? "/WhatsApp Image 2025-09-08 at 21.24.15_9a661de2.jpg"
    : "/WhatsApp Image 2025-09-08 at 21.24.27_b2414240.jpg";
  
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: mobile ? "h-12 w-auto" : "h-16 w-auto", 
    lg: mobile ? "h-16 w-auto" : "h-24 w-auto",
    xl: mobile ? "h-20 w-auto" : "h-32 w-auto"
  };
  
  return (
    <img 
      src={logoSrc}
      alt={`EVCO ${variant} logo`}
      className={`${sizeClasses[size]} object-contain rounded-none ${className}`}
    />
  );
};

export default Logo;
