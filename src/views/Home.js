import Section from "components/Section"

function Home() {

    const items = [
        {
            id: 1,
            title: 'Hot Hits Türkiye',
            description: 'Dinlemekten vazgeçemediklerin ve en yeni hitler.',
            image: 'https://i.scdn.co/image/ab67706f000000021d82386c5de66c466b196cab',
            type: 'album'
        },
        {
            id: 2,
            title: 'Barış Özcan ile 111 Hz',
            description: 'Podbee Media',
            image: 'https://i.scdn.co/image/ab67656300005f1f15dbc1cba8d088bfbba170c1',
            type: 'podcast'
        },
        {
            id: 3,
            title: 'Mutlu Türkçe Şarkılar',
            description: 'Neşeli Türkçe parçalarla moral depola.',
            image: 'https://i.scdn.co/image/ab67706f0000000213b02cb40de808358718f778',
            type: 'album'
        },
        {
            id: 4,
            title: 'Hafif Müzik',
            description: 'Arkada çalmalık Türkçe şarkılar.',
            image: 'https://i.scdn.co/image/ab67706f00000002f14d57d5c34d57a9ed4e5ad8',
            type: 'album'
        },
        {
            id: 5,
            title: 'trend 2023',
            description: 'internette olan biten📱',
            image: 'https://i.scdn.co/image/ab67706f00000002cc0636b16f853a0dbc03bfad',
            type: 'artist'
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