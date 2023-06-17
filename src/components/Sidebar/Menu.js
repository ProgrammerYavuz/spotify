import { Icon } from "Icons"
import { NavLink } from "react-router-dom"

function Menu() {
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink exact to={"/"} activeClassName="bg-active text-white" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded">
                        <span>
                            <Icon name="home" />
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} activeClassName="bg-active text-white" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded">
                        <span>
                            <Icon name="search" />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/collection"} activeClassName="bg-active text-white" className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded">
                        <span>
                            <Icon name="collection" />
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu