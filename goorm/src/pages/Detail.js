// 상세페이지 2
import NavbarInCategoriesAndDetailPages from "../components/NavbarInCategoriesAndDetailPages";
import {Button, Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import exampleImage from '../images/img.png'; // 'src/images' 폴더 내에 위치
function Detail() {
    return (
        // 상단 네비바
        <div className="container">
            <NavbarInCategoriesAndDetailPages></NavbarInCategoriesAndDetailPages>

            {/*    1헹 약 화면의 70퍼*/}
            <div>

                <Container>
                    <Row>
                        {/*    좌 6(사진) 우 4*/}
                        <Col xs={7}><Image style={{margin: '30px'}} src={exampleImage} fluid/></Col>
                        {/* 우측 버튼들 */}
                        <Col style={{textAlign: 'start', margin: '40px'}}>
                            <div>aaaaa</div>
                            <h1>aaaaa</h1>
                            <div>식스펙에서는 역전할머니 반건조 버터 오징어 밀키트를 판매가보다 42% 저렴한 가격으로 만나보실 수 있어요 30년 전통을 이어오고 있는 역전할머니에서 직접
                                제공하는 반건조 버터 오징어는 출시 이후부터
                                지금까지 매장 매출의 1위 메뉴입니다.
                            </div>
                            <div>3월 19일 (화) 오후 6시 오픈 예정!</div>
                            <div>aaaaa</div>
                            <div>aaaaa</div>
                        </Col>


                    </Row>
                </Container>

            </div>


            {/*    2행 약 화면의 30퍼 차지*/}
            <div>

                <Container>
                    <Row>
                        {/*    좌 6(사진) 우 4*/}
                        <Col xs={7}>
                            <Card>
                                <Card.Header as="h5">Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        {/*오른쪽 4*/}
                        <Col>
                            <Card>
                                <Card.Header as="h5">Featured</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
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