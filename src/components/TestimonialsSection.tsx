import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "The team arrived on time, worked quickly but carefully, and handled everything with professionalism. The repairs were done perfectly, and my home was left spotless after their cleaning service.",
      author: "JASMINE PEDRAZA",
      image: client1
    },
    {
      text: "Their maintenance team is skilled, punctual, and efficient, consistently completing tasks within agreed timelines. The cleaning services are also of the highest standard.",
      author: "MURAD NASER",
      image: client2
    }
  ];

  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            Testimonials and Reviews
          </h2>
          <p className="text-white/60 text-lg tracking-wider">
            FROM THOUSANDS OF CLIENTS
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-12 rounded-none shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-none overflow-hidden mb-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>
                
                <p className="text-dark-gray leading-relaxed mb-8 text-lg">
                  {testimonial.text}
                </p>
                
                <p className="font-semibold text-dark-gray tracking-wider text-sm">
                  - {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;