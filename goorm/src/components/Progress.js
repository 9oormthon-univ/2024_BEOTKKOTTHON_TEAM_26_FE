// 연두색 진척도 바
import React, {useRef, useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 임포트
import './Progress.css';
import styled, {createGlobalStyle} from "styled-components"; // 커스텀 CSS 파일 임포트



const ProgressContainer = styled.div`
  position: relative;
  width: 50%;
  left: 10%;
`;

const StyledProgressBar = styled(ProgressBar)`
  height: 10px; // ProgressBar의 높이를 10px로 설정하여 두께를 줄입니다.
  .progress-bar {
    background-color: #8FD1A3;
    
    
  }

`;

const Circle = styled.div`
  width: 34px;
  height: 34px;
  background-color: #8FD1A3;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DistanceText = styled.div`
  position: absolute;
  right: 0;
  top: -25px;
  font-family: 'Arial';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;


// const Progress = ({ now, max }) => {
const Progress = ({ max }) => {
    const totalDistance = 100; //최대 거리를 일단 100km로 선언
    const [now, setNow] = useState(20);
    const progressBarRef = useRef(null);



    const handleClick = (e) => {
        const progressBar = progressBarRef.current;
        if (progressBar) {
            const clickX = e.clientX - progressBar.getBoundingClientRect().left;
            const newNow = (clickX / progressBar.offsetWidth) * max;
            setNow(newNow);
        }
    };





    return (

        <ProgressContainer onClick={handleClick} ref={progressBarRef}>
            <StyledProgressBar now={now} max={max}  />
            <Circle style={{ left: `${(now / max) * 100}%` }} />
            <DistanceText>{`${now.toFixed(0)}km`}</DistanceText>
        </ProgressContainer>
    );
};

export default Progress;
