import React from "react";
import styled from "styled-components";
import Header from "../../components/Header.jsx";

const Background = styled.div`
  position: relative;
  margin: auto;
  width: 1280px;
  // height: 832px;
  height: 100vh;
  font-size: 40px;
`;

const MyFunding = () => {
    return (
        <Background>
            <Header /> {/* Header 컴포넌트를 사용 */}
        </Background>
  );
};

export default MyFunding;