import "./Pages.css"
import viñedo from "../assets/viñedo.jpg"
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

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
                <Button className="button-rurales">
                    <Link to="/propiedades">
                        <p>Propiedades rurales</p>
                    </Link>
                </Button>
                <Button className="button-contacto">
                    <Link to="/contacto">
                        <p>Contacto</p>
                    </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </>
    );
}