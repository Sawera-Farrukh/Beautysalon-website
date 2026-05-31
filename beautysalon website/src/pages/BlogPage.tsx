import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { blogConfig } from '../config';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export function BlogPage() {
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
          Beauty <span className="font-medium">Journal</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          {blogConfig.subtitle}
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogConfig.posts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
            >
              {/* Post Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogConfig.readTimePrefix}{post.readTime}
                  </span>
                </div>

                <h3 className="text-2xl font-medium mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-red-400 transition-colors duration-300"
                >
                  {blogConfig.readMoreLabel}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Want Personalized <span className="font-medium">Beauty Advice?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book a consultation with our experts and get personalized recommendations for your unique beauty needs.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
