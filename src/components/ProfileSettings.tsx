import React, { useState } from 'react';
import { Camera, Instagram, Twitter, Music2, MapPin, Save, X, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { UserProfile } from '../data/mockData';

interface ProfileSettingsProps {
  user: UserProfile;
  onSave: (updatedUser: UserProfile) => void;
  onClose: () => void;
}

export const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user, onSave, onClose }) => {
  const [formData, setFormData] = useState<UserProfile>({ ...user });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('socials.')) {
      const socialKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        socials: { ...prev.socials, [socialKey]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="glass p-6 lg:p-8 rounded-2xl lg:rounded-3xl w-full max-w-2xl border border-white/10 shadow-2xl relative overflow-y-auto max-h-[90vh] custom-scrollbar"
    >
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-zed-green/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-zed-purple/10 blur-3xl rounded-full" />

      <div className="flex items-center justify-between mb-6 lg:mb-8 relative z-10">
        <h2 className="text-2xl lg:text-3xl font-display font-black tracking-tighter">EDIT PROFILE</h2>
        <button onClick={onClose} className="p-2 text-white/40 hover:text-white transition-colors">
          <X size={24} />
        </button>
      </div>

      <div className="space-y-6 lg:space-y-8 relative z-10">
        {/* Avatar Upload */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="relative group cursor-pointer flex-shrink-0">
            <img 
              src={formData.avatar} 
              alt="Avatar" 
              className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-zed-green/20 group-hover:brightness-50 transition-all"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="text-white" size={20} lg:size={24} />
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-base lg:text-lg truncate">{formData.name}</h3>
            <p className="text-xs lg:text-sm text-white/40 truncate">{formData.handle}</p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Display Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 lg:py-3 px-4 text-sm focus:outline-none focus:border-zed-green transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Bio</label>
            <textarea 
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 lg:py-3 px-4 text-sm focus:outline-none focus:border-zed-green transition-colors resize-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/40 uppercase tracking-widest">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 lg:py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-zed-green transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-zed-purple uppercase tracking-widest">Social Connections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input 
                type="text" 
                name="socials.instagram"
                placeholder="Instagram handle"
                value={formData.socials.instagram}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 lg:py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-zed-purple transition-colors"
              />
            </div>
            <div className="relative">
              <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input 
                type="text" 
                name="socials.twitter"
                placeholder="Twitter handle"
                value={formData.socials.twitter}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 lg:py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-zed-purple transition-colors"
              />
            </div>
            <div className="relative md:col-span-2">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
              <input 
                type="text" 
                name="socials.tiktok"
                placeholder="TikTok handle"
                value={formData.socials.tiktok}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 lg:py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-zed-purple transition-colors"
              />
            </div>
          </div>
        </div>

        <button 
          onClick={() => onSave(formData)}
          className="w-full py-3 lg:py-4 zed-gradient text-black font-black rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-lg"
        >
          <Save size={18} lg:size={20} />
          SAVE CHANGES
        </button>
      </div>
    </motion.div>
  );
};
