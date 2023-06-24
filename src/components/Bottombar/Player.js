import { Icon } from "Icons";
import { useAudio } from "react-use";
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setSidebar } from "stores/player";


function Player() {

    const dispatch = useDispatch()
    const { current, sidebar } = useSelector(state=>state.player)

    const [audio, state, controls] = useAudio({
        src: current?.src
    });

    useEffect(() => {
        dispatch(setControls(controls))
        controls.play()
    }, [current])

    useEffect(() => {
        dispatch(setPlaying(state.playing))
    }, [state.playing])

    const volumeIcon = useMemo(() => {

        if(state.volume === 0 || state.muted)
            return 'volumeMuted'

        if(state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'

        if(state.volume > 0.33 && state.volume < 0.66)
            return 'volumeNormal'

        return 'volumeFull'
        
    }, [state.volume, state.muted])

    return (
        <div className="flex h-full justify-between items-center px-4">
        {/* {JSON.stringify(state)} */}
            <div className="min-w-45 w-3/10">
                {current && (
                    <div className="flex items-center">
                        <div className="flex items-center mr-3">
                            {!sidebar && (
                                <div className="w-14 h-14 mr-3 flex-shrink-0 relative group">
                                    <img className="rounded-lg" src={current.image} alt="" />
                                    <button 
                                        onClick={() => dispatch(setSidebar(true))}
                                        className="flex absolute top-1 right-1 items-center justify-center h-6 w-6 bg-black opacity-0 group-hover:opacity-80 hover:!opacity-100 hover:scale-106 rounded-full">
                                        <Icon name="arrowUp" size={16} />
                                    </button>
                                </div>
                            )}
                            <div>
                                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                                <p className="text-xxs">{current.artist}</p>
                            </div>
                        </div>
                        <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                            <Icon name="heart" size={16} />
                        </button>
                        <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                            <Icon name="pictureInPicture" size={16} />
                        </button>
                    </div>
                )}
            </div>
            <div className="flex max-w-180.5 w-2/5 px-4 pt-2 flex-col items-center">
                <div className="flex items-center gap-x-2">
                    <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name="shuffle" size={16} />
                    </button>
                    <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name="playerPrev" size={16} />
                    </button>
                    <button onClick={controls[state?.playing ? 'pause' : 'play']} className="flex items-center justify-center h-8 w-8 bg-white text-black rounded-full hover:scale-106">
                        <Icon name={state?.playing ? 'pause' : 'play'} size={18} />
                    </button>
                    <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name="playerNext" size={16} />
                    </button>
                    <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                        <Icon name="repeat" size={16} />
                    </button>
                </div>
                <div className="flex w-full mt-1.5 items-center gap-x-2">
                    {audio}
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
            </div>
            <div className="flex justify-end min-w-45 w-3/10">
                <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name="lyrics" size={16} />
                </button>
                <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name="queue" size={16} />
                </button>
                <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name="device" size={16} />
                </button>
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
                <button className="flex items-center justify-center h-8 w-8 text-white text-opacity-70 hover:text-opacity-100">
                    <Icon name="fullScreen" size={16} />
                </button>
            </div>
        </div>
    )
}

export default Player