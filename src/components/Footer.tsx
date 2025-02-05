import { Link } from "react-router-dom"
import '../App.css'
import SocialMediaButtons from "./SocialMediaButtons"

export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <footer>
                    <div className="footer-content">
                        <div className="footer-routes">
                            <Link to={"/"}>Inicio</Link>
                            <Link to={"/propiedades"}>Propiedades</Link>
                            <Link to={"/contacto"}>Contacto</Link>
                        </div>
                        <div className="social-media-links">
                            <SocialMediaButtons />
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}