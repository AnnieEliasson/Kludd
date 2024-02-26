import "./ColorSwitch.css"

const ColorSwitch = ({colors}) => {

    
    return(
        <div className="ColorSwitch">
            
        
        {
            colors.map((color)=>{
                return(
                    <button style={{backgroundColor : color}} className="color-button">
                        
                    </button>
                )
            })
        }
        
        </div>
    )
}

export default ColorSwitch