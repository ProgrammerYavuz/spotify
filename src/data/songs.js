const songs = [
    {
        id: 1,
        title: 'Hot Hits Türkiye',
        artist: 'UZI',
        description: 'Dinlemekten vazgeçemediklerin ve en yeni hitler.',
        image: 'https://i.scdn.co/image/ab67706f0000000255fa5fde4b35f9bef257c728',
        type: 'album',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/01%20Maps.mp3'
    },
    {
        id: 2,
        title: 'Türkçe Pop',
        artist: 'Hande Yener',
        description: 'Türkiye\'nin en büyük pop listesi.',
        image: 'https://i.scdn.co/image/ab67706f00000002c02a1f6eea474c840f7c8272',
        type: 'album',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/01%20Rude.mp3'
    },
    {
        id: 3,
        title: 'Ece Mumay',
        artist: 'Ece Mumay',
        description: 'Sanatçı',
        image: 'https://i.scdn.co/image/ab67616100005174c36d9cb866b77352b2ebcaf2',
        type: 'artist',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/01.Love%20Me%20Like%20You%20Do-From%2050%20Shades%20of%20Grey.mp3'
    },
    {
        id: 4,
        title: 'Ara',
        artist: 'Zeynep Bastık',
        description: 'Zeynep Bastık',
        image: 'https://i.scdn.co/image/ab67616d00001e0293b5dbed900db2b66d8b8ad4',
        type: 'music',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/02%20-%20Oh%20Star.mp3'
    },
    {
        id: 5,
        title: 'New Music Friday Türkiye',
        artist: 'Murat Boz',
        description: 'Haftanın en iyi yeni çıkışları.',
        image: 'https://i.scdn.co/image/ab67706f0000000257ec7936becefe40400447c0',
        type: 'album',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/02%20Animals.mp3'
    },
    {
        id: 6,
        title: 'Kendine İyi Davran',
        artist: 'Beyhan Budak',
        description: 'Beyhan Budak',
        image: 'https://i.scdn.co/image/f89f57c94d5c3754bbdd982c77271294efc89873',
        type: 'podcast',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/03%20Stay%20With%20Me.mp3'
    },
    {
        id: 7,
        title: 'Hadise',
        artist: 'Hadise',
        description: 'Sanatçı',
        image: 'https://i.scdn.co/image/ab676161000051749c3944f3583f15454ef4267b',
        type: 'artist',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/03-paramore-hallelujah.mp3'
    },
    {
        id: 8,
        title: 'Mekan',
        artist: 'ElMusto',
        description: 'Müdavimiyiz 🔊',
        image: 'https://i.scdn.co/image/ab67706f00000002f22c35fcd42ab8156aeebad5',
        type: 'album',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/04%20-%20Maroon%205%20-%20She%20Will%20Be%20Loved.mp3'
    },
    {
        id: 9,
        title: 'Inspirational Speeches by Billionaires.',
        artist: 'Elon Musk, Jeff bezos',
        description: 'Clumsy Entrepreneur',
        image: 'https://i.scdn.co/image/ab67656300005f1f47e7a0a950a7cd1051344433',
        type: 'podcast',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/04%20The%20Man%20Who%20Can%27t%20Be%20Moved.mp3'
    },
    {
        id: 10,
        title: 'Anadolu Rock',
        artist: 'Barış Manço',
        description: 'Efsanelerin yorumlarıyla saykedelik rock. Kapak: Erkin Koray',
        image: 'https://i.scdn.co/image/ab67706f00000002d9c35bb892a28bc6dbb2da17',
        type: 'album',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/05%20-%20Im%20Not%20The%20Only%20One.mp3'
    },
    {
        id: 11,
        title: 'Sagopa Kajmer',
        artist: 'Sagopa Kajmer',
        description: 'Sanatçı',
        image: 'https://i.scdn.co/image/ab676161000051746eb76d24f4d5055fbf2642c3',
        type: 'artist',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/05%20Breakeven.mp3'
    },
    {
        id: 12,
        title: 'Yabancı Pop',
        artist: 'Katy Perry',
        description: 'Hit pop trendleri. Kapak: Doja Cat',
        image: 'https://i.scdn.co/image/ab67706f00000002b800bf1ae49a8a437106f949',
        type: 'album',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/05%20Sugar.mp3'
    },
    {
        id: 13,
        title: 'Antidepresan',
        artist: 'Mert Demir, Mabel Matiz',
        description: 'Mert Demir, Mabel Matiz',
        image: 'https://i.scdn.co/image/ab67616d00001e026a4753885f8de374c6ff1240',
        type: 'music',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/06%20Dark%20Horse%20%28feat.%20Juicy%20J%29.mp3'
    },
    {
        id: 14,
        title: 'MIDDLE OF THE NIGHT',
        artist: 'Elley Duhé',
        description: 'Elley Duhé',
        image: 'https://i.scdn.co/image/ab67616d00001e0253a2e11c1bde700722fecd2e',
        type: 'music',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/07-bruno_mars-talking_to_the_moon.mp3'
    },
    {
        id: 15,
        title: 'trend 2023',
        artist: 'Spotify',
        description: 'internette olan biten📱',
        image: 'https://i.scdn.co/image/ab67706f00000002cc0636b16f853a0dbc03bfad',
        type: 'album',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/08%20-%20Looking%20Up.mp3'
    },
    {
        id: 16,
        title: 'Mabel Matiz - Speed up',
        artist: 'Mabel Matiz',
        description: 'Speed up',
        image: 'https://i.scdn.co/image/ab67616d00001e02673669edc4c83a8ed2e2b20d',
        type: 'album',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/11%20Lips%20Are%20Movin.mp3'
    },
    {
        id: 17,
        title: 'Atlantis',
        artist: 'Güneş',
        description: 'Güneş',
        image: 'https://i.scdn.co/image/ab67616d00001e020b7d0994384ac182c76bcb05',
        type: 'music',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/5%20Seconds%20Of%20Summer%20-%20Don%27t%20Stop.mp3'
    },
    {
        id: 18,
        title: 'Nimet',
        artist: 'Didomido, Eglo G',
        description: 'Didomido, Eglo G',
        image: 'https://i.scdn.co/image/ab67616d00001e026f73e299b7cf9f184be66e02',
        type: 'music',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/Ariana%20Grande%20-%20Break%20Free%20feat.%20Zedd.mp3'
    },
    {
        id: 19,
        title: 'Slow Pop',
        artist: 'Spotify',
        description: 'En sevdiğin slow şarkılar.',
        image: 'https://i.scdn.co/image/ab67706f00000002f0f81215a22b7c988992c209',
        type: 'album',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/Shawn%20Mendes%20-%20Stitches%20%28Official%20Video%29.mp3'
    },
    {
        id: 20,
        title: 'Hit Dans',
        artist: 'Spotify',
        description: 'En hit dans parçaları. Kapak: Peggy Gou',
        image: 'https://i.scdn.co/image/ab67706f000000025b1d028a95739ce1b39dc11a',
        type: 'album',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/Silento%20-%20Watch%20Me.mp3'
    },
    {
        id: 21,
        title: 'Norm Ender',
        artist: 'Norm Ender',
        description: 'Sanatçı',
        image: 'https://i.scdn.co/image/ab6761610000517469143c2e64391ed468969c36',
        type: 'artist',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/The%20Script%20-%20Superheroes.mp3'
    },
    {
        id: 22,
        title: 'Ceza',
        artist: 'Ceza',
        description: 'Oluşturan: Spotify',
        image: 'https://thisis-images.scdn.co/37i9dQZF1DZ06evO1dsssu-default.jpg',
        type: 'album',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/The%20Chainsmokers%20-%20Roses%20ft.%20ROZES.mp3'
    },
    {
        id: 23,
        title: 'TED Talks Daily',
        artist: 'TED',
        description: 'TED',
        image: 'https://i.scdn.co/image/e048b26a93dc026381ab0107e6c01e4e3417b14a',
        type: 'podcast',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/The%20Vamps%20-%20Another%20World%20%28Lyrics%29.mp3'
    },
    {
        id: 24,
        title: 'Pop Goes Classical',
        artist: 'Spotify',
        description: 'Your favorite pop songs, classically reimagined.',
        image: 'https://i.scdn.co/image/ab67706f00000002a3ec66c3103d1aea84672888',
        type: 'album',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/The%20Vamps%20-%20Dangerous%20%28Lyrics%29.mp3'
    },
    {
        id: 25,
        title: 'Soundtracked',
        artist: 'Spotify',
        description: 'The latest, greatest soundtracks from the big and small screen.',
        image: 'https://i.scdn.co/image/ab67706f0000000261f5fd08bdb2b490fc3b71ac',
        type: 'album',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/The%20Vamps%20-%20Last%20Night.mp3'
    },
    {
        id: 26,
        title: 'Hip Hop Mix',
        artist: 'MERO, Şehinşah',
        description: 'Oluşturan: Spotify',
        image: 'https://seed-mix-image.spotifycdn.com/v6/img/hip_hop/5wyWp867LWGjFmYZXVSFnZ/tr/default',
        type: 'album',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/The%20Vamps%20-%20Million%20Words%202015.mp3'
    },
    {
        id: 27,
        title: 'BBC Earth Podcast',
        artist: 'BBC Earth',
        description: 'BBC Earth Podcast',
        image: 'https://i.scdn.co/image/ab67656300005f1f3ba5282b80db09a9f012b3e7',
        type: 'podcast',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/The%20Vamps%20-%20Rest%20Your%20Love.mp3'
    },
    {
        id: 28,
        title: 'Billie Eilish',
        artist: 'Billie Eilish',
        description: 'Sanatçı',
        image: 'https://i.scdn.co/image/ab67616100005174d8b9980db67272cb4d2c3daf',
        type: 'artist',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/The%20Vamps%20-%20Risk%20It%20All%20%28with%20Lyrics%29.mp3'
    },
    {
        id: 29,
        title: 'En Çok Dinlenen Şarkılar - Global',
        artist: 'Spotify',
        description: 'Şu anda global de en çok çalınan parçalar.',
        image: 'https://charts-images.scdn.co/assets_generated/locale_tr/regional/weekly/region_global_default.jpg',
        type: 'album',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/The%20Vamps%20-%20She%20Was%20The%20One%20%28Lyrics%29.mp3'
    },
    {
        id: 30,
        title: 'Sesli Uzay Belgeseli',
        artist: 'Uzayın Sesi',
        description: 'Uzayın Sesi',
        image: 'https://i.scdn.co/image/44e8c77a6c9485582f8fa7dcd394e9e17732daeb',
        type: 'podcast',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/The%20Vamps%20-%20Shout%20About%20It%20Lyrics.mp3'
    },
    {
        id: 31,
        title: 'my life is a movie',
        artist: 'Spotify',
        description: 'every main character needs their soundtrack ',
        image: 'https://i.scdn.co/image/ab67706f00000002b51408ba75d5d1044990be28',
        type: 'album',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/The%20Vamps%20-%20Somebody%20To%20You%20%28with%20Lyrics%29.mp3'
    },
    {
        id: 32,
        title: 'Dua Lipa',
        artist: 'Dua Lipa',
        description: 'Sanatçı',
        image: 'https://i.scdn.co/image/ab67616100005174d42a27db3286b58553da8858',
        type: 'artist',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/The%20Weeknd%20-%20In%20The%20Night%20%28Audio%29.mp3'
    },
    {
        id: 33,
        title: 'Motivation Mix',
        artist: 'Spotify',
        description: 'Uplifting and energetic music that helps you stay motivated.',
        image: 'https://i.scdn.co/image/ab67706f000000025f2635e031078672e7b384a5',
        type: 'album',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/Twayne%20-%20Nasty%20Freestyle%20%281%29.mp3'
    },
    {
        id: 34,
        title: 'S&M',
        artist: 'Rihanna',
        description: 'Rihanna',
        image: 'https://i.scdn.co/image/ab67616d00001e0231548865f7c729290b96c794',
        type: 'music',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/Usher%20Ft.%20Juicy%20J%20%E2%80%93%20I%20Dont%20Mind.mp3'
    },
    {
        id: 35,
        title: 'Hayatım Kaymış',
        artist: 'Melek Mosso',
        description: 'Melek Mosso',
        image: 'https://i.scdn.co/image/ab67616d00001e02750cc07bedaa75b443180380',
        type: 'music',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/Wiz%20Khalifa%20-%20See%20You%20Again%20ft.%20.mp3'
    },
    {
        id: 36,
        title: 'Oğuzhan Koç',
        artist: 'Oğuzhan Koç',
        description: 'Sanatçı',
        image: 'https://i.scdn.co/image/ab67616100005174192457caabfcbc1fcd180bb9',
        type: 'artist',
        src: 'https://ia801900.us.archive.org/19/items/randommusic2016_201610/Young_Wild_Free_Lyrics_-_Wiz_Khalifa_feat._Snoop_Dogg.mp3'
    },
    {
        id: 37,
        title: 'Bonita',
        artist: 'Sefo, Reynmen',
        description: 'Sefo, Reynmen',
        image: 'https://i.scdn.co/image/ab67616d00001e0211280ada3984a5baf05e91f7',
        type: 'music',
        src: 'https://ia601900.us.archive.org/19/items/randommusic2016_201610/ZAYN%20-%20PILLOWTALK.mp3'
    },
]

export default songs