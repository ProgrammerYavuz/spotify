import Section from "components/Section"
import songs from "data/songs"

function Home() {

    return (
        <div className="grid gap-y-8">
            <Section 
                title="Yakınlarda Çalınanlar" 
                more="/" 
                items={songs.filter(item => item.type !== 'artist' && item.type !== 'podcast')}
                start={0}
                end={5}
            />
            <Section 
                title="Populer sanatçılar" 
                more="/" 
                items={songs.filter(item => item.type === 'artist')}
                start={2}
                end={7}
            />
            <Section 
                title="Podcastlar" 
                more="/" 
                items={songs.filter(item => item.type === 'podcast')}
                start={0}
                end={5}
            />
            <Section 
                title="Bugünün en çok dinlenenleri" 
                more="/" 
                items={songs.filter(item => item.type !== 'artist' && item.type !== 'podcast')}
                start={5}
                end={10}
            />
            <Section 
                title="Öne çıkan şarkılar" 
                more="/" 
                items={songs.filter(item => item.type !== 'artist' && item.type !== 'podcast')}
                start={10}
                end={15}
            />
            <Section 
                title="Senin için derlendi" 
                more="/" 
                items={songs.filter(item => item.type !== 'artist' && item.type !== 'podcast')}
                start={15}
                end={20}
            />
            <Section 
                title="Denemeye değer" 
                more="/" 
                items={songs.filter(item => item.type !== 'artist' && item.type !== 'podcast')}
                start={20}
                end={25}
            />
        </div>
    )
}

export default Home