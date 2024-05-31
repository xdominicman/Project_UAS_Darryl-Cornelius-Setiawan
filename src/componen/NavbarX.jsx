import {useState, useEffect} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { navLinks } from '../data/index';
import { NavLink } from 'react-router-dom';


const NavbarX = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10)
    {
      setChangeColor(true);
    }
    else
    {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener('scroll', changeBackgroundColor);
  });

  return (
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className='fs-3 fw-bold'>SUMATERA UTARA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return (
              <div className='nav-link fw-bold' key={link.id}>
                <NavLink to={link.path}className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "active" : ""} end>{link.text}</NavLink>
              </div>
            );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarX;