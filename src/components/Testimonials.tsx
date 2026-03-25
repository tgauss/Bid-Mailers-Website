import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Filter } from 'lucide-react';

const testimonials = [
  {
    content: "Bidmailers completely changed our lead generation. We're no longer fighting over shared leads. Homeowners call us with the estimate in hand, ready to schedule.",
    author: "Sarah Jenkins",
    role: "Owner, Apex Roofing",
    image: "https://picsum.photos/seed/sarah/100/100",
    specialty: "Residential",
    companySize: "$5M - $10M",
  },
  {
    content: "The ability to drop pins on 200 homes an hour is incredible. The mailers look so professional, and the street view image guarantees they get opened.",
    author: "Michael Chen",
    role: "Sales Director, Summit Exteriors",
    image: "https://picsum.photos/seed/michael/100/100",
    specialty: "Storm Damage",
    companySize: "$10M+",
  },
  {
    content: "We've seen a massive increase in high-intent calls. When a homeowner knows the price before they even pick up the phone, the close rate skyrockets.",
    author: "David Rodriguez",
    role: "CEO, Horizon Roofing Solutions",
    image: "https://picsum.photos/seed/david/100/100",
    specialty: "Residential",
    companySize: "$1M - $5M",
  },
  {
    content: "Finally, a marketing channel that actually delivers ROI. The custom estimates make us look incredibly professional and trustworthy.",
    author: "Emily Thompson",
    role: "CMO, Elite Roofing Pros",
    image: "https://picsum.photos/seed/emily/100/100",
    specialty: "Commercial",
    companySize: "$10M+",
  },
  {
    content: "Our reps love the app. They can target a neighborhood in minutes and the leads just start rolling in a week later. It's a game changer.",
    author: "James Wilson",
    role: "VP of Sales, Roofing Kings",
    image: "https://picsum.photos/seed/james/100/100",
    specialty: "Storm Damage",
    companySize: "$5M - $10M",
  },
  {
    content: "We stopped buying shared leads entirely. Bidmailers gives us exclusive, high-intent prospects who are ready to buy right now.",
    author: "Marcus Johnson",
    role: "Owner, Johnson & Sons Roofing",
    image: "https://picsum.photos/seed/marcus/100/100",
    specialty: "Residential",
    companySize: "$1M - $5M",
  },
];

export const Testimonials = () => {
  const [specialtyFilter, setSpecialtyFilter] = useState('All');
  const [sizeFilter, setSizeFilter] = useState('All');

  const filteredTestimonials = testimonials.filter((t) => {
    const matchSpecialty = specialtyFilter === 'All' || t.specialty === specialtyFilter;
    const matchSize = sizeFilter === 'All' || t.companySize === sizeFilter;
    return matchSpecialty && matchSize;
  });

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Trusted by top roofing companies
          </h2>
          <p className="text-lg text-slate-600">
            See how companies of all sizes are using Bidmailers to dominate their local markets.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-slate-500 font-medium mr-2">
            <Filter className="w-5 h-5" />
            <span>Filter by:</span>
          </div>
          <div className="relative">
            <select
              value={specialtyFilter}
              onChange={(e) => setSpecialtyFilter(e.target.value)}
              className="appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm cursor-pointer font-medium"
            >
              <option value="All">All Specialties</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Storm Damage">Storm Damage</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>

          <div className="relative">
            <select
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
              className="appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm cursor-pointer font-medium"
            >
              <option value="All">All Company Sizes</option>
              <option value="$1M - $5M">$1M - $5M</option>
              <option value="$5M - $10M">$5M - $10M</option>
              <option value="$10M+">$10M+</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((testimonial) => (
              <motion.div
                layout
                key={testimonial.author}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 leading-relaxed italic flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-500 mb-1">{testimonial.role}</div>
                    <div className="flex gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md">
                        {testimonial.specialty}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-orange-600 px-2 py-0.5 rounded-md">
                        {testimonial.companySize}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredTestimonials.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="col-span-full text-center py-12"
            >
              <p className="text-lg text-slate-500">No testimonials found matching your filters.</p>
              <button 
                onClick={() => { setSpecialtyFilter('All'); setSizeFilter('All'); }}
                className="mt-4 text-blue-600 font-medium hover:text-blue-700"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
