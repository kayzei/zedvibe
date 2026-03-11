import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Play, Share2 } from 'lucide-react';
import { AmbitiousPlaylist } from '../data/mockData';

interface AmbitiousPlaylistsProps {
  playlists: AmbitiousPlaylist[];
}

export const AmbitiousPlaylists: React.FC<AmbitiousPlaylistsProps> = ({ playlists }) => {
  return (
    <div className="space-y-8 lg:space-y-12">
      <header className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl font-display font-black tracking-tighter mb-3 lg:mb-4">AMBITIOUS PLAYLISTS</h2>
        <p className="text-white/60 text-sm lg:text-lg">Soundtracks for your goals. Curated for the dreamers and doers of Zambia.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {playlists.map((playlist) => (
          <motion.div 
            key={playlist.id}
            whileHover={{ y: -10 }}
            className="glass rounded-2xl lg:rounded-[32px] overflow-hidden group border border-white/5"
          >
            <div className="relative aspect-square">
              <img 
                src={playlist.coverUrl} 
                alt={playlist.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zed-black via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-zed-green text-black text-[8px] lg:text-[10px] font-black rounded-full uppercase tracking-widest flex items-center gap-2">
                <Target size={10} lg:size={12} />
                {playlist.goal}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl"
                >
                  <Play size={24} lg:size={32} fill="currentColor" className="ml-1" />
                </motion.button>
              </div>
            </div>
            
            <div className="p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-display font-bold mb-2 group-hover:text-zed-green transition-colors">{playlist.title}</h3>
              <p className="text-white/50 text-xs lg:text-sm mb-4 lg:mb-6 line-clamp-2">{playlist.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-zed-purple/20 flex items-center justify-center">
                    <Users size={10} lg:size={12} className="text-zed-purple" />
                  </div>
                  <span className="text-[8px] lg:text-[10px] font-bold text-white/40 uppercase tracking-widest">{playlist.curator}</span>
                </div>
                <div className="flex items-center gap-3 lg:gap-4">
                  <span className="text-[8px] lg:text-[10px] font-black text-zed-green uppercase">{playlist.songCount} VIBES</span>
                  <button 
                    onClick={() => {
                      alert(`Sharing "${playlist.title}" to your socials! 🇿🇲🔥`);
                    }}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    <Share2 size={14} lg:size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Discovery Prompt */}
      <div className="glass p-8 lg:p-12 rounded-3xl lg:rounded-[40px] text-center border border-zed-green/20 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-zed-green/5 blur-3xl rounded-full" />
        <div className="relative z-10">
          <h3 className="text-2xl lg:text-3xl font-display font-black mb-3 lg:mb-4 tracking-tighter">WHAT'S YOUR NEXT MOVE?</h3>
          <p className="text-white/60 mb-6 lg:mb-8 text-xs lg:text-base max-w-lg mx-auto">Create your own Ambitious Playlist and share your vision with the community. Let your hustle have a soundtrack.</p>
          <button className="w-full sm:w-auto px-8 lg:px-12 py-3 lg:py-4 zed-gradient text-black text-xs lg:text-base font-black rounded-xl lg:rounded-2xl hover:scale-105 transition-transform shadow-xl">
            CREATE AMBITIOUS PLAYLIST
          </button>
        </div>
      </div>
    </div>
  );
};
