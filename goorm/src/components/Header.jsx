import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  cursor: pointer;
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
const Do = styled.div`
  cursor: pointer;
`;
const Live = styled.div`
  cursor: pointer;
`;
const Complete = styled.div`
  cursor: pointer;
`;
const Review = styled.div`
  cursor: pointer;
`;
const Month = styled.div`
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  const goComplete = () => {
    navigate("/myFunding");
  };
  const goMain = () => {
    navigate("/");
  };
  const goReview = () => {
    navigate("/letter");
  };
  return (
    <HeaderContainer>
      <Logo onClick={goMain}>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          width="75px"
          height="24.22px"
        />
      </Logo>
      <MenuCon>
        <MenuBox>
          <Do>펀딩하기</Do>
          <Live onClick={goComplete}>실시간 펀딩 현황</Live>
          <Complete onClick={goComplete}>완료 펀딩</Complete>
          <Review onClick={goReview}>구매 후기</Review>
          <Month>이달의 기업</Month>
        </MenuBox>
      </MenuCon>
    </HeaderContainer>
  );
};

export default Header;
