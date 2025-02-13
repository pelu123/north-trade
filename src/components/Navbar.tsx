import { useState } from "react";
import NorthTradeIcon from "../assets/NorthTradeIcon.png"
import { Link } from "react-router-dom";
import "../App.css"

export default function Navbar (){
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

 return (
   <>
     <nav>
       <div className="navbar-container">
         <img src={NorthTradeIcon} alt="Logo" className="navbar-logo" />
         <button className="navbar-burger" onClick={toggleMenu}>
          ☰
         </button>
         <div className={`navbar-list-container ${isOpen ? "active" : ""}`}>
           <ul className="navbar-list">
             <li className="navbar-list-item">
               <Link to="/" onClick={toggleMenu}>Inicio</Link>
             </li>
             <li className="navbar-list-item">
               <Link to="/propiedades" onClick={toggleMenu}>Propiedades</Link>
             </li>
             <li className="navbar-list-item">
               <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
             </li>
           </ul>
         </div>
       </div>
     </nav>
   </>
 );
}
