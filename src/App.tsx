import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Bell, User, TrendingUp, MapPin, Sparkles, Zap, Calendar, MessageSquare, Settings, Instagram, Twitter, Globe } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Player } from './components/Player';
import { MusicCard } from './components/MusicCard';
import { NjebeleFeed } from './components/NjebeleFeed';
import { ProfileSettings } from './components/ProfileSettings';
import { NowPlaying } from './components/NowPlaying';
import { Queue } from './components/Queue';
import { AmbitiousPlaylists } from './components/AmbitiousPlaylists';
import { DiscoverySection } from './components/DiscoverySection';
import { MOCK_SONGS, MOCK_PLAYLISTS, MOCK_ARTISTS, MOCK_NJEBELE_POSTS, MOCK_USER, UserProfile, Song, MOCK_AMBITIOUS_PLAYLISTS, MOCK_NEWS, MOCK_EVENTS } from './data/mockData';

export default function App() {
  const [currentSong, setCurrentSong] = useState<Song | null>(MOCK_SONGS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState<Song[]>([]);
  const [isNowPlayingOpen, setIsNowPlayingOpen] = useState(false);
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'home' | 'njebele' | 'profile' | 'ambitious' | 'discovery'>('home');
  const [user, setUser] = useState<UserProfile>(MOCK_USER);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleSaveProfile = (updatedUser: UserProfile) => {
    setUser(updatedUser);
    setIsEditingProfile(false);
  };

  const handlePlaySong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handleAddToQueue = (song: Song) => {
    setQueue(prev => [...prev, song]);
  };

  const handleRemoveFromQueue = (songId: string) => {
    setQueue(prev => prev.filter(s => s.id !== songId));
  };

  const handleReorderQueue = (newQueue: Song[]) => {
    setQueue(newQueue);
  };

  return (
    <div className="flex h-screen bg-zed-black text-white overflow-hidden font-sans flex-col lg:flex-row">
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="h-16 lg:h-20 px-4 lg:px-8 flex items-center justify-between z-10 bg-zed-black/50 backdrop-blur-md">
          <div className="flex items-center gap-4 lg:gap-8 flex-1">
            <div className="relative w-full lg:w-96 hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="text" 
                placeholder="Search vibes..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-zed-green transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <nav className="flex items-center gap-4 lg:gap-6 overflow-x-auto no-scrollbar pb-1">
              <button 
                onClick={() => setActiveTab('home')}
                className={`text-[10px] lg:text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'home' ? 'text-zed-green border-b-2 border-zed-green pb-1' : 'text-white/40 hover:text-white'}`}
              >
                Music
              </button>
              <button 
                onClick={() => setActiveTab('discovery')}
                className={`text-[10px] lg:text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'discovery' ? 'text-zed-orange border-b-2 border-zed-orange pb-1' : 'text-white/40 hover:text-white'}`}
              >
                Discovery
              </button>
              <button 
                onClick={() => setActiveTab('ambitious')}
                className={`text-[10px] lg:text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === 'ambitious' ? 'text-zed-green border-b-2 border-zed-green pb-1' : 'text-white/40 hover:text-white'}`}
              >
                Ambitious
              </button>
              <button 
                onClick={() => setActiveTab('njebele')}
                className={`text-[10px] lg:text-sm font-bold uppercase tracking-widest transition-all flex items-center gap-2 whitespace-nowrap ${activeTab === 'njebele' ? 'text-zed-purple border-b-2 border-zed-purple pb-1' : 'text-white/40 hover:text-white'}`}
              >
                Njebele?
                <span className="w-1.5 h-1.5 bg-zed-purple rounded-full animate-pulse hidden sm:block" />
              </button>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`text-[10px] lg:text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap lg:hidden ${activeTab === 'profile' ? 'text-zed-orange border-b-2 border-zed-orange pb-1' : 'text-white/40 hover:text-white'}`}
              >
                Profile
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-3 lg:gap-6 ml-4">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-zed-green/10 border border-zed-green/20 rounded-full">
              <MapPin size={14} className="text-zed-green" />
              <span className="text-[10px] font-bold text-zed-green uppercase tracking-wider">{user.location}</span>
            </div>
            <button className="relative text-white/60 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-zed-orange rounded-full" />
            </button>
            <button 
              onClick={() => setActiveTab('profile')}
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border border-white/10 hover:border-zed-orange transition-all"
            >
              <img src={user.avatar} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-4 lg:px-8 pb-40 lg:pb-32 pt-4 custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
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
                <section className="mb-8 lg:mb-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative h-64 lg:h-80 rounded-2xl lg:rounded-3xl overflow-hidden group"
                  >
                    <img 
                      src="https://picsum.photos/seed/lusaka-vibe/1200/400" 
                      alt="Lusaka Vibes" 
                      className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 p-6 lg:p-12 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-2 lg:mb-4">
                        <span className="px-2 lg:px-3 py-1 bg-zed-green text-black text-[8px] lg:text-[10px] font-black rounded-full uppercase tracking-tighter">Trending in LSK</span>
                      </div>
                      <h2 className="text-3xl lg:text-6xl font-display font-black tracking-tighter mb-2 lg:mb-4 leading-none">
                        ZED GEN Z <br />
                        <span className="text-zed-green">SUMMER WAVE</span>
                      </h2>
                      <p className="text-white/70 max-w-lg mb-4 lg:mb-8 text-xs lg:text-sm line-clamp-2">
                        The ultimate collection of Lusaka's freshest sounds. From Amapiano to Zed-Beats, we've got the heartbeat of the city.
                      </p>
                      <div className="flex gap-3 lg:gap-4">
                        <button className="px-4 lg:px-8 py-2 lg:py-3 bg-white text-black text-xs lg:text-base font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                          <Zap size={16} fill="currentColor" />
                          PLAY
                        </button>
                        <button className="px-4 lg:px-8 py-2 lg:py-3 bg-white/10 backdrop-blur-md border border-white/20 text-xs lg:text-base font-bold rounded-full hover:bg-white/20 transition-all">
                          SAVE
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Quick Picks / Categories */}
                <section className="mb-8 lg:mb-12">
                  <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="text-zed-orange" size={18} />
                      <h3 className="text-lg lg:text-xl font-display font-bold">LSK Vibe Check</h3>
                    </div>
                    <button className="text-[10px] font-bold text-white/40 hover:text-zed-green uppercase tracking-widest">View All</button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                    {MOCK_SONGS.slice(0, 6).map((song) => (
                      <MusicCard 
                        key={song.id}
                        title={song.title}
                        subtitle={song.artist}
                        imageUrl={song.coverUrl}
                        type="song"
                        onPlay={() => handlePlaySong(song)}
                        onAddToQueue={() => handleAddToQueue(song)}
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
                    {MOCK_PLAYLISTS.slice(0, 3).map((playlist) => (
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
              </motion.div>
            )}

            {activeTab === 'njebele' && (
              <motion.div
                key="njebele"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="max-w-3xl mx-auto"
              >
                <NjebeleFeed posts={MOCK_NJEBELE_POSTS} />
              </motion.div>
            )}

            {activeTab === 'ambitious' && (
              <motion.div
                key="ambitious"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="max-w-6xl mx-auto pt-8"
              >
                <AmbitiousPlaylists playlists={MOCK_AMBITIOUS_PLAYLISTS} />
              </motion.div>
            )}

            {activeTab === 'discovery' && (
              <motion.div
                key="discovery"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="max-w-6xl mx-auto pt-8"
              >
                <DiscoverySection news={MOCK_NEWS} events={MOCK_EVENTS} />
              </motion.div>
            )}

            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="max-w-4xl mx-auto pt-8"
              >
                {/* Profile Header Card */}
                <div className="glass p-12 rounded-[40px] relative overflow-hidden mb-12">
                  <div className="absolute top-0 right-0 p-8">
                    <button 
                      onClick={() => setIsEditingProfile(true)}
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                    >
                      <Settings size={20} />
                    </button>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-zed-orange/20 shadow-2xl">
                      <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                        <h2 className="text-5xl font-display font-black tracking-tighter">{user.name}</h2>
                        <div className="px-3 py-1 bg-zed-orange text-black text-[10px] font-black rounded-full uppercase">PRO VIBER</div>
                      </div>
                      <p className="text-zed-orange font-bold mb-4">{user.handle}</p>
                      <p className="text-white/70 max-w-xl mb-6 text-lg leading-relaxed">{user.bio}</p>
                      
                      <div className="flex items-center justify-center md:justify-start gap-6 mb-8">
                        <div className="text-center md:text-left">
                          <p className="text-2xl font-black">{user.stats.followers}</p>
                          <p className="text-[10px] text-white/40 uppercase tracking-widest">Followers</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center md:text-left">
                          <p className="text-2xl font-black">{user.stats.following}</p>
                          <p className="text-[10px] text-white/40 uppercase tracking-widest">Following</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center md:text-left">
                          <p className="text-2xl font-black">{user.stats.playlists}</p>
                          <p className="text-[10px] text-white/40 uppercase tracking-widest">Playlists</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center md:justify-start gap-4">
                        {user.socials.instagram && (
                          <a href={`https://instagram.com/${user.socials.instagram}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zed-purple transition-all">
                            <Instagram size={18} />
                          </a>
                        )}
                        {user.socials.twitter && (
                          <a href={`https://twitter.com/${user.socials.twitter}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zed-purple transition-all">
                            <Twitter size={18} />
                          </a>
                        )}
                        {user.socials.tiktok && (
                          <a href={`https://tiktok.com/@${user.socials.tiktok}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-zed-purple transition-all">
                            <Globe size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* User's Playlists */}
                <div className="mb-12">
                  <h3 className="text-2xl font-display font-bold mb-8">Your Top Playlists</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MOCK_PLAYLISTS.slice(0, 3).map((playlist) => (
                      <MusicCard 
                        key={playlist.id}
                        title={playlist.name}
                        subtitle={`${playlist.songCount} Songs`}
                        imageUrl={playlist.coverUrl}
                        onPlay={() => handlePlaySong(MOCK_SONGS[0])} // Placeholder
                        onAddToQueue={() => handleAddToQueue(MOCK_SONGS[0])} // Placeholder
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Player Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:absolute">
          <Player 
            currentSong={currentSong} 
            onOpenNowPlaying={() => setIsNowPlayingOpen(true)}
            onOpenQueue={() => setIsQueueOpen(true)}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
          />
        </div>

        {/* Overlays */}
        <AnimatePresence>
          {isNowPlayingOpen && currentSong && (
            <NowPlaying 
              song={currentSong}
              isPlaying={isPlaying}
              onTogglePlay={() => setIsPlaying(!isPlaying)}
              onClose={() => setIsNowPlayingOpen(false)}
              progress={35}
            />
          )}
          {isQueueOpen && (
            <Queue 
              queue={queue}
              onReorder={handleReorderQueue}
              onRemove={handleRemoveFromQueue}
              onPlay={handlePlaySong}
              onClose={() => setIsQueueOpen(false)}
            />
          )}
          {isEditingProfile && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <ProfileSettings 
                user={user} 
                onSave={handleSaveProfile} 
                onClose={() => setIsEditingProfile(false)} 
              />
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
