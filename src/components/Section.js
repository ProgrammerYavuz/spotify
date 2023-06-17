import { Icon } from "Icons"
import { NavLink } from "react-router-dom"

function Section({ title, more = false, items }) {

    const imageStyle = item => {
        switch (item.type) {
            case 'artist':
                return 'rounded-full'
            case 'podcast':
                return 'rounded-xl'
            default:
                return 'rounded'
        }
    }

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
                {items.map(item => (
                    <NavLink 
                        key={item.id} 
                        to="/"
                        className={"bg-footer p-4 rounded group hover:bg-active"}
                    >
                        <div className="pt-full relative mb-4">
                            <img src={item.image} className={`absolute object-cover inset-0 w-full h-full ${imageStyle(item)}`} alt=""/>
                            <button className="group-hover:flex group-focus:flex hidden items-center justify-center absolute bottom-2 right-2 w-10 h-10 rounded-full bg-primary">
                                <Icon name="play" size={16}/>
                            </button>
                        </div>
                        <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                            {item.title}
                        </h6>
                        <p className="line-clamp-2 text-link text-sm mt-1">
                            {item.description}
                        </p>
                    </NavLink>
                ))}
            </div>
        </section>
    )
}

export default Section