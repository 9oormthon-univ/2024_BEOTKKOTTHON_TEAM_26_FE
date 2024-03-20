import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../images/img_3.png";
import {Nav} from "react-bootstrap";

function NavbarInCategoriesAndDetailPages() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"> <img style={{marginRight: '30px'}}
                                                 src={logo}
                                                 width="90"
                                                 height="29.07"
                                                 className="d-inline-block align-top"
                                                 alt="React Bootstrap logo"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">펀딩하기</Nav.Link>
                        <Nav.Link href="#link">실시간 펀딩 현황</Nav.Link>
                        <Nav.Link href="#link">완료 펀딩</Nav.Link>
                        <Nav.Link href="#link">구매 후기</Nav.Link>
                        <Nav.Link href="#link">이달의 기업</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarInCategoriesAndDetailPages