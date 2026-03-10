import React from 'react';
import { Home, Search, Library, PlusSquare, Heart, Music2, Radio, Users, Calendar } from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-black flex flex-col border-r border-white/5 p-6 space-y-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 zed-gradient rounded-lg flex items-center justify-center">
          <Music2 className="text-black" size={24} />
        </div>
        <h1 className="text-2xl font-display font-bold tracking-tighter">ZEDVIBE</h1>
      </div>

      <nav className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest px-2">Menu</p>
          <NavItem icon={<Home size={20} />} label="Home" active />
          <NavItem icon={<Search size={20} />} label="Search" />
          <NavItem icon={<Library size={20} />} label="Your Library" />
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest px-2">Discover</p>
          <NavItem icon={<Radio size={20} />} label="Live Radio" />
          <NavItem icon={<Users size={20} />} label="Artists" />
          <NavItem icon={<Calendar size={20} />} label="LSK Events" />
        </div>

        <div className="space-y-3 pt-4">
          <NavItem icon={<PlusSquare size={20} />} label="Create Playlist" />
          <NavItem icon={<Heart size={20} />} label="Liked Songs" />
        </div>
      </nav>

      <div className="mt-auto">
        <div className="p-4 rounded-xl bg-zed-green/10 border border-zed-green/20">
          <p className="text-xs font-bold text-zed-green uppercase mb-1">Go Premium</p>
          <p className="text-[10px] text-white/60 leading-tight mb-3">Support local artists and get offline vibes.</p>
          <button className="w-full py-2 bg-zed-green text-black text-xs font-bold rounded-lg hover:scale-105 transition-transform">
            UPGRADE
          </button>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) => (
  <button className={`flex items-center gap-4 w-full px-2 py-2 rounded-lg transition-all group ${active ? 'text-zed-green bg-white/5' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
    <span className={`${active ? 'text-zed-green' : 'group-hover:text-zed-green transition-colors'}`}>
      {icon}
    </span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);
