import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Logo from '@/components/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Logo variant="primary" size="md" className="hover:scale-105 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium transition-colors duration-300 hover:text-sage ${
                  isActive(item.path) 
                    ? 'text-sage border-b-2 border-sage' 
                    : isScrolled ? 'text-dark-gray' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-300">
              <a 
                href="tel:+27687851530"
                className="flex items-center space-x-2 text-sm hover:text-sage transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className={isScrolled ? 'text-dark-gray' : 'text-white'}>(068) 785 1530</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link to="/contact">
              <Button 
                className="bg-sage hover:bg-sage-dark text-white rounded-none px-6 py-2"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-none"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-dark-gray' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-dark-gray' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-lg font-medium transition-colors duration-300 hover:text-sage ${
                    isActive(item.path) ? 'text-sage' : 'text-dark-gray'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a 
                  href="tel:+27687851530"
                  className="flex items-center space-x-2 text-dark-gray hover:text-sage transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>(068) 785 1530</span>
                </a>
                <a 
                  href="mailto:melusimanana62@gmail.com"
                  className="flex items-center space-x-2 text-dark-gray hover:text-sage transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>melusimanana62@gmail.com</span>
                </a>
                
                <Link to="/contact" className="block">
                  <Button 
                    className="w-full bg-sage hover:bg-sage-dark text-white rounded-none mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
