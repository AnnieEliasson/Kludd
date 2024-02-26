import "./RollingText.css"

const RollingText = ({text, color}) => {

    const handleChange = (e) => {
        console.log(e.target);
    }

    return(
        <div className="banderoll">
                <p onChange={handleChange} style={{textShadow: `1px  1px  10px  ${color}, 3px 3px 1px rgb(0, 0, 0)`}} className="banderoll-text">{text}</p>
        </div>
    )
}

export default RollingText