import "./DropDownBox.css"
import DropDown from "./DropDown/DropDown"
import InfoBox from "./InfoBox/InfoBox"
import persons from "./person.json"
import { useState } from "react"

const personNames = [

]
persons.forEach(person => {

    const obj = {
        firstname: person.firstname,
        lastname: person.lastname
    }

    personNames.push(obj)
});

let onePersonObj = {}

const DropDownBox = () => {

    const [onePerson, setOnePerson] = useState("Bob")
    
    persons.forEach(person => {
        if(person.firstname === onePerson){
            onePersonObj = person

        }
    });

    return(
    <div className="DropDownBox">
        <div className="container">
        <h2>DropDown</h2>

        <DropDown personNames={personNames} onePerson={setOnePerson}/>
        <InfoBox onePersonObj = {onePersonObj} />
        </div>
        
    </div>
    )
}

export default DropDownBox