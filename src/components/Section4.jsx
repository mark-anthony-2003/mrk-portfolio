import { usePortfolioContext } from '../context/PortfolioProvider'
import Education from './section4/Education'
import Certificate from './section4/Certificate'

const Section4 = () => {
    const { educations, certifications } = usePortfolioContext()

    return (
        <section>
            <h2 className="text-2xl">About Me</h2>
            <div className="flex justify-between">
                <div>
                    <h3>Education</h3>
                    { educations.map(education => (
                        <Education key={education.educationId} education={education} />
                    ))}
                </div>
                <div>
                    <h3>Certification</h3>
                    { certifications.map(certificate => (
                        <Certificate key={certificate.certificateId} certificate={certificate} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section4;