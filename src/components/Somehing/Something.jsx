import { useState } from "react"
import ColorSwitch from "./ColorSwitch/ColorSwitch"
import RollingText from "./RollingText/RollingText"
import "./Something.css"

const Something = () => {

    const text = '"Det viktiga är inte vad man gör, utan att man gör det med stil." - Lars Demian'

    const colors = ['red', 'blue', 'green', 'darkcyan', 'hotpink']

    const [color, setColor] = useState("darkcyan")

    return(
        <div className="Something">
            <h2>Rolling Text</h2>
            <ColorSwitch colors = {colors} setColor = {setColor} />

            <RollingText text = {text} color={color} />
        </div>
    )
}

export default Something