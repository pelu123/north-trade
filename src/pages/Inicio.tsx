import "./Pages.css"
import "../App.css"
import viñedo from "../assets/viñedo.jpg"
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Destacadas from "../components/Inicio/Destacadas";
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laudantium quos voluptatibus aliquam et ducimus voluptate
                aliquid cum, repellendus molestiae sunt a corporis nihil, nulla
                nesciunt magnam ipsum libero! Vel, excepturi. Nisi, quae vitae
                voluptatum architecto voluptas rem rerum natus, explicabo sunt
                odit dolorem et saepe delectus quas sint blanditiis atque
                molestias consectetur eligendi sed error maiores ea.
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
            <Destacadas />
          </section>
          <section className="contacto-section">
            <div className="contacto-text-section">
              <h2 className="title">¡Contáctanos hoy mismo!</h2>
              <p className="contacto-text">
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