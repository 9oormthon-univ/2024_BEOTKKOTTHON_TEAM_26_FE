import Header from "../components/Header";
import styled, {createGlobalStyle} from "styled-components";
import {Card, Carousel, Col, Image, ProgressBar as BootstrapProgressBar, Row} from "react-bootstrap";
import exampleImage from "../images/img.png";
import exampleImage2 from "../images/img_1.png";
import exampleImage3 from "../images/img_2.png";
import exampleImage1 from "../images/오징어.png";
import NavbarInCategoriesAndDetailPages from "../components/NavbarInCategoriesAndDetailPages";


const StyledCarouselItem = styled(Carousel.Item)`
margin-top: 2%;
  margin-left: 12.5%;
  max-width: 75%; // 캐러셀 아이템의 최대 너비를 컨테이너의 100%로 설정
`;
const SquareButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 54px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  // 기본 상태 (마우스가 벗어났을 때)
  background-color: #DEDEDE;  // 글자색이 배경색이 되도록 설정
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
    color: #DEDEDE;              // 원래의 글자색
  }
`;
const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center; // 버튼 내부 텍스트를 가운데 정렬합니다
  align-items: center;
  padding: 9px 11px;
  gap: 10px;
  transform: translateY(15px); /* 버튼을 아래로 10px만큼 내립니다 */

  width: 83px;
  height: 26px;


  background: #8FD1A3;
  border-radius: 14px;
  border: none; // 기본 테두리 제거

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #FFFFFF;

  cursor: pointer; // 마우스 포인터를 버튼 위에 올렸을 때 손가락 모양으로 변경


  flex: none; // flex-item으로서의 능력 설정
  order: 0; // flex-item의 순서
  flex-grow: 0; // flex 컨테이너 내에서의 확장 비율
`;

// "주재료 기준으로 작성되었습니다." 텍스트를 위한 스타일드 컴포넌트
const ProductSubtitle = styled.div`

  margin-left: 4%;
  text-align: start;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #00591B;
`;

// 컨테이너를 Flex로 정의하여 아이템을 가로로 나열
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; // 요소들 사이의 간격을 최대로 설정
  align-items: end; // 요소들을 수직 방향에서 중앙으로 정렬
  width: 100%; // 컨테이너의 폭을 부모의 100%로 설정
  padding: 0 25px; // 양쪽에 여백을 줍니다 (필요에 따라 조정)
 
`;




// "반건조 버터 오징어" 텍스트를 위한 스타일드 컴포넌트
const ProductTitle = styled.div`
  width: 161px;
  height: 23px;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #00591B;
`;
const FlexDiv = styled.div`
  align-items: center; // 요소들을 세로축 중앙에 위치시킵니다.
display: flex;
`;

const CalorieInfo = styled.span`
 


 
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #00591B;
`;

const CalorieInfoNext = styled.span`
 
 margin-left: 10px;

 
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  letter-spacing: -0.1px;
  color: #00591B;
`;

// ProgressBar를 위한 스타일 컴포넌트 정의
const StyledProgressBar = styled(BootstrapProgressBar)`
  &.progress {
    width: 47px; // ProgressBar의 너비
    height: 3px; // ProgressBar의 높이
    margin-right: 10px; // 글자와의 간격 조정
    background-color: #D9D9D9; // 배경 색상
    border-radius: 9px; // 둥근 모서리

    .progress-bar {
      background-color: #8FD1A3; // 진행 막대 색상
      border-radius: 9px; // 진행 막대 둥근 모서리
    }
  }
`;

// 영양 정보 텍스트와 ProgressBar를 함께 담을 컨테이너
const NutritionItem = styled.div`
  display: flex;
  align-items: center; // 세로 중앙 정렬
  font-family: 'Arial';
  font-weight: 400;
  font-size: 12px;
  line-height: 18px; // 높이 일치
  color: #00591B;
  margin: 5px 0; // 아이템 간 간격 조정
`;

// 여기서 각 NutritionItem 컴포넌트는 영양 정보 텍스트와 ProgressBar를 나란히 배치합니다.

const CircleImage = ({ imageUrl }) => {
    return <CircleImageContainer imageUrl={imageUrl} />;
};
const CircleImageContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 88px;
  height: 88px;
  border: 1px solid #00591B;
  border-radius: 50%; // 원형으로 만들기
  transform: translateY(15px) translateX(15px); /* 버튼을 아래로 10px만큼 내립니다 */

  // 이미지를 ::before 가상 요소로 추가
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 55px;
    background-image: url(${props => props.imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transform: translate(-50%, -50%); // 중앙 정렬
  }
`;
function CarouselsInPayment() {
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
// 전역 설정
const GlobalStyle = createGlobalStyle`
  body {
    color: #00591B; /* 기본 글자 색상 설정 */
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */
    letter-spacing: -0.1px;
  }
`;
// 전역 설정


// 전체화면 덮는거
const AllContainer = styled.div`
width: 65%;
background: #DEDEDE;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  /* 자식 요소(.child)를 중앙 정렬하기 */

  text-align: center;
`;

// 하단화면 덮는거
const BottomContainer = styled.div`
width: 85%;
background: #DEDEDE;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  /* 자식 요소(.child)를 중앙 정렬하기 */

  text-align: center;
`;

function Payment() {
    // maxWidth 값을 변경하고 싶을 때 이 값을 수정합니다.

return (
    <div>
        <GlobalStyle></GlobalStyle>
       <NavbarInCategoriesAndDetailPages/>
        {/*전체화면 감싸는거*/}
       <AllContainer>
           <CarouselsInPayment  >

</CarouselsInPayment>

           <BottomContainer>
           <Card style={{background : '#DEDEDE', border : 'none'}}>
               <Card.Body>
                   <Row>
                       <Col xs={12} md={6}> {/* 첫 번째 열 */}
                           <Row>
                               <Col xs={5} md={4}>
                                   <CircleImage imageUrl={exampleImage1} />

                                   {/*<img src={exampleImage} alt="Example" style={{ maxWidth: '100%', height: 'auto' }} />*/}
                               </Col>
                               <Col xs={7} md={8}>
                                   <FlexDiv>  <CalorieInfo>215.6kcal</CalorieInfo>
                                       <CalorieInfoNext>/ 100g (70g)</CalorieInfoNext></FlexDiv>

                                   <Card.Text >
                                       <NutritionItem>
                                           <StyledProgressBar now={88} />지방 (8.8g)
                                       </NutritionItem>
                                       <NutritionItem>
                                           <StyledProgressBar now={56.4} />탄수화물 (5.64g)
                                       </NutritionItem>
                                       <NutritionItem>
                                           <StyledProgressBar now={33.4} />단백질 (3.34g)
                                       </NutritionItem>
                                       <NutritionItem>
                                           <StyledProgressBar now={23.3} />나트륨 (233mg)
                                       </NutritionItem>


                                   </Card.Text>
                               </Col>
                           </Row>
                       </Col>
                       <Col xs={12} md={6}> {/* 두 번째 열 */}
                           <Row>
                               <Col xs={5} md={4}>
                                   <CircleImage imageUrl={exampleImage1} />

                               </Col>
                               <Col xs={7} md={8}>

                                       <FlexDiv>  <CalorieInfo>215.6kcal</CalorieInfo>
                                           <CalorieInfoNext>/ 100g (70g)</CalorieInfoNext></FlexDiv>


                                   <Card.Text >
                                       <NutritionItem>
                                           <StyledProgressBar now={88} />지방 (8.8g)
                                       </NutritionItem>
                                       <NutritionItem>
                                           <StyledProgressBar now={56.4} />탄수화물 (5.64g)
                                       </NutritionItem>
                                       <NutritionItem>
                                           <StyledProgressBar now={33.4} />단백질 (3.34g)
                                       </NutritionItem>
                                       <NutritionItem>
                                           <StyledProgressBar now={23.3} />나트륨 (233mg)
                                       </NutritionItem>


                                   </Card.Text>

                               </Col>


                           </Row>


                       </Col>
                       <FlexContainer>



                           <SquareButton>저장하기</SquareButton>
                           <SquareButton>저장하기</SquareButton>


                       </FlexContainer>

                   </Row>



               </Card.Body>


           </Card>
               </BottomContainer>

       </AllContainer>
    </div>
)
}

export default Payment