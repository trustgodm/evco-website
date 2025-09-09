import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    businessName: "",
    businessType: "",
    services: [] as string[],
    additionalNotes: ""
  });

  const { toast } = useToast();

  const serviceOptions = [
    "Residential Cleaning",
    "Deep Cleaning & Sanitization",
    "Office Cleaning",
    "Post-Construction Cleanup",
    "Carpet & Upholstery Cleaning",
    "Window Cleaning",
    "Maintenance Services"
  ];

  const businessTypes = [
    "residential",
    "office",
    "retail",
    "industrial",
    "healthcare",
    "hospitality",
    "other"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.contactNumber) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (formData.services.length === 0) {
      toast({
        title: "Error", 
        description: "Please select at least one service",
        variant: "destructive",
      });
      return;
    }

    const message = `New Cleaning Service Request

Client Information:
• Full Name: ${formData.fullName}
• Email Address: ${formData.email}
• Contact Number: ${formData.contactNumber}

Business Details:
• Business Name: ${formData.businessName || 'Personal'}
• Business Type: ${formData.businessType}

Requested Services:
${formData.services.map(service => `• ${service}`).join('\n')}

Additional Notes:
${formData.additionalNotes}

Kindly reach out to me at your earliest convenience to discuss pricing, scheduling, and any specific requirements.

Thank you.`;

    const whatsappUrl = `https://wa.me/27687851530?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Request Sent",
      description: "Your service request has been sent via WhatsApp",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          className="bg-navy hover:bg-navy-light text-white px-8 py-6 text-lg font-medium tracking-wide"
        >
          SERVICE REQUEST FORM
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light text-dark-gray">Service Request Form</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactNumber">Contact Number *</Label>
              <Input
                id="contactNumber"
                value={formData.contactNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, contactNumber: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                placeholder="Leave empty for personal"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="businessType">Business Type</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select business type" />
              </SelectTrigger>
              <SelectContent>
                {businessTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Requested Services *</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {serviceOptions.map(service => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={formData.services.includes(service)}
                    onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                  />
                  <Label htmlFor={service} className="text-sm">{service}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              value={formData.additionalNotes}
              onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
              placeholder="Any specific requirements or details..."
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-sage hover:bg-sage-dark text-white"
          >
            Send Request via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceRequestForm;