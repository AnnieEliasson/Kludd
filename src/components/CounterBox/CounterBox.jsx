import Counter from "../Counter/Counter"
import "./CounterBox.css"

const CounterBox = ({show}) => {

    if(show)

    return (
    <div className="CounterBox">
        <h2>Click Counter</h2>
        <Counter />
    </div>
    )
}

export default CounterBox