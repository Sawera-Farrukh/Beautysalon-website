import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesConfig } from '../config';
import { Clock, DollarSign, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }
      );

      // Cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Back to Home */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6"
        >
          Our <span className="font-medium">Services</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          {servicesConfig.subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesConfig.services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-6xl font-light text-white/20">{service.id}</span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                {/* Sub-services */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                    Available Treatments
                  </h4>
                  {service.subServices.map((sub) => (
                    <div
                      key={sub.id}
                      className="flex items-center justify-between py-3 px-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors duration-300"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-white">{sub.name}</p>
                        <p className="text-sm text-gray-500">{sub.description}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-gray-400">
                          <Clock className="w-4 h-4" />
                          {sub.duration}
                        </span>
                        <span className="flex items-center gap-1 text-red-400 font-medium">
                          <DollarSign className="w-4 h-4" />
                          {sub.price.replace('$', '')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Ready to <span className="font-medium">Transform?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book your appointment today and let our expert team create a personalized beauty experience just for you.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
