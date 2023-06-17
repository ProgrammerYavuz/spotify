import { Icon } from "Icons"
import { useHistory } from "react-router-dom"

function Navigation() {

    const history = useHistory()

    return (
        <nav className="flex items-center gap-x-4">
            <button onClick={() => history.goBack()} className="flex w-8 h-8 items-center justify-center rounded-full bg-black bg-opacity-70">
                <Icon name="prev" size={22} />
            </button>
            <button onClick={() => history.goForward()} className="flex w-8 h-8 items-center justify-center rounded-full bg-black bg-opacity-70">
                <Icon name="next" size={22} />
            </button>
        </nav>
    )
}

export default Navigation