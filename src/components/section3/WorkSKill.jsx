const WorkSkill = (props) => {
    const { skill } = props

    return (
        <div>
            <h3>{skill.category}</h3>
            <ul className="pl-6">
                { skill.skills.map((s, index) => (
                    <li key={index}>{s}</li>
                ))}
            </ul>
        </div>
    )
}

export default WorkSkill