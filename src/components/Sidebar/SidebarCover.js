import { Icon } from "Icons"
import { useDispatch, useSelector } from "react-redux"
import { setSidebar } from "stores/player"

function SidebarCover() {

    const dispatch = useDispatch()
    const current = useSelector(state => state.player.current)

    return (
        <div className="relative group pt-full bg-black">
            <img className="absolute top-0 left-0 h-full w-full object-cover" src={current.image} alt="" />
            <button 
                onClick={() => dispatch(setSidebar(false))}
                className="flex absolute top-1 right-1 items-center justify-center h-6 w-6 bg-black opacity-0 group-hover:opacity-80 hover:!opacity-100 hover:scale-106 rotate-180 rounded-full">
                <Icon name="arrowUp" size={16} />
            </button>
        </div>
    )
}

export default SidebarCover