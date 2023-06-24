import { Icon } from "Icons"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { setCurrent } from "stores/player"

function SongItem({ item }) {

    const dispatch = useDispatch()
    const { current, playing, controls} = useSelector(state => state.player)

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

    const updateCurrent = () => {
        if (current.id === item.id) {
            if (playing){
                controls.pause()
            } else {
                controls.play()
            }
        } else {
            dispatch(setCurrent(item))
        }
    }

    const isCurrentItem = (current?.id === item.id && playing)


    return (
        <NavLink 
            key={item.id} 
            to="/"
            className={"bg-footer p-4 rounded group hover:bg-active"}
        >
            <div className="pt-full relative mb-4">
                <img src={item.image} className={`absolute object-cover inset-0 w-full h-full ${imageStyle(item)}`} alt=""/>
                <button 
                    onClick={updateCurrent}
                    className={`group-hover:flex group-focus:flex ${!isCurrentItem ? 'hidden' : 'flex'} items-center justify-center absolute bottom-2 right-2 w-10 h-10 rounded-full bg-primary`}>
                    <Icon name={isCurrentItem ? 'pause' : 'play'} size={16}/>
                </button>
            </div>
            <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                {item.title}
            </h6>
            <p className="line-clamp-2 text-link text-sm mt-1">
                {item.description}
            </p>
        </NavLink>
    )
}

export default SongItem