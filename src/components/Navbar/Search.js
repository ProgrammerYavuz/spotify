import { Icon } from "Icons"

function Search() {
    return (
        <div className="mr-auto ml-4 relative">
            <div className="hidden lg:flex items-center">
                <label htmlFor="search-input" className="absolute top-0 left-0 flex h-10 w-12 items-center justify-center text-white/60">
                    <Icon name="search"/>
                </label>
                <input autoFocus={true} type="text" id="search-input" className="h-10 w-91 max-w-full pl-12 bg-black text-white rounded-3xl text-sm placeholder-white/60 outline-none" placeholder="Ne dinlemek istiyorsun?" />
            </div>

            <nav className="flex lg:hidden items-center">
                <button className="flex w-8 h-8 items-center justify-center rounded-full bg-black bg-opacity-70">
                    <Icon name="search" size={16} />
                </button>
            </nav>
        </div>
    )
}

export default Search