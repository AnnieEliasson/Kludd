import "./DropDown.css"

const DropDown = ({personNames, onePerson}) => {

    const handleChange = (e) => {

        onePerson(e.target.value)
    }

    return(
        <select onChange={handleChange}>
            
            {
                personNames.map((person)=>{
                    return <option value={person.firstname}>{person.firstname}</option>
                })
            }

        </select>
    )
}

export default DropDown