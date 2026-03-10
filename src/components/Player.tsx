import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Maximize2, ListMusic } from 'lucide-react';
import { Song } from '../data/mockData';

interface PlayerProps {
  currentSong: Song | null;
}

export const Player = ({ currentSong }: PlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  if (!currentSong) return null;

  return (
    <div className="h-24 bg-black/90 backdrop-blur-xl border-t border-white/5 px-6 flex items-center justify-between">
      {/* Song Info */}
      <div className="flex items-center gap-4 w-1/3">
        <img 
          src={currentSong.coverUrl} 
          alt={currentSong.title} 
          className="w-14 h-14 rounded-lg object-cover shadow-lg"
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="text-sm font-bold text-white truncate max-w-[200px]">{currentSong.title}</h4>
          <p className="text-xs text-white/50 truncate max-w-[200px]">{currentSong.artist}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 w-1/3">
        <div className="flex items-center gap-6">
          <button className="text-white/40 hover:text-zed-green transition-colors">
            <Shuffle size={18} />
          </button>
          <button className="text-white hover:text-zed-green transition-colors">
            <SkipBack size={22} fill="currentColor" />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
          >
            {isPlaying ? <Pause size={20} className="text-black" fill="currentColor" /> : <Play size={20} className="text-black ml-1" fill="currentColor" />}
          </button>
          <button className="text-white hover:text-zed-green transition-colors">
            <SkipForward size={22} fill="currentColor" />
          </button>
          <button className="text-white/40 hover:text-zed-green transition-colors">
            <Repeat size={18} />
          </button>
        </div>
        
        <div className="flex items-center gap-3 w-full max-w-md">
          <span className="text-[10px] text-white/40 font-mono">1:24</span>
          <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden group cursor-pointer">
            <div 
              className="h-full bg-zed-green group-hover:bg-zed-orange transition-colors" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] text-white/40 font-mono">{currentSong.duration}</span>
        </div>
      </div>

      {/* Volume & Extra */}
      <div className="flex items-center justify-end gap-4 w-1/3">
        <button className="text-white/60 hover:text-white transition-colors">
          <ListMusic size={18} />
        </button>
        <div className="flex items-center gap-2 group">
          <Volume2 size={18} className="text-white/60 group-hover:text-white" />
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-white/60 w-2/3" />
          </div>
        </div>
        <button className="text-white/60 hover:text-white transition-colors">
          <Maximize2 size={18} />
        </button>
      </div>
    </div>
  );
};
