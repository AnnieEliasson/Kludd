import "./Character.css"

const Character = ({x, y}) => {

    return (
        <img id="avatar" className="Character" style={{gridColumn: x, gridRow: y}} src="http://www.avatarsinpixels.com/chibi/eyJIYWlyTG93ZXIiOi
            IxNiIsIlNob2VzIjoiMSIsIlBhbnRzIjoiMTgiLCJUb3AiOiI1IiwiRXllYnJvd3M
            iOiIxIiwiRXllcyI6IjExIiwiTW91dGgiOiI0IiwiSGFpclRvcCI6IjgiLCJoYWly
            VG9uZSI6IjQyMmIxOCIsImhhaXJUb25lMiI6IjAwMDAwMCIsImV5ZXNUb25lIjoiO
            DEzYTFmIiwicGFudHNUb25lIjoiOWQ5ZDlkIiwicGFudHNUb25lMiI6IjUxNTE1MSI
            sInRvcFRvbmUiOiIzNTM1MzUiLCJ0b3BUb25lMiI6IjAwMDAwMCIsInNob2VzVG9uZS
            I6Ijc2NDkyMiJ9/1/show.png" alt=""></img>
    )
}

export default Character