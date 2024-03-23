// 상세페이지 1
import logo from '../images/img_3.png'; // 이미지 임포트
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Card, Col, Nav, NavDropdown, ProgressBar, Row} from "react-bootstrap";
import Progress from "../components/Progress";
import {useEffect, useState} from "react";
// import CardsInCategory from "../components/CardsInCategory";
import exampleImage from '../images/img.png';
import NavbarInCategoriesAndDetailPages from "../components/NavbarInCategoriesAndDetailPages";
import styled, {createGlobalStyle} from "styled-components"; // 이미지를 import 합니다.
import { useParams } from 'react-router-dom';

function formatDate(fund_start_date) {
    const date = new Date(fund_start_date);
    const options = { month: 'long', day: 'numeric' }; // "월 일" 형식으로 표시
    const formattedDate = new Intl.DateTimeFormat('ko-KR', options).format(date);
    return `${formattedDate} 펀딩 오픈!`;
}

// 전역 설정
const GlobalStyle = createGlobalStyle`
  body {
    color: #00591B; /* 기본 글자 색상 설정 */
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
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

  text-align: center;
  margin-left: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  color: black;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  text-align: center;
  letter-spacing: -0.1px;
  
  &:hover {
    background-color: #004716; /* 활성화될 때의 색상 */
    color: white;
  }
`;

const CategoryButtonAnother = styled.button` //.button-in-category
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 25px;
  background-color: #004716;
  border-radius: 20px;
  border: none;

  text-align: center;
  margin: auto 10px;
  cursor: pointer;
  color: white;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  text-align: center;
  letter-spacing: -0.1px;
  
  &:hover {
    background-color: #8FD1A3; /* 활성화될 때의 색상 */
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

function CardsInCategory({id, title, img_url, explanation, fund_start_date}) {
    return (
        <StyledCard>
            {/*<StyledCardImg variant="top" src={exampleImage}*/}
            {/*/>*/}
            <StyledCardImg variant="top" src={img_url} />
            <Card.Body>
                {/*서버에서 데이터 받아왔을 때*/}
                <Card.Title style={{ textAlign: 'center',fontWeight : '700' }}>{title}</Card.Title>
                {/*<Card.Text>{explanation}</Card.Text>*/}
                {/*<BigSquareButton>{fund_start_date} 펀딩 오픈!</BigSquareButton>*/}
                {/*<BigSquareButton>{formatDate(fund_start_date)}</BigSquareButton>*/}
                <div style={{display : 'flex', justifyContent : 'center'}}><CategoryButtonAnother>디저트</CategoryButtonAnother>
                    <CategoryButtonAnother>달콤한</CategoryButtonAnother></div>




                {/* <Card.Title style={{*/}
                {/*     textAlign : 'center'*/}
                {/* }}>Card Title</Card.Title>*/}
                {/* <Card.Text>*/}
                {/*     Some quick example text to*/}
                {/* </Card.Text>*/}
                {/*<BigSquareButton>3월 16일 펀딩 오픈!</BigSquareButton>*/}




            </Card.Body>
        </StyledCard>
    )
}
const CategoriesHeadFont = styled(Col)`
  text-align: left;
  padding: 5px;
  margin-left: 5%;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height, or 150% */
  letter-spacing: -0.1px;
`;


function Categories() {
    const [posts, setPosts] = useState([]);
    const { category_id } = useParams(); // URL에서 category_id 값을 가져옵니다
    useEffect(() => {
        axios.get(`http://44.206.161.54:8080/funding/all/${category_id}`)
            .then((response) => {
                setPosts(response.data.result.data.posts);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [category_id]); // category_id가 변경될 때마다 useEffect를 다시 실행합니다.



    return (
// 전체를 담는 div 컨테이너
        <div>
            <GlobalStyle></GlobalStyle>
            <NavbarInCategoriesAndDetailPages></NavbarInCategoriesAndDetailPages>



            {/*현재 위치*/}
            <CategoriesHeadFont>현재 내 위치에서 마켓까지 최대 거리</CategoriesHeadFont>





            {/* 카테고리 */}
            <div style={{display: 'flex', justifyContent: 'flex-start', padding: '10px', marginLeft: '3%'}}>

                <CategoryButton>100M</CategoryButton>
                <CategoryButton>200M</CategoryButton>
                <CategoryButton>300M</CategoryButton>
                <CategoryButton>400M</CategoryButton>
                <CategoryButton>500M</CategoryButton>

            </div>

            <Container>
                <Row className="g-4">



                    {/*{Array.from({ length: 6 }).map((_, idx) => ( // 6개의 카드를 생성*/}
                    {/*    <StyledCol key={idx} xs={12} md={6} lg={4}> /!* 화면 크기에 따른 열 조정 *!/*/}
                    {/*        <CardsInCategory />*/}

                    {/*    서버에서 받아왔을 때*/}


                    {posts.map((post) => (
                        <StyledCol key={post.id} xs={12} md={6} lg={4}>
                            <CardsInCategory
                                id={post.id}
                                title={post.title}
                                img_url={post.img_url}
                                explanation={post.explanation}
                                fund_start_date={post.fund_start_date}
                            />


                        </StyledCol>
                    ))}
                </Row>
            </Container>





        </div>
    )


}

export default Categories