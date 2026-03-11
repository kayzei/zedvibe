export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
  category: 'Trending' | 'Amapiano' | 'Zed-Beats' | 'Kalindula-Fusion' | 'Classic' | 'Contemporary';
  lyrics?: string;
}

export interface NjebelePost {
  id: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  type: 'text' | 'voice';
  song?: Song;
  timestamp: string;
  likes: number;
  comments: number;
}

export interface UserProfile {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  location: string;
  socials: {
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  };
  stats: {
    followers: number;
    following: number;
    playlists: number;
  };
}

export interface AmbitiousPlaylist {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  goal: string;
  curator: string;
  songCount: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  category: 'News' | 'Interview' | 'Event';
}

export interface ZedEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  imageUrl: string;
  price: string;
}

export const MOCK_AMBITIOUS_PLAYLISTS: AmbitiousPlaylist[] = [
  {
    id: 'ap1',
    title: 'Side Hustle Energy',
    description: 'The ultimate soundtrack for the LSK entrepreneurs. Turn that vision into reality.',
    coverUrl: 'https://picsum.photos/seed/hustle/400/400',
    goal: 'Entrepreneurship',
    curator: 'ZedVibe Team',
    songCount: 24
  },
  {
    id: 'ap2',
    title: 'Exam Season Focus',
    description: 'Deep focus beats for UNZA and CBU students. Crush those finals.',
    coverUrl: 'https://picsum.photos/seed/study/400/400',
    goal: 'Academic Success',
    curator: 'StudyWithMe ZM',
    songCount: 45
  },
  {
    id: 'ap3',
    title: 'LSK Night Run',
    description: 'High-tempo Zed-Beats to keep you moving through the city streets.',
    coverUrl: 'https://picsum.photos/seed/run/400/400',
    goal: 'Fitness',
    curator: 'Lusaka Fitness Club',
    songCount: 18
  }
];

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: 'n1',
    title: 'Chef 187 Announces World Tour',
    summary: 'The lyrical Joe Solo is taking the Zambian sound to London, New York, and beyond.',
    imageUrl: 'https://picsum.photos/seed/chef-news/600/400',
    date: 'March 10, 2026',
    category: 'News'
  },
  {
    id: 'n2',
    title: 'Exclusive: Yo Maps on His New Album',
    summary: "We sit down with the hitmaker to discuss the inspiration behind 'Komando 2'.",
    imageUrl: 'https://picsum.photos/seed/yomaps-int/600/400',
    date: 'March 08, 2026',
    category: 'Interview'
  }
];

export const MOCK_EVENTS: ZedEvent[] = [
  {
    id: 'e1',
    name: 'LSK Summer Fest 2026',
    date: 'March 25, 2026',
    location: 'Manda Hill Rooftop',
    imageUrl: 'https://picsum.photos/seed/fest1/400/300',
    price: 'K250'
  },
  {
    id: 'e2',
    name: 'Copperbelt Vibes Live',
    date: 'April 02, 2026',
    location: 'Woodlands Stadium',
    imageUrl: 'https://picsum.photos/seed/fest2/400/300',
    price: 'K150'
  }
];

export const MOCK_USER: UserProfile = {
  name: 'Lsk Vibe King',
  handle: '@vibe_king_zm',
  avatar: 'https://picsum.photos/seed/myavatar/200/200',
  bio: 'Just a Lusaka boy living for the Zed-Beats. 🇿🇲 Catch me at Manda Hill every weekend! 🎧',
  location: 'Lusaka, Zambia',
  socials: {
    instagram: 'vibe_king_lsk',
    twitter: 'vibe_king_zm',
    tiktok: 'vibe_king_tiktok'
  },
  stats: {
    followers: 1240,
    following: 450,
    playlists: 12
  }
};

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverUrl: string;
  songCount: number;
  songs?: Song[];
}

export const MOCK_SONGS: Song[] = [
  // Lusaka Street Anthems
  { 
    id: 'l1', 
    title: 'Akapuba', 
    artist: 'Chef 187', 
    album: 'Bon Appetit', 
    duration: '3:45', 
    coverUrl: 'https://picsum.photos/seed/chef/400/400', 
    category: 'Contemporary',
    lyrics: "[Verse 1]\nLusaka city lights, we shining bright\nChef in the building, keeping it tight\nFrom Kopala to LSK, we run the game\nEverywhere I go, they know the name\nI'm the Joe Solo, lyrical master\nFlowing so fast, moving even faster\nZed-Beats in my soul, rhythm in my feet\nBringing the fire, turning up the heat\n\n[Chorus]\nAkapuba, we don't play that\nReal vibes only, can you say that?\nZambian pride, we rising high\nTouching the stars, reaching the sky\nAkapuba, the city is ours\nUnder the moon and under the stars\nLSK energy, never gonna fade\nThis is the path that we have made\n\n[Verse 2]\nWalking down Cairo Road, feeling the vibe\nMy people, my culture, keeping it alive\nFrom the markets to the malls, the music plays\nGuiding us through the nights and the days\nWe dream big, we aim for the top\nOnce we start going, we never gonna stop\nAmbitious and bold, that's how we roll\nZambian spirit, heart and soul"
  },
  { 
    id: 'l2', 
    title: 'Lituation', 
    artist: 'Slapdee', 
    album: 'Mother Tongue', 
    duration: '4:12', 
    coverUrl: 'https://picsum.photos/seed/slap/400/400', 
    category: 'Contemporary',
    lyrics: "[Intro]\nXYZ, you already know\nKing Dizzo on the flow\n\n[Verse 1]\nIt's a lituation, every time we drop\nNon-stop energy, we never gonna stop\nFrom the streets to the penthouse, we made it\nEvery hater out there, they just faded"
  },
  { 
    id: 'l3', 
    title: 'Nshakubebe', 
    artist: 'Yo Maps', 
    album: 'Komando', 
    duration: '3:20', 
    coverUrl: 'https://picsum.photos/seed/yomaps/400/400', 
    category: 'Contemporary',
    lyrics: "[Chorus]\nNshakubebe, my love is true\nEverything I do, I do it for you\nFrom LSK to the world, we vibe\nKeeping the Zambian dream alive"
  },
  { id: 'l4', title: 'The Way You Are', artist: 'Macky 2', album: 'Olijaba', duration: '3:55', coverUrl: 'https://picsum.photos/seed/macky/400/400', category: 'Contemporary' },
  
  // Copperbelt Classics Remix
  { id: 'c1', title: 'Common Man (Remix)', artist: 'PK Chishala', album: 'Legends Never Die', duration: '5:10', coverUrl: 'https://picsum.photos/seed/pk/400/400', category: 'Classic' },
  { id: 'c2', title: 'Walilowelela', artist: 'Mampi', album: 'Natural Born Star', duration: '3:40', coverUrl: 'https://picsum.photos/seed/mampi/400/400', category: 'Contemporary' },
  { id: 'c3', title: 'Nshingini', artist: 'Amayenge', album: 'Greatest Hits', duration: '4:25', coverUrl: 'https://picsum.photos/seed/amayenge/400/400', category: 'Classic' },
  
  // Gen Z Zambia Chill
  { id: 'z1', title: 'Falling', artist: 'Natasha Chansa', album: 'Genesis', duration: '3:15', coverUrl: 'https://picsum.photos/seed/natasha/400/400', category: 'Contemporary' },
  { id: 'z2', title: 'Slow Down', artist: 'Killa', album: 'Killa Vibe', duration: '3:30', coverUrl: 'https://picsum.photos/seed/killa/400/400', category: 'Contemporary' },
  { id: 'z3', title: 'Energy', artist: 'Sampa the Great', album: 'As Above, So Below', duration: '4:05', coverUrl: 'https://picsum.photos/seed/sampa/400/400', category: 'Contemporary' },
];

export const MOCK_NJEBELE_POSTS: NjebelePost[] = [
  {
    id: 'n1',
    user: { name: 'Mutale', handle: '@mutale_vibe', avatar: 'https://picsum.photos/seed/user1/100/100' },
    content: "Yo, have you heard this new Chef 187 track? The bars are insane! 🇿🇲🔥",
    type: 'text',
    song: MOCK_SONGS[0],
    timestamp: '2h ago',
    likes: 124,
    comments: 12
  },
  {
    id: 'n2',
    user: { name: 'Bwalya', handle: '@bwalya_beats', avatar: 'https://picsum.photos/seed/user2/100/100' },
    content: "Check out this voice note on why Sampa the Great is the GOAT.",
    type: 'voice',
    song: MOCK_SONGS[9],
    timestamp: '5h ago',
    likes: 89,
    comments: 4
  },
  {
    id: 'n3',
    user: { name: 'Chanda', handle: '@chanda_lsk', avatar: 'https://picsum.photos/seed/user3/100/100' },
    content: "Independence Day vibes starting early! Tiyende Pamodzi on repeat.",
    type: 'text',
    song: { id: 'i1', title: 'Tiyende Pamodzi', artist: 'Kenneth Kaunda', album: 'Heritage', duration: '2:50', coverUrl: 'https://picsum.photos/seed/kk/400/400', category: 'Classic' },
    timestamp: '1d ago',
    likes: 256,
    comments: 45
  }
];

export const MOCK_PLAYLISTS: Playlist[] = [
  {
    id: 'p1',
    name: 'Lusaka Street Anthems',
    description: 'The heartbeat of LSK. High energy urban bangers.',
    coverUrl: 'https://picsum.photos/seed/lsk_street/400/400',
    songCount: 12,
  },
  {
    id: 'p2',
    name: 'Copperbelt Classics Remix',
    description: 'Old school Kalindula meets modern Zed-Beats.',
    coverUrl: 'https://picsum.photos/seed/cb_remix/400/400',
    songCount: 10,
  },
  {
    id: 'p3',
    name: 'Gen Z Zambia Chill',
    description: 'Smooth R&B and Lo-fi vibes for the youth.',
    coverUrl: 'https://picsum.photos/seed/zed_chill/400/400',
    songCount: 15,
  },
  {
    id: 'p4',
    name: 'Zambian Independence Day Hits',
    description: 'Patriotic anthems and uplifting sounds of freedom.',
    coverUrl: 'https://picsum.photos/seed/independence/400/400',
    songCount: 10,
  },
  {
    id: 'p5',
    name: 'Future Sounds of Zambia',
    description: 'Experimental Afro-fusion and the new wave of Zed music.',
    coverUrl: 'https://picsum.photos/seed/future_zed/400/400',
    songCount: 12,
  },
];

export const MOCK_ARTISTS: Artist[] = [
  { id: 'a1', name: 'Chef 187', genre: 'Zed-Beats', imageUrl: 'https://picsum.photos/seed/chef_art/400/400', followers: '1.5M' },
  { id: 'a2', name: 'Sampa the Great', genre: 'Afro-Fusion', imageUrl: 'https://picsum.photos/seed/sampa_art/400/400', followers: '2.1M' },
  { id: 'a3', name: 'Yo Maps', genre: 'Zed-Beats', imageUrl: 'https://picsum.photos/seed/yomaps_art/400/400', followers: '1.8M' },
  { id: 'a4', name: 'Mampi', genre: 'R&B/Dancehall', imageUrl: 'https://picsum.photos/seed/mampi_art/400/400', followers: '900K' },
  { id: 'a5', name: 'PK Chishala', genre: 'Kalindula', imageUrl: 'https://picsum.photos/seed/pk_art/400/400', followers: 'Legacy' },
];

export interface Artist {
  id: string;
  name: string;
  genre: string;
  imageUrl: string;
  followers: string;
}
