import {history, skills} from "../data/dataindex.js"

const Experience = () => {
  return (
    <section className="experience__container" id="experience">
        <h2 className="experience__title">Exprience</h2>
        <div className="experience__content">
            <div className="experience__skills">   
                {skills.map((skill,id)=>{
                    return(
                        <div className="experience__skill" key={id}>
                            <div className="experience__skillImageContainer">
                                <img src={skill.src} alt={skill.title} />
                                </div>
                            <p>{skill.title}</p>
                        </div>
                    )
                })}
            </div>
            <ul className="experience__history">
                {
                    history.map((historyItem,id)=>{
                        return (
                            <li className="experience__historyItem" key={id}>
                            <a href={historyItem.url} target="_blank"><img src={historyItem.image_src} alt="company_image"/></a>
                            <div className="experience__historyItemDetails" >
                                <h3>{historyItem.role},{historyItem.organisation}</h3>
                                <p>{historyItem.start_date} - {historyItem.end_date}</p>
                                <ul>
                                    {historyItem.experi.map((experience,id)=>{
                                        return (
                                            <li key={id}>{experience}</li>
                                        )
                                    })}
                                </ul>
                            </div></li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Experience