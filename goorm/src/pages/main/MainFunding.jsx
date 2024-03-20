import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  margin: auto;
  width: 1280px;
  height: 832px;
  font-size: 40px;
`;
const Footer = styled.div`
  width: 1280px;
  height: 90px;
`;
const Logo = styled.div`
  position: absolute;
  width: 75px;
  height: 24.22px;
  left: 83px;
  top: 30px;
`;
const MainTitle = styled.div`
  position: absolute;
  width: 410px;
  height: 27px;
  left: 185px;
  top: 50px;

  font-family: "Arial";
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #000000;
`;
const MenuCon = styled.div`
  position: absolute;
  width: 410px;
  height: auto;
  right: 83px;
  top: 35px;
`;
const MenuBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-family: "Arial";
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #000000;
`;
const EventBtn = styled.div``;
const LoginBtn = styled.div``;
const FundingBtn = styled.div`
  width: 154px;
  height: 42px;
  background: #004716;
  border-radius: 8px;
  color: white;
  line-height: 42px;
  text-align: center;
`;
const Notice = styled.div`
  padding-top: 8px;
`;
const AdvArea = styled.div`
  position: relative;
  width: 1280px;
  height: 114px;
  background: black;
`;
const FundingArea = styled.div`
  position: relative;
  width: 1280px;
  height: 114px;
`;
const FundingCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 403px;
  height: 88px;
  padding-top: 13px;
  margin-left: 141px;
`;
const FundingBox1 = styled.div`
  width: 54px;
  height: 85.3px;
`;
const FundingBox2 = styled.div`
  width: 54px;
  height: 85.3px;
`;
const FundingBox3 = styled.div`
  width: 54px;
  height: 85.3px;
`;
const FundingBox4 = styled.div`
  width: 54px;
  height: 85.3px;
`;
const FundingBox5 = styled.div`
  width: 54px;
  height: 85.3px;
`;
const FundingCir = styled.div`
  position: absolute;
`;
const FtCon = styled.div`
  position: absolute;
  width: 460px;
  left: -20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const FundingTitle1 = styled.div`
  position: absolute;
  width: 91px;
  top: 80px;
  left: -18px;
  font-family: 'Arial';
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const FundingTitle2 = styled.div`
  position: absolute;
  width: 91px;
  top: 80px;
  left: 68px;
  font-family: 'Arial';
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const FundingTitle3 = styled.div`
  position: absolute;
  width: 91px;
  top: 80px;
  left: 156px;
  font-family: 'Arial';
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const FundingTitle4 = styled.div`
  position: absolute;
  width: 91px;
  top: 80px;
  left: 243px;
  font-family: 'Arial';
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const FundingTitle5 = styled.div`
  position: absolute;
  width: 91px;
  top: 80px;
  left: 331px;
  font-family: 'Arial';
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #000000;
`;
const CategoryArea = styled.div``;
const CateCon = styled.div``;
const Title = styled.div``;
const CategoryBox = styled.div``;
const CatePic = styled.div``;
const FoodType = styled.div``;
const DistanceArea = styled.div``;
const DisBar = styled.div``;
const NowFundingArea = styled.div``;
const NowCon = styled.div``;
const NowBox = styled.div``;
const NowImg = styled.div``;
const NowTitle = styled.div``;
const NowDec = styled.div``;
const OpenBtn = styled.div``;

const MainFunding = () => {
  return (
    <Background>
      <Footer>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            width="75px"
            height="24.22px"
          />
        </Logo>
        <MainTitle>
          모두가 잘먹고 잘살 수 밖에 없는 건강한 음식 펀딩 플랫폼
        </MainTitle>
        <MenuCon>
          <MenuBox>
            <EventBtn>이벤트</EventBtn>
            <LoginBtn>로그인/회원가입</LoginBtn>
            <FundingBtn>펀딩 스펙 만들기</FundingBtn>
            <Notice>
              <img
                src={`${process.env.PUBLIC_URL}/images/bell.png`}
                width="18px"
                height="19.6px"
              />
            </Notice>
          </MenuBox>
        </MenuCon>
      </Footer>

      <AdvArea></AdvArea>

      <FundingArea>
        <FundingCon>
          <FundingBox1>
            <FundingCir>
              <img
            src={`${process.env.PUBLIC_URL}/images/do.png`} width="54px"/>
            </FundingCir>  
          </FundingBox1>
          <FundingTitle1>펀딩하기</FundingTitle1>
          <FundingBox2>
            <FundingCir>
            <img
            src={`${process.env.PUBLIC_URL}/images/live.png`} width="54px"/>
            </FundingCir>     
          </FundingBox2>
          <FundingTitle2>실시간 펀딩 현황</FundingTitle2>      
          <FundingBox3>
            <FundingCir>
            <img
            src={`${process.env.PUBLIC_URL}/images/complete.png`} width="54px"/>
            </FundingCir>
          </FundingBox3>
          <FundingTitle3>완료 펀딩</FundingTitle3>
          <FundingBox4>
            <FundingCir>
            <img
            src={`${process.env.PUBLIC_URL}/images/review.png`} width="54px"/>
            </FundingCir>
          </FundingBox4>
          <FundingTitle4>구매 후기</FundingTitle4>
          <FundingBox5>
            <FundingCir>
            <img
            src={`${process.env.PUBLIC_URL}/images/month.png`} width="54px"/>
            </FundingCir>
          </FundingBox5>
          <FundingTitle5>이달의 기업</FundingTitle5>
          <FtCon>
          </FtCon>
        </FundingCon>
      </FundingArea>

      <CategoryArea>
        <CateCon>
          <Title>음식 카테고리</Title>
          <CategoryBox>
            <CatePic></CatePic>
            <FoodType>한식</FoodType>
          </CategoryBox>
          <CategoryBox>
            <CatePic></CatePic>
            <FoodType>다이어트 도시락</FoodType>
          </CategoryBox>
          <CategoryBox>
            <CatePic></CatePic>
            <FoodType>중식</FoodType>
          </CategoryBox>
          <CategoryBox>
            <CatePic></CatePic>
            <FoodType>분식</FoodType>
          </CategoryBox>
          <CategoryBox>
            <CatePic></CatePic>
            <FoodType>양식</FoodType>
          </CategoryBox>
          <CategoryBox>
            <CatePic></CatePic>
            <FoodType>일식</FoodType>
          </CategoryBox>
          <CategoryBox>
            <CatePic></CatePic>
            <FoodType>웰빙</FoodType>
          </CategoryBox>
          <CategoryBox>
            <CatePic></CatePic>
            <FoodType>디저트</FoodType>
          </CategoryBox>
        </CateCon>
      </CategoryArea>

      <DistanceArea>
        <Title>현재 내 위치에서 마켓까지 최대 거리</Title>
        <DisBar></DisBar>
      </DistanceArea>

      <NowFundingArea>
        <Title>지금 뜨고 있는 펀딩</Title>
        <NowCon>
          <NowBox>
            <NowImg></NowImg>
            <NowTitle></NowTitle>
            <NowDec></NowDec>
            <OpenBtn></OpenBtn>
          </NowBox>
        </NowCon>
      </NowFundingArea>
    </Background>
  );
};

export default MainFunding;
