import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './Header.css'


const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand style={{ fontSize: '22px' }}as={Link} to="/">
                    <img className="headerGrupImg" alt="grupImg" src="img/GRUP로고.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto mx-auto">
                        <Nav.Link style={{ fontSize: '20px', color:'black'}}href="#features">HOME</Nav.Link>
                        <Nav.Link style={{ fontSize: '20px', color:'black' }}href="#pricing">AI 식물 추천</Nav.Link>
                        <NavDropdown title={<span style={{ fontSize: '20px', color: '#c0eb75' }}>게시판</span>} id="collasible-nav-dropdown">
                            <NavDropdown.Item style={{ color: 'black' }} href="#action/3.1">고민게시판</NavDropdown.Item>
                            <NavDropdown.Item style={{ color: 'black' }} href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{ color: 'black' }} href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item style={{ color: 'black' }} href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">로그인</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        회원가입
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
        {/*
        <nav class="navbar navbar-expand-lg">
            <div class="container px-5">
                <a class="navbar-brand" href="/components/Recommend">로고</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">추천</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">게시판</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav className="navbar">
            <div className="navbar__logo">
                <i className="fa-brands fa-accusoft"></i>
                <a href="">사이트이름</a>

            </div>
            <ul className="navbar__menu">
                <li><a href="">Home</a></li>
                <li><a href="">추천</a></li>
                <li><a href="">게시판</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href=""></a></li>

            </ul>
            <ul className="navbar__icons">
                <li><a href="">로그인</a></li>
                <li><a href="">회원가입</a></li>
                <li><i className="fa-brands fa-facebook"></i></li>
            </ul>
        </nav>
*/}
}

export default Header