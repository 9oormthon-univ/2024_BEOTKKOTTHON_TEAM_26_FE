import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 1280px;
  height: 90px;
`;

const Logo = styled.div`
  position: absolute;
  width: 75px;
  height: 24.22px;
  left: 83px;
  top: 24px;
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

const Header = () => {
    return (
      <HeaderContainer>
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
      </HeaderContainer>
    );
  };

  export default Header;