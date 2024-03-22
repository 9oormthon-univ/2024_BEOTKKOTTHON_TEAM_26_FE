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
const Title = styled.div`
  position: relative;
  width: 210px;
  height: 55px;
  font-family: 'Arial';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.3px;
  color: #000000;
`;

const MyFunding = () => {
    return (
        <Background>
            <Header /> {/* Header 컴포넌트를 사용 */}

            <Title>나의 펀딩 현황</Title>
            <Container>
              <FundingBox>
                <FunImg></FunImg>

                <ContentBox>
                  <TagBox>
                    <StateBtn></StateBtn>
                    <FoodType></FoodType>
                    <Tag></Tag>
                  </TagBox>

                  <ContentTitle></ContentTitle>

                  <SellerName></SellerName>

                  <FundingBtn></FundingBtn>
                </ContentBox>

                <Rate></Rate>
              </FundingBox>
            </Container>
        </Background>
  );
};

export default MyFunding;