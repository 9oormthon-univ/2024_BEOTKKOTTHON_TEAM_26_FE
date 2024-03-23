import React from "react";
import styled from "styled-components";
import Header from "../components/Header.jsx";

const Background = styled.div`
  position: relative;
  margin: auto;
  width: 1280px;
  height: 832px;
  //height: 100vh;
  font-size: 40px;
`;
const QrCode = styled.div`
  position: relative;
  margin-top: 32px;
  width: 1280px;
`;

const Qr = () => {
  return (
    <Background>
      <Header />
      <QrCode>
        <img src={`${process.env.PUBLIC_URL}/images/qr.png`} width="1280px" />
      </QrCode>
    </Background>
  );
};
export default Qr;
