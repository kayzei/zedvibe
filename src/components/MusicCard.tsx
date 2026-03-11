import React from 'react';
import { Play, Heart, Plus } from 'lucide-react';
import { motion } from 'motion/react';

interface MusicCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  type?: 'playlist' | 'artist' | 'song';
  onPlay?: () => void;
  onAddToQueue?: () => void;
}

export const MusicCard: React.FC<MusicCardProps> = ({ title, subtitle, imageUrl, type = 'playlist', onPlay, onAddToQueue }) => {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="glass p-4 rounded-2xl group cursor-pointer transition-all hover:bg-white/10 relative overflow-hidden"
    >
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl shadow-2xl">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          <motion.button 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.stopPropagation(); onAddToQueue?.(); }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:text-zed-purple transition-colors"
          >
            <Plus size={20} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.stopPropagation(); onPlay?.(); }}
            className="w-14 h-14 rounded-full bg-zed-green flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.4)]"
          >
            <Play size={28} className="text-black ml-1" fill="currentColor" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:text-zed-orange transition-colors"
          >
            <Heart size={20} />
          </motion.button>
        </div>
        {type === 'artist' && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-zed-purple text-[10px] font-black rounded-full shadow-lg">
            ARTIST
          </div>
        )}
      </div>
      <h3 className="font-bold text-sm truncate mb-1 group-hover:text-zed-green transition-colors">{title}</h3>
      <p className="text-xs text-white/50 truncate font-medium">{subtitle}</p>
      
      {/* Hype decorative element */}
      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-zed-green/5 blur-2xl group-hover:bg-zed-green/20 transition-all" />
    </motion.div>
  );
};
