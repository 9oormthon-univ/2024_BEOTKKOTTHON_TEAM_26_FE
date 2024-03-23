import React from "react";
import styled from "styled-components";
import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: relative;
  margin: auto;
  width: 1280px;
  // height: 832px;
  height: 100vh;
  font-size: 40px;
`;
const PickUp = styled.div`
  position: relative;
  margin: auto;
  width: 305px;
  height: 55px;
  background: #004716;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 55px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #ffffff;
`;

const PayComplete = () => {
  const navigate = useNavigate();
  const goMy = () => {
    navigate("/myFunding");
  };

  return (
    <Background>
      <Header />
      <img
        src={`${process.env.PUBLIC_URL}/images/결제 완료.png`}
        width="1280px"
        style={{
          position: "relative",
          textAlign: "center",
          paddingRight: "22px",
        }}
      />
      <PickUp onClick={goMy}>나의 펀딩 현황으로 가기</PickUp>
    </Background>
  );
};

export default PayComplete;
