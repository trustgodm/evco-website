import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Settings, Shield, Cookie } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      // Apply analytics based on user choice
      if (savedPreferences.analytics) {
        // Analytics is already loaded via Vercel Analytics
        console.log('Analytics enabled');
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    setIsVisible(false);
    // Enable analytics
    console.log('All cookies accepted');
  };

  const handleAcceptNecessary = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
    // Apply analytics based on user choice
    if (preferences.analytics) {
      console.log('Analytics enabled');
    }
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Can't change necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-sage shadow-lg">
      <div className="container mx-auto px-4 py-6">
        {!showDetails ? (
          // Main banner
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-sage mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-dark-gray mb-2">
                  We use cookies to enhance your experience
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use necessary cookies to make our site work. We'd also like to set analytics cookies 
                  to help us improve it. We won't set optional cookies unless you enable them.
                </p>
                <a 
                  href="/privacy-policy" 
                  className="text-sm text-sage hover:underline mt-1 inline-block"
                >
                  Read our privacy policy
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button
                onClick={() => setShowDetails(true)}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none"
              >
                <Settings className="h-4 w-4 mr-2" />
                Cookie Settings
              </Button>
              <Button
                onClick={handleAcceptNecessary}
                variant="outline"
                className="border-sage text-sage hover:bg-sage hover:text-white rounded-none"
              >
                Accept Necessary Only
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-sage hover:bg-sage-dark text-white rounded-none"
              >
                Accept All
              </Button>
            </div>
          </div>
        ) : (
          // Detailed preferences
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-sage" />
                <h3 className="text-xl font-semibold text-dark-gray">
                  Cookie Preferences
                </h3>
              </div>
              <Button
                onClick={() => setShowDetails(false)}
                variant="ghost"
                size="icon"
                className="rounded-none"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-none bg-gray-50">
                <div className="flex-1">
                  <h4 className="font-medium text-dark-gray mb-2">Necessary Cookies</h4>
                  <p className="text-sm text-gray-600">
                    These cookies are essential for the website to function and cannot be switched off. 
                    They are usually only set in response to actions made by you which amount to a request for services.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-6 bg-sage rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-none">
                <div className="flex-1">
                  <h4 className="font-medium text-dark-gray mb-2">Analytics Cookies</h4>
                  <p className="text-sm text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously. This helps us improve our website performance.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics ? 'bg-sage justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-none">
                <div className="flex-1">
                  <h4 className="font-medium text-dark-gray mb-2">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600">
                    These cookies may be set through our site by our advertising partners to build 
                    a profile of your interests and show you relevant adverts on other sites.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing ? 'bg-sage justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button
                onClick={handleAcceptNecessary}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none"
              >
                Accept Necessary Only
              </Button>
              <Button
                onClick={handleSavePreferences}
                className="bg-sage hover:bg-sage-dark text-white rounded-none"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsentBanner;
