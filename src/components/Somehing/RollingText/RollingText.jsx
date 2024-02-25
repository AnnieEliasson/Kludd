import "./RollingText.css"

const RollingText = ({text}) => {

    return(
        <div className="banderoll">
                <p className="banderoll-text">{text}</p>
        </div>
    )
}

export default RollingText