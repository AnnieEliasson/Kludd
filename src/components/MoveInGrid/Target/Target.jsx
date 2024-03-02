import "./Target.css"



const Target = ({charX, charyY, targetX, setTargetX, targetY, setTargetY}) => {

    return(
        <div className="Target" 
        style={{gridColumn: targetX, gridRow: targetY}}>
            <div></div>
        </div>
    )
}

export default Target