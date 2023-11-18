import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import estilos from "./NavBar.module.css";
import { Link } from 'react-router-dom';

const NavBarComponent= () => {
  return (
    <Navbar expand="lg" className={estilos.encabezado}>
      <Container fluid>
        <Navbar.Brand className={estilos.titulo}><Link to={"/"}>GamerXtreme</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', paddingLeft: `50px` }}
            navbarScroll
          >
            <Nav.Link className={estilos.botonInicio} href="#action1">Inicio</Nav.Link>
            <Nav.Link className={estilos.botonProductos} href="#action2">Productos</Nav.Link>
            <NavDropdown className={estilos.botonCategorias} title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item className={estilos.dropdownComponentes}><Link to={"/category/categoria1"}>Categoria 1</Link></NavDropdown.Item>
              <NavDropdown.Item className={estilos.dropdownMonitores}><Link to={"/category/categoria2"}>Categoria 2</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className={estilos.dropdownComponentes}><Link to={"/category/categoria3"}>Categoria Adicional</Link></NavDropdown.Item></NavDropdown>
          </Nav>
          <Form className={estilos.formulario}>
            <Form.Control
              type="search"
              placeholder="Buscar" style={{fontSize: `20px`}}
              className={estilos.busqueda} 
              aria-label="Search"
            />
            <Button className={estilos.botonBuscar} variant="outline-success">Buscar</Button>
          </Form>
          <CartWidgetComponent/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBarComponent;