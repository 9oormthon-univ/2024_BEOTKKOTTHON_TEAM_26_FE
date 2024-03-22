import Header from "../components/Header";
import NavbarInCategoriesAndDetailPages from "../components/NavbarInCategoriesAndDetailPages";
import {Card, Carousel, Col, Image, ProgressBar as BootstrapProgressBar, Row} from "react-bootstrap";
import exampleImage from "../images/img.png";
import exampleImage3 from "../images/img_2.png";
import exampleImage2 from "../images/img_1.png";
import styled, {createGlobalStyle} from "styled-components";
import exampleImage1 from "../images/오징어.png";
import {FaRegSmile} from "react-icons/fa";

import React, {useState} from 'react';
import Slider from 'react-slick';
import CarouselsInDetailView from "../components/CarouselsInDetailView";
import CenterMode from "../components/CarouselsInDetailView";
import SimpleSlider from "../components/CarouselsInDetailView";
import AutoPlay from "../components/CarouselsInDetailView";
// 이미지 컴포넌트의 스타일링을 위한 스타일 컴포넌트
// const ImageWrapper = styled.div`
//   transition: transform .3s ease;
//   &:focus {
//     outline: none;
//   }
//   &.slick-center {
//     transform: scale(1.5); // 중앙 이미지 확대
//   }
// `;
// 중앙 이미지 확대, 나머지는 축소하는 스타일


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
const NotifyButton = styled.button` //.button-in-category
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 25px;
  background-color: #8FD1A3;
  border-radius: 20px;
  border: none;
  color: white;
  text-align: center;
  
  cursor: pointer;
margin-left: 100px;
margin-bottom: 30px;

 
`;
const HashTagButton = styled.button` //.button-in-category
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 25px;
  background-color: black;
  border-radius: 20px;
  border: none;
  color: white;
  text-align: center;
  margin: 5px;
  cursor: pointer;


 
`;
const StyledCarouselItem = styled(Carousel.Item)`
  //
  //margin-left: 12.5%;
  //max-width: 75%; // 캐러셀 아이템의 최대 너비를 컨테이너의 100%로 설정
`;
const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin: 0 auto; // 좌우 마진을 auto로 설정하여 중앙 정렬
`;
const SquareButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 54px;font-style: normal;
  
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  letter-spacing: -0.1px;

  // 기본 상태 (마우스가 벗어났을 때)
  background-color: white;  // 글자색이 배경색이 되도록 설정
  color: #004716;          // 배경색이 글자색이 되도록 설정


  text-align: center;
  margin: 5px;
  cursor: pointer;
  width: 299px;
border: black 1px solid;
  border-radius: 8px;
  // 마우스 hover 상태
  &:hover {
    background-color: #004716; // 원래의 배경색
    color: white;              // 원래의 글자색
  }
`;
const ContentImg = styled.div`

  display: inline-flex; // Flexbox를 사용하여 이모티콘을 스타일링할 수 있습니다.
  align-items: center;
  justify-content: center;
  transform: translateY(-10px); // 위로 10px 이동

`;

const ContentTitle = styled.p`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  letter-spacing: -0.1px;

  
`;

const ContentNotTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  letter-spacing: -0.1px;
color: #00591B; /* 기본 글자 색상 설정 */
  margin-top: -10px;
  
`;

const ContentBottom = styled.div`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  /* or 150% */
  letter-spacing: -0.3px;
color: #00591B; /* 기본 글자 색상 설정 */
  margin-top: 15px;

  
`;


function CarouselsInDeatilView() {
    return (

        <Carousel>
            <StyledCarouselItem>
                {/*<Image style={{margin: '30px'}} src={exampleImage} fluid/>*/}
                <Image  src={exampleImage} alt="First slide" fluid />
                {/*fluid가 반응형*/}
            </StyledCarouselItem>
            <StyledCarouselItem>
                {/*<Image style={{margin: '30px'}} src={exampleImage} fluid/>*/}
                <Image  src={exampleImage3} alt="First slide" fluid />
                {/*fluid가 반응형*/}
            </StyledCarouselItem>

            <StyledCarouselItem>
                {/*<Image style={{margin: '30px'}} src={exampleImage} fluid/>*/}
                <Image  src={exampleImage2} alt="First slide" fluid />
                {/*fluid가 반응형*/}
            </StyledCarouselItem>

        </Carousel>

    )
}



function DetailView() {
    return (
        <div>
            <GlobalStyle></GlobalStyle>
            <NavbarInCategoriesAndDetailPages/>

            {/*캐러셀 담을 div 박스 */}
<div style={{justifyContent : 'center', alignItems : 'center', textAlign : 'center'}}>
    <CarouselContainer><CarouselsInDeatilView></CarouselsInDeatilView></CarouselContainer>

    <ContentBottom>AI가 추천해준 해시태그로 골랐어요!</ContentBottom>

   <div style={{display : 'flex', justifyContent: 'center', marginBottom : '15px',marginTop : '5px'}}>  <CategoryButton>디저트</CategoryButton>
       <CategoryButton>디저트</CategoryButton>
       <CategoryButton>디저트</CategoryButton></div>

    <Card style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '14px',
        width: '42%',        // 너비를 70%로 설정
        marginLeft: 'auto',  // 좌우 마진을 auto로 설정하여 중앙 정렬
        marginRight: 'auto'
    }}>

        <Card.Body>



            {/*회사 태그 */}
            <div style={{display : 'flex'   , gap: '8px', marginBottom: '16px'}}>

<HashTagButton>🏅우수판매자</HashTagButton>
<HashTagButton>🏅우수판매자</HashTagButton>
<HashTagButton>🏅우수판매자</HashTagButton>
            </div>


            <div style={{ display: 'flex', alignItems: 'center' , gap: '10px', marginLeft : '30px'}}>
                {/* You can replace this with the actual image you want to use */}
                <ContentImg> <FaRegSmile size="60px" style={{ borderRadius: '50%', border: '2px solid #8FD1A3' }} /></ContentImg>




                <div>
                    <ContentTitle>역전할머니 맥주</ContentTitle>

                    <ContentNotTitle>2년 연속 우수 판매자로 선정되었어요!</ContentNotTitle>
                    {/*<p style={{ margin: 0 }}></p>*/}
                    {/*<p style={{ margin: 0, fontSize: '15px', color: 'grey' }}></p>*/}
                </div>
<NotifyButton>🔔 알림받기</NotifyButton>


            </div>





            <hr style={{border: '1px solid #8FD1A3'   }} />
            <h6 style={{marginBottom : '-3px'}}>더보기</h6>
        </Card.Body>
    </Card>
<ContentBottom>“하나 하나 정성껏 만들었어요”</ContentBottom>







   <AutoPlay></AutoPlay>

    <div style={{display : 'flex', justifyContent: 'center', marginBottom : '30px', marginTop : '30px'}}>   <SquareButton>저장하기</SquareButton>
    </div>



</div>





        </div>
    )
}
export default DetailView