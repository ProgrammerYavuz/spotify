import Section from "components/Section"

function Home() {

    const items = [
        {
            id: 1,
            title: 'Hot Hits Türkiye',
            artist: 'Simge',
            description: 'Dinlemekten vazgeçemediklerin ve en yeni hitler.',
            image: 'https://i.scdn.co/image/ab67706f000000021d82386c5de66c466b196cab',
            type: 'album',
            src: 'https://cdn.freesound.org/previews/691/691371_1648170-lq.mp3'
        },
        {
            id: 2,
            title: 'Barış Özcan ile 111 Hz',
            artist: 'Barış Özcan',
            description: 'Podbee Media',
            image: 'https://i.scdn.co/image/ab67656300005f1f15dbc1cba8d088bfbba170c1',
            type: 'podcast',
            src: 'https://cdn.freesound.org/previews/691/691368_5187472-lq.mp3'
        },
        {
            id: 3,
            title: 'Mutlu Türkçe Şarkılar',
            artist: 'Zeynep Bastık',
            description: 'Neşeli Türkçe parçalarla moral depola.',
            image: 'https://i.scdn.co/image/ab67706f0000000213b02cb40de808358718f778',
            type: 'album',
            src: 'https://cdn.freesound.org/previews/691/691033_15055509-lq.mp3'
        },
        {
            id: 4,
            title: 'Hafif Müzik',
            artist: 'Athena',
            description: 'Arkada çalmalık Türkçe şarkılar.',
            image: 'https://i.scdn.co/image/ab67706f00000002f14d57d5c34d57a9ed4e5ad8',
            type: 'album',
            src: 'https://cdn.freesound.org/previews/691/691031_13167567-lq.mp3'
        },
        {
            id: 5,
            title: 'Tuğba Yurt',
            artist: 'Tuğba Yurt',
            description: 'Sanatçı',
            image: 'https://i.scdn.co/image/ab67616100005174cd79aece74e3dcad6c2c7bd2',
            type: 'artist',
            src: 'https://cdn.freesound.org/previews/691/691012_11861866-lq.mp3'
            // src: 'https://cdn.freesound.org/previews/691/691019_462105-lq.mp3'
        }
    ]

    return (
        <div className="grid gap-y-8">
            <Section 
                title="Yakınlarda Çalınanlar" 
                more="/" 
                items={items}
            />
            <Section 
                title="Bugünün en çok dinlenenleri" 
                more="/" 
                items={items}
            />
            <Section 
                title="Nostalji" 
                more="/" 
                items={items}
            />
        </div>
    )
}

export default Home