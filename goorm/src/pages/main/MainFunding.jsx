import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  margin: auto;
  width: 1280px;
  // height: 832px;
  height: 100vh;
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
  height: 100px;
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
const CategoryArea = styled.div`
  position: relative;
  width: 1280px;
  height: 140px;
`;
const CateCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 1120px;
  height: 140px;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;
const CateTitle = styled.div`
  position: absolute;
  width: 291px;
  height: 30px;
  left: 30px;
  top: 8px;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;

  color: #000000;
`;
const CatePic1 = styled.div``;
const CatePic2 = styled.div``;
const CatePic3 = styled.div``;
const CatePic4 = styled.div``;
const CatePic5 = styled.div``;
const CatePic6 = styled.div``;
const CatePic7 = styled.div``;
const CatePic8 = styled.div``;
const FoodType1 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 165px;
  top: 110px;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType2 = styled.div`
  position: absolute;
  width: 100px;
  height: 15px;
  left: 260px;
  top: 110px;
  text-align: center;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType3 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 430px;
  top: 110px;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType4 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 560px;
  top: 110px;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType5 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 692px;
  top: 110px;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType6 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 822px;
  top: 110px;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType7 = styled.div`
  position: absolute;
  width: 24px;
  height: 15px;
  left: 955px;
  top: 110px;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const FoodType8 = styled.div`
  position: absolute;
  width: 50px;
  height: 15px;
  left: 1074px;
  top: 110px;
  text-align: center;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;
const DistanceArea = styled.div`
  position: relative;
  width: 1280px;
  height: 110px;
`;
const DisTitle = styled.div `
  position: absolute;
  width: 300px;
  height: 30px;
  left: 112px;
  top: 19px;

  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #000000;
`;
const DisBar = styled.div`
  position: relative;
  width: 100%;
`;
const NowFundingArea = styled.div`
  position: relative;
  width: 1120px;
  height: auto;
  margin: auto;
  // height: 252px;
`;
const NowTitle = styled.div`
  position: relative;
  width: 206px;
  height: 23px;
  padding-left: 36px;
  margin-bottom: 10px;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #000000;
`;
const NowCon = styled.div`
  position: relative;
  width: 1120px;
  height: 340px;
  // background:red;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const NowBox = styled.div`
  position: relative; 
  width: 332px;
  height: 340px;
`;
const NowImg = styled.div`
  position: relative; 
  width: 332px;
  height: 228px;
  border-radius: 8px;
  background: pink;
`;
const NowTitleDetail = styled.div`
  position: relative; 
  width: 332px;
  height: 23px;
  margin: auto;
  margin-top: 10px;
  text-align: center;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #00591B;
`;
const NowDesc = styled.div`
position: relative; 
width: 332px;
height: 18px;
margin-top: 5px;
text-align: center;
font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 18px;
color: #00591B;
`;
const OpenBtn = styled.div`
  position: relative;
  width: 288px;
  height: 42px;
  margin: auto;
  margin-top: 5px;
  background: #004716;
  border-radius: 8px;
  line-height: 42px; 
  color: #fff;
  font-family: 'Arial';
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.1px;
`;

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
          <CateTitle>음식 카테고리</CateTitle>
            <CatePic1>
            <img
            src={`${process.env.PUBLIC_URL}/images/rice.png`} width="61px"/>
            </CatePic1>
            <CatePic2>
              <img
            src={`${process.env.PUBLIC_URL}/images/dosirack.png`} width="61px"/>
            </CatePic2>
            <CatePic3>
            <img
            src={`${process.env.PUBLIC_URL}/images/noodle.png`} width="61px"/>
            </CatePic3>
            <CatePic4>
            <img
            src={`${process.env.PUBLIC_URL}/images/dduck.png`} width="61px"/>
            </CatePic4>
            <CatePic5>
              <img
            src={`${process.env.PUBLIC_URL}/images/hamburger.png`} width="61px"/>
            </CatePic5>
            <CatePic6>
            <img
            src={`${process.env.PUBLIC_URL}/images/japan.png`} width="61px"/>
            </CatePic6>
            <CatePic7>
            <img
            src={`${process.env.PUBLIC_URL}/images/wellbing.png`} width="61px"/>
            </CatePic7>
            <CatePic8>
            <img
            src={`${process.env.PUBLIC_URL}/images/dessert.png`} width="61px"/>
            </CatePic8>
        </CateCon>
        <FoodType1>한식</FoodType1>
        <FoodType2>다이어트 도시락</FoodType2>
        <FoodType3>중식</FoodType3>
        <FoodType4>분식</FoodType4>
        <FoodType5>양식</FoodType5>
        <FoodType6>일식</FoodType6>
        <FoodType7>웰빙</FoodType7>
        <FoodType8>디저트</FoodType8>
      </CategoryArea>

      <DistanceArea>
        <DisTitle>현재 내 위치에서 마켓까지 최대 거리</DisTitle>
        <DisBar>
          <input type="range" min="0" max="100" value="20" class="slider" id="myRange"></input>
        </DisBar>
      </DistanceArea>

      <NowFundingArea>
        <NowTitle>지금 뜨고 있는 펀딩</NowTitle>
        <NowCon>
          <NowBox>
            <NowImg></NowImg>
            <NowTitleDetail>카페 어쩌고</NowTitleDetail>
            <NowDesc>설명이라네요</NowDesc>
            <OpenBtn><img
                src={`${process.env.PUBLIC_URL}/images/whiteBell.png`}
                width="18px"
                height="19.6px" style={{ marginTop: "-3px", verticalAlign: "middle", marginRight: "5px" }}
              />펀딩 open!
            </OpenBtn>
          </NowBox>
          <NowBox>
            <NowImg></NowImg>
            <NowTitleDetail></NowTitleDetail>
            <NowDesc></NowDesc>
            <OpenBtn></OpenBtn>
          </NowBox>
          <NowBox>
            <NowImg></NowImg>
            <NowTitleDetail></NowTitleDetail>
            <NowDesc></NowDesc>
            <OpenBtn></OpenBtn>
          </NowBox>
        </NowCon>
      </NowFundingArea>
    </Background>
  );
};

export default MainFunding;
