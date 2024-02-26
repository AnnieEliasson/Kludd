import "./InfoBox.css"

const InfoBox = ({onePersonObj}) => {

    return(
        <div className="InfoBox">
            <ul>
                <li><span>Name -</span> {onePersonObj.firstname} {onePersonObj.lastname}</li>
                <li><span>Pant color -</span> {onePersonObj.pant_color}</li>
                <li><span>Favorit food -</span> {onePersonObj.favorite_food}</li>
                <li><span>Favorit tool -</span> {onePersonObj.favorite_tool}</li>
                <li><span>Pet -</span> {onePersonObj.pet}</li>
                <li><span>Hobby -</span> {onePersonObj.hobby}</li>
            </ul>
            
        </div>
    )
}

export default InfoBox