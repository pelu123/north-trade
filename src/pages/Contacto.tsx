import ContactPropiedades from "../components/Propiedades/ContactPropiedades"
import '../pages/Pages.css'
import InteractiveMap from "../components/Contacto/InteractiveMap"

export default function Contacto() {
    return (
        <>
        <section className="contacto-form-section">
            <ContactPropiedades />   
        </section>
        <section className="contacto-map-section">
            <InteractiveMap />
        </section>       
        </>
    )
}