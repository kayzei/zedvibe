import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, ListMusic, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Song } from '../data/mockData';

interface PlayerProps {
  currentSong: Song | null;
  onOpenNowPlaying: () => void;
  onOpenQueue: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const Player = ({ currentSong, onOpenNowPlaying, onOpenQueue, isPlaying, onTogglePlay }: PlayerProps) => {
  const [progress, setProgress] = useState(35);

  if (!currentSong) return null;

  return (
    <div className="h-20 lg:h-24 bg-black/90 backdrop-blur-xl border-t border-white/5 px-4 lg:px-6 flex items-center justify-between group/player">
      {/* Song Info - Hidden on very small screens */}
      <div 
        className="flex items-center gap-3 lg:gap-4 w-1/2 lg:w-1/3 cursor-pointer group"
        onClick={onOpenNowPlaying}
      >
        <div className="relative flex-shrink-0">
          <img 
            src={currentSong.coverUrl} 
            alt={currentSong.title} 
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg object-cover shadow-lg transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
            <ChevronUp size={20} className="text-white" />
          </div>
        </div>
        <div className="overflow-hidden">
          <h4 className="text-xs lg:text-sm font-bold text-white truncate max-w-[120px] lg:max-w-[200px] group-hover:text-zed-green transition-colors">{currentSong.title}</h4>
          <p className="text-[10px] lg:text-xs text-white/50 truncate max-w-[120px] lg:max-w-[200px]">{currentSong.artist}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-1 lg:gap-2 flex-1 lg:w-1/3">
        <div className="flex items-center gap-4 lg:gap-6">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white/40 hover:text-zed-green transition-colors hidden sm:block"
          >
            <Shuffle size={16} lg:size={18} />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-zed-green transition-colors hidden sm:block"
          >
            <SkipBack size={20} lg:size={22} fill="currentColor" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onTogglePlay}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            {isPlaying ? (
              <Pause size={20} lg:size={24} className="text-black" fill="currentColor" />
            ) : (
              <Play size={20} lg:size={24} className="text-black ml-1" fill="currentColor" />
            )}
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-zed-green transition-colors"
          >
            <SkipForward size={20} lg:size={22} fill="currentColor" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white/40 hover:text-zed-green transition-colors hidden sm:block"
          >
            <Repeat size={16} lg:size={18} />
          </motion.button>
        </div>
        
        <div className="hidden lg:flex items-center gap-3 w-full max-w-md">
          <span className="text-[10px] text-white/40 font-mono">1:24</span>
          <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden group cursor-pointer relative">
            <motion.div 
              className="h-full bg-zed-green group-hover:bg-zed-orange transition-colors" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] text-white/40 font-mono">{currentSong.duration}</span>
        </div>
      </div>

      {/* Volume & Extra - Hidden on mobile */}
      <div className="hidden lg:flex items-center justify-end gap-4 w-1/3">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onOpenQueue}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ListMusic size={18} />
        </motion.button>
        <div className="flex items-center gap-2 group/vol">
          <Volume2 size={18} className="text-white/60 group-hover/vol:text-white" />
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer">
            <div className="h-full bg-white/60 w-2/3 group-hover/vol:bg-zed-green transition-colors" />
          </div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onOpenNowPlaying}
          className="text-white/60 hover:text-white transition-colors"
        >
          <Maximize2 size={18} />
        </motion.button>
      </div>

      {/* Mobile Queue Toggle */}
      <div className="flex lg:hidden items-center justify-end gap-2">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={onOpenQueue}
          className="p-2 text-white/60"
        >
          <ListMusic size={20} />
        </motion.button>
      </div>
    </div>
  );
};
