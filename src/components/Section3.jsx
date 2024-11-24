import { usePortfolioContext } from '../context/PortfolioProvider'
import WorkSkill from "./section3/WorkSKill";

const Section3 = () => {
    const { workSkills } = usePortfolioContext()

    return (
        <section>
            <h2 className="text-2xl">Skills</h2>
            <div className="grid grid-cols-3 gap-6">
                { workSkills.map(skill => (
                    <WorkSkill key={skill.skillId} skill={skill}  />
                ))}
            </div>
        </section>
    )
}

export default Section3;