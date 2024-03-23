import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../images/img_3.png";
import {Nav} from "react-bootstrap";
import styled from "styled-components";

// Navbar 컴포넌트를 스타일링
const StyledNavbar = styled(Navbar)`
  background-color: #FFFFFF !important; // 하얀색 배경 설정
`;
// Nav.Link 컴포넌트를 스타일링하기 위해 styled-components 사용
const StyledNavLink = styled(Nav.Link)`
  /* 베너쪽 */
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;


  letter-spacing: -0.1px;


`;
function NavbarInCategoriesAndDetailPages() {
    return(
        <StyledNavbar>
            <Container>
                <Navbar.Brand href="#home"> <img style={{marginRight: '30px', marginTop: '5%'}}

                                                 src={logo}
                                                 width="90"
                                                 height="29.07"
                                                 className="d-inline-block align-top"
                                                 alt="React Bootstrap logo"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <StyledNavLink href="#home">펀딩하기</StyledNavLink>
                        <StyledNavLink href="#link">실시간 펀딩 현황</StyledNavLink>
                        <StyledNavLink href="#link">완료 펀딩</StyledNavLink>
                        <StyledNavLink href="#link">구매 후기</StyledNavLink>
                        <StyledNavLink href="#link">이달의 기업</StyledNavLink>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    )
}

export default NavbarInCategoriesAndDetailPages