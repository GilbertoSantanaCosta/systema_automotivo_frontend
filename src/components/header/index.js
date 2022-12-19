import React from "react"
import {Navbar, Button} from "rbx"
import "rbx/index.css";
import {Link} from "react-router-dom";

function Header(){
    return(
<Navbar color="dark">
  <Navbar.Brand>
    <Navbar.Item href="#">
     <Link to="/">Sistema Automotivo</Link> 
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Segment align="start">
      <Navbar.Item>Inicio</Navbar.Item>
      <Navbar.Item dropdown>
        <Navbar.Link>Listas</Navbar.Link>
        <Navbar.Dropdown>
          <Navbar.Item>Veiculos Na Oficina</Navbar.Item>
          <Navbar.Item>Veiculos Liberados</Navbar.Item>
          <Navbar.Item>Retornos</Navbar.Item>
          <Navbar.Divider />
          <Navbar.Item>Assistencia Tecnica</Navbar.Item>
        </Navbar.Dropdown>
      </Navbar.Item>
    </Navbar.Segment>

    <Navbar.Segment align="end">
      <Navbar.Item>
        <Button.Group>
          <Button color="primary">
           <strong><Link to="/cadastrar">Cadastrar</Link></strong> 
          </Button>
          <Button color="light">Entrar</Button>
        </Button.Group>
      </Navbar.Item>
    </Navbar.Segment>
  </Navbar.Menu>
</Navbar>
    )
}

export default Header;