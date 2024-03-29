
import "./Character.css"

const Character = ({x, y, targetX, targetY}) => {

    // stop bullet line at target
    let end = 13
    let endLeft = 1
    if(y === targetY){
        end = targetX
        endLeft = targetX
    } 

    return (<>
        <img className="Character" style={{gridColumn: x, gridRow: y}} src="http://www.avatarsinpixels.com/chibi/eyJIYWlyTG93ZXIiOi
            IxNiIsIlNob2VzIjoiMSIsIlBhbnRzIjoiMTgiLCJUb3AiOiI1IiwiRXllYnJvd3M
            iOiIxIiwiRXllcyI6IjExIiwiTW91dGgiOiI0IiwiSGFpclRvcCI6IjgiLCJoYWly
            VG9uZSI6IjQyMmIxOCIsImhhaXJUb25lMiI6IjAwMDAwMCIsImV5ZXNUb25lIjoiO
            DEzYTFmIiwicGFudHNUb25lIjoiOWQ5ZDlkIiwicGFudHNUb25lMiI6IjUxNTE1MSI
            sInRvcFRvbmUiOiIzNTM1MzUiLCJ0b3BUb25lMiI6IjAwMDAwMCIsInNob2VzVG9uZS
            I6Ijc2NDkyMiJ9/1/show.png" alt=""></img>

            <p className="talk" style={{gridColumn: x + 1 , gridRow: y - 1}}>Hasta la Vista, baby!</p>

            {/* Vapen */}

            <div className="fire" style={{gridColumn: x + 1 , gridRow: y}}></div>
            
            <div className="fire2" style={{gridColumnStart: x + 1 , gridColumnEnd: end, gridRow: y}}>
                <div className="bullets" ></div>
                <div className="bullets2"></div>
                <div className="bullets3"></div>
            </div>

            <div className="fire2-left" style={{gridColumnStart: x , gridColumnEnd: endLeft, gridRow: y}}>
                <div className="bullets" ></div>
                <div className="bullets2"></div>
                <div className="bullets3"></div>
            </div>
            </>
    )
}

export default Character