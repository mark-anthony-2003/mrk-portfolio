const WorkExperience = (props) => {
    const { exp } = props

    return (
        <div className="flex justify-between">
            <h2 className="w-1/5">{exp.companyName}</h2>
            <div className="w-4/5">
                <h3>{exp.role}</h3>
                <p>{exp.startDate} - {exp.endDate}</p>
                <ul className="list-disc pl-6 space-y-2">
                    { exp.descriptions.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default WorkExperience;