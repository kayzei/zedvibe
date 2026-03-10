import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Bell, User, TrendingUp, MapPin, Sparkles, Zap, Calendar } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { MusicCard } from './components/MusicCard';
import { MOCK_SONGS, MOCK_PLAYLISTS, MOCK_ARTISTS } from './data/mockData';

export default function App() {
  const [currentSong, setCurrentSong] = useState(MOCK_SONGS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex h-screen bg-zed-black text-white overflow-hidden font-sans">
      <Sidebar />

      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="h-20 px-8 flex items-center justify-between z-10 bg-zed-black/50 backdrop-blur-md">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input 
              type="text" 
              placeholder="Search for vibes in LSK..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-zed-green transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-zed-green/10 border border-zed-green/20 rounded-full">
              <MapPin size={14} className="text-zed-green" />
              <span className="text-[10px] font-bold text-zed-green uppercase tracking-wider">Lusaka, ZM</span>
            </div>
            <button className="relative text-white/60 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-zed-orange rounded-full" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors">
              <User size={20} />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-8 pb-32 pt-4 custom-scrollbar">
          {/* Marquee Hype */}
          <div className="mb-8 overflow-hidden bg-zed-green/5 border-y border-white/5 py-2">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex whitespace-nowrap gap-12 items-center"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-zed-green font-black italic text-sm tracking-tighter">TRENDING IN LUSAKA: Z-BOY DROPS NEW ALBUM "CITY LIGHTS"</span>
                  <div className="w-2 h-2 bg-zed-orange rounded-full" />
                  <span className="text-white/40 font-bold text-sm tracking-tighter uppercase">UPCOMING EVENT: LSK SUMMER FEST @ MANDA HILL - MARCH 25</span>
                  <div className="w-2 h-2 bg-zed-purple rounded-full" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Section */}
          <section className="mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-80 rounded-3xl overflow-hidden group"
            >
              <img 
                src="https://picsum.photos/seed/lusaka-vibe/1200/400" 
                alt="Lusaka Vibes" 
                className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-zed-green text-black text-[10px] font-black rounded-full uppercase tracking-tighter">Trending in LSK</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">New Release</span>
                </div>
                <h2 className="text-6xl font-display font-black tracking-tighter mb-4 leading-none">
                  ZED GEN Z <br />
                  <span className="text-zed-green">SUMMER WAVE</span>
                </h2>
                <p className="text-white/70 max-w-lg mb-8 text-sm">
                  The ultimate collection of Lusaka's freshest sounds. From Amapiano to Zed-Beats, we've got the heartbeat of the city.
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                    <Zap size={18} fill="currentColor" />
                    PLAY NOW
                  </button>
                  <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 font-bold rounded-full hover:bg-white/20 transition-all">
                    SAVE VIBE
                  </button>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Quick Picks / Categories */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="text-zed-orange" size={20} />
                <h3 className="text-xl font-display font-bold">LSK Vibe Check</h3>
              </div>
              <button className="text-xs font-bold text-white/40 hover:text-zed-green uppercase tracking-widest">View All</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {MOCK_SONGS.map((song) => (
                <MusicCard 
                  key={song.id}
                  title={song.title}
                  subtitle={song.artist}
                  imageUrl={song.coverUrl}
                  type="song"
                />
              ))}
            </div>
          </section>

          {/* Localized Playlists */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-zed-green" size={20} />
                <h3 className="text-xl font-display font-bold">Curated for Zambia</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {MOCK_PLAYLISTS.map((playlist) => (
                <div key={playlist.id} className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl">
                  <img 
                    src={playlist.coverUrl} 
                    alt={playlist.name} 
                    className="w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                    <h4 className="text-xl font-bold mb-1">{playlist.name}</h4>
                    <p className="text-xs text-white/60 line-clamp-1">{playlist.description}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-[10px] font-bold text-zed-green uppercase">{playlist.songCount} VIBES</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Artists */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-display font-bold">Top Zed Artists</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {MOCK_ARTISTS.map((artist) => (
                <div key={artist.id} className="flex flex-col items-center text-center group cursor-pointer">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-zed-green transition-all shadow-xl">
                    <img 
                      src={artist.imageUrl} 
                      alt={artist.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{artist.name}</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{artist.genre}</p>
                </div>
              ))}
            </div>
          </section>

          {/* LSK Gigs Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="text-zed-purple" size={20} />
                <h3 className="text-xl font-display font-bold">LSK Gigs & Events</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-6 rounded-3xl flex gap-6 items-center group cursor-pointer hover:bg-white/10 transition-all">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src="https://picsum.photos/seed/event1/200/200" alt="Event" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-zed-purple uppercase tracking-widest">MARCH 25</span>
                  <h4 className="text-lg font-bold mb-1 group-hover:text-zed-green transition-colors">LSK Summer Fest</h4>
                  <p className="text-xs text-white/50 mb-3">Manda Hill Rooftop • 18:00</p>
                  <button className="text-[10px] font-bold px-4 py-1 bg-white/10 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">GET TICKETS</button>
                </div>
              </div>
              <div className="glass p-6 rounded-3xl flex gap-6 items-center group cursor-pointer hover:bg-white/10 transition-all">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src="https://picsum.photos/seed/event2/200/200" alt="Event" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-zed-purple uppercase tracking-widest">APRIL 02</span>
                  <h4 className="text-lg font-bold mb-1 group-hover:text-zed-green transition-colors">Copperbelt Vibes Live</h4>
                  <p className="text-xs text-white/50 mb-3">Woodlands Stadium • 14:00</p>
                  <button className="text-[10px] font-bold px-4 py-1 bg-white/10 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">GET TICKETS</button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Player Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <Player currentSong={currentSong} />
        </div>
      </main>
    </div>
  );
}
