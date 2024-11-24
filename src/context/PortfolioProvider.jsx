/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import { WorkExperiences } from '../data/WorkExps'
import { WorkSkills } from '../data/WorkSkills'
import { Educations } from '../data/Educations'
import { Certifications } from '../data/Certifications'

const PortfolioContent = createContext()

export const PortfolioProvider = ({ children }) => {
    const [workExps, useWorkExps] = useState(WorkExperiences)
    const [workSkills, useWorkSkills] = useState(WorkSkills)
    const [educations, useEducations] = useState(Educations)
    const [certifications, useCertifications] = useState(Certifications)

    return (
        <PortfolioContent.Provider
            value={{ workExps, workSkills, educations, certifications }}
        >
            { children }
        </PortfolioContent.Provider>
    )
}

export const usePortfolioContext = () => useContext(PortfolioContent)