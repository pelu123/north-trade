import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import Inicio from "./pages/Inicio"
import Contacto from "./pages/Contacto"
import Propiedades from "./pages/Propiedades"
import  Navbar  from "./components/Navbar"
import "../src/pages/Pages.css"

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/propiedades" element={<Propiedades />} />
        </Routes>
      </Container>
    </>
  );
}

export default App
