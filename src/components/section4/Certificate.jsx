const Certificate = (props) => {
    const { certificate } = props
    
    return (
        <div className="flex justify-between gap-8 mt-4">
            <div className="w-1/5">
                <img src={certificate.image} alt={certificate.name} size="6" />
            </div>
            <div className="w-4/5">
                <h3>{certificate.name}</h3>
                <p>{certificate.org}</p>
            </div>
        </div>
    )
}

export default Certificate