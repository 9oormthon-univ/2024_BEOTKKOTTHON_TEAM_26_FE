// 상세페이지 1
import logo from '../images/img_3.png'; // 이미지 임포트
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Card, Col, Nav, NavDropdown, ProgressBar, Row} from "react-bootstrap";
import Progress from "../components/Progress";
import {useState} from "react";
// import CardsInCategory from "../components/CardsInCategory";
import exampleImage from '../images/img.png';
import NavbarInCategoriesAndDetailPages from "../components/NavbarInCategoriesAndDetailPages";
import styled, {createGlobalStyle} from "styled-components"; // 이미지를 import 합니다.

// 전역 설정
const GlobalStyle = createGlobalStyle`
  body {
    color: #00591B; /* 기본 글자 색상 설정 */
    font-family: 'Arial';
  }
`;
// 전역 설정

// StyledCol 컴포넌트 정의
const StyledCol = styled(Col)`
  margin-bottom: -30px; // 여기서는 10px로 설정했지만, 원하는 간격에 맞춰 조절하세요.
  margin-top: 20px; // 여기서는 10px로 설정했지만, 원하는 간격에 맞춰 조절하세요.
`;
// StyledCard 컴포넌트 정의
const StyledCard = styled(Card)`
  width: 19rem;
  color: #00591B;
  border: none; // 테두리 제거
  box-shadow: none; // 만약 그림자도 제거하고 싶다면 이 속성을 추가하세요.

`;
// Card 이미지의 높이를 조절하는 스타일 컴포넌트
const StyledCardImg = styled(Card.Img)`
  height: auto; // 높이를 자동으로 설정하여 이미지의 비율을 유지
  max-height: 228px; // 최대 높이를 설정하여 이미지의 크기를 제한
`;

// 네모난 버도
const BigSquareButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 36px;

  background-color: #004716;
  border-radius: 5px;
  border: none;
  color: white;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  width: 100%;
`;
// progressbar 관련



// progressbar 관련 월

// 카테고리 페이지에서 사용하는 버튼 스타일
const CategoryButton = styled.button` //.button-in-category
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 25px;
  background-color: #DEDEDE;
  border-radius: 20px;
  border: none;
  color: white;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #004716; /* 활성화될 때의 색상 */
    color: white;
  }
`;
/*category 페이지 음식카드 밑에 cardsincategory컴포넌트 안에 있는 버튼 .button-in-cardsincategory*/
const CardsCategoryButton = styled(CategoryButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 35px;
  background-color: #004716;
  border-radius: 5px;
  border: none;
  color: white;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  width: 100%;
`;

function CardsInCategory() {
    return (
        <StyledCard>
            <StyledCardImg variant="top" src={exampleImage} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to
                </Card.Text>
               <BigSquareButton>3월 16일 펀딩 오픈!</BigSquareButton>
            </Card.Body>
            </StyledCard>
    )
}


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
            <div style={{textAlign: 'left', padding: '5px', marginLeft: '3%'}}>현재 내 위치에서 마켓까지 최대 거리</div>

            {/*현재 위치 scroll bar*/}
            <div>
                {/* Progress 컴포넌트를 사용하고, 진행 상황으로 now을 전달합니다. */}
                <Progress now={20} max={100}/>
            </div>


            {/* 카테고리 */}
            <div style={{display: 'flex', justifyContent: 'flex-start', padding: '10px', marginLeft: '3%'}}>

                <CategoryButton>다이어트 도시락</CategoryButton>
                <CategoryButton>비건</CategoryButton>
                <CategoryButton>연어</CategoryButton>
                <CategoryButton>리코타 치즈</CategoryButton>
                <CategoryButton>닭가슴살</CategoryButton>
                <CategoryButton>브라타 치즈</CategoryButton>
            </div>

            <Container>
                <Row className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => ( // 6개의 카드를 생성
                        <StyledCol key={idx} xs={12} md={6} lg={4}> {/* 화면 크기에 따른 열 조정 */}
                            <CardsInCategory />
                        </StyledCol>
                    ))}
                </Row>
            </Container>
        </div>
    )


}

export default Categories