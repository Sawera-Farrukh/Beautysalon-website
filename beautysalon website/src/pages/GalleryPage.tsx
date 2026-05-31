import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { worksConfig } from '../config';
import { Clock, DollarSign, ArrowLeft, X } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export function GalleryPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedItem, setSelectedItem] = useState<typeof worksConfig.projects[0] | null>(null);

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

      // Items stagger animation
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
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
          Our <span className="font-medium">Gallery</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          {worksConfig.subtitle}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {worksConfig.projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { itemsRef.current[index] = el; }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(project)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-sm text-red-400 font-medium uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-gray-400">{project.subItems.length} services</span>
                    <span className="text-red-400">Click to explore →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-sm text-red-400 font-medium uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-medium mt-2">{selectedItem.title}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <p className="text-gray-400 mb-8">{selectedItem.description}</p>

              {/* Services List */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-4">Available Services</h3>
                {selectedItem.subItems.map((sub) => (
                  <div
                    key={sub.id}
                    className="flex flex-col md:flex-row md:items-center justify-between py-4 px-5 bg-black/30 rounded-xl hover:bg-black/50 transition-colors duration-300"
                  >
                    <div className="flex-1 mb-3 md:mb-0">
                      <p className="font-medium text-white text-lg">{sub.title}</p>
                      <p className="text-sm text-gray-500">{sub.description}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        {sub.duration}
                      </span>
                      <span className="flex items-center gap-1 text-red-400 font-medium text-lg">
                        <DollarSign className="w-4 h-4" />
                        {sub.price.replace('$', '')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <Link
                  to="/#contact"
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center justify-center w-full md:w-auto gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Inspired by Our <span className="font-medium">Work?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let our expert team create a personalized look just for you. Book your appointment today.
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
