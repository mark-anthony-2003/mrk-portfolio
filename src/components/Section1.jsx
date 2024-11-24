import { PiHandWavingFill } from "react-icons/pi"
import Title from "./section1/Title"

const Section1 = () => {

    return (
        <section className="flex justify-center align-center flex-col text-center">
            <div className="flex justify-center align-center">
                <h1>Hey, I'm <span>Mark Anthony</span> </h1>
                <PiHandWavingFill className="ml-2 text-2xl" />
            </div>
            <Title />
            <div className="flex justify-center align-center flex-col px-44">
                <p>
                    I'm a software developer skilled in both front-end and back-end technologies, adept
                    in Agile Scrum methodology, and committed to driving projects forward through effective
                    communication, attention to detail, and continous learning.
                </p>
                <a 
                    href="https://www.linkedin.com/in/mark-anthony-lladones-5a863631b/"
                    className="mt-2 hover:underline transition-all duration-300">
                    Hire Me
                </a>
            </div>
        </section>
    )
}

export default Section1;