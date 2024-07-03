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


      //  <NavbarContent className="hidden sm:flex gap-4" justify="center">
      //    <NavbarItem>
      //      <Link to="/">Inicio</Link>
      //    </NavbarItem>
      //    <Dropdown>
      //      <NavbarItem>
      //        <DropdownTrigger>
      //          <Button 
      //           disableRipple
      //           className="p-0 bg-transparent data-[hover=true]:bg-transparent"
      //           radius="sm"
      //           variant="light">
      //             Propiedades
      //           </Button>
      //        </DropdownTrigger>
      //      </NavbarItem>
      //      <DropdownMenu
      //        aria-label="Propiedades"
      //        className="w-[340px]"
      //        itemClasses={{
      //          base: "gap-4",
      //        }}
      //      >
      //        <DropdownItem>
      //          <Link to="/propiedades/rurales">Propiedades rurales</Link>
      //        </DropdownItem>
      //        <DropdownItem>
      //          <Link to="/propiedades/urbanas">Propiedades urbanas</Link>
      //        </DropdownItem>
      //      </DropdownMenu>
      //    </Dropdown>
      //    <NavbarItem>
      //      <Link to="/contacto">Contacto</Link>
      //    </NavbarItem>
      //  </NavbarContent>
      //  <NavbarContent justify="end">
      //        <NavbarItem>
      //         <Button>Iniciar Sesión</Button>
      //        </NavbarItem>
      //  </NavbarContent>