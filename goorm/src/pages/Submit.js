// 상품 등록 페이지
import NavbarInCategoriesAndDetailPages from "../components/NavbarInCategoriesAndDetailPages";
import React, { useState } from "react";
import styled from "styled-components";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import exampleImage3 from "../images/상품사진등록.png";
import exampleImage4 from "../images/로딩중.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SubmitContentTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  letter-spacing: -0.1px;
  padding: 10px 0;
`;

const SubmitContentTitleDiv = styled.div``;

const SquareButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 11px;
  gap: 15px;
  height: 47px;
  font-style: normal;
  transform: translateY(-5px);
  font-size: 18px;
  line-height: 27px;
  /* or 150% */
  letter-spacing: -0.1px;

  // 기본 상태 (마우스가 벗어났을 때)
  background-color: #004716; // 글자색이 배경색이 되도록 설정
  color: white; // 배경색이 글자색이 되도록 설정

  text-align: center;
  margin: 5px;
  cursor: pointer;
  width: 299px;
  border: black 1px solid;
  border-radius: 8px;
  // 마우스 hover 상태
  &:hover {
    background-color: #8fd1a3; // 원래의 배경색
    color: white; // 원래의 글자색
  }
`;

const FlexDiv = styled.div`
  display: flex;
`;
const SubmitButton = styled.button`
  //.button-in-category
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 11px;

  height: 25px;
  background-color: #dedede;
  border-radius: 20px;
  border: none;

  text-align: center;
  margin: auto 10px;
  cursor: pointer;
  color: black;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  text-align: center;
  letter-spacing: -0.1px;

  &:hover {
    background-color: #8fd1a3; /* 활성화될 때의 색상 */
    color: white;
  }
`;

const Image = ({ imageUrl, altText = "" }) => {
  return (
    <img
      src={imageUrl}
      alt={altText}
      style={{
        maxWidth: "234px",
        maxHeight: "168px",
        width: "auto",
        height: "auto",
      }}
    />
  );
};

const LoadingImage = ({ imageUrl, altText = "" }) => {
  return (
    <img
      src={imageUrl}
      alt={altText}
      style={{
        maxWidth: "37px",
        maxHeight: "37px",
        width: "auto",
        height: "auto",
      }}
    />
  );
};

function Submit() {
  const navigate = useNavigate();
  const goCom = () => {
    navigate("/complete");
  };
  const [hashtags, setHashtags] = useState([]);

  const generateHashtags = async () => {
    try {
      const response = await axios.post(
        "http://43.200.185.80:8000/generate-hashtags/",
        {
          text: "스트레스 받고 자극적인게 먹고싶을 때 치즈 퐁듀 떡볶이로 힐링을 해보세요. 쫄깃하고 매콤한 떡볶이의 고소한 치즈를 퐁당 뿌렸어요 매콤한데 고소합니다",
          image_url:
            "https://static.wtable.co.kr/image/production/service/recipe/2015/43bcffc4-f331-4554-aa9c-8ab63a136f44.jpg?size=800x800",
        }
      );
      setHashtags(Object.values(JSON.parse(response.data.content)).flat());
      
    } catch (error) {
      console.error("Error fetching hashtags:", error);
    }
  };

  return (
    <div>
      <NavbarInCategoriesAndDetailPages></NavbarInCategoriesAndDetailPages>
      {/*본문내용*/}
      <div style={{ width: "80%", marginLeft: "5%" }}>
        <SubmitContentTitleDiv>
          <SubmitContentTitle>상품 제목을 입력해 주세요!</SubmitContentTitle>
          {/*인풋박스*/}
          <FlexDiv>
            <InputGroup>
              <Form.Control
                aria-label="Dollar amount (with dot and two decimal places)"
                placeholder="ex. 역전할머니 맥주 반건조 버터구이 오징어"
                style={{
                  width: "95%", // 너비 조정
                  height: "47px",
                  borderColor: "#004716", // 높이 조정
                }}
              />
            </InputGroup>
          </FlexDiv>

          {/*상품사진등록*/}
          <SubmitContentTitle>상품 사진을 등록해 주세요!</SubmitContentTitle>

          <FlexDiv style={{ gap: "20px" }}>
            <input type="file" multiple></input>
          </FlexDiv>

          {/* 펀딩일정기록란 */}
          <SubmitContentTitle>
            펀딩 마감 일정을 설정해 주세요!
          </SubmitContentTitle>

          <FlexDiv style={{ gap: "20px" }}>
            <input type="date"></input>
          </FlexDiv>

          <SubmitContentTitle>
            상품에 대해 자유롭게 어필해 주세요!
          </SubmitContentTitle>
          {/*인풋박스*/}
          <FlexDiv>
            <InputGroup>
              <Form.Control
                aria-label="Dollar amount (with dot and two decimal places)"
                placeholder="ex. 역전할머니 맥주 반건조 버터구이 오징어는 낮은 칼로리와 고소한 맛을 즐길 수 있습니다."
                style={{
                  width: "95%", // 너비 조정
                  height: "47px",
                  borderColor: "#004716", // 높이 조정
                }}
              />
            </InputGroup>
          </FlexDiv>

          {/*ai 분석란*/}
          <SubmitContentTitle>AI가 해시태그 생성중!</SubmitContentTitle>
          {/*버튼*/}
          <FlexDiv>
            {/* <SubmitButton>{response_text}</SubmitButton> */}
            {hashtags.map((text) => (
                <SubmitButton>{text}</SubmitButton>
            ))}
            {/* <SubmitButton></SubmitButton> */}
          </FlexDiv>

          {/*상품설명*/}
          <SubmitContentTitle>
            상품에 대해 자세히 설명해 주세요!
          </SubmitContentTitle>

          {/*설명 input 박스*/}
          <div>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  style={{
                    width: "700px",
                    height: "200px",
                    borderColor: "#004716",
                  }}
                  placeholder="상품에 관련된 정보를 자세히 적어 주세요. 상품정보와 관련없는 내용과  과대광고는 무통보 삭제 될 수 있습니다."
                />
                <SquareButton onClick={generateHashtags}>
                  AI 해시태그 생성!
                </SquareButton>
                <SquareButton onClick={goCom}>펀딩 등록하기</SquareButton>
              </Form.Group>
            </Form>
          </div>
        </SubmitContentTitleDiv>
      </div>
    </div>
  );
}

export default Submit;
