import "./Css/Card.css"
import "./Css/CardMediaQuery.css"
import { FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function NetWorks() {
    return (
        <div className="containerCard NetWork">
            <div className="link">
                <span><FaMapMarkerAlt /></span>
                <a href="https://goo.gl/maps/qV7dyA1TsY4ceBGy6" target={"_blank"}>Muçum/Rs</a>
            </div>
            <div className="link">
                <span><FaGithub /></span>
                <a href="https://github.com/guilherme-possebon" target={"_blank"}>guilherme-possebon</a>
            </div>
            <div className="link">
                <span><FaLinkedinIn /></span>
                <a href="https://www.linkedin.com/in/guilherme-possebon-4652a625a/" target={"_blank"}>Guilherme Possebon</a>
            </div>
            <div className="link">
                <span><FaEnvelope /></span>
                <a href="mailto:gpossebon67@gmail.com" target={"_blank"}>gpossebon67@gmail.com</a>
            </div>
        </div>
    )
}