// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Lumière Beauty Salon",
  description: "Experience luxury beauty treatments and transformative styling at Lumière Beauty Salon. Hair, makeup, skincare, and wellness services.",
  language: "en",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "LUMIÈRE",
  items: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/#about" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Blog", href: "/#blog" },
    { label: "Contact", href: "/#contact" },
  ],
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  servicesLabel: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "LUMIÈRE",
  subtitle: "Where Beauty Meets Artistry",
  backgroundImage: "/hero-main.jpg",
  servicesLabel: "Hair | Skin | Nails | Makeup",
  copyright: "© 2024 Lumière Beauty Salon",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "We believe beauty is an expression",
  titleLine2: "of your unique essence and confidence.",
  description: "At Lumière, we blend cutting-edge techniques with premium products to create transformative beauty experiences. Our team of skilled artisans is dedicated to enhancing your natural beauty while ensuring every visit feels like a luxurious escape from the everyday.",
  image1: "/about-1.jpg",
  image1Alt: "Luxury salon interior with elegant lighting",
  image2: "/about-2.jpg",
  image2Alt: "Beauty treatment in progress",
  authorImage: "/stylist.jpg",
  authorName: "Isabella Monroe",
  authorBio: "Founder & Creative Director with 15+ years of experience in luxury beauty and fashion industry. Trained in Paris and Milan, Isabella brings world-class expertise to every client.",
};

// ============================================================================
// Works/Gallery Section Configuration
// ============================================================================

export interface GallerySubItem {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
}

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  subItems: GallerySubItem[];
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Our Gallery",
  subtitle: "A showcase of our finest transformations and artistic creations.",
  projects: [
    { 
      id: 1, 
      title: "Bridal Elegance", 
      category: "Wedding Makeup", 
      image: "/work-1.jpg",
      description: "Our bridal makeup services are designed to make you look and feel absolutely radiant on your special day. From natural elegance to glamorous sophistication.",
      subItems: [
        { id: "b1", title: "Bridal Makeup Trial", description: "Pre-wedding consultation and makeup trial", price: "$150", duration: "90 min" },
        { id: "b2", title: "Bridal Day Makeup", description: "Complete bridal makeup on your wedding day", price: "$350", duration: "120 min" },
        { id: "b3", title: "Bridal Party Package", description: "Makeup for bride + 3 bridesmaids", price: "$750", duration: "240 min" },
        { id: "b4", title: "Destination Bridal", description: "On-location bridal makeup service", price: "$500", duration: "150 min" },
      ]
    },
    { 
      id: 2, 
      title: "Golden Balayage", 
      category: "Hair Color", 
      image: "/work-2.jpg",
      description: "Transform your look with our signature balayage and hair coloring techniques. From sun-kissed highlights to bold fashion colors.",
      subItems: [
        { id: "h1", title: "Full Balayage", description: "Hand-painted highlights throughout", price: "$280", duration: "180 min" },
        { id: "h2", title: "Partial Balayage", description: "Face-framing highlights", price: "$180", duration: "120 min" },
        { id: "h3", title: "Root Touch-Up", description: "Color refresh for roots", price: "$85", duration: "60 min" },
        { id: "h4", title: "Fashion Color", description: "Vivid and pastel colors", price: "$320", duration: "210 min" },
      ]
    },
    { 
      id: 3, 
      title: "Glowing Skin", 
      category: "Facial Treatment", 
      image: "/work-3.jpg",
      description: "Rejuvenate your skin with our range of facial treatments tailored to your specific skin concerns and goals.",
      subItems: [
        { id: "f1", title: "Classic Facial", description: "Deep cleansing and hydration", price: "$95", duration: "60 min" },
        { id: "f2", title: "Anti-Aging Facial", description: "Collagen-boosting treatment", price: "$180", duration: "90 min" },
        { id: "f3", title: "Acne Treatment Facial", description: "Purifying and clarifying", price: "$120", duration: "75 min" },
        { id: "f4", title: "Luxury Gold Facial", description: "Premium anti-aging with gold infusion", price: "$250", duration: "90 min" },
      ]
    },
    
    { 
      id: 4, 
      title: "Nail Artistry", 
      category: "Manicure", 
      image: "/work-4.jpg",
      description: "Express yourself with our exquisite nail art and manicure services. From classic elegance to avant-garde designs.",
      subItems: [
        { id: "n1", title: "Classic Manicure", description: "Nail care and polish", price: "$45", duration: "45 min" },
        { id: "n2", title: "Gel Manicure", description: "Long-lasting gel polish", price: "$65", duration: "60 min" },
        { id: "n3", title: "Nail Art Design", description: "Custom nail art per nail", price: "$15", duration: "15 min" },
        { id: "n4", title: "Luxury Spa Pedicure", description: "Complete foot care treatment", price: "$85", duration: "75 min" },
      ]
    },
    { 
      id: 5, 
      title: "Party Glamour", 
      category: "Event Makeup", 
      image: "/service-4.jpg",
      description: "Look stunning for any special occasion with our professional event makeup services.",
      subItems: [
        { id: "p1", title: "Party Makeup", description: "Glamorous evening look", price: "$120", duration: "60 min" },
        { id: "p2", title: "Red Carpet Makeup", description: "High-definition camera-ready", price: "$200", duration: "90 min" },
        { id: "p3", title: "Prom Makeup", description: "Special occasion for teens", price: "$95", duration: "60 min" },
        { id: "p4", title: "Photoshoot Makeup", description: "Editorial and portrait ready", price: "$180", duration: "90 min" },
      ]
    },
    { 
      id: 6, 
      title: "Precision Cuts", 
      category: "Hair Styling", 
      image: "/service-1.jpg",
      description: "Expert haircuts and styling to frame your face and express your personal style.",
      subItems: [
        { id: "c1", title: "Women's Haircut", description: "Wash, cut, and style", price: "$75", duration: "60 min" },
        { id: "c2", title: "Men's Haircut", description: "Precision cut and style", price: "$55", duration: "45 min" },
        { id: "c3", title: "Blowout Styling", description: "Professional blow dry", price: "$50", duration: "45 min" },
        { id: "c4", title: "Updo Styling", description: "Elegant updo for events", price: "$120", duration: "60 min" },
      ]
    },
  ],
};

// ============================================================================
// Services Section Configuration
// ============================================================================

export interface ServiceSubItem {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  subServices: ServiceSubItem[];
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "Our Services",
  subtitle: "Every treatment is a journey to reveal your most radiant self.",
  services: [
    { 
      id: "01", 
      title: "Hair Styling & Color", 
      description: "From precision cuts to balayage masterpieces, our stylists create looks that define your personal style.", 
      image: "/service-1.jpg",
      subServices: [
        { id: "hs1", name: "Women's Precision Cut", description: "Customized cut with consultation", price: "$75", duration: "60 min" },
        { id: "hs2", name: "Men's Styling Cut", description: "Tailored cut and grooming", price: "$55", duration: "45 min" },
        { id: "hs3", name: "Full Balayage", description: "Hand-painted color technique", price: "$280", duration: "180 min" },
        { id: "hs4", name: "Root Color Touch-Up", description: "Seamless color refresh", price: "$85", duration: "60 min" },
        { id: "hs5", name: "Fashion Color", description: "Vivid and pastel transformations", price: "$320", duration: "210 min" },
        { id: "hs6", name: "Blowout & Styling", description: "Professional finish styling", price: "$50", duration: "45 min" },
      ]
    },
    { 
      id: "02", 
      title: "Luxury Facials", 
      description: "Rejuvenating treatments using premium skincare to restore your natural glow and vitality.", 
      image: "/service-2.jpg",
      subServices: [
        { id: "lf1", name: "Classic Hydrating Facial", description: "Deep cleansing and moisture", price: "$95", duration: "60 min" },
        { id: "lf2", name: "Anti-Aging Treatment", description: "Collagen boost and firming", price: "$180", duration: "90 min" },
        { id: "lf3", name: "Bridal Facial Glow", description: "Pre-wedding radiance prep", price: "$150", duration: "75 min" },
        { id: "lf4", name: "Acne Clarifying Facial", description: "Deep pore cleansing", price: "$120", duration: "75 min" },
        { id: "lf5", name: "Gold Luxury Facial", description: "Premium gold infusion", price: "$250", duration: "90 min" },
        { id: "lf6", name: "Microdermabrasion", description: "Exfoliation and renewal", price: "$140", duration: "60 min" },
      ]
    },
    { 
      id: "03", 
      title: "Nail Artistry", 
      description: "Exquisite manicures and pedicures with intricate designs and long-lasting finishes.", 
      image: "/service-3.jpg",
      subServices: [
        { id: "na1", name: "Classic Manicure", description: "Nail care with polish", price: "$45", duration: "45 min" },
        { id: "na2", name: "Gel Manicure", description: "Chip-free gel polish", price: "$65", duration: "60 min" },
        { id: "na3", name: "Luxury Spa Pedicure", description: "Complete foot pampering", price: "$85", duration: "75 min" },
        { id: "na4", name: "Nail Art Per Nail", description: "Custom design artwork", price: "$15", duration: "15 min" },
        { id: "na5", name: "Acrylic Full Set", description: "Sculpted nail extensions", price: "$95", duration: "90 min" },
        { id: "na6", name: "Nail Repair", description: "Fix and restore damaged nails", price: "$20", duration: "15 min" },
      ]
    },
    { 
      id: "04", 
      title: "Makeup Artistry", 
      description: "From everyday elegance to red-carpet glamour, we create looks that captivate and inspire.", 
      image: "/service-4.jpg",
      subServices: [
        { id: "ma1", name: "Bridal Makeup", description: "Wedding day perfection", price: "$350", duration: "120 min" },
        { id: "ma2", name: "Bridal Trial", description: "Pre-wedding consultation", price: "$150", duration: "90 min" },
        { id: "ma3", name: "Party Makeup", description: "Glamorous evening look", price: "$120", duration: "60 min" },
        { id: "ma4", name: "Natural Day Makeup", description: "Subtle everyday beauty", price: "$85", duration: "45 min" },
        { id: "ma5", name: "Red Carpet Glam", description: "Camera-ready perfection", price: "$200", duration: "90 min" },
        { id: "ma6", name: "Photoshoot Makeup", description: "Editorial and portrait", price: "$180", duration: "90 min" },
      ]
    },
    { 
      id: "05", 
      title: "Body Treatments", 
      description: "Indulge in our luxurious body treatments designed to relax, rejuvenate, and revitalize.", 
      image: "/about-1.jpg",
      subServices: [
        { id: "bt1", name: "Swedish Massage", description: "Relaxing full body massage", price: "$120", duration: "60 min" },
        { id: "bt2", name: "Deep Tissue Massage", description: "Therapeutic muscle relief", price: "$150", duration: "60 min" },
        { id: "bt3", name: "Hot Stone Therapy", description: "Warm stone relaxation", price: "$180", duration: "90 min" },
        { id: "bt4", name: "Body Scrub", description: "Exfoliating skin renewal", price: "$95", duration: "45 min" },
        { id: "bt5", name: "Body Wrap", description: "Detoxifying treatment", price: "$140", duration: "60 min" },
        { id: "bt6", name: "Aromatherapy Massage", description: "Essential oil therapy", price: "$135", duration: "60 min" },
      ]
    },
    { 
      id: "06", 
      title: "Brow & Lash", 
      description: "Frame your eyes perfectly with our precision brow and lash enhancement services.", 
      image: "/work-3.jpg",
      subServices: [
        { id: "bl1", name: "Brow Shaping", description: "Precision waxing and tweezing", price: "$35", duration: "30 min" },
        { id: "bl2", name: "Brow Tinting", description: "Color enhancement", price: "$30", duration: "20 min" },
        { id: "bl3", name: "Lash Lift", description: "Natural curl enhancement", price: "$85", duration: "60 min" },
        { id: "bl4", name: "Lash Extensions", description: "Full set classic", price: "$200", duration: "120 min" },
        { id: "bl5", name: "Lash Tinting", description: "Darken natural lashes", price: "$25", duration: "20 min" },
        { id: "bl6", name: "Brow Lamination", description: "Brow hair styling", price: "$95", duration: "60 min" },
      ]
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsConfig {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "Client Love",
  testimonials: [
    { 
      id: 1, 
      name: "Victoria Chen", 
      title: "Fashion Editor", 
      quote: "Lumière transformed my look completely. The attention to detail and personalized service is unmatched. I leave feeling like a new person every time.", 
      image: "/testimonial-1.jpg" 
    },
    { 
      id: 2, 
      name: "Amara Williams", 
      title: "Entrepreneur", 
      quote: "The facial treatments here are absolutely divine. My skin has never looked better. It's my monthly ritual of self-care and rejuvenation.", 
      image: "/testimonial-2.jpg" 
    },
    { 
      id: 3, 
      name: "Sophie Laurent", 
      title: "Bridal Client", 
      quote: "They made my wedding day absolutely magical. The bridal package was worth every penny. I felt like the most beautiful bride.", 
      image: "/testimonial-3.jpg" 
    },
  ],
};

// ============================================================================
// Pricing Section Configuration
// ============================================================================

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  unit: string;
  featured: boolean;
  features: string[];
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  plans: PricingPlan[];
}

export const pricingConfig: PricingConfig = {
  title: "Beauty Packages",
  subtitle: "Curated experiences designed for your unique beauty journey.",
  ctaButtonText: "Book Now",
  plans: [
    { 
      id: 1, 
      name: "Essential Glow", 
      price: 89, 
      unit: "per session", 
      featured: false, 
      features: ["Signature Facial (60 min)", "Express Manicure", "Brow Shaping", "Complimentary Consultation"] 
    },
    { 
      id: 2, 
      name: "Radiance Deluxe", 
      price: 199, 
      unit: "per session", 
      featured: true, 
      features: ["Luxury Facial (90 min)", "Hair Styling & Blowout", "Spa Manicure & Pedicure", "Makeup Application", "Glass of Champagne"] 
    },
    { 
      id: 3, 
      name: "Ultimate Transformation", 
      price: 399, 
      unit: "per session", 
      featured: false, 
      features: ["Full Day Spa Experience", "Hair Color & Cut", "Premium Facial Treatment", "Full Body Massage", "Gourmet Lunch & Bubbly"] 
    },
  ],
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "Questions & Answers",
  faqs: [
    { 
      question: "What products do you use?", 
      answer: "We exclusively use premium, cruelty-free products from renowned brands like Oribe, Dermalogica, and Chanel. All our products are carefully selected for their quality and effectiveness." 
    },
    { 
      question: "How far in advance should I book?", 
      answer: "We recommend booking 1-2 weeks in advance for regular services, and 4-6 weeks for special occasions like weddings or events. Our online booking system makes it easy to find your perfect time slot." 
    },
    { 
      question: "Do you offer gift cards?", 
      answer: "Yes! Our gift cards make the perfect present for any occasion. They can be purchased in any denomination and never expire. Treat someone special to a day of luxury and pampering." 
    },
    { 
      question: "What is your cancellation policy?", 
      answer: "We kindly request 24 hours notice for cancellations or rescheduling. This allows us to accommodate other clients. Late cancellations may incur a 50% service fee." 
    },
    { 
      question: "Do you accommodate groups or events?", 
      answer: "Absolutely! We love hosting bridal parties, birthday celebrations, and corporate events. Contact us for customized group packages and exclusive salon buyout options." 
    },
  ],
};

// ============================================================================
// Blog Section Configuration
// ============================================================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  allPostsLabel: string;
  readMoreLabel: string;
  readTimePrefix: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "Beauty Journal",
  subtitle: "Tips, trends, and insights from our beauty experts.",
  allPostsLabel: "All Articles",
  readMoreLabel: "Read More",
  readTimePrefix: "Read ",
  posts: [
    { 
      id: 1, 
      title: "The Art of the Perfect Blowout", 
      excerpt: "Discover professional techniques to achieve salon-quality volume and shine at home. Our stylists share their secrets for that red-carpet finish.", 
      content: `There's nothing quite like the feeling of walking out of a salon with a fresh, bouncy blowout. The volume, the shine, the way your hair seems to have a life of its own—it's pure magic. But what if you could recreate that salon-perfect look in the comfort of your own home?

At Lumière, we believe that everyone deserves to feel confident and beautiful every day. That's why our master stylists have compiled their top secrets for achieving the perfect blowout at home.

**Start with the Right Foundation**

The secret to a great blowout begins in the shower. Use a volumizing shampoo and conditioner that's appropriate for your hair type. For fine hair, look for lightweight formulas that won't weigh your strands down. For thicker hair, opt for smoothing products that help control frizz.

**The Prep Work Matters**

Before you even pick up a hairdryer, proper preparation is key. Gently towel-dry your hair, then apply a heat protectant spray from roots to ends. This not only protects your hair from heat damage but also helps your style last longer.

For added volume, apply a volumizing mousse to your roots. Our stylists recommend flipping your head upside down and applying the product directly to the roots, then working it through the lengths with your fingers.

**The Right Tools Make All the Difference**

Invest in a high-quality hairdryer with multiple heat and speed settings. A concentrator nozzle is essential for directing airflow and creating smooth, polished results. You'll also need a round brush—choose one with natural bristles for fine hair and synthetic bristles for thicker hair.

**The Technique**

Divide your hair into sections using clips. Start with the bottom layers and work your way up. Take a section of hair, wrap it around your round brush, and aim the dryer at the roots. As you dry, pull the brush through your hair, following it with the dryer. The key is to keep the dryer moving and maintain tension on the hair.

For maximum volume at the crown, over-direct your hair upward and backward while drying. This creates lift at the roots that lasts all day.

**The Finishing Touch**

Once your hair is completely dry, switch your dryer to the cool setting and give your hair a blast of cold air. This helps set the style and adds extra shine. Finish with a light mist of hairspray, holding the can at least 12 inches away from your head for a natural, flexible hold.

**Pro Tips from Our Stylists**

- Don't rush the process. A proper blowout takes time, so set aside at least 30-45 minutes.
- Keep the dryer moving to avoid overheating any one section.
- For extra shine, add a drop of hair oil to your ends after styling.
- Sleep on a silk pillowcase to help your blowout last longer.

Remember, practice makes perfect. Don't be discouraged if your first few attempts don't look exactly like a salon blowout. With time and patience, you'll master the technique and be turning heads wherever you go.

Visit us at Lumière for a personalized blowout lesson with one of our master stylists. We'll teach you the techniques specific to your hair type and recommend the perfect products for your at-home routine.`, 
      readTime: "4 min", 
      date: "Dec 10, 2024", 
      image: "/blog-1.jpg", 
      category: "Hair Care" 
    },
    { 
      id: 2, 
      title: "Winter Skincare Essentials", 
      excerpt: "Protect and nourish your skin during the colder months. Learn about the must-have ingredients and routines for a radiant winter glow.", 
      content: `As the temperature drops and the air becomes drier, your skin needs extra care and attention. Winter can be harsh on your complexion, leading to dryness, flakiness, and a dull appearance. But with the right skincare routine and products, you can maintain a healthy, radiant glow all season long.

At Lumière, we've curated the ultimate winter skincare guide to help you navigate the colder months with confidence and beautiful skin.

**Understanding Winter Skin Challenges**

The cold winter air holds less moisture than warm air, which means your skin loses hydration more quickly. Indoor heating systems further deplete the air of moisture, creating a double challenge for your skin's barrier function.

Common winter skin concerns include:
- Dryness and tightness
- Flakiness and rough texture
- Increased sensitivity and redness
- Dull, lackluster complexion
- Chapped lips and dry cuticles

**The Winter Skincare Routine**

**Step 1: Gentle Cleansing**

Switch to a cream or oil-based cleanser that won't strip your skin of its natural oils. Avoid foaming cleansers, which can be too drying in winter. Look for ingredients like glycerin and hyaluronic acid that help maintain hydration while cleansing.

**Step 2: Hydrating Toner**

A hydrating toner helps replenish moisture immediately after cleansing. Look for formulas with rose water, chamomile, or aloe vera to soothe and hydrate.

**Step 3: Serum Power**

Serums are concentrated treatments that deliver active ingredients deep into the skin. In winter, focus on:

- **Hyaluronic Acid**: Holds up to 1000 times its weight in water, making it a hydration hero.
- **Vitamin C**: Brightens dull winter skin and provides antioxidant protection.
- **Niacinamide**: Strengthens the skin barrier and reduces redness.
- **Peptides**: Support collagen production for firmer, plumper skin.

**Step 4: Rich Moisturizer**

Your lightweight summer moisturizer won't cut it in winter. Switch to a richer cream that contains ceramides, fatty acids, and natural oils. These ingredients help repair and strengthen your skin's moisture barrier.

**Step 5: Facial Oil**

Adding a facial oil as the final step in your routine helps seal in all the moisture and provides an extra layer of protection against the elements. Look for oils like rosehip, argan, or squalane.

**Step 6: Don't Forget SPF**

UV rays are present year-round, and snow can reflect up to 80% of UV radiation. Continue using a broad-spectrum SPF 30 or higher every day.

**Special Winter Treatments**

**Weekly Exfoliation**

Gentle exfoliation once or twice a week helps remove dead skin cells and allows your moisturizers to penetrate more effectively. Choose a chemical exfoliant with lactic acid or a very gentle physical scrub.

**Hydrating Masks**

Treat your skin to a hydrating mask once or twice a week. Look for ingredients like honey, aloe vera, and hyaluronic acid for an intensive moisture boost.

**Lip Care**

Your lips need special attention in winter. Exfoliate gently with a lip scrub, then apply a nourishing lip balm throughout the day. Look for balms with beeswax, shea butter, or coconut oil.

**Professional Treatments at Lumière**

For truly transformative results, consider professional treatments:

- **Hydrating Facial**: Our signature facial delivers deep hydration using medical-grade hyaluronic acid.
- **Microdermabrasion**: Gently exfoliates and reveals fresh, glowing skin.
- **LED Light Therapy**: Stimulates collagen and reduces inflammation.

**Lifestyle Tips for Winter Skin**

- Use a humidifier in your home to add moisture to the air.
- Drink plenty of water throughout the day.
- Avoid hot showers, which can strip your skin of natural oils.
- Eat foods rich in omega-3 fatty acids, like salmon and walnuts.
- Get enough sleep to allow your skin to repair and regenerate.

**Product Recommendations**

At Lumière, we recommend winter skincare products from Dermalogica, SkinCeuticals, and our own Lumière private label. Our estheticians can create a customized winter skincare routine tailored to your specific skin concerns.

Book a consultation with one of our skincare experts to discover the perfect winter routine for your unique skin. Let's keep your glow going all winter long!`, 
      readTime: "6 min", 
      date: "Dec 5, 2024", 
      image: "/blog-2.jpg", 
      category: "Skincare" 
    },
    { 
      id: 3, 
      title: "The Ultimate Bridal Beauty Timeline", 
      excerpt: "Planning your wedding beauty prep? Here's the complete timeline to ensure you look absolutely radiant on your big day.", 
      content: `Your wedding day is one of the most photographed days of your life, and naturally, you want to look and feel your absolute best. But achieving that bridal glow doesn't happen overnight—it requires careful planning and preparation. At Lumière, we've created the ultimate bridal beauty timeline to help you look radiant from the engagement photos to the last dance.

**12 Months Before: The Foundation**

**Book Your Wedding Beauty Team**
Popular wedding vendors book up quickly, especially during peak season. Start researching and booking your hair and makeup artists as soon as you have your venue and date secured. At Lumière, we recommend booking 9-12 months in advance for bridal services.

**Start a Skincare Routine**
If you haven't already, now is the time to establish a consistent skincare routine. Visit an esthetician for a professional consultation and customized regimen. Address any skin concerns early—whether it's acne, hyperpigmentation, or fine lines.

**Hair Health**
Begin regular deep conditioning treatments and trims every 6-8 weeks. If you're considering a major color change, do it now so you have time to adjust if needed.

**6 Months Before: Refinement**

**Facial Series**
Start a monthly facial series to address specific skin concerns. Our brides love our Hydrating Glow Facial and Anti-Aging treatments for that lit-from-within radiance.

**Hair Trials**
Schedule your first hair trial. Bring inspiration photos and be open to your stylist's suggestions based on your hair type and wedding style.

**Teeth Whitening**
If you're considering professional teeth whitening, start now to achieve your desired shade gradually.

**3 Months Before: Details**

**Makeup Trial**
Schedule your makeup trial. Test different looks and take photos in various lighting to see how the makeup photographs. Don't forget to test the longevity—wear it for several hours to see how it holds up.

**Brow Shaping**
Find your perfect brow shape and start maintaining it. Avoid any major changes close to the wedding.

**Lash Extensions or Lift**
If you're considering lash extensions or a lash lift, get them done now to ensure you love the look and to establish a maintenance routine.

**1 Month Before: Final Preparations**

**Final Hair Color**
Get your final color treatment. This allows time for any adjustments and for the color to settle naturally.

**Bridal Facial**
Schedule your final pre-wedding facial about 2-3 weeks before the big day. This gives your skin time to settle and glow.

**Manicure Trial**
Test your wedding nail look. Whether you're going for classic French, subtle nude, or something more dramatic, make sure it complements your overall aesthetic.

**1 Week Before: The Home Stretch**

**Gentle Skincare**
Avoid introducing any new products. Stick to your established routine to prevent any adverse reactions.

**Hydration Focus**
Drink plenty of water and avoid excessive salt and alcohol to prevent puffiness.

**Relaxation**
Schedule a massage or spa day to de-stress. A relaxed bride is a beautiful bride!

**The Day Before: Final Touches**

**Manicure and Pedicure**
Get your nails done the day before to ensure they're fresh and chip-free.

**Hair Prep**
Wash your hair the day before your wedding. Day-old hair holds styles better than freshly washed hair.

**Early Night**
Get a good night's sleep. Use a silk pillowcase to prevent sleep lines and hair frizz.

**Wedding Day: Enjoy the Moment**

**Morning Routine**
Start with a gentle cleanse and your regular skincare routine. Apply a hydrating sheet mask while you have breakfast.

**Professional Application**
Trust your beauty team. They've done this hundreds of times and know exactly how to make you look your best in photos and in person.

**Touch-Up Kit**
Prepare a small touch-up kit with blotting papers, your lipstick, and a small powder compact.

**The Lumière Bridal Experience**

At Lumière, we offer comprehensive bridal packages that include:

- Bridal hair and makeup trial
- Wedding day hair and makeup
- Bridesmaids' services
- Touch-up kit
- Complimentary champagne
- Private bridal suite

Our team will work with you to create a cohesive look that complements your dress, venue, and personal style. We'll also coordinate with your photographer to ensure your makeup looks flawless in every shot.

**Final Thoughts**

Remember, the most beautiful brides are the happy ones. While it's natural to want to look perfect, don't let beauty prep add stress to your wedding experience. Trust your professionals, stick to your timeline, and most importantly, enjoy every moment of your special day.

Congratulations on your engagement! We can't wait to be part of your bridal beauty journey.`, 
      readTime: "8 min", 
      date: "Nov 28, 2024", 
      image: "/work-1.jpg", 
      category: "Bridal" 
    },
    { 
      id: 4, 
      title: "Nail Art Trends to Try This Season", 
      excerpt: "From minimalist designs to bold statement nails, discover the hottest nail art trends that are taking over the beauty world.", 
      content: `Nail art has evolved from a simple polish change to a true form of self-expression. This season, we're seeing an exciting mix of minimalist elegance and bold creativity that allows everyone to find their perfect style. At Lumière, our nail artists are constantly pushing boundaries and creating stunning designs that turn hands into works of art.

**The Minimalist Movement**

Less is definitely more when it comes to this season's minimalist nail trends. Think clean lines, negative space, and subtle accents that make a statement without overwhelming.

**Micro French Tips**
The classic French manicure gets a modern update with ultra-thin tips in unexpected colors. Instead of traditional white, try soft pastels, metallics, or even black for an edgy twist.

**Single Accent Nail**
Choose one nail per hand to feature a delicate design—perhaps a tiny star, a simple line drawing, or a single gemstone. This trend is perfect for those who want a touch of artistry without full-on nail art.

**Negative Space Designs**
Strategic bare nail peeking through geometric shapes or patterns creates a sophisticated, architectural look that's both modern and timeless.

**Bold and Beautiful**

For those who believe more is more, this season's bold trends are sure to inspire.

**3D Nail Art**
Texture is taking center stage with 3D elements like pearls, charms, and sculpted gel designs. These dimensional nails are true conversation starters.

**Chrome and Metallics**
Mirror-like chrome finishes in silver, gold, and holographic shades continue to dominate. Pair with geometric designs for an ultra-modern look.

**Aura Nails**
This airbrushed technique creates a soft, glowing effect that looks like a colorful aura around the center of the nail. It's dreamy, ethereal, and completely customizable.

**Nature-Inspired**

Bringing the outdoors in has never been more beautiful.

**Floral Designs**
From delicate hand-painted flowers to pressed flower encapsulation, botanical nail art is blooming this season. Our artists can create everything from realistic roses to abstract floral patterns.

**Marble Effects**
The timeless marble look gets updated with unexpected color combinations like lavender and gold or emerald and black.

**Animal Prints**
Leopard, zebra, and snake prints remain popular, but this season they're being reimagined in pastel colors and metallic finishes.

**The Classics Reimagined**

**Ombre and Gradient**
The gradient effect continues to evolve with multi-color fades and vertical ombre that creates a stunning sunset effect across the nails.

**Glitter Accents**
Strategic glitter placement—whether as a full accent nail, tips, or scattered across a nude base—adds sparkle without being overwhelming.

**Matte Finishes**
Matte top coats transform any color into a sophisticated, velvet-like finish that feels modern and luxe.

**Seasonal Specials**

**Winter Wonderland**
Think icy blues, silver glitter, and delicate snowflake designs. Our winter collection features crystalline effects and frosted finishes.

**Spring Blooms**
Pastel bases with hand-painted florals and butterfly accents welcome the new season with color and joy.

**Summer Brights**
Neon colors, fruit designs, and tropical patterns bring vacation vibes to your fingertips.

**Autumn Elegance**
Rich jewel tones, leaf motifs, and cozy sweater-inspired textures capture the essence of fall.

**Nail Care Tips**

Beautiful nail art starts with healthy nails. Here are our top tips:

- Keep nails hydrated with cuticle oil applied daily
- Wear gloves when doing dishes or cleaning
- Take breaks between gel applications to let nails breathe
- Use a strengthening base coat
- Don't pick or peel polish, as this damages the nail surface

**The Lumière Nail Experience**

Our nail artists are trained in the latest techniques and trends. Whether you want a classic manicure with a twist or full-on artistic expression, we'll create a design that's uniquely you.

We use only premium products from brands like OPI, CND, and Chanel to ensure your manicure not only looks beautiful but also lasts. Our gel manicures can last up to three weeks with proper care.

**Book Your Appointment**

Ready to try one of these trends? Book a consultation with one of our nail artists. We'll discuss your style preferences, lifestyle needs, and nail health to create the perfect design for you.

Don't forget to follow us on Instagram for daily inspiration and to see our latest creations. Your next favorite nail look is just an appointment away!`, 
      readTime: "5 min", 
      date: "Nov 20, 2024", 
      image: "/work-4.jpg", 
      category: "Nail Art" 
    },
  ],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
}

export const contactConfig: ContactConfig = {
  title: "Let's Create Beauty",
  subtitle: "Book your appointment and begin your transformation journey.",
  nameLabel: "Your Name *",
  emailLabel: "Email Address *",
  projectTypeLabel: "Service Interest",
  projectTypePlaceholder: "Select a service...",
  projectTypeOptions: [
    { value: "hair", label: "Hair Styling & Color" },
    { value: "facial", label: "Facial Treatments" },
    { value: "nails", label: "Nail Services" },
    { value: "makeup", label: "Makeup Artistry" },
    { value: "bridal", label: "Bridal Package" },
    { value: "other", label: "Other / Multiple Services" },
  ],
  messageLabel: "Your Message",
  submitButtonText: "Book Appointment",
  image: "/contact.jpg",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "Every Beauty Deserves to Shine",
  marqueeHighlightChars: ["B", "S"],
  navLinks1: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/#about" },
  ],
  navLinks2: [
    { label: "Instagram", href: "#", icon: "Instagram" },
    { label: "Facebook", href: "#", icon: "Dribbble" },
  ],
  ctaText: "Book Now",
  ctaHref: "/#contact",
  copyright: "© 2024 Lumière Beauty Salon. All rights reserved.",
  tagline: "Crafted with love and artistry",
};
