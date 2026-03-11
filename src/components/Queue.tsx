import React from 'react';
import { motion, Reorder, AnimatePresence } from 'motion/react';
import { X, GripVertical, Play, Trash2, Music2 } from 'lucide-react';
import { Song } from '../data/mockData';

interface QueueProps {
  queue: Song[];
  onReorder: (newQueue: Song[]) => void;
  onRemove: (songId: string) => void;
  onPlay: (song: Song) => void;
  onClose: () => void;
}

export const Queue: React.FC<QueueProps> = ({ queue, onReorder, onRemove, onPlay, onClose }) => {
  const [showClearConfirm, setShowClearConfirm] = React.useState(false);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed top-0 right-0 bottom-0 lg:bottom-24 w-full lg:max-w-md bg-zed-black/95 backdrop-blur-2xl border-l border-white/10 z-[60] shadow-2xl flex flex-col"
    >
      <div className="p-6 lg:p-8 flex items-center justify-between border-b border-white/5">
        <div>
          <h2 className="text-xl lg:text-2xl font-display font-black tracking-tighter">NEXT UP</h2>
          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{queue.length} VIBES IN QUEUE</p>
        </div>
        <button onClick={onClose} className="p-2 text-white/40 hover:text-white transition-colors">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
        {queue.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-white/20 gap-4">
            <Music2 size={48} />
            <p className="font-bold uppercase tracking-widest text-xs">Queue is empty</p>
          </div>
        ) : (
          <Reorder.Group axis="y" values={queue} onReorder={onReorder} className="space-y-2">
            {queue.map((song) => (
              <Reorder.Item 
                key={song.id} 
                value={song}
                className="glass p-3 rounded-xl flex items-center gap-4 group cursor-grab active:cursor-grabbing"
              >
                <div className="text-white/20 group-hover:text-white/40 transition-colors">
                  <GripVertical size={18} />
                </div>
                <div className="w-12 h-12 rounded-lg overflow-hidden relative flex-shrink-0">
                  <img src={song.coverUrl} alt={song.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <button 
                    onClick={() => onPlay(song)}
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <Play size={16} fill="currentColor" />
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold truncate">{song.title}</h4>
                  <p className="text-xs text-white/40 truncate">{song.artist}</p>
                </div>
                <button 
                  onClick={() => onRemove(song.id)}
                  className="p-2 text-white/20 hover:text-zed-orange transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Trash2 size={16} />
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        )}
      </div>

      <div className="p-6 bg-white/5 border-t border-white/5 relative">
        <AnimatePresence>
          {showClearConfirm ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute inset-0 bg-zed-black/90 backdrop-blur-md flex items-center justify-center gap-4 px-6"
            >
              <p className="text-xs font-bold uppercase tracking-widest">Clear all vibes?</p>
              <button 
                onClick={() => {
                  onReorder([]);
                  setShowClearConfirm(false);
                }}
                className="px-4 py-2 bg-zed-orange text-black font-black text-[10px] rounded-lg uppercase"
              >
                Yes, Clear
              </button>
              <button 
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 bg-white/10 text-white font-bold text-[10px] rounded-lg uppercase"
              >
                Cancel
              </button>
            </motion.div>
          ) : (
            <button 
              onClick={() => setShowClearConfirm(true)}
              className="w-full py-3 bg-white/10 hover:bg-white hover:text-black transition-all rounded-xl font-bold text-xs uppercase tracking-widest"
            >
              CLEAR QUEUE
            </button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
