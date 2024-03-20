// 상세페이지 1
import logo from '../images/img_3.png'; // 이미지 임포트
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Categories.css'
import {Button, Card, Col, Nav, NavDropdown, ProgressBar, Row} from "react-bootstrap";
import Progress from "../components/Progress";
import {useState} from "react";
import CardsInCategory from "../components/CardsInCategory";
import exampleImage from '../images/img.png';
import NavbarInCategoriesAndDetailPages from "../components/NavbarInCategoriesAndDetailPages"; // 이미지를 import 합니다.
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

        return (
// 전체를 담는 div 컨테이너
            <div>
<NavbarInCategoriesAndDetailPages></NavbarInCategoriesAndDetailPages>



                {/*현재 위치*/}
                <div style={{textAlign: 'left', padding: '20px', marginLeft: '3%'}}>현재 내 위치에서 마켓까지 최대 거리</div>

                {/*현재 위치 scroll bar*/}
                <div style={{marginLeft: '10%'}}>
                    {/* Progress 컴포넌트를 사용하고, 진행 상황으로 now을 전달합니다. */}
                    <Progress now={20} max={100}/>
                </div>


                {/* 카테고리 */}
                <div style={{display: 'flex', justifyContent: 'flex-start', padding: '20px', marginLeft: '3%'}}>

                    <button className="button-in-category">다이어트 도시락</button>
                    <button className="button-in-category">비건</button>
                    <button className="button-in-category">연어</button>
                    <button className="button-in-category">리코타 치즈</button>
                    <button className="button-in-category">닭가슴살</button>
                    <button className="button-in-category">브라타 치즈</button>
                </div>
                {/*음식사진들 나열하는 카드*/}
                {/*<Container>*/}
                {/*    <Row>*/}
                {/*        <Col><CardsInCategory></CardsInCategory></Col>*/}
                {/*        <Col><CardsInCategory></CardsInCategory></Col>*/}
                {/*        <Col><CardsInCategory></CardsInCategory></Col>*/}

                {/*    </Row>*/}
                {/*    <Row>*/}
                {/*        <Col><CardsInCategory></CardsInCategory></Col>*/}
                {/*        <Col><CardsInCategory></CardsInCategory></Col>*/}
                {/*        <Col><CardsInCategory></CardsInCategory></Col>*/}
                {/*    </Row>*/}
                {/*</Container>*/}
                <Container>
                    <Row className="g-4">
                        {Array.from({ length: 6 }).map((_, idx) => ( // 6개의 카드를 생성
                            <Col key={idx} xs={12} md={6} lg={4}> {/* 화면 크기에 따른 열 조정 */}
                                <CardsInCategory />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )


}

export default Categories