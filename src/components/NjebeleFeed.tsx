import React from 'react';
import { MessageSquare, Heart, Share2, Mic, Play, MoreHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { NjebelePost } from '../data/mockData';

export const NjebeleFeed = ({ posts }: { posts: NjebelePost[] }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 lg:mb-8 gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-display font-black tracking-tighter">NJEBELE?</h2>
          <p className="text-xs lg:text-sm text-white/40 font-medium uppercase tracking-widest">Did you hear the latest vibes?</p>
        </div>
        <button className="w-full sm:w-auto px-6 py-2 zed-gradient text-black font-bold rounded-full text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2">
          <Mic size={16} fill="currentColor" />
          POST VIBE
        </button>
      </div>

      <div className="grid gap-4 lg:gap-6">
        {posts.map((post) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-4 lg:p-6 rounded-2xl lg:rounded-3xl border border-white/5 hover:border-white/10 transition-all group"
          >
            <div className="flex gap-3 lg:gap-4">
              <img 
                src={post.user.avatar} 
                alt={post.user.name} 
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-zed-purple/20 flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span className="font-bold text-xs lg:text-sm truncate">{post.user.name}</span>
                    <span className="text-[10px] lg:text-xs text-white/40 truncate">{post.user.handle}</span>
                    <span className="text-[8px] lg:text-[10px] text-white/20 whitespace-nowrap">• {post.timestamp}</span>
                  </div>
                  <button className="text-white/20 hover:text-white transition-colors flex-shrink-0">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
                
                <p className="text-xs lg:text-sm text-white/80 mb-4 leading-relaxed">{post.content}</p>

                {post.type === 'voice' && (
                  <div className="mb-4 p-3 bg-zed-purple/10 border border-zed-purple/20 rounded-2xl flex items-center gap-4">
                    <button className="w-8 h-8 rounded-full bg-zed-purple flex items-center justify-center text-white">
                      <Play size={14} fill="currentColor" />
                    </button>
                    <div className="flex-1 h-8 flex items-center gap-1">
                      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => (
                        <div key={i} className="flex-1 bg-zed-purple/40 rounded-full" style={{ height: `${Math.random() * 100}%` }} />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-zed-purple">0:12</span>
                  </div>
                )}

                {post.song && (
                  <div className="mb-4 p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 group/song cursor-pointer hover:bg-white/10 transition-all">
                    <img src={post.song.coverUrl} alt={post.song.title} className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold truncate group-hover/song:text-zed-green transition-colors">{post.song.title}</h4>
                      <p className="text-[10px] text-white/40 truncate">{post.song.artist}</p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover/song:opacity-100 transition-all">
                      <Play size={14} fill="currentColor" />
                    </button>
                  </div>
                )}

                <div className="flex items-center gap-8">
                  <button className="flex items-center gap-2 text-white/40 hover:text-zed-green transition-colors">
                    <Heart size={16} />
                    <span className="text-xs font-medium">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/40 hover:text-zed-purple transition-colors">
                    <MessageSquare size={16} />
                    <span className="text-xs font-medium">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/40 hover:text-zed-orange transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
