// Progress.js
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 임포트
import './Progress.css'; // 커스텀 CSS 파일 임포트


const Progress = ({now}) => {
    return (
        <div style={{width: '60%'}}>
            <ProgressBar now={now}
                         className="custom-progress-bar"/>


        </div>
    );
};

export default Progress;
