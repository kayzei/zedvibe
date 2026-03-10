export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
  category: 'Trending' | 'Amapiano' | 'Zed-Beats' | 'Kalindula-Fusion' | 'Classic' | 'Contemporary';
}

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
  { id: 'l1', title: 'Akapuba', artist: 'Chef 187', album: 'Bon Appetit', duration: '3:45', coverUrl: 'https://picsum.photos/seed/chef/400/400', category: 'Contemporary' },
  { id: 'l2', title: 'Lituation', artist: 'Slapdee', album: 'Mother Tongue', duration: '4:12', coverUrl: 'https://picsum.photos/seed/slap/400/400', category: 'Contemporary' },
  { id: 'l3', title: 'Nshakubebe', artist: 'Yo Maps', album: 'Komando', duration: '3:20', coverUrl: 'https://picsum.photos/seed/yomaps/400/400', category: 'Contemporary' },
  { id: 'l4', title: 'The Way You Are', artist: 'Macky 2', album: 'Olijaba', duration: '3:55', coverUrl: 'https://picsum.photos/seed/macky/400/400', category: 'Contemporary' },
  
  // Copperbelt Classics Remix
  { id: 'c1', title: 'Common Man (Remix)', artist: 'PK Chishala', album: 'Legends Never Die', duration: '5:10', coverUrl: 'https://picsum.photos/seed/pk/400/400', category: 'Classic' },
  { id: 'c2', title: 'Walilowelela', artist: 'Mampi', album: 'Natural Born Star', duration: '3:40', coverUrl: 'https://picsum.photos/seed/mampi/400/400', category: 'Contemporary' },
  { id: 'c3', title: 'Nshingini', artist: 'Amayenge', album: 'Greatest Hits', duration: '4:25', coverUrl: 'https://picsum.photos/seed/amayenge/400/400', category: 'Classic' },
  
  // Gen Z Zambia Chill
  { id: 'z1', title: 'Falling', artist: 'Natasha Chansa', album: 'Genesis', duration: '3:15', coverUrl: 'https://picsum.photos/seed/natasha/400/400', category: 'Contemporary' },
  { id: 'z2', title: 'Slow Down', artist: 'Killa', album: 'Killa Vibe', duration: '3:30', coverUrl: 'https://picsum.photos/seed/killa/400/400', category: 'Contemporary' },
  { id: 'z3', title: 'Energy', artist: 'Sampa the Great', album: 'As Above, So Below', duration: '4:05', coverUrl: 'https://picsum.photos/seed/sampa/400/400', category: 'Contemporary' },
  
  // Independence Day Hits
  { id: 'i1', title: 'Tiyende Pamodzi', artist: 'Kenneth Kaunda', album: 'Heritage', duration: '2:50', coverUrl: 'https://picsum.photos/seed/kk/400/400', category: 'Classic' },
  { id: 'i2', title: 'I Am Zambian', artist: 'B-Flow', album: 'Dear Mama', duration: '3:45', coverUrl: 'https://picsum.photos/seed/bflow/400/400', category: 'Contemporary' },
  
  // Future Sounds
  { id: 'f1', title: 'Final Form', artist: 'Sampa the Great', album: 'The Return', duration: '3:35', coverUrl: 'https://picsum.photos/seed/sampa2/400/400', category: 'Contemporary' },
  { id: 'f2', title: 'New Era', artist: 'Towela Kaira', album: 'Single', duration: '3:20', coverUrl: 'https://picsum.photos/seed/towela/400/400', category: 'Contemporary' },
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
