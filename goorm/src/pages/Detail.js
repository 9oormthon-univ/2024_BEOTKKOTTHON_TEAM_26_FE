// 상세페이지 2
import NavbarInCategoriesAndDetailPages from "../components/NavbarInCategoriesAndDetailPages";
import {Button, Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import exampleImage from '../images/img.png';
import CarouselsInDetail from "../components/CarouselsInDetail"; // 'src/images' 폴더 내에 위치
import { FaRegSmile } from 'react-icons/fa';
import ProgressBar from "react-bootstrap/ProgressBar";
function Detail() {
    const buttonHeight = '70px'; //오른쪽 버튼 높이

    return (
        // 상단 네비바
        <div className="container">
            <NavbarInCategoriesAndDetailPages></NavbarInCategoriesAndDetailPages>

            {/*    1헹 약 화면의 70퍼*/}
            <div >

                <Container>
                    <Row>
                        {/*    좌 6(사진) 우 4*/}

                        {/*<Image style={{margin: '30px'}} src={exampleImage} fluid/>*/}
                        <Col xs={7}><CarouselsInDetail></CarouselsInDetail></Col>
                        {/* 우측 버튼들 */}
                        <Col style={{textAlign: 'start', margin: '40px'}}>
                            <div style={{display : 'flex'}}><button className="button-in-category">다이어트 도시락</button><button className="button-in-category">다이어트 도시락</button><button className="button-in-category">다이어트 도시락</button></div>
                            <div style={{margin :'10px'}}>  <h3>역전할머니 반건조 버터 오징어 밀키트</h3></div>

                            <div>식스펙에서는 역전할머니 반건조 버터 오징어 밀키트를 판매가보다 42% 저렴한 가격으로 만나보실 수 있어요 30년 전통을 이어오고 있는 역전할머니에서 직접
                                제공하는 반건조 버터 오징어는 출시 이후부터
                                지금까지 매장 매출의 1위 메뉴입니다.
                            </div>
                            <div style={{margin: '15px'}}>
                                <h3>  3월 19일 (화) 오후 6시 오픈 예정!</h3>
                              </div>


                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
                                 <button className="button-in-cardsincategory" style={{ height: buttonHeight, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >3월 16일 펀딩 오픈!</button>


                                <button className="button-with-icon" style={{height: buttonHeight, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <FaRegSmile />
                                    <span style={{ fontSize: '0.9em' }}> 62명 참여</span> {/* This sets the text size to 75% of the parent element */}
                                </button>
                            </div>



                            <div style={{boxShadow : '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                                <Card>

                                    <Card.Body>
                                        {/*회사 태그 */}
                                        <div>

                                        </div>
                                        <Card.Title>62명이 펀딩에 참여했어요!</Card.Title>
                                        <Card.Text style={{maxWidth:'70%', textAlign :'start'}}>
                                            펀딩 마감 날짜는 4월 2일이에요!
                                            펀딩에 참여하면 42% 저렴하게 구매할 수 있어요!
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </div>
                        </Col>


                    </Row>
                </Container>

            </div>


            {/*    2행 약 화면의 30퍼 차지*/}
            <div>

                <Container>
                    <Row className="align-items-stretch">


                        {/*    좌 6(사진) 우 4*/}
                        <Col xs={12} md={7} style={{ marginInline: '30px' }}>
                            <Card style={{boxShadow : '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>

<div style={{display : 'flex'}}>

    <div
        >반건조 버터 오징어</div>

    <button className="button-in-category" style={{ backgroundColor: '#8FD1A3', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px' }}>
        저장하기
    </button>

</div>


                                <Card.Body>
                                    <Row>
                                        <Col xs={12} md={6}> {/* 첫 번째 열 */}
                                            <Row>
                                                <Col xs={5} md={4}>
                                                    <img src={exampleImage} alt="Example" style={{ maxWidth: '100%', height: 'auto' }} />
                                                </Col>
                                                <Col xs={7} md={8}>
                                                    <div>215.6kcal / 100g (70g)</div>
                                                    <Card.Text>
                                                        <div>지방 (8.8g)</div>
                                                        <ProgressBar now={88}  />
                                                        <div>탄수화물 (5.64g)</div>
                                                        <ProgressBar now={56.4} />
                                                        <div>단백질 (3.34g)</div>
                                                        <ProgressBar now={33.4}  />
                                                        <div>나트륨 (233mg)</div>
                                                        <ProgressBar now={23.3} />
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={12} md={6}> {/* 두 번째 열 */}
                                            <Row>
                                                <Col xs={5} md={4}>
                                                    <img src={exampleImage} alt="Example" style={{ maxWidth: '100%', height: 'auto' }} />

                                                </Col>
                                                <Col xs={7} md={8}>
                                                    <div>215.6kcal / 100g (70g)</div>
                                                    <Card.Text>
                                                        <div>지방 (8.8g)</div>
                                                        <ProgressBar now={88}  />
                                                        <div>탄수화물 (5.64g)</div>
                                                        <ProgressBar now={56.4} />
                                                        <div>단백질 (3.34g)</div>
                                                        <ProgressBar now={33.4}  />
                                                        <div>나트륨 (233mg)</div>
                                                        <ProgressBar now={23.3} />
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>
                        </Col>


                        {/*오른쪽 4*/}
                        <Col >
                            <Card style={{boxShadow : '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>

                                <Card.Body>



                                    {/*회사 태그 */}
                                    <div style={{display : 'flex'   , gap: '8px', marginBottom: '16px'}}><button className="button-in-category">다이어트 도시락</button><button className="button-in-category">다이어트 도시락</button></div>


                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                        {/* You can replace this with the actual image you want to use */}
                                        <FaRegSmile size="60px" style={{ borderRadius: '50%', border: '2px solid #8FD1A3' }} />



                                        <div>
                                            <p style={{ margin: 0 }}>역전할머니 맥주</p>
                                            <p style={{ margin: 0, fontSize: '15px', color: 'grey' }}>2년 연속 우수 판매자로 선정되었어요!</p>
                                        </div>

                                        <button className="button-in-category" style={{ backgroundColor: '#8FD1A3', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px' }}>
                                            🔔 알림받기
                                        </button>

                                    </div>





                                    <hr style={{border: '1px solid #8FD1A3'   }} />
                                    <h6>더보기</h6>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>
                </Container>
            </div>


        </div>


    )

}

export default Detail