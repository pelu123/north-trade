import NorthTradeIcon from "../assets/NorthTradeIcon.png"
import { Link } from "react-router-dom";
import "../App.css"

export default function Navbar (){
 return (
   <>
     <nav>
       <div className="navbar-container">
         <img src={NorthTradeIcon} alt="Logo" className="navbar-logo" />
         <div className="navbar-list-container">
           <ul className="navbar-list">
             <li className="navbar-list-item">
               <Link to="/">Inicio</Link>
             </li>
             <li className="navbar-list-item">
               <Link to="/propiedades">Propiedades</Link>
             </li>
             <li className="navbar-list-item">
               <Link to="/contacto">Contacto</Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>
   </>
 );
}
