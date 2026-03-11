import React from 'react';
import { motion } from 'motion/react';
import { Newspaper, Calendar, Mic2, ArrowRight, MapPin, Ticket } from 'lucide-react';
import { NewsArticle, ZedEvent } from '../data/mockData';

interface DiscoverySectionProps {
  news: NewsArticle[];
  events: ZedEvent[];
}

export const DiscoverySection: React.FC<DiscoverySectionProps> = ({ news, events }) => {
  return (
    <div className="space-y-12 lg:space-y-16">
      {/* Local Music News & Interviews */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 lg:mb-8 gap-4">
          <div className="flex items-center gap-3">
            <Newspaper className="text-zed-green" size={20} lg:size={24} />
            <h2 className="text-2xl lg:text-3xl font-display font-black tracking-tighter">ZED MUSIC PULSE</h2>
          </div>
          <button className="text-[10px] font-bold text-white/40 hover:text-zed-green uppercase tracking-widest flex items-center gap-2">
            View All News <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {news.map((article) => (
            <motion.div 
              key={article.id}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl lg:rounded-[32px] overflow-hidden group cursor-pointer border border-white/5"
            >
              <div className="relative h-48 lg:h-64">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-zed-purple text-white text-[8px] lg:text-[10px] font-black rounded-full uppercase tracking-widest">
                  {article.category}
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">{article.date}</p>
                <h3 className="text-xl lg:text-2xl font-display font-bold mb-3 lg:mb-4 group-hover:text-zed-green transition-colors">{article.title}</h3>
                <p className="text-white/50 text-xs lg:text-sm mb-4 lg:mb-6 line-clamp-2">{article.summary}</p>
                <div className="flex items-center gap-2 text-zed-green font-bold text-[10px] uppercase tracking-widest">
                  Read Full Story <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Events & Festivals */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 lg:mb-8 gap-4">
          <div className="flex items-center gap-3">
            <Calendar className="text-zed-orange" size={20} lg:size={24} />
            <h2 className="text-2xl lg:text-3xl font-display font-black tracking-tighter">LSK GIG GUIDE</h2>
          </div>
          <button className="text-[10px] font-bold text-white/40 hover:text-zed-orange uppercase tracking-widest flex items-center gap-2">
            Full Calendar <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {events.map((event) => (
            <div key={event.id} className="glass p-6 lg:p-8 rounded-2xl lg:rounded-[32px] flex flex-col sm:flex-row gap-6 lg:gap-8 items-center group border border-white/5">
              <div className="w-full sm:w-32 lg:w-48 h-48 sm:h-32 lg:h-48 rounded-xl lg:rounded-2xl overflow-hidden flex-shrink-0">
                <img 
                  src={event.imageUrl} 
                  alt={event.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1 lg:mb-2">
                  <span className="text-zed-orange font-black text-[10px] lg:text-xs uppercase tracking-widest">{event.date}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-display font-bold mb-1 lg:mb-2 group-hover:text-zed-green transition-colors">{event.name}</h3>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-white/40 text-xs mb-4 lg:mb-6">
                  <MapPin size={12} />
                  {event.location}
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="text-lg lg:text-xl font-black text-white">{event.price}</div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      alert(`Ticket for ${event.name} secured! See you at ${event.location}! 🇿🇲🎟️`);
                    }}
                    className="px-4 lg:px-6 py-2 bg-white text-black text-xs lg:text-sm font-bold rounded-full flex items-center gap-2"
                  >
                    <Ticket size={14} lg:size={16} />
                    GET TICKETS
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artist Spotlight / Interviews */}
      <section className="glass p-8 lg:p-12 rounded-3xl lg:rounded-[40px] border border-zed-purple/20 relative overflow-hidden">
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-zed-purple/5 blur-3xl rounded-full" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <div className="w-32 lg:w-48 h-32 lg:h-48 rounded-full overflow-hidden border-4 border-zed-purple/20 shadow-2xl flex-shrink-0">
            <img src="https://picsum.photos/seed/artist-spot/400/400" alt="Artist" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3 lg:mb-4">
              <Mic2 className="text-zed-purple" size={18} lg:size={20} />
              <span className="text-[10px] lg:text-xs font-black text-zed-purple uppercase tracking-widest">Exclusive Interview</span>
            </div>
            <h3 className="text-2xl lg:text-4xl font-display font-black mb-3 lg:mb-4 tracking-tighter">BEYOND THE BEATS: CHEF 187</h3>
            <p className="text-white/60 mb-6 lg:mb-8 text-xs lg:text-base max-w-2xl">We go deep with the lyrical Joe Solo about his creative process, the evolution of Zed-Beats, and what's next for the King of the Kopala.</p>
            <button className="w-full sm:w-auto px-8 lg:px-10 py-3 lg:py-4 bg-zed-purple text-white text-xs lg:text-base font-black rounded-xl lg:rounded-2xl hover:scale-105 transition-transform shadow-xl">
              WATCH INTERVIEW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
