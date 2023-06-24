import { NavLink } from "react-router-dom";

function Title({ title, more = false }) {
    return (
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
    )
}

export default Title