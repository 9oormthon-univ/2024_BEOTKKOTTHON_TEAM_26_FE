// 상세페이지 1
import logo from '../img_3.png'; // 이미지 임포트
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Categories.css'
import {Nav, NavDropdown, ProgressBar} from "react-bootstrap";
import Progress from "../components/Progress";

function Categories() {
    // 상상된 서버 요청 로직 (주석 처리됨)
    /*
    useEffect(() => {
      fetch('/api/products')
        .then(response => response.json())
        .then(data => {
          // 상태 업데이트 또는 다른 로직
        })
        .catch(error => console.error('Error:', error));
    }, []);
    */

    return(

<div>   {/*    상단 navbar*/}



    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home"> <img style={{marginRight : '30px'}}
                src={logo}
                width="90"
                height="29.07"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
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

    {/*현재 위치*/}
    <div style={{textAlign : 'left', padding : '20px'}}>현재 내 위치에서 마켓까지 최대 거리</div>

    {/*현재 위치 scroll bar*/}
    <div>

        {/* Progress 컴포넌트를 사용하고, 진행 상황으로 now을 전달합니다. */}
        <Progress now={45} />
    </div>



    {/*카테고리*/}
    <div></div>




</div>
)

}

export default Categories