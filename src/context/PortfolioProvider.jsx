/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import { WorkExperiences } from '../data/WorkExps'
import { WorkSkills } from '../data/WorkSkills'
import { Educations } from '../data/Educations'
import { Certifications } from '../data/Certifications'

const PortfolioContent = createContext()

export const PortfolioProvider = ({ children }) => {
    const [workExps, setWorkExps] = useState(WorkExperiences)
    const [workSkills, setWorkSkills] = useState(WorkSkills)
    const [educations, setEducations] = useState(Educations)
    const [certifications, setCertifications] = useState(Certifications)

    return (
        <PortfolioContent.Provider
            value={{ workExps, workSkills, educations, certifications }}
        >
            { children }
        </PortfolioContent.Provider>
    )
}

export const usePortfolioContext = () => useContext(PortfolioContent)
