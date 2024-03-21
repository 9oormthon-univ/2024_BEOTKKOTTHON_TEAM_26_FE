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
const Header = styled.div`
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
  width: 600px;
  height: auto;
  left: 200px;
  top: 50px;
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
const Do = styled.div``;
const Live = styled.div``;
const Complete = styled.div``;
const Review = styled.div``;
const Month = styled.div``;
const Body = styled.div`
  position: relative;
  width: 1280px;
  margin: auto;
  text-align: center;
`;
const MakeBtn = styled.div`
  position: relative;
  margin: auto;
  width: 274px;
  height: 54px;
  background: #004716;
  border-radius: 8px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 54px;
  text-align: center;
  letter-spacing: -0.2px;
  color: #ffffff;
`;

const Contest = () => {
  return (
    <Background>
      <Header>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            width="75px"
            height="24.22px"
          />
        </Logo>
        <MenuCon>
          <MenuBox>
            <Do>펀딩하기</Do>
            <Live>실시간 펀딩 현황</Live>
            <Complete>완료 펀딩</Complete>
            <Review>구매 후기</Review>
            <Month>이달의 기업</Month>
          </MenuBox>
        </MenuCon>
      </Header>

      <Body>
        <img
          src={`${process.env.PUBLIC_URL}/images/contestImg.png`}
          width="1100px" 
          style={{
            marginLeft: "10px",
          }}
        />
        <MakeBtn>펀딩 스펙 만들기</MakeBtn>
      </Body>
    </Background>
  );
};

export default Contest;
