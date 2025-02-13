import "./Pages.css"
import "../App.css"
import viñedo from "../assets/viñedo.jpg"
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import DestacadasWrapper from "../components/Inicio/DestacadasWrapper";
import ContactForm from "../components/ContactForm";


export default function Inicio() {
    return (
      <>
        <div>
          <section
            className="inicio-main-section"
            style={{ backgroundImage: `url(${viñedo})` }}
          >
            <div className="header-info-container">
              <h1 className="header-title">
                Te ayudamos a encontrar la mejor propiedad rural en la provincia
                de Salta
              </h1>
              <p className="header-description">
                Te ofrecemos la mejor atención y compromiso
                para que encuentres el campo que necesitas.
              </p>
              <div className="header-buttons">
                <Button className="button-rurales bg-[rgb(119,0,0)] text-white">
                  <Link to="/propiedades">
                    <p>Propiedades rurales</p>
                  </Link>
                </Button>
                <Button className="button-contacto">
                  <Link to="/contacto">
                    <p>Contactanos</p>
                  </Link>
                </Button>
              </div>
            </div>
          </section>
          <section className="destacadas-section">
            <h2 className="title">Propiedades destacadas</h2>
            <DestacadasWrapper />
          </section>
          <section className="about-us-section">
            <h2 className="title">¿Quiénes somos?</h2>
            <div className="about-us-text">
              <p className="text">
              Somos una empresa inmobiliaria rural, con larga experiencia en la
              compra y venta de campos en la provincia de Salta. Aseguramos
              seriedad, profesionalidad y absoluta reserva. Contamos con la
              estructura y logística necesaria para brindar un asesoramiento
              integral del negocio inmobiliario.
            </p>
            </div>                        
          </section>
          <section className="contacto-section">
            <div className="contacto-text-section">
              <h2 className="title">¡Contáctanos hoy mismo!</h2>
              <p className="text">
                ¿Interesado en alguna de nuestras propiedades rurales? Estamos
                aquí para ayudarte. Completa el formulario de contacto con tus
                datos y detalles sobre la propiedad que te interesa. Nuestro
                equipo se pondrá en contacto contigo a la brevedad para
                brindarte toda la información que necesitas. ¡Esperamos saber de
                ti pronto!
              </p>
              <Button className="cta-contacto-button bg-teal-600 text-white">
                <Link to="/propiedades">
                  <p>Explora más propiedades</p>
                </Link>  
              </Button>              
            </div>
            <ContactForm />
          </section>
        </div>
      </>
    );
}