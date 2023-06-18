import { Range, getTrackBackground } from "react-range";

function CustomRange({ value, step, min, max, onChange }) {
    return (
        <Range
            values={[value]}
            step={step}
            min={min}
            max={max}
            onChange={value => onChange(value[0])}
            renderTrack={({ props, children }) => (
                <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                className="flex group h-7 w-full"
                style={props.style}
                >
                <div
                    ref={props.ref}
                    className="h-1 w-full self-center rounded-md"
                    style={{
                    background: getTrackBackground({
                        values: [value],
                        colors: ["#1db954", "#535353"],
                        min,
                        max
                    })
                    }}
                >
                    {children}
                </div>
                </div>
            )}
            renderThumb={({ props, isDragged }) => (
                <div
                {...props}
                className={`h-3 w-3 bg-white ${!isDragged ? 'opacity-0' : ''}  group-hover:opacity-100 rounded-full`}
                style={{
                    ...props.style,
                    boxShadow: "0px 2px 4px 0px rgb(0 0 0 / 50%)"
                }}
                />
            )}
        />
    )
}

export default CustomRange