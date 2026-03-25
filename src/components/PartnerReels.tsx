import { motion } from 'motion/react';
import { Play, Heart, MessageCircle, Share2, MoreHorizontal, ArrowRight } from 'lucide-react';

const reels = [
  {
    id: 1,
    author: '@apexroofing',
    description: 'Just dropped 200 pins in 45 mins! Bidmailers is insane 🔥 #roofing #sales',
    likes: '12.4K',
    comments: '342',
    thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=400&h=711',
    avatar: 'https://picsum.photos/seed/apex/100/100'
  },
  {
    id: 2,
    author: '@summit_exteriors',
    description: 'When the homeowner already knows the price and is ready to sign 🤝💰',
    likes: '8.9K',
    comments: '156',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=400&h=711',
    avatar: 'https://picsum.photos/seed/summit/100/100'
  },
  {
    id: 3,
    author: '@horizon_roofs',
    description: 'No more shared leads. Mail custom bids directly. Game changer. 🚀',
    likes: '15.2K',
    comments: '421',
    thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400&h=711',
    avatar: 'https://picsum.photos/seed/horizon/100/100'
  },
  {
    id: 4,
    author: '@elite_roofing_pros',
    description: 'Our close rate tripled this month thanks to @bidmailers 📈',
    likes: '5.1K',
    comments: '89',
    thumbnail: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=711',
    avatar: 'https://picsum.photos/seed/elite/100/100'
  },
  {
    id: 5,
    author: '@roofing_kings',
    description: 'The street view envelopes are a cheat code for open rates. 🤯',
    likes: '10.1K',
    comments: '210',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400&h=711',
    avatar: 'https://picsum.photos/seed/kings/100/100'
  }
];

export const PartnerReels = () => {
  return (
    <section className="py-24 bg-stone-50 text-slate-900 overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4 tracking-tight text-slate-900">
              See it in action.
            </h2>
            <p className="text-lg text-slate-600">
              Watch how top roofing teams are using Bidmailers to dominate their markets.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Follow us on Instagram <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal scrolling container */}
      <div className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
        {reels.map((reel, index) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex-none w-[260px] sm:w-[300px] aspect-[9/16] bg-slate-900 rounded-2xl overflow-hidden snap-center group cursor-pointer shadow-md"
          >
            <img 
              src={reel.thumbnail} 
              alt={reel.description} 
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Top Right Icon */}
            <div className="absolute top-4 right-4">
              <MoreHorizontal className="w-6 h-6 text-white drop-shadow-md" />
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <div className="flex items-end justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-orange-500 p-[2px]">
                      <img src={reel.avatar} alt="avatar" className="w-full h-full rounded-full border-2 border-slate-900 object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <span className="font-bold text-sm text-white drop-shadow-md">{reel.author}</span>
                  </div>
                  <p className="text-sm text-white/90 line-clamp-2 drop-shadow-md leading-snug">
                    {reel.description}
                  </p>
                </div>
                
                {/* Engagement Actions */}
                <div className="flex flex-col items-center gap-4 pb-1">
                  <div className="flex flex-col items-center gap-1 group/btn">
                    <Heart className="w-7 h-7 text-white drop-shadow-md group-hover/btn:fill-red-500 group-hover/btn:text-red-500 transition-colors" />
                    <span className="text-xs font-medium text-white drop-shadow-md">{reel.likes}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <MessageCircle className="w-7 h-7 text-white drop-shadow-md" />
                    <span className="text-xs font-medium text-white drop-shadow-md">{reel.comments}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Share2 className="w-7 h-7 text-white drop-shadow-md" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
