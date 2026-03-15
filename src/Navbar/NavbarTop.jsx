import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logPhone from '@/assets/logPhone.png';
import styles from './Navbar.module.scss';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const NavbarTop = () =>{

     const navigate = useNavigate();

     const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
       
             <Navbar.Brand href="#home" className={styles.logo}><img src={logPhone} className={styles.pic}/></Navbar.Brand>
                  <Navbar.Brand href="#home" className={styles.splav}> Сплав_Калининград39</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Маршрут</Nav.Link>
            <Nav.Link href="#pricing">Цены</Nav.Link>
             <Nav.Link href="#photo">Фотоотчет</Nav.Link>
            <NavDropdown title="Компаниям" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/corporate')}>Корпоративные туры</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/birthday')}>
                Индивидуальные туры
              </NavDropdown.Item>                         
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#contacts">Контакты</Nav.Link>
            <Nav.Link eventKey={2} href="#testimonials">
             Отзывы
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

