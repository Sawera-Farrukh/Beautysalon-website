import { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { blogConfig } from '../config';
import { ArrowLeft, Clock, Calendar, Share2, Facebook, Twitter } from 'lucide-react';

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const post = blogConfig.posts.find((p) => p.id === Number(id));

  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [post, navigate]);

  if (!post) return null;

  // Get related posts (excluding current)
  const relatedPosts = blogConfig.posts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  // Format content with paragraphs
  const formattedContent = post.content.split('\n\n').map((paragraph, index) => {
    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
      // Heading
      return (
        <h2 key={index} className="text-2xl font-medium mt-10 mb-4 text-white">
          {paragraph.replace(/\*\*/g, '')}
        </h2>
      );
    }
    if (paragraph.startsWith('- ')) {
      // List
      const items = paragraph.split('\n').filter((item) => item.startsWith('- '));
      return (
        <ul key={index} className="list-disc list-inside space-y-2 my-6 text-gray-300">
          {items.map((item, i) => (
            <li key={i}>{item.replace('- ', '')}</li>
          ))}
        </ul>
      );
    }
    // Regular paragraph
    return (
      <p key={index} className="text-gray-300 leading-relaxed mb-6">
        {paragraph}
      </p>
    );
  });

  return (
    <div ref={pageRef} className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </Link>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
              <Twitter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article ref={contentRef} className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="mb-10">
          <span className="inline-block px-4 py-1 bg-red-500/10 text-red-400 rounded-full text-sm font-medium mb-6">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-400">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {blogConfig.readTimePrefix}{post.readTime}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
            {post.excerpt}
          </p>
          <div className="border-t border-zinc-800 pt-8">
            {formattedContent}
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-16 p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-2xl font-medium">
              L
            </div>
            <div>
              <p className="font-medium text-lg">Lumière Beauty Team</p>
              <p className="text-gray-400">Expert beauty tips and insights</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 mt-20">
          <h2 className="text-2xl font-medium mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="group bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-red-400 font-medium uppercase tracking-wider">
                    {relatedPost.category}
                  </span>
                  <h3 className="font-medium mt-1 group-hover:text-red-400 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 text-center">
          <p className="text-gray-400 mb-4">Ready to experience our services?</p>
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
