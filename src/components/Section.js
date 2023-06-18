import { NavLink } from "react-router-dom";
import SongItem from "./SongItem";

function Section({ title, more = false, items }) {

    return (
        <section>
            <header className="flex items-center justify-between mb-4">
                <NavLink to={more ?? '#'}>
                    <h3 className="text-2xl text-white font-semibold hover:underline tracking-tight">
                        {title}
                    </h3>
                </NavLink>
                {
                    more && (
                        <NavLink to={more} className={"text-xs font-semibold text-link hover:underline tracking-wider"}>
                            Tümünü göster
                        </NavLink>
                    )
                }
            </header>
            <div className="grid grid-cols-5 gap-x-6">
                {items.map(item => <SongItem item={item} key={item.id} />)}
            </div>
        </section>
    )
}

export default Section