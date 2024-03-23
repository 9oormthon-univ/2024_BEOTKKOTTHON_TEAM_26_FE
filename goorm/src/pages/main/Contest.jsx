import React from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: relative;
  margin: auto;
  width: 1280px;
  // height: 832px;
  height: 100vh;
  font-size: 40px;
`;

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
  cursor: pointer;
`;

const Contest = () => {
  const navigate = useNavigate();
  const goSubmit = () => {
    navigate("/submit");
  };
  return (
    <Background>
      <Header/>
       

      <Body>
        <img
          src={`${process.env.PUBLIC_URL}/images/contestImg.png`}
          width="1100px" 
          style={{
            marginLeft: "10px",
          }}
        />
        <MakeBtn onClick={goSubmit}>펀딩 스펙 만들기</MakeBtn>
      </Body>
    </Background>
  );
};

export default Contest;
