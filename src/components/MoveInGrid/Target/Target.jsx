import "./Target.css"


const Target = ({targetX, targetY}) => {



    return(<>
        
        <div className="Target" 
        style={{gridColumn: targetX, gridRow: targetY}}>
            <div className="target-hp" style={{gridColumn: targetX, gridRow: targetY}}></div>
            <div className="Target-inner"></div>
        </div>
        </>

    )
}

export default Target