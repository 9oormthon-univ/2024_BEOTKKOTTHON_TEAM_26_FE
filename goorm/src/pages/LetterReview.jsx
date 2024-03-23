import React from "react";
import styled from "styled-components";
import Header from "../components/Header.jsx";

const Background = styled.div`
  position: relative;
  margin: auto;
  width: 1280px;
  // height: 832px;
  height: 100vh;
  font-size: 40px;
`;
const BossTitle = styled.div`
  position: relative;
  width: 500px;
  height: 31px;
  margin-left: 270px;
  margin-top: 80px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.3px;
  color: #317433;
`;
const BossDesc = styled.div`
  position: relative;
  width: 278px;
  height: 22px;
  margin-left: 270px;
  margin-top: 10px;
  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #317433;
`;
const BossBox = styled.div`
  position: relative;
  width: 761px;
  height: 166px;
  margin: auto;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
`;
const Letter = styled.div`
  position: absolute;
  top: 30px;
  left: 40px;
`;
const MentBox = styled.div`
  position: relative;
  width: 488px;
  height: 30px;
  left: 250px;
  margin-bottom: 10px;
  top: 30px;
`;
const Check = styled.div`
  position: absolute;
  top: -21.5px;
`;
const Ment = styled.div`
  position: relative;
  width: 457px;
  height: 22px;
  margin-left: 28px;
  padding-top: 2px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #317433;
`;
const Ment2 = styled.div`
  position: relative;
  width: 457px;
  height: 22px;
  margin-left: 28px;
  padding-top: 2px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #317433;
`;
const Ment3 = styled.div`
  position: relative;
  width: 457px;
  height: 22px;
  margin-left: 28px;
  padding-top: 2px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #317433;
`;
const ReplyTitle = styled.div`
  position: relative;
  width: 500px;
  height: 31px;
  margin-left: 270px;
  margin-top: 50px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.3px;
  color: #317433;
`;
const ReplyDesc = styled.div`
  position: relative;
  width: 278px;
  height: 22px;
  margin-left: 270px;
  margin-top: 10px;
  font-family: "Arial";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  color: #317433;
`;
const ReplyBox = styled.div`
  position: relative;
  width: 761px;
  height: 291px;
  margin: auto;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
`;
const FundingImg = styled.div`
  position: absolute;
  width: 322px;
  height: 222px;
  background: red;
  border-radius: 14px;
  margin-top: 38px;
  margin-left: 30px;
`;
const ReviewBox = styled.div`
  position: relative;
  width: 488px;
  height: 30px;
  left: 400px;
  margin-bottom: 10px;
  top: 53px;
`;
const Review1 = styled.div`
  position: relative;
  width: 457px;
  height: 22px;
  margin-left: 28px;
  padding-top: 2px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #317433;
`;
const Review2 = styled.div`
  position: relative;
  width: 457px;
  height: 22px;
  margin-left: 28px;
  padding-top: 2px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #317433;
`;
const Review3 = styled.div`
position: relative;
  width: 457px;
  height: 22px;
  margin-left: 28px;
  padding-top: 2px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #317433;
`;
const Review4 = styled.div`
  position: relative;
  width: 457px;
  height: 22px;
  margin-left: 28px;
  padding-top: 2px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #317433;
`;
const Review5 = styled.div`
  position: relative;
  width: 457px;
  height: 22px;
  margin-left: 28px;
  padding-top: 2px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.1px;
  color: #317433;
`;

const LetterReview = () => {
  return (
    <Background>
      <Header />
      <BossTitle>사장님이 보내신 따듯한 편지가 도착했습니다!</BossTitle>
      <BossDesc>편지는 보관함으로 자동 저장됩니다.</BossDesc>
      <BossBox>
        <Letter>
          <img
            src={`${process.env.PUBLIC_URL}/images/letter.png`}
            width="152px"
            height="103.04px"
          />
        </Letter>
        <MentBox>
          <Check>
            <img
              src={`${process.env.PUBLIC_URL}/images/check.png`}
              width="20px"
              height="20px"
            />
          </Check>
          <Ment>약속한 시간을 잘 지켜주셨어요!</Ment>
        </MentBox>
        <MentBox>
          <Check>
            <img
              src={`${process.env.PUBLIC_URL}/images/check.png`}
              width="20px"
              height="20px"
            />
          </Check>
          <Ment2>약속한 시간을 잘 지켜주셨어요!</Ment2>
        </MentBox>
        <MentBox>
          <Check>
            <img
              src={`${process.env.PUBLIC_URL}/images/check.png`}
              width="20px"
              height="20px"
            />
          </Check>
          <Ment3>약속한 시간을 잘 지켜주셨어요!</Ment3>
        </MentBox>
      </BossBox>

      <ReplyTitle>사장님께 따뜻한 답변을 보내주세요!</ReplyTitle>
      <ReplyDesc>피드백은 사장님께 전달됩니다.</ReplyDesc>

      <ReplyBox>
        <FundingImg></FundingImg>
        <ReviewBox>
          <Review1>음식이 맛있었어요!</Review1>
          <Check>
            <img
              src={`${process.env.PUBLIC_URL}/images/check.png`}
              width="20px"
              height="20px"
            />
          </Check>
        </ReviewBox>
        <ReviewBox>
          <Review2>사장님이 친절했어요!</Review2>
          <Check>
            <img
              src={`${process.env.PUBLIC_URL}/images/check.png`}
              width="20px"
              height="20px"
            />
          </Check>
        </ReviewBox>
        <ReviewBox>
          <Review3>가게 위치가 설명과 같았어요!</Review3>
          <Check>
            <img
              src={`${process.env.PUBLIC_URL}/images/check.png`}
              width="20px"
              height="20px"
            />
          </Check>
        </ReviewBox>
        <ReviewBox>
          <Review4>포장상태가 좋았어요!</Review4>
          <Check>
            <img
              src={`${process.env.PUBLIC_URL}/images/check.png`}
              width="20px"
              height="20px"
            />
          </Check>
        </ReviewBox>
        <ReviewBox>
          <Review5>음식의 상태가 설명과 같았어요!</Review5>
          <Check>
            <img
              src={`${process.env.PUBLIC_URL}/images/check.png`}
              width="20px"
              height="20px"
            />
          </Check>
        </ReviewBox>
      </ReplyBox>
    </Background>
  );
};

export default LetterReview;
