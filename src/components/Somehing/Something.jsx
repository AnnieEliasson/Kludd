import RollingText from "./RollingText/RollingText"
import "./Something.css"

const Something = () => {

    const text = '"Det viktiga är inte vad man gör, utan att man gör det med stil." - Lars Demian'

    return(
        <div className="Something">
            <h2>Rolling Text</h2>

            <RollingText text = {text} />
        </div>
    )
}

export default Something