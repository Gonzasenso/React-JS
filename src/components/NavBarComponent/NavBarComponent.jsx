import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";
import estilos from "./NavBar.module.css";


export const NavBarComponent= () => {
  return (
    <Navbar expand="lg" className={estilos.encabezado}>
      <Container fluid>
        <Navbar.Brand className={estilos.titulo} href="#home"><Link className={estilos.link} to={"/"}>GamerXtreme</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', paddingLeft: `50px` }}
            navbarScroll
          >
            <Nav.Link to="/" className={estilos.botonInicio} style={{fontSize: `20px`}} href="#Inicio">Inicio</Nav.Link> 
            <Nav.Link to="#link" className={estilos.botonProductos} style={{fontSize: `20px`}} href="#Productos">Productos</Nav.Link>
            <NavDropdown className={estilos.botonCategorias} title="Categorias" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action/3.1" className={estilos.dropdownComponentes}>
                      <Link className={estilos.linkCategorias} to={"/category/Teclados"}>Teclados</Link>
              </NavDropdown.Item>
                
              <NavDropdown.Item href="#action/3.2" className={estilos.dropdownComponentes}>
                      <Link className={estilos.linkCategorias} to={"/category/Monitores"}>Monitores</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3" className={estilos.dropdownComponentes}>
                      <Link className={estilos.linkCategorias} to={"/category/Auriculares"}>Auriculares</Link>
              </NavDropdown.Item>
             </NavDropdown> 
          </Nav>
          <CartWidgetComponent/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

