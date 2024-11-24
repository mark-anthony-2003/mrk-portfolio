import { usePortfolioContext } from '../context/PortfolioProvider'
import WorkExperience from './section2/WorkExperience'

const Section2 = () => {
    const { workExps } = usePortfolioContext()

    return (
        <section>
            <h2 className="text-2xl">Experience</h2>
            { workExps.map(exp => (
                <WorkExperience key={exp.workId} exp={exp} />
            ))}
        </section>
    )
}

export default Section2;