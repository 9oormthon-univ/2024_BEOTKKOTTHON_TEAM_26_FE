import React, { useState } from "react";
import styled, { css } from "styled-components";
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
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.3px;
  color: #000000;
  margin-left: 250px;
  margin-top: 20px;
`;
const Container = styled.div`
  position: relative;
  width: 1280px;
  height: auto;
  margin: auto;
`;
const FundingBox = styled.div`
  position: relative;
  width: 842px;
  height: 199px;
  margin: auto;
  margin-bottom: 30px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
`;
const FunImg = styled.div`
  position: absolute;
  width: 224px;
  height: 144px;
  top: 27.5px;
  left: 15px;
  backdrop-filter: blur(0.5px);
  border-radius: 14px;
  background: blue;
`;
const ContentBox = styled.div`
  position: absolute;
  width: 353px;
  height: 199px;
  left: 269px;
`;
const TagBox = styled.div`
  position: relative;
  width: 353px;
  height: 27px;
  top: 27.5px;

  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const StateBtn = styled.div`
  width: 96px;
  height: 27px;
  margin-right: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 14px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #000000;
`;
const FoodType = styled.div`
  width: auto;
  height: 27px;
  margin-right: 10px;
  background: #8fd1a3;
  border-radius: 20px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #ffffff;
  padding: 0 11px;
`;
const Tag = styled.div`
  width: auto;
  height: 27px;
  margin-right: 10px;
  background: #dedede;
  border-radius: 20px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #000000;
  padding: 0 11px;
`;
const ContentTitle = styled.div`
  position: absolute;
  width: 353px;
  height: 27px;
  top: 62px;
  padding-left: 10px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #3a3a3a;
`;
const SellerName = styled.div`
  position: absolute;
  width: 353px;
  height: 27px;
  top: 93px;
  padding-left: 11px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #3a3a3a;
`;
const FundingBtn = styled.div`
  position: absolute;
  width: 353px;
  height: 50px;
  top: 121.5px;
  background: #004716;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #ffffff;

  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  letter-spacing: -0.1px;
`;
const Rate = styled.div`
  position: absolute;
  width: 140px;
  height: 140px;
  top: 28px;
  left: 655px;
  margin: auto;
`;
const Circle = styled.div`
  font-size: 10px;
  width: 140px;
  height: 140px;
  display: flex;
  border-radius: 50%;
  position: relative;
  ${({ progress }) =>
    progress === 100
      ? css`
          background: #00ff00;
        `
      : css`
          background: conic-gradient(
            #00591b ${progress}%,
            #ffffff ${progress}%
          );
        `}
`;
const Inner_circle = styled.div`
  width: 90%;
  height: 90%;
  border-radius: inherit;
  background-color: #d6e1da;
  margin: auto;
  display: flex;
  color: white;
  justify-content: center;
  border: 10px solid #ffffff;
`;

const MyFunding = () => {
  const [progress, setProgress] = useState(0); // 진행률 상태 초기화

  const handleProgressChange = (event) => {
    const value = event.target.value; // 입력된 값 가져오기
    if (value >= 0 && value <= 100) {
      // 입력된 값이 유효한지 확인
      setProgress(value); // 진행률 업데이트
    }
  };

  return (
    <Background>
      <Header /> {/* Header 컴포넌트를 사용 */}
      <Title>나의 펀딩 현황</Title>
      <Container>
        <FundingBox>
          <FunImg></FunImg>

          <ContentBox>
            <TagBox>
              <StateBtn>펀딩진행 중!</StateBtn>
              <FoodType>디저트</FoodType>
              <Tag>매콤한</Tag>
              <Tag>매콤달콤한</Tag>
            </TagBox>

            <ContentTitle>음식이름제목써주세요.</ContentTitle>

            <SellerName>판매자이름</SellerName>

            <FundingBtn>구매하러 가기</FundingBtn>
          </ContentBox>

          <Rate>
            <Circle progress={progress}>
              <Inner_circle>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "25px",
                  }}
                >
                  {progress}%
                </span>
              </Inner_circle>
            </Circle>
            <input
              type="number"
              value={progress}
              onChange={handleProgressChange}
              placeholder="진행률 입력"
              style={{ position: "absolute", top: "300px", left: "50%" }}
                />
          </Rate>
        </FundingBox>
       
      </Container>
    </Background>
  );
};

export default MyFunding;
