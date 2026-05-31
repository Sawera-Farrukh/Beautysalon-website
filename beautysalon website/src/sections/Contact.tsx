import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Check, Calendar, Clock } from 'lucide-react';
import { contactConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

// Appointment type
interface Appointment {
  id: string;
  name: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const inputsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  if (!contactConfig.title) return null;

  // Load appointments from localStorage on mount
  useEffect(() => {
    const savedAppointments = localStorage.getItem('lumiere-appointments');
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments));
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();

        // Diagonal divider line draw
        tl.fromTo(
          dividerRef.current,
          { height: 0 },
          { height: '100%', duration: 1.2, ease: 'expo.inOut' }
        );

        // Form container slide
        tl.fromTo(
          formRef.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'expo.out' },
          '-=0.8'
        );

        // Image reveal
        tl.fromTo(
          imageRef.current,
          {
            scale: 1.1,
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
          },
          {
            scale: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: 1,
            ease: 'expo.out',
          },
          '-=0.6'
        );

        // Title letter cascade
        if (titleRef.current) {
          const chars = titleRef.current.querySelectorAll('.char');
          tl.fromTo(
            chars,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.03,
              ease: 'power2.out',
            },
            '-=0.7'
          );
        }

        // Subtitle
        tl.fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.5'
        );

        // Input fields stagger
        inputsRef.current.forEach((input, i) => {
          if (input) {
            tl.fromTo(
              input,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
              `-=${0.4 - i * 0.1}`
            );
          }
        });

        // Submit button bounce
        tl.fromTo(
          buttonRef.current,
          { scale: 0 },
          { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' },
          '-=0.3'
        );
      },
      once: true,
    });
    triggersRef.current.push(trigger);

    // Image parallax
    const parallaxTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        if (imageRef.current) {
          gsap.set(imageRef.current, {
            y: -30 + self.progress * 60,
          });
        }
      },
    });
    triggersRef.current.push(parallaxTrigger);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new appointment
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      serviceType: formData.projectType,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      message: formData.message,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    const updatedAppointments = [...appointments, newAppointment];
    localStorage.setItem('lumiere-appointments', JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);

    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        projectType: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const titleChars = contactConfig.title.split('');

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-8 lg:px-16 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 relative">
          {/* Diagonal divider */}
          <div
            ref={dividerRef}
            className="hidden lg:block absolute left-1/2 top-0 w-px bg-white/20"
            style={{
              transform: 'rotate(12deg) translateX(-50%)',
              transformOrigin: 'top center',
              willChange: 'height',
            }}
          />

          {/* Form side */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative z-10"
          >
            {/* Title */}
            <h2
              ref={titleRef}
              className="text-h2 lg:text-h1 text-white font-medium mb-4"
            >
              {titleChars.map((char, i) => (
                <span key={i} className="char inline-block">
                  {char}
                </span>
              ))}
            </h2>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-body-lg text-white/60 mb-12"
            >
              {contactConfig.subtitle}
            </p>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
                <div className="flex items-center gap-3 text-green-400">
                  <Check className="w-6 h-6" />
                  <div>
                    <p className="font-medium">Appointment Request Submitted!</p>
                    <p className="text-sm text-green-400/70">We'll contact you shortly to confirm.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Form fields */}
            <div className="space-y-8">
              {/* Name */}
              <div
                ref={(el) => {
                  inputsRef.current[0] = el;
                }}
                className="relative"
              >
                <label
                  className={`absolute left-0 transition-all duration-200 ${
                    focusedField === 'name' || formData.name
                      ? '-top-6 text-body-sm text-white'
                      : 'top-3 text-body text-white/50'
                  }`}
                >
                  {contactConfig.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300"
                  required
                  disabled={isSubmitted}
                />
                <div
                  className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${
                    focusedField === 'name' ? 'w-full' : 'w-0'
                  }`}
                />
              </div>

              {/* Email */}
              <div
                ref={(el) => {
                  inputsRef.current[1] = el;
                }}
                className="relative"
              >
                <label
                  className={`absolute left-0 transition-all duration-200 ${
                    focusedField === 'email' || formData.email
                      ? '-top-6 text-body-sm text-white'
                      : 'top-3 text-body text-white/50'
                  }`}
                >
                  {contactConfig.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300"
                  required
                  disabled={isSubmitted}
                />
                <div
                  className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${
                    focusedField === 'email' ? 'w-full' : 'w-0'
                  }`}
                />
              </div>

              {/* Service Type */}
              <div
                ref={(el) => {
                  inputsRef.current[2] = el;
                }}
                className="relative"
              >
                <label
                  className={`absolute left-0 transition-all duration-200 ${
                    focusedField === 'projectType' || formData.projectType
                      ? '-top-6 text-body-sm text-white'
                      : 'top-3 text-body text-white/50'
                  }`}
                >
                  {contactConfig.projectTypeLabel}
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('projectType')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 appearance-none cursor-pointer"
                  required
                  disabled={isSubmitted}
                >
                  <option value="" className="bg-black">
                    {contactConfig.projectTypePlaceholder}
                  </option>
                  {contactConfig.projectTypeOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-black">
                      {option.label}
                    </option>
                  ))}
                </select>
                <div
                  className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${
                    focusedField === 'projectType' ? 'w-full' : 'w-0'
                  }`}
                />
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  ref={(el) => {
                    inputsRef.current[3] = el;
                  }}
                  className="relative"
                >
                  <label
                    className={`absolute left-0 transition-all duration-200 ${
                      focusedField === 'preferredDate' || formData.preferredDate
                        ? '-top-6 text-body-sm text-white'
                        : 'top-3 text-body text-white/50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Preferred Date *
                    </span>
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('preferredDate')}
                    onBlur={() => setFocusedField(null)}
                    min={today}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 [color-scheme:dark]"
                    required
                    disabled={isSubmitted}
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${
                      focusedField === 'preferredDate' ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>

                <div
                  ref={(el) => {
                    inputsRef.current[4] = el;
                  }}
                  className="relative"
                >
                  <label
                    className={`absolute left-0 transition-all duration-200 ${
                      focusedField === 'preferredTime' || formData.preferredTime
                        ? '-top-6 text-body-sm text-white'
                        : 'top-3 text-body text-white/50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Preferred Time *
                    </span>
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('preferredTime')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 appearance-none cursor-pointer"
                    required
                    disabled={isSubmitted}
                  >
                    <option value="" className="bg-black">Select time...</option>
                    <option value="09:00" className="bg-black">9:00 AM</option>
                    <option value="10:00" className="bg-black">10:00 AM</option>
                    <option value="11:00" className="bg-black">11:00 AM</option>
                    <option value="12:00" className="bg-black">12:00 PM</option>
                    <option value="13:00" className="bg-black">1:00 PM</option>
                    <option value="14:00" className="bg-black">2:00 PM</option>
                    <option value="15:00" className="bg-black">3:00 PM</option>
                    <option value="16:00" className="bg-black">4:00 PM</option>
                    <option value="17:00" className="bg-black">5:00 PM</option>
                    <option value="18:00" className="bg-black">6:00 PM</option>
                  </select>
                  <div
                    className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${
                      focusedField === 'preferredTime' ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </div>

              {/* Message */}
              <div
                ref={(el) => {
                  inputsRef.current[5] = el;
                }}
                className="relative"
              >
                <label
                  className={`absolute left-0 transition-all duration-200 ${
                    focusedField === 'message' || formData.message
                      ? '-top-6 text-body-sm text-white'
                      : 'top-3 text-body text-white/50'
                  }`}
                >
                  {contactConfig.messageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                  disabled={isSubmitted}
                />
                <div
                  className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${
                    focusedField === 'message' ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              ref={buttonRef}
              type="submit"
              disabled={isSubmitted}
              className="mt-12 px-10 py-4 bg-white text-black text-body font-medium flex items-center gap-3 hover:bg-highlight hover:text-white transition-colors duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">{contactConfig.submitButtonText}</span>
              <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-highlight transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </button>

            {/* View Appointments Link */}
            {appointments.length > 0 && (
              <button
                type="button"
                onClick={() => setShowAppointments(!showAppointments)}
                className="mt-4 text-body-sm text-white/50 hover:text-white transition-colors duration-300"
              >
                {showAppointments ? 'Hide' : 'View'} My Appointments ({appointments.length})
              </button>
            )}

            {/* Appointments List */}
            {showAppointments && appointments.length > 0 && (
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-medium mb-4">Your Appointments</h3>
                {appointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{apt.name}</span>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        apt.status === 'confirmed' ? 'bg-green-500/20 text-green-400' :
                        apt.status === 'cancelled' ? 'bg-red-500/20 text-red-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{apt.email}</p>
                    <p className="text-sm text-gray-400">
                      {contactConfig.projectTypeOptions.find(o => o.value === apt.serviceType)?.label || apt.serviceType}
                    </p>
                    <p className="text-sm text-gray-400">
                      {apt.preferredDate} at {apt.preferredTime}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </form>

          {/* Image side */}
          <div
            ref={imageRef}
            className="relative aspect-[2/3] lg:aspect-auto overflow-hidden"
            style={{ willChange: 'transform, clip-path' }}
          >
            <img
              src={contactConfig.image}
              alt="Contact"
              className="w-full h-full object-cover"
            />

            {/* Decorative blocks */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-highlight/20" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
