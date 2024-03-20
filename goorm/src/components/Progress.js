// 연두색 진척도 바
import React, {useRef, useState} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 임포트
import './Progress.css'; // 커스텀 CSS 파일 임포트


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
        // <div style={{ position: 'relative', width: '70%' }}> {/* 상위 div를 상대적 컨테이너로 설정 */}
            <div style={{ position: 'relative', width: '50%'  }} onClick={handleClick} ref={progressBarRef}>
            {/*<ProgressBar now={now} max={max}  className="custom-progress-bar"/>*/}
            {/*<div style={circleStyle} /> /!* 동그란 원 *!/*/}
                <ProgressBar now={now} max={max} className="custom-progress-bar"  />
                <div className="circle" style={{ left: `${(now / max) * 100}%` }} />
            {/*<div style={distanceTextStyle}>{max}km</div> /!* 거리 텍스트 *!/*/}
                <div className="distance-text">{`${now.toFixed(0)}km`}</div>
        </div>
    );
};

export default Progress;
