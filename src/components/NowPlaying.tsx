import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MoreHorizontal, Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Heart, Share2, ListMusic } from 'lucide-react';
import { Song } from '../data/mockData';

interface NowPlayingProps {
  song: Song;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onClose: () => void;
  progress: number;
}

export const NowPlaying: React.FC<NowPlayingProps> = ({ song, isPlaying, onTogglePlay, onClose, progress }) => {
  return (
    <motion.div 
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[100] bg-zed-black overflow-hidden flex flex-col"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src={song.coverUrl} 
          alt="" 
          className="w-full h-full object-cover blur-[100px] opacity-30 scale-150"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zed-black/50 to-zed-black" />
      </div>

      {/* Header */}
      <header className="relative z-10 h-20 px-8 flex items-center justify-between">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ChevronDown size={24} />
        </motion.button>
        <div className="text-center">
          <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">PLAYING FROM VIBE</p>
          <h3 className="text-xs font-bold uppercase tracking-widest">{song.category}</h3>
        </div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <MoreHorizontal size={24} />
        </motion.button>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 gap-8 lg:gap-24 overflow-hidden py-4 lg:py-0">
        {/* Album Art Section */}
        <div className="w-full max-w-[280px] lg:max-w-[400px] aspect-square relative group">
          <motion.div
            animate={{ 
              scale: isPlaying ? [1, 1.02, 1] : 1,
              rotate: isPlaying ? [0, 1, -1, 0] : 0
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full rounded-2xl lg:rounded-[40px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:shadow-[0_40px_80px_rgba(0,0,0,0.5)] relative z-10"
          >
            <img 
              src={song.coverUrl} 
              alt={song.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-zed-green/20 blur-3xl rounded-full opacity-0 lg:group-hover:opacity-100 transition-opacity duration-1000" />
        </div>

        {/* Info & Lyrics Section */}
        <div className="flex-1 w-full max-w-xl flex flex-col h-full lg:py-12 overflow-hidden">
          <div className="mb-6 lg:mb-12 text-center lg:text-left">
            <div className="flex items-center justify-between lg:justify-start gap-4 mb-2">
              <motion.h2 
                layoutId={`title-${song.id}`}
                className="text-3xl lg:text-6xl font-display font-black tracking-tighter truncate flex-1"
              >
                {song.title}
              </motion.h2>
              <motion.button 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/40 hover:text-zed-orange transition-colors"
              >
                <Heart size={28} lg:size={32} />
              </motion.button>
            </div>
            <p className="text-lg lg:text-2xl text-zed-green font-bold">{song.artist}</p>
          </div>

          {/* Lyrics Viewport */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 lg:pr-4 mask-fade-y">
            <div className="space-y-4 lg:space-y-6 py-4 lg:py-8">
              {song.lyrics ? (
                song.lyrics.split('\n').map((line, i) => (
                  <motion.p 
                    key={i}
                    initial={{ opacity: 0.2 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ margin: "-40% 0px -40% 0px" }}
                    className={`text-xl lg:text-3xl font-bold leading-tight transition-all duration-500 ${line.startsWith('[') ? 'text-white/20 text-sm lg:text-lg uppercase tracking-widest mt-4 lg:mt-8' : 'text-white'}`}
                  >
                    {line}
                  </motion.p>
                ))
              ) : (
                <p className="text-white/20 italic text-lg">Lyrics not available for this vibe...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Playback Controls Footer */}
      <footer className="relative z-10 px-6 lg:px-20 pb-8 lg:pb-12 pt-4 lg:pt-8 bg-gradient-to-t from-zed-black to-transparent">
        {/* Progress Bar */}
        <div className="mb-6 lg:mb-8">
          <div className="h-1 lg:h-1.5 w-full bg-white/10 rounded-full overflow-hidden group cursor-pointer relative">
            <motion.div 
              className="h-full bg-zed-green relative z-10"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 lg:mt-3 text-[8px] lg:text-[10px] font-mono text-white/40 uppercase tracking-widest">
            <span>1:24</span>
            <span>{song.duration}</span>
          </div>
        </div>

        {/* Main Controls */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 lg:gap-8">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-white/40 hover:text-zed-green transition-colors hidden sm:block">
              <Shuffle size={20} lg:size={24} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-white/40 hover:text-zed-green transition-colors">
              <Share2 size={20} lg:size={24} />
            </motion.button>
          </div>

          <div className="flex items-center gap-6 lg:gap-12">
            <motion.button 
              whileHover={{ scale: 1.1, x: -5 }} 
              whileTap={{ scale: 0.9 }} 
              className="text-white hover:text-zed-green transition-colors"
            >
              <SkipBack size={32} lg:size={40} fill="currentColor" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              onClick={onTogglePlay}
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] lg:shadow-[0_0_50px_rgba(255,255,255,0.2)]"
            >
              {isPlaying ? (
                <Pause size={32} lg:size={40} className="text-black" fill="currentColor" />
              ) : (
                <Play size={32} lg:size={40} className="text-black ml-1 lg:ml-2" fill="currentColor" />
              )}
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.1, x: 5 }} 
              whileTap={{ scale: 0.9 }} 
              className="text-white hover:text-zed-green transition-colors"
            >
              <SkipForward size={32} lg:size={40} fill="currentColor" />
            </motion.button>
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-white/40 hover:text-zed-green transition-colors hidden sm:block">
              <Repeat size={20} lg:size={24} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-white/40 hover:text-zed-green transition-colors">
              <ListMusic size={20} lg:size={24} />
            </motion.button>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};
