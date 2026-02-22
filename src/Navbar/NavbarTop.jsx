import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '@/assets/logo.JPG';
import styles from './Navbar.module.scss';

export const NavbarTop = () =>{
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
       
             <Navbar.Brand href="#home" className={styles.logo}><img src={logo} className={styles.pic}/></Navbar.Brand>
                  <Navbar.Brand href="#home" className={styles.splav}> Сплав_Калининград39</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Маршруты</Nav.Link>
            <Nav.Link href="#pricing">Цены</Nav.Link>
             <Nav.Link href="#pricing">Фотоотчет</Nav.Link>
            <NavDropdown title="Компаниям" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Корпоративные туры</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Индивидуальные туры
              </NavDropdown.Item>                         
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Контакты</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Отзывы
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

