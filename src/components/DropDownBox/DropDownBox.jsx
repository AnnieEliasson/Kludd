import "./DropDownBox.css"
import DropDown from "./DropDown/DropDown"
import InfoBox from "./InfoBox/InfoBox"
import data from "./person.json"
import { useState } from "react"
import About from "./About/About"


console.log('Company: ',data.construction_company);
console.log('Backstory: ',data.backstory);
console.log('Past projects: ',data.past_projects);



const persons = data.construction_workers

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
        <About company = {data.construction_company} backstory = {data.backstory} past_projects={data.past_projects}/>
        </div>
    <div className="container">
        <h2>DropDown</h2>

        

        <DropDown personNames={personNames} onePerson={setOnePerson}/>
        <InfoBox onePersonObj = {onePersonObj} />
        </div>
        
    </div>
    )
}

export default DropDownBox