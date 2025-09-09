import outdoorCleaning from "@/assets/outdoor-cleaning.jpg";
import maintenanceWork from "@/assets/maintenance-work.jpg";
import specializedServices from "@/assets/specialized-services.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Cleaning solutions",
      image: outdoorCleaning,
      items: [
        "Carpet & upholstery cleaning",
        "Residential cleaning",
        "Post-construction cleaning",
        "Office cleaning"
      ],
      bgColor: "bg-navy"
    },
    {
      title: "Property maintenance",
      image: maintenanceWork,
      items: [
        "Landscaping & Groundskeeping",
        "Painting & Renovations",
        "General Property Maintenance",
        "Plumbing Maintenance"
      ],
      bgColor: "bg-sage-dark"
    },
    {
      title: "Specialised services",
      image: specializedServices,
      items: [
        "Deep cleaning & sanitization services",
        "Event cleanup services",
        "Waste removal & disposal support"
      ],
      bgColor: "bg-dark-gray"
    }
  ];

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className={`${service.bgColor} text-white relative min-h-[600px] flex flex-col`}>
            <div className="flex-1 relative">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-light mb-6 pb-4 border-b border-white/20">
                  {service.title}
                </h3>
                
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-white/90 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;