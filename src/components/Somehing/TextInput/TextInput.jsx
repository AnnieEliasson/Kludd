import "./TextInput.css"

const TextInput = ({setText}) => {

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return(
        <input onChange={handleChange} id="textInput" type="text" maxLength={30} placeholder="Change text here, max 30 characters" />
    )
}

export default TextInput