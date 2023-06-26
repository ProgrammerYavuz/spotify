import SongItem from "./SongItem";
import Title from "./Title";

function Section({ title, more = false, items, start = 0, end = 5}) {

    return (
        <section>
            <Title title={title} more={more} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {items.slice(start, end).map(item => <SongItem item={item} key={item.id} />)}
            </div>
        </section>
    )
}

export default Section