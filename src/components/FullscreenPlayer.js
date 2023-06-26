import { Icon } from "Icons"
import { useSelector } from "react-redux"
import { secondsToTime } from "utils"
import CustomRange from "./CustomRange"

function FullscreenPlayer({ toggle, state, controls, volumeIcon }) {

    const { current } = useSelector(state => state.player)

    return (
        <div className="h-full relative" onClick={controls[state?.playing ? 'pause' : 'play']}>
            <div className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-50" style={{backgroundImage: `url(${current.image})`}} />
            <div className="absolute flex items-start gap-x-2 top-10 left-12 opacity-80 text-white">
                <Icon name="logo" size={64} />
                <div className="text-xs">
                    <p className="font-semibold opacity-70">ŞUAN ÇALIYOR</p>
                    <h6 className="mt-1 font-semibold">{current.title}</h6>
                </div>
            </div>
            <div className="absolute flex items-center gap-x-4 bottom-36 left-12">
                <img src={current.image} className="h-24 w-24 object-cover rounded-md" alt="" />
                <div className="self-end">
                    <h3 className="text-2xl font-semibold overflow-hidden">{current.title}</h3>
                    <p className="text-sm font-medium opacity-70">{current.description}</p>
                </div>
            </div>
            <div
                onClick={e => {
                    e.stopPropagation()
                }} 
                className="absolute bottom-4 flex w-full px-8 flex-col items-center"
            >
                <div className="flex w-full mb-1.5 items-center gap-x-2">
                    <div className="text-xxs text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange 
                        value={state?.time}
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        onChange={value => controls.seek(value)}
                    />
                    <div className="text-xxs text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
                <div className="flex items-center gap-x-5">
                    <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name="shuffle" size={24} />
                    </button>
                    <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name="playerPrev" size={24} />
                    </button>
                    <button onClick={controls[state?.playing ? 'pause' : 'play']} className="flex items-center justify-center h-16 w-16 bg-white text-black rounded-full hover:scale-106">
                        <Icon name={state?.playing ? 'pause' : 'play'} size={24} />
                    </button>
                    <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name="playerNext" size={24} />
                    </button>
                    <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name="repeat" size={24} />
                    </button>
                </div>
                <div className="absolute bottom-4 right-6 flex items-center gap-x-3">
                    <button 
                        onClick={controls[state.muted ? 'unmute' : 'mute']}
                        className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name={volumeIcon} size={16} />
                    </button>
                    <div className="flex items-center justify-center w-23 max-w-full">
                        <CustomRange 
                            value={state.muted ? '0' : state?.volume}
                            step={0.01}
                            min={0}
                            max={1}
                            onChange={value => {
                                controls.unmute()
                                controls.volume(value)
                            }}
                        />
                    </div>
                    <button onClick={toggle} className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name="fullScreenOff" size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default FullscreenPlayer