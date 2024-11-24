import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md"
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

const Footer = () => {

    return (
        <footer className="flex justify-around py-20 px-56">
            <div>
                <h2>Get in Touch.</h2>
                <div className="flex justify-items-start mt-2">
                    <MdEmail className="mr-2 text-2xl" />
                    <p>lladones021@gmail.com</p>
                </div>
                <div className="flex justify-items-start mt-2">
                    <MdLocalPhone className="mr-2 text-2xl" />
                    <p>+639669812387</p>
                </div>
            </div>
            <div className="flex justify-items-start items-center gap-x-6">
                <div>
                    <a href="https://linkedin.com/in/mark-anthony-lladones-5a863631b">
                        <FaLinkedinIn className="text-2xl" />
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/mark-anthony-2003">
                        <FaGithub className="text-2xl" />
                        <p>Github</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;