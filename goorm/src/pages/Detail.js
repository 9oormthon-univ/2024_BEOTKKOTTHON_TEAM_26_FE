import styled, {createGlobalStyle} from 'styled-components';
import NavbarInCategoriesAndDetailPages from "../components/NavbarInCategoriesAndDetailPages";
import exampleImage from '../images/img.png';
import exampleImage1 from '../images/오징어.png';
import exampleImage2 from '../images/버터.png';
import exampleImage3 from '../images/지도.png';
import exampleImage4 from '../images/퍼센트원.png';
import CarouselsInDetail from "../components/CarouselsInDetail";
import {FaRegSmile} from "react-icons/fa";
import {Button, Card, Col, ProgressBar as BootstrapProgressBar, Row} from "react-bootstrap";
import React from "react";
const buttonHeight = '70px'; //오른쪽 버튼 높이

// 전역 설정
const GlobalStyle = createGlobalStyle`
  body {
    color: #00591B; /* 기본 글자 색상 설정 */
    font-family: 'Arial';
  }
`;
// 전역 설정





// 버튼 종류
// 네모난 버도
const SquareButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 54px;

  background-color: #004716;
  border-radius: 5px;
  border: none;
  color: white;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  width: 100%;
`;
// 하안 네모 버튼
const SquareWhiteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: relative; // 아이콘이나 텍스트를 포함하기 위해 relative 사용
`;

const ButtonText = styled.span`
  display: flex;
  flex-direction: column; /* 세로 방향으로 요소들을 나열 */
  justify-content: center; /* 세로 방향의 중앙으로 정렬 */
  align-items: center; /* 가로 방향의 중앙으로 정렬 */
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 24px; // 높이를 맞추기 위해 사용
  text-align: center;
  letter-spacing: -0.1px;
  color: #000000;

  bottom: 15px; // 버튼 하단에서의 위치 조정
  width: 100%; // 버튼 너비에 맞게 조정
`;


// 동그란 버튼
const RoundButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 28px;
  background-color: #DEDEDE;
  border-radius: 20px;
  color: white;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #004716; /* 마우스 오버 시의 배경 색상 */
    color: white; /* 마우스 오버 시의 텍스트 색상 */
  }
`;
// 버튼 종류






















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
  margin-left: 5px;
`;

// 수정된 저장하기 버튼을 위한 스타일드 컴포넌트
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
  margin-bottom: 15px;
`;

// 컨테이너를 Flex로 정의하여 아이템을 가로로 나열
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; // 요소들 사이의 간격을 최대로 설정
  align-items: end; // 요소들을 수직 방향에서 중앙으로 정렬
  width: 100%; // 컨테이너의 폭을 부모의 100%로 설정
  padding: 0 25px; // 양쪽에 여백을 줍니다 (필요에 따라 조정)
 margin-top: 10px;
`;

const HashTagButton = styled.button` //.button-in-category
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  letter-spacing: -0.1px;
  height: 18px;
  background-color: black;
  border-radius: 20px;
  border: none;
  color: white;
  text-align: center;

  cursor: pointer;


 
`;




const BottomLeftContentTitle = styled.div` //.button-in-category
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  letter-spacing: -0.1px;
color: #004716;


 
`;

const BottomLeftContent = styled.div` //.button-in-category
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  letter-spacing: -0.1px;
color: #004716;


 
`;

const HashTagButtonGreenColor = styled.button` //.button-in-category
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  letter-spacing: -0.1px;
  height: 18px;
  background-color: #8FD1A3;
  border-radius: 20px;
  border: none;
  color: white;
  text-align: center;

  cursor: pointer;


 
`;

// Styled div 컴포넌트 생성
const CircleImageContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 88px;
  height: 88px;
  border: 1px solid #00591B;
  border-radius: 50%; // 원형으로 만들기
  transform: translateY(20px); /* 버튼을 아래로 10px만큼 내립니다 */

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
const FlexDiv = styled.div`
  align-items: start; // 요소들을 세로축 중앙에 위치시킵니다.
display: flex;
  width: 250px;

`;
const CalorieInfoNext = styled.div`
 width: 400px;
 margin-left: 10px;
padding-top: 5px;
 
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  letter-spacing: -0.1px;
  color: #00591B;
`;
const CalorieInfo = styled.div`
 margin-left: 50px;
  width: 186px;
  height: 23px;
 
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
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
  margin: 3px 50px; // 아이템 간 간격 조정
  width: 320px;
`;

// 여기서 각 NutritionItem 컴포넌트는 영양 정보 텍스트와 ProgressBar를 나란히 배치합니다.
const MapImageContainer = styled.div`
  width: 232px;
  height: 147px;
  border-radius: 25px;
  overflow: hidden;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  margin-left: 20px;
  margin-bottom: 24px;
`;
const MapImage = ({ imageUrl }) => {
    return <MapImageContainer imageUrl={imageUrl} />;

};
const CircleImage = ({ imageUrl }) => {
    return <CircleImageContainer imageUrl={imageUrl} />;

};
const CircleImageContainerBox = styled.div`
margin-left: 20px;
  transform: translateY(-10px);
`;

// styled component  버튼 관련
//  동그란 거카테고리 페이지에서 사용하는 버튼 스타일
const CategoryButton = styled.button` //.button-in-category
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 28px;
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
// 원형 이미지를 감싸는 컨테이너
const CircularImageContainer = styled.div`
  position: relative;
  width: 58px; // 원의 크기를 조정할 수 있습니다
  height: 58px;
  border-radius: 50%;
  background-image: url(${props => props.imageUrl});
  background-size: cover; // 이미지를 컨테이너에 맞춰서 채웁니다
  background-position: center; // 이미지를 중앙에 위치시킵니다
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(150px);
`;
const CircularImageWithPercentage = ({ imageUrl, percentage }) => (
    <CircularImageContainer imageUrl={imageUrl}>
        <PercentageDisplay>{percentage}%</PercentageDisplay>
    </CircularImageContainer>
);
// 퍼센트 숫자를 표시할 div
const PercentageDisplay = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  letter-spacing: -0.1px;
color: white;



`;
// TopRightContentTitle

const TopRightContentTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  letter-spacing: -0.1px;
  color: #004716;
  width: 400px;
  display: flex;
  height: 40px;
`;

const TopRightContent = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  letter-spacing: -0.1px;
  color: #004716;
`;


/*category  네모난 거 페이지 음식카드 밑에 cardsincategory컴포넌트 안에 있는 버튼 .button-in-cardsincategory*/
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

const GridContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 60% 40%; // 좌우를 60% 대 40% 비율로 나눔
  grid-template-rows: 25% 25% 50%;
`;

const TopLeft = styled.div`
  grid-area: 1 / 1 / 2 / 2; // 1행 1열
`;

const TopRight = styled.div`
  grid-area: 1 / 2 / 3 / 3; // 1행과 2행을 합쳐서 오른쪽 상단에 배치 (상하 50% 대 50% 비율로)
  padding-right: 11%;
`;

const BottomLeft = styled.div`
  grid-area: 2 / 1 / 3 / 2; // 2행 1열
  padding-left: 10%;
  padding-right: 13%;
  padding-top: 30%;
`;

const BottomRight = styled.div`
  grid-area: 3 / 2 / 4 / 3; // 3행 2열, 오른쪽 하단 영역
  padding-right: 11%;
`;



// 각 행을 위한 스타일 컴포넌트
const RowOne = styled(Row)`
  height: 20%; // 전체 높이의 20%
`;
const RowTwo = styled(Row)`
  height: 40%; // 전체 높이의 40%
`;
const RowThree = styled(Row)`
  height: 40%; // 전체 높이의 40%
`;
// 사용 예
function YourGridComponent() {
    return (


        <div>
            <GlobalStyle />
            <NavbarInCategoriesAndDetailPages></NavbarInCategoriesAndDetailPages>

            <GridContainer>
                <TopLeft ><CarouselsInDetail ></CarouselsInDetail></TopLeft>
                {/*상단 오른쪽 컨텐츠*/}
                <TopRight>
                    <div style={{display : 'flex'}}>
                        <RoundButton>술안주</RoundButton>
                        <RoundButton>술안주</RoundButton>
                        <RoundButton>술안주</RoundButton>
                        <RoundButton>술안주</RoundButton>



                    </div>

                    {/*상품제목*/}
                    <div>
                        <h4 style={{
                            fontFamily : 'Arial',
                            fontStyle : 'normal',
                            fontWeight : '700',
                            fontSize : '18px',
                            lineHeight : '27px'
                        }}>역전할머니 반건조 버터 오징어 밀키트</h4>
                    </div>
                    {/*상품 내용*/}

                    <div style={{textAlign :'left',
                        fontFamily : 'Arial',
                        fontStyle : 'normal',
                        fontWeight : '400',
                        fontSize : '12px',
                        lineHeight : '18px'

                        /* or 150% */
                    }}>식스펙에서는 역전할머니 반건조 버터 오징어 밀키트를 판매가보다 42% 저렴한 가격으로 만나보실 수 있어요
                    </div>

                    {/*상품 오픈 일정*/}
                    <div style={{marginTop :' 5px'
                    }}>
                        <h3 style={{

                            fontFamily : 'Arial',
                            fontStyle : 'normal',
                            fontWeight : '700',
                            fontSize : '18px',
                            lineHeight : '27px',
                            letterSpacing : '-0.1px',
                            color: '#004716'
                        }}>  3월 19일 (화) 오후 6시 오픈 예정!</h3>
                    </div>

                    {/*상품 버튼*/}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', paddingBottom : '3%' , paddingTop: '5px'}}>
                        <SquareButton>펀딩 참여하기</SquareButton>


                        <SquareWhiteButton>
                            <ButtonText><FaRegSmile style={{marginBottom :'4px', fontSize : '28.8px'}} />62명 참여</ButtonText>
                        </SquareWhiteButton>

                    </div>


                    {/*몇명 참여인지 알려주는 div박스*/}
                    <div style={{boxShadow : '0px 4px 4px rgba(0, 0, 0, 0.25)',borderRadius: '14px'}}>
                        <Card>

                            <Card.Body>
                                {/*회사 태그 */}


                                <Card.Text style={{ textAlign :'justify'}}>

                                    <div style={{display :'flex'}}></div>
                                    <div style={{display :'flex'}}></div>
                                    <TopRightContentTitle>62명이 펀딩에 참여했어요!
                                        <CircularImageWithPercentage
                                            imageUrl={exampleImage4}
                                            percentage={75}
                                        />
                                    </TopRightContentTitle>
                                    <TopRightContent>펀딩 마감 날짜는 4월 2일이에요!</TopRightContent>
                                    <TopRightContent>   펀딩에 참여하면 42% 저렴하게 구매할 수 있어요!</TopRightContent>


                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </div>

                </TopRight>
                {/*하단 왼쪽 컨텐츠*/}
                <BottomLeft>
                    <Card style={{boxShadow : '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius:'14px'}}>

                        <Card.Body>



                            {/*회사 태그 */}
                            <div style={{display : 'flex'   , gap: '8px', marginBottom: '16px'}}>
                                <HashTagButton>🏅우수판매자</HashTagButton>
                                <HashTagButton>🏅우수판매자</HashTagButton>
                                <HashTagButton>🏅우수판매자</HashTagButton>
                                <HashTagButtonGreenColor>🔔알림받기</HashTagButtonGreenColor>
                            </div>


                            <div style={{ display: 'flex', alignItems: 'center' , gap: '10px'}}>
                                {/* You can replace this with the actual image you want to use */}
                                <FaRegSmile size="60px" style={{ borderRadius: '50%', border: '2px solid #8FD1A3' }} />



                                <div>
                                    <BottomLeftContentTitle>역전할머니 맥주</BottomLeftContentTitle>
                                    <BottomLeftContent>2년 연속 우수 판매자로 선정되었어요!</BottomLeftContent>


                                </div>


                                <MapImage imageUrl={exampleImage3}/>


                            </div>





                        </Card.Body>
                    </Card>
                </BottomLeft>
                {/*하단 오른쪽 컨텐츠*/}
                <BottomRight>

                    <Card.Body style={{boxShadow : '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius : '14px'}}>
                        <RowOne>

                            <FlexContainer>
                                <ProductTitle>반건조 버터 오징어</ProductTitle>
                                <SaveButton>저장하기</SaveButton>
                            </FlexContainer>
                            <ProductSubtitle>주재료 기준으로 작성되었습니다.</ProductSubtitle>

                        </RowOne>
                        <RowTwo>
                            {/* 두 번째 행의 내용 */}
                            <Col xs={12} md={6}> {/* 첫 번째 열 */}
                                <Row>
                                    <Col xs={5} md={4}>
                                        <CircleImageContainerBox><CircleImage imageUrl={exampleImage1} /></CircleImageContainerBox>


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
                        </RowTwo>
                        <RowThree>
                            <Col xs={12} md={6}> {/* 두 번째 열 */}
                                <Row>
                                    <Col xs={5} md={4}>
                                        <CircleImageContainerBox><CircleImage imageUrl={exampleImage1} /></CircleImageContainerBox>

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
                        </RowThree>
                    </Card.Body>







                </BottomRight>
            </GridContainer>
        </div>
    );
}

export default YourGridComponent;
