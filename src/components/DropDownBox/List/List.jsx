import "./List.css"

const List = ({items}) => {
    return(
        <ul className="List">

            {
                items.map((item)=>{
                    return <li className="List-Items" key={item}>{item}</li>
                })
            }
            
        </ul>
    )
}

export default List