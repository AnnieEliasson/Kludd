import ColorSwitch from "./ColorSwitch/ColorSwitch"
import RollingText from "./RollingText/RollingText"
import "./Something.css"

const Something = () => {

    const text = '"Det viktiga är inte vad man gör, utan att man gör det med stil." - Lars Demian'

    const colors = ['red', 'blue', 'green']

    return(
        <div className="Something">
            <h2>Rolling Text</h2>
            <ColorSwitch colors = {colors} />

            <RollingText text = {text} />
        </div>
    )
}

export default Something