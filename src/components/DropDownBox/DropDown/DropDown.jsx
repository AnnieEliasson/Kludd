import "./DropDown.css"

const DropDown = ({personNames, onePerson}) => {

    const handleChange = (e) => {

        onePerson(e.target.value)
    }

    return(
        <select onChange={handleChange}>
            
            {
                personNames.map((person)=>{
                    return <option key={person.firstname} value={person.firstname}>{person.firstname} {person.lastname}</option>
                })
            }

        </select>
    )
}

export default DropDown