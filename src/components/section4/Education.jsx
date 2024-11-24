const Education = (props) => {
    const { education } = props
    
    return (
        <div className="flex justify-between gap-8 mt-4">
            <div className="w-1/5">
                <img src={education.image} alt={education.school} />
            </div>
            <div className="w-4/5">
                <h3>{education.school}</h3>
                <p>{education.degree} {education.fieldOfStudy}</p>
                <p>{education.startDateMonth} {education.startDateYear}</p>
            </div>
        </div>
    )
}

export default Education