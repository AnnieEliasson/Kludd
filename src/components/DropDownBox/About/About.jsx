import "./About.css"

const About = ({company, backstory, past_projects}) => {

    const handleClick = (e) => {

        const openProjects = document.querySelectorAll(".project-desc-show")
        openProjects.forEach(element => {
            element.classList.remove("project-desc-show")
        });
        
        const item= e.target.querySelector('p')
        item.classList.toggle("project-desc-show")

    }

    return(
        <div className="About">
            <p className="title">{company.name}</p>
            <p className="town">{company.home_town}</p>
            <br />
            <p className="backstory">{backstory}</p>

            <ul className="project-list">
                {past_projects.map((project)=>{
                    return(<li onClick={handleClick} key={project.name}>{project.name}<p className="project-desc">{project.description}</p></li>)
                })}
            </ul>


        </div>
    )
}

export default About