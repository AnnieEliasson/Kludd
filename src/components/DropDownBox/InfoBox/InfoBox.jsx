import List from "../List/List"
import "./InfoBox.css"

const InfoBox = ({onePersonObj}) => {

    return(
        <div className="InfoBox">
            <ul className="person-info">
                {/* <li><span>Name -</span> {onePersonObj.firstname} {onePersonObj.lastname}</li> */}
                <li><span>Pant color -</span> {onePersonObj.pant_color}</li>
                <li><span>Favorit food -</span> {/* {onePersonObj.favorite_food} */}<List items = {onePersonObj.favorite_food} /> </li>
                <li><span>Favorit tool -</span> {onePersonObj.favorite_tool}</li>
                <li><span>Pet -</span> {onePersonObj.pet}</li>
                <li><span>Hobby -</span> {/* {onePersonObj.hobby} */}<List items={onePersonObj.hobby} /></li>
            </ul>
            
        </div>
    )
}

export default InfoBox