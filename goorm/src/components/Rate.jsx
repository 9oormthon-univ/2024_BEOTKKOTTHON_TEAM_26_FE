import React from "react";
import styled from "styled-components";

const RateCon = styled.div`
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

const Rate = () => {
  const [progress, setProgress] = useState(0); // 진행률 상태 초기화

  const handleProgressChange = (event) => {
    const value = event.target.value; // 입력된 값 가져오기
    if (value >= 0 && value <= 100) {
      // 입력된 값이 유효한지 확인
      setProgress(value); // 진행률 업데이트
    }
  };

  return (
    <RateCon>
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
    </RateCon>
  );
};

export default Rate;
